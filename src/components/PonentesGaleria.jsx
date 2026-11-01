import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-galeria.css'

// Galería de ponentes: tarjetas tipo flyer (efecto 3D al pasar el mouse) y ventana de detalle.
// Los datos salen de PONENTES en src/config/constants.js.

const DIAS = { 4: 'Miércoles', 5: 'Jueves', 6: 'Viernes' }
const FILTROS = [['todos', 'Todos'], ['4', 'Mié 4'], ['5', 'Jue 5'], ['6', 'Vie 6'], ['int', 'Internacional']]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Foto({ p }) {
  return p.foto ? (
    <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" />
  ) : (
    <>
      <Contornos id={p.id} />
      <span className="pg-ini" aria-hidden="true">{iniciales(p)}</span>
    </>
  )
}

export default function PonentesGaleria() {
  const [filtro, setFiltro] = useState('todos')
  const [abierto, setAbierto] = useState(null) // id del ponente abierto en la ventana
  const volver = useRef(null)
  const cerrarBtn = useRef(null)

  const lista = useMemo(
    () => PONENTES.filter((p) => filtro === 'todos' || (filtro === 'int' ? !!p.pais : String(p.diaNum) === filtro)),
    [filtro]
  )
  const pos = lista.findIndex((p) => p.id === abierto)
  const actual = pos >= 0 ? lista[pos] : null

  const abrir = (p, el) => { volver.current = el; setAbierto(p.id) }
  const cerrar = useCallback(() => { setAbierto(null); volver.current && volver.current.focus() }, [])
  const mover = useCallback((d) => { setAbierto((id) => { const i = lista.findIndex((p) => p.id === id); return lista[(i + d + lista.length) % lista.length].id }) }, [lista])

  // Ventana: Esc cierra, flechas navegan, se bloquea el scroll de fondo
  useEffect(() => {
    if (!actual) return
    const onKey = (e) => {
      if (e.key === 'Escape') cerrar()
      if (e.key === 'ArrowRight') mover(1)
      if (e.key === 'ArrowLeft') mover(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    cerrarBtn.current && cerrarBtn.current.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [actual, cerrar, mover])

  const inclinar = (e) => {
    if (e.pointerType !== 'mouse') return
    const c = e.currentTarget, r = c.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    c.style.setProperty('--rx', `${((0.5 - y) * 12).toFixed(2)}deg`)
    c.style.setProperty('--ry', `${((x - 0.5) * 14).toFixed(2)}deg`)
    c.style.setProperty('--gx', `${(x * 100).toFixed(0)}%`)
    c.style.setProperty('--gy', `${(y * 100).toFixed(0)}%`)
  }
  const soltar = (e) => { ['--rx', '--ry'].forEach((k) => e.currentTarget.style.setProperty(k, '0deg')) }

  return (
    <div className="pg">
      <div className="pg-chips" role="group" aria-label="Filtrar ponentes">
        {FILTROS.map(([k, t]) => (
          <button key={k} className="pg-chip" aria-pressed={filtro === k} onClick={() => setFiltro(k)}>{t}</button>
        ))}
      </div>

      <ul className="pg-grid" key={filtro}>
        {lista.map((p, k) => (
          <li key={p.id} style={{ '--k': k, '--bx': `${(p.id * 17) % 80}%` }}>
            <button className="pg-card" onClick={(e) => abrir(p, e.currentTarget)} onPointerMove={inclinar} onPointerLeave={soltar} aria-label={`Ver a ${p.nombre}`}>
              <span className="pg-bg" aria-hidden="true" />
              <span className="pg-glare" aria-hidden="true" />
              <span className="pg-dia">{DIAS[p.diaNum].slice(0, 3)} {p.diaNum}</span>
              {p.pais && <span className="pg-pais">{p.pais}</span>}
              <span className="pg-arco"><Foto p={p} /></span>
              <span className="pg-info">
                <strong>{p.nombre}</strong>
                <i aria-hidden="true" />
                {p.cargo && <em>{p.cargo}</em>}
                <small>{p.empresa}</small>
              </span>
              <span className="pg-mas" aria-hidden="true">Ver ponencia →</span>
            </button>
          </li>
        ))}
      </ul>

      {actual && (
        <div className="pg-modal" role="dialog" aria-modal="true" aria-label={`Ponencia de ${actual.nombre}`} onClick={(e) => e.target === e.currentTarget && cerrar()}>
          <article className="pg-hoja" key={actual.id}>
            <span className="pg-hbg" aria-hidden="true" />
            <button ref={cerrarBtn} className="pg-x" onClick={cerrar} aria-label="Cerrar">×</button>
            <div className="pg-hfoto">
              <div className="pg-harco"><Foto p={actual} /></div>
              <p className="pg-hcuando">{DIAS[actual.diaNum]} {actual.diaNum} de noviembre<br />{actual.hora}</p>
            </div>
            <div className="pg-htxt">
              <span className="pg-badge">{actual.pais ? `Ponente internacional · ${actual.pais}` : 'Ponente confirmado'}</span>
              <h3>{actual.nombre}</h3>
              <div className="pg-rule" />
              {actual.cargo && <p className="pg-hcargo">{actual.cargo}</p>}
              <p className="pg-hemp">{actual.empresa}</p>
              {actual.bio && <p className="pg-hbio" dangerouslySetInnerHTML={{ __html: actual.bio }} />}
              <div className="pg-div"><i>◆</i> Tema de ponencia <i>◆</i></div>
              <p className={`pg-htema${actual.tema ? '' : ' tbc'}`}>{actual.tema || 'Tema por confirmar'}</p>
            </div>
            <div className="pg-nav">
              <button onClick={() => mover(-1)} aria-label="Ponente anterior">‹</button>
              <span>{String(pos + 1).padStart(2, '0')} / {String(lista.length).padStart(2, '0')}</span>
              <button onClick={() => mover(1)} aria-label="Ponente siguiente">›</button>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
