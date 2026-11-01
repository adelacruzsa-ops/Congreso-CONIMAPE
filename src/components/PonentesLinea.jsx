import { useEffect, useRef } from 'react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-linea.css'

// Línea de tiempo del congreso: una línea dorada que se dibuja al hacer scroll,
// con los ponentes de cada jornada alternando a izquierda y derecha.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', corto: 'Mié 4' },
  { num: 5, nombre: 'Jueves', corto: 'Jue 5' },
  { num: 6, nombre: 'Viernes', corto: 'Vie 6' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

export default function PonentesLinea() {
  const raiz = useRef(null)

  useEffect(() => {
    const el = raiz.current
    if (!el) return
    const filas = el.querySelectorAll('.pl-item, .pl-dia')
    let io
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
        { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
      )
      filas.forEach((f) => io.observe(f))
    } else filas.forEach((f) => f.classList.add('in'))

    // La línea se va llenando según el scroll
    let raf = 0
    const medir = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - r.top) / r.height))
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(medir) }
    medir()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { io && io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); raf && cancelAnimationFrame(raf) }
  }, [])

  const irA = (num) => {
    const d = raiz.current.querySelector(`#pl-dia-${num}`)
    if (d) window.scrollTo({ top: d.getBoundingClientRect().top + window.scrollY - 170, behavior: 'smooth' })
  }

  let n = 0
  return (
    <div className="pl-wrap">
      <div className="pl-saltos" role="group" aria-label="Ir a la jornada">
        {JORNADAS.map((j) => (
          <button key={j.num} onClick={() => irA(j.num)}>{j.corto}</button>
        ))}
      </div>

      <div className="pl" ref={raiz} style={{ '--p': 0 }}>
        <div className="pl-linea" aria-hidden="true"><i /></div>

        {JORNADAS.map((j) => {
          const lista = PONENTES.filter((p) => p.diaNum === j.num)
          return (
            <section key={j.num} aria-label={`Ponentes del ${j.nombre} ${j.num} de noviembre`}>
              <div className="pl-dia" id={`pl-dia-${j.num}`}>
                <div className="pl-chapa">
                  <span className="pl-gran">{String(j.num).padStart(2, '0')}</span>
                  <div>
                    <strong>{j.nombre} {j.num}</strong>
                    <small>de noviembre · {lista.length} ponentes</small>
                  </div>
                </div>
              </div>

              <ol>
                {lista.map((p) => {
                  const lado = n++ % 2 === 0 ? 'izq' : 'der'
                  return (
                    <li key={p.id} className={`pl-item ${lado}`}>
                      <div className="pl-hora"><span>{p.hora}</span></div>
                      <span className="pl-nodo" aria-hidden="true" />
                      <article className="pl-card">
                        <div className="pl-arco">
                          {p.foto ? <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" /> : (<><Contornos id={p.id} /><span aria-hidden="true">{iniciales(p)}</span></>)}
                        </div>
                        <div className="pl-txt">
                          {p.pais && <span className="pl-pais">Internacional · {p.pais}</span>}
                          <h4>{p.nombre}</h4>
                          {p.cargo && <p className="pl-cargo">{p.cargo}</p>}
                          <p className="pl-emp">{p.empresa}</p>
                          <div className="pl-tema">
                            <small>Tema de ponencia</small>
                            <p className={p.tema ? '' : 'tbc'}>{p.tema || 'Tema por confirmar'}</p>
                          </div>
                          {p.bio && <p className="pl-bio" dangerouslySetInnerHTML={{ __html: p.bio }} />}
                        </div>
                      </article>
                    </li>
                  )
                })}
              </ol>
            </section>
          )
        })}
        <div className="pl-fin" aria-hidden="true"><span>◆</span></div>
      </div>
    </div>
  )
}
