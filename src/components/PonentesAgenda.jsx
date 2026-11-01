import { useEffect, useRef, useState } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-agenda.css'

// Agenda de ponentes por día: se ven los 14 a la vez, con hora, cargo y tema de ponencia.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', corto: 'Mié 4' },
  { num: 5, nombre: 'Jueves', corto: 'Jue 5' },
  { num: 6, nombre: 'Viernes', corto: 'Vie 6' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function PonentesAgenda() {
  const [activo, setActivo] = useState(4)
  const raiz = useRef(null)

  // Aparición escalonada al hacer scroll + día activo en las pestañas
  useEffect(() => {
    const el = raiz.current
    if (!el || !('IntersectionObserver' in window)) {
      el && el.querySelectorAll('.pa-fila').forEach((f) => f.classList.add('in'))
      return
    }
    const ioFilas = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); ioFilas.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    el.querySelectorAll('.pa-fila').forEach((f) => ioFilas.observe(f))
    const ioDias = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActivo(Number(e.target.dataset.dia)) }),
      { rootMargin: '-35% 0px -55% 0px' }
    )
    el.querySelectorAll('.pa-dia').forEach((d) => ioDias.observe(d))
    return () => { ioFilas.disconnect(); ioDias.disconnect() }
  }, [])

  const irA = (num) => {
    const d = raiz.current.querySelector(`#pa-dia-${num}`)
    if (d) window.scrollTo({ top: d.getBoundingClientRect().top + window.scrollY - 210, behavior: 'smooth' })
  }

  return (
    <div className="pa" ref={raiz}>
      <div className="pa-tabs" role="tablist" aria-label="Ir a la jornada">
        {JORNADAS.map((j) => (
          <button key={j.num} role="tab" aria-selected={activo === j.num} className="pa-tab" onClick={() => irA(j.num)}>
            <span>{j.corto}</span>
            <small>{PONENTES.filter((p) => p.diaNum === j.num).length} ponentes</small>
          </button>
        ))}
      </div>

      {JORNADAS.map((j) => {
        const lista = PONENTES.filter((p) => p.diaNum === j.num)
        return (
          <section key={j.num} className="pa-dia" id={`pa-dia-${j.num}`} data-dia={j.num} aria-label={`Ponentes del ${j.nombre} ${j.num} de noviembre`}>
            <header className="pa-cab">
              <span className="pa-num">{String(j.num).padStart(2, '0')}</span>
              <div>
                <h3>{j.nombre} <em>{j.num}</em> de noviembre</h3>
                <p>{lista.length} ponentes · II CONIMAPE 2026 · Arequipa</p>
              </div>
            </header>

            <ol className="pa-lista">
              {lista.map((p, k) => (
                <li key={p.id} className="pa-fila" style={{ '--k': k }}>
                  <div className="pa-hora"><i aria-hidden="true" />{p.hora}</div>
                  <div className="pa-persona">
                    <div className="pa-arco">
                      {p.foto ? <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" /> : (<><Contornos id={p.id} /><span aria-hidden="true">{iniciales(p)}</span></>)}
                    </div>
                    <div className="pa-datos">
                      <h4>{p.nombre}</h4>
                      {p.cargo && <p className="pa-cargo">{p.cargo}</p>}
                      <p className="pa-emp">{p.empresa}</p>
                      {p.pais && <span className="pa-pais">Internacional · {p.pais}</span>}
                    </div>
                  </div>
                  <div className="pa-tema">
                    <small>Tema de ponencia</small>
                    <p className={p.tema ? '' : 'tbc'}>{p.tema || 'Tema por confirmar'}</p>
                    {p.bio && <p className="pa-bio" dangerouslySetInnerHTML={{ __html: p.bio }} />}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )
      })}
    </div>
  )
}
