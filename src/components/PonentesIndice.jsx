import { useEffect, useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-indice.css'

// Índice tipográfico de ponentes: nombres grandes, tarjeta flotante al pasar el mouse
// y ponencia desplegable al tocar. Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles' },
  { num: 5, nombre: 'Jueves' },
  { num: 6, nombre: 'Viernes' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Retrato({ p }) {
  return p.foto ? (
    <img src={p.foto} alt={`Foto de ${p.nombre}`} />
  ) : (
    <>
      <Contornos id={p.id} />
      <span className="pi-ini" aria-hidden="true">{iniciales(p)}</span>
    </>
  )
}

export default function PonentesIndice() {
  const [abierto, setAbierto] = useState(null)
  const [hover, setHover] = useState(null)
  const flot = useRef(null)
  const raiz = useRef(null)
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const raf = useRef(0)
  const conMouse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches
  const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // La tarjeta flotante sigue al cursor con suavizado
  useEffect(() => {
    if (!conMouse) return
    const mover = (e) => { pos.current.ty = e.clientY }
    const bucle = () => {
      const p = pos.current
      // La tarjeta se queda a la derecha (sin tapar el nombre) y sigue al cursor solo en vertical
      const r = raiz.current ? raiz.current.getBoundingClientRect() : { right: window.innerWidth }
      p.x = Math.max(r.right - 600, 20)
      p.y += (Math.min(Math.max(p.ty - 150, 140), window.innerHeight - 380) - p.y) * (reduce ? 1 : 0.14)
      if (flot.current) flot.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`
      raf.current = requestAnimationFrame(bucle)
    }
    window.addEventListener('pointermove', mover)
    raf.current = requestAnimationFrame(bucle)
    return () => { window.removeEventListener('pointermove', mover); cancelAnimationFrame(raf.current) }
  }, [conMouse, reduce])

  const h = hover ? PONENTES.find((p) => p.id === hover) : null
  const nombres = PONENTES.map((p) => p.nombre)

  return (
    <div className="pi" ref={raiz}>
      <div className="pi-marquee" aria-hidden="true">
        <div className="pi-pista">
          {[...nombres, ...nombres].map((n, i) => (<span key={i}>{n}<b>◆</b></span>))}
        </div>
      </div>

      {JORNADAS.map((j) => {
        const lista = PONENTES.filter((p) => p.diaNum === j.num)
        return (
          <section key={j.num} className="pi-dia" aria-label={`Ponentes del ${j.nombre} ${j.num} de noviembre`}>
            <header>
              <h3><em>{j.nombre}</em> {j.num}<small> de noviembre</small></h3>
              <span>{lista.length} ponentes</span>
            </header>
            <ol>
              {lista.map((p, k) => {
                const idx = PONENTES.findIndex((x) => x.id === p.id) + 1
                const on = abierto === p.id
                return (
                  <li key={p.id} className={`pi-fila${on ? ' on' : ''}`}>
                    <button
                      className="pi-cab"
                      aria-expanded={on}
                      aria-controls={`pi-p-${p.id}`}
                      onClick={() => setAbierto(on ? null : p.id)}
                      onPointerEnter={(e) => { if (e.pointerType === 'mouse') setHover(p.id) }}
                      onPointerLeave={() => setHover(null)}
                      onFocus={() => setHover(null)}
                    >
                      <span className="pi-n">{String(idx).padStart(2, '0')}</span>
                      <span className="pi-nom">
                        <strong>{p.nombre}</strong>
                        <small>{p.empresa}{p.pais && <i> · {p.pais}</i>}</small>
                      </span>
                      <span className="pi-hora">{p.hora}</span>
                      <span className="pi-mas" aria-hidden="true" />
                    </button>
                    <div className="pi-cuerpo" id={`pi-p-${p.id}`} role="region" aria-label={`Ponencia de ${p.nombre}`}>
                      <div className="pi-in">
                        <div className="pi-ret"><Retrato p={p} /></div>
                        <div className="pi-dat">
                          {p.pais && <span className="pi-pais">Ponente internacional · {p.pais}</span>}
                          {p.cargo && <p className="pi-cargo">{p.cargo}</p>}
                          <p className="pi-emp">{p.empresa}</p>
                          {p.bio && <p className="pi-bio" dangerouslySetInnerHTML={{ __html: p.bio }} />}
                        </div>
                        <div className="pi-tema">
                          <small>Tema de ponencia</small>
                          <p className={p.tema ? '' : 'tbc'}>{p.tema || 'Tema por confirmar'}</p>
                          <span>{j.nombre} {j.num} de noviembre · {p.hora}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
          </section>
        )
      })}

      {conMouse && (
        <div ref={flot} className={`pi-flot${h ? ' vis' : ''}`} aria-hidden="true">
          {h && (
            <>
              <div className="pi-fret"><Retrato p={h} /></div>
              <p>{h.tema || 'Tema por confirmar'}</p>
            </>
          )}
        </div>
      )}
    </div>
  )
}
