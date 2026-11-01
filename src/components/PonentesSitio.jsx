import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Clock, X, ChevronLeft, ChevronRight, ArrowRight, Globe2, Quote } from 'lucide-react'
import { PONENTES } from '../config/constants'
import Contornos from './ContornosPonente'
import './ponentes-sitio.css'

// Ponentes con el mismo lenguaje visual de la web: fondo negro, ámbar/dorado,
// Montserrat, tarjetas redondeadas con borde dorado y pestañas ámbar.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', corto: 'Mié 4' },
  { num: 5, nombre: 'Jueves', corto: 'Jue 5' },
  { num: 6, nombre: 'Viernes', corto: 'Vie 6' },
]
const FILTROS = [['todos', 'Todos'], ['4', 'Mié 4'], ['5', 'Jue 5'], ['6', 'Vie 6'], ['int', 'Internacional']]
const barras = (id) => Array.from({ length: 26 }, (_, i) => ((id * 7 + i * 13 + (i % 3) * 5) % 4) + 1)
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

// Foto del ponente (vertical 2:3, sin recortes) o, mientras no haya, un monograma dorado sobre fondo negro con curvas de nivel
function Media({ p }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: 'inline-size' }}>
      {p.foto ? (
        <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
      ) : (
        <div className="ps-mono absolute inset-0">
          <div className="absolute inset-0 opacity-70"><Contornos id={p.id} color="#f59e0b" gain={1.15} /></div>
          <span className="ps-mono-frame" aria-hidden="true" />
          <span aria-hidden="true" className="ps-mono-ini font-bebas" style={{ fontSize: '54cqw' }}>{iniciales(p)}</span>
          <span aria-hidden="true" className="ps-mono-tag font-bebas" style={{ fontSize: '8cqw' }}>CONIMAPE · 2026</span>
        </div>
      )}
    </div>
  )
}

export default function PonentesSitio() {
  const [filtro, setFiltro] = useState('todos')
  const [abierto, setAbierto] = useState(null)
  const volver = useRef(null)
  const cerrarBtn = useRef(null)
  const raiz = useRef(null)

  const lista = useMemo(
    () => PONENTES.filter((p) => filtro === 'todos' || (filtro === 'int' ? !!p.pais : String(p.diaNum) === filtro)),
    [filtro]
  )
  const pos = lista.findIndex((p) => p.id === abierto)
  const actual = pos >= 0 ? lista[pos] : null

  // Aparición escalonada de las tarjetas
  useEffect(() => {
    const el = raiz.current
    if (!el) return
    const items = el.querySelectorAll('.ps-item')
    if (!('IntersectionObserver' in window)) { items.forEach((i) => i.classList.add('in')); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
  }, [filtro])

  const cerrar = useCallback(() => { setAbierto(null); volver.current && volver.current.focus() }, [])
  const mover = useCallback((d) => setAbierto((id) => { const i = lista.findIndex((p) => p.id === id); return lista[(i + d + lista.length) % lista.length].id }), [lista])
  useEffect(() => {
    if (!actual) return
    const onKey = (e) => { if (e.key === 'Escape') cerrar(); if (e.key === 'ArrowRight') mover(1); if (e.key === 'ArrowLeft') mover(-1) }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    cerrarBtn.current && cerrarBtn.current.focus()
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [actual, cerrar, mover])

  const brillo = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  const grupos = JORNADAS.map((j) => ({ ...j, items: lista.filter((p) => p.diaNum === j.num) })).filter((g) => g.items.length)
  let k = 0

  return (
    <div ref={raiz} className="ps relative text-left">
      <div className="ps-bg" aria-hidden="true">
        <div className="ps-bg-a"><Contornos id={21} color="#f59e0b" gain={1} /></div>
        <div className="ps-bg-b"><Contornos id={7} color="#f59e0b" gain={1} /></div>
      </div>
      {/* Título editorial */}
      <header className="text-center mb-8">
        <p className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.34em] text-amber-500 mb-3">
          <span className="h-px w-8 bg-amber-500/60" /> Voces de la pequeña minería <span className="h-px w-8 bg-amber-500/60" />
        </p>
        <h2 className="ps-titulo font-bebas uppercase leading-[0.9]">
          <span>Los</span> <b>ponentes</b>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">Tres jornadas · Arequipa · 4, 5 y 6 de noviembre de 2026</p>
      </header>

      {/* Cinta con todos los nombres */}
      <div className="ps-cinta mb-10" aria-hidden="true">
        <div className="animate-marquee">
          {[...PONENTES, ...PONENTES].map((p, i) => (
            <span key={i} className={`ps-cinta-item font-bebas ${i % 2 ? 'ps-hueco' : ''}`}>
              {p.nombre}<i>◆</i>
            </span>
          ))}
        </div>
      </div>

      {/* Filtros: mismo estilo que las pestañas del sitio */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12 bg-dark-surface/80 p-2 rounded-2xl border border-white/10 max-w-2xl mx-auto backdrop-blur-md" role="group" aria-label="Filtrar ponentes">
        {FILTROS.map(([key, t]) => (
          <button key={key} onClick={() => setFiltro(key)} aria-pressed={filtro === key}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${filtro === key ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            {t}
          </button>
        ))}
      </div>

      {grupos.map((g) => (
        <section key={g.num + filtro} className="mb-14" aria-label={`Ponentes del ${g.nombre} ${g.num} de noviembre`}>
          <div className="ps-dia flex items-end gap-4 sm:gap-6 mb-9">
            <span className="ps-num font-bebas select-none" aria-hidden="true">{String(g.num).padStart(2, '0')}</span>
            <div className="pb-1 min-w-0">
              <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-amber-500 mb-2">
                <span className="ps-chip">Jornada {String(g.num - 3).padStart(2, '0')}</span> <span className="hidden sm:inline">de noviembre · 2026</span>
              </p>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-none">{g.nombre} <span className="ps-oro">{g.num}</span></h3>
            </div>
            <span className="ps-linea hidden sm:block h-px flex-1 mb-3" aria-hidden="true" />
            <span className="hidden sm:block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2 whitespace-nowrap">{g.items.length} {g.items.length === 1 ? 'ponente' : 'ponentes'}</span>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {g.items.map((p, ix) => (
              <li key={p.id} className={`ps-item ${g.items.length % 2 === 1 && ix === g.items.length - 1 ? 'lg:col-span-2' : ''}`} style={{ '--k': k++ % 4 }}>
                <button
                  onClick={(e) => { volver.current = e.currentTarget; setAbierto(p.id) }}
                  onMouseMove={brillo}
                  aria-label={`Ver la ponencia de ${p.nombre}`}
                  className="ps-card ps-ticket group relative w-full h-full flex items-stretch text-left overflow-hidden rounded-3xl border border-gold-500/30 hover:border-gold-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="ps-halo" aria-hidden="true" />
                  <span className="ps-glow" aria-hidden="true" />
                  <span className="ps-topbar" aria-hidden="true" />

                  {/* Talón del pase: foto + número */}
                  <div className="ps-stub relative shrink-0 w-[8.2rem] sm:w-48 p-4 sm:p-5 flex flex-col items-center gap-3 border-r border-dashed border-amber-500/40">
                    <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden ring-2 ring-amber-500/70 shadow-2xl shadow-black/60">
                      <Media p={p} />
                    </div>
                    <div className="text-center leading-none">
                      <span className="block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-1">Pase</span>
                      <span className="font-bebas text-3xl sm:text-4xl tracking-widest text-amber-400">N.º {String(p.id).padStart(2, '0')}</span>
                    </div>
                    <div className="ps-barras" aria-hidden="true">
                      {barras(p.id).map((w, i) => <i key={i} style={{ width: w + 'px' }} />)}
                    </div>
                  </div>

                  {/* Cuerpo del pase */}
                  <div className="relative min-w-0 flex-1 flex flex-col p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.28em] text-amber-500">Ponente · 2026</span>
                      {p.pais && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-black text-[10px] font-extrabold uppercase tracking-wide shrink-0">
                          <Globe2 size={11} /> {p.pais}
                        </span>
                      )}
                    </div>
                    <h4 className="font-bebas uppercase text-[1.7rem] sm:text-4xl leading-[0.95] tracking-wide text-white">{p.nombre}</h4>
                    <span className="ps-rule" aria-hidden="true" />
                    {p.cargo && <p className="text-sm text-amber-400 font-semibold leading-snug">{p.cargo}</p>}
                    <p className="text-sm text-gray-300 leading-snug mt-0.5">{p.empresa}</p>

                    <div className="ps-quote mt-4 pt-3 flex-1">
                      <p className={`text-sm leading-relaxed line-clamp-3 ${p.tema ? 'text-gray-100' : 'text-gray-500 italic'}`}>{p.tema || 'Tema por confirmar'}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-dashed border-white/15 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 font-bebas text-2xl tracking-wider text-white">
                        <Clock size={16} className="text-amber-400" /> {p.hora}
                      </span>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/40 text-sm font-bold text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:gap-3 transition-all duration-300">
                        Ver detalle <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {actual && (
        <div className="ps-modal fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Ponencia de ${actual.nombre}`} onClick={(e) => e.target === e.currentTarget && cerrar()}>
          <article key={actual.id} className="ps-hoja relative w-full max-w-4xl my-auto grid md:grid-cols-[0.8fr_1.5fr] overflow-hidden rounded-3xl border border-gold-500/40 bg-dark-surface shadow-2xl shadow-black">
            <span className="ps-topbar" aria-hidden="true" />
            <button ref={cerrarBtn} onClick={cerrar} aria-label="Cerrar" className="ps-cerrar w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"><X size={20} /></button>
            <span className="ps-halo" style={{ left: '-5rem', top: '-5rem', width: '22rem', height: '22rem' }} aria-hidden="true" />
            <div className="relative p-6 sm:p-8 md:pr-0 flex items-center justify-center">
              <div className="relative w-48 sm:w-60 md:w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden ring-1 ring-amber-500/50 shadow-2xl shadow-black">
                <Media p={actual} />
              </div>
            </div>
            <div className="relative p-7 sm:p-10 md:pl-8 flex flex-col">
              <span className="self-start inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
                {actual.pais ? `Ponente internacional · ${actual.pais}` : 'Ponente confirmado'}
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2 pr-10">{actual.nombre}</h3>
              {actual.cargo && <p className="text-amber-400 font-semibold">{actual.cargo}</p>}
              <p className="text-gray-300 mb-5">{actual.empresa}</p>
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 mb-6">
                <Clock size={16} className="text-amber-400" /> {actual.dia} de noviembre · {actual.hora}
              </p>
              {actual.bio && <p className="text-sm text-gray-300 leading-relaxed mb-6 ps-bio" dangerouslySetInnerHTML={{ __html: actual.bio }} />}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 mb-7">
                <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-amber-500 mb-2"><Quote size={14} /> Tema de ponencia</p>
                <p className={`text-lg font-bold leading-snug ${actual.tema ? 'text-white' : 'text-gray-500 italic font-medium'}`}>{actual.tema || 'Tema por confirmar'}</p>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <Link to="/inscripcion" onClick={cerrar} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-black font-bold text-sm shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors">
                  Inscríbete al congreso <ArrowRight size={16} />
                </Link>
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-400">
                  <button onClick={() => mover(-1)} aria-label="Ponente anterior" className="w-10 h-10 rounded-full border border-white/15 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"><ChevronLeft size={20} /></button>
                  <span>{String(pos + 1).padStart(2, '0')} / {String(lista.length).padStart(2, '0')}</span>
                  <button onClick={() => mover(1)} aria-label="Ponente siguiente" className="w-10 h-10 rounded-full border border-white/15 hover:border-amber-500 hover:text-amber-400 flex items-center justify-center transition-colors"><ChevronRight size={20} /></button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </div>
  )
}
