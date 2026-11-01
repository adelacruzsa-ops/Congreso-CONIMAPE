import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Clock, X, ChevronLeft, ChevronRight, ArrowRight, Globe2, Quote, CalendarDays } from 'lucide-react'
import { PONENTES } from '../config/constants'
import './ponentes-sitio.css'

// Ponentes con el mismo lenguaje visual de la web: mismas pestañas que Ponentes / Auspiciadores /
// Colaboradores, mismas tarjetas que "Ejes Temáticos" y círculos de iniciales como sus círculos de icono.
// Los datos salen de PONENTES en src/config/constants.js.

const JORNADAS = [
  { num: 4, nombre: 'Miércoles', corto: 'Mié' },
  { num: 5, nombre: 'Jueves', corto: 'Jue' },
  { num: 6, nombre: 'Viernes', corto: 'Vie' },
]
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

// Foto del ponente (sin recortar la cabeza) o, mientras no haya, un círculo con sus iniciales
function Media({ p }) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: 'inline-size' }}>
      {p.foto ? (
        <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 flex items-center justify-center">
          <span aria-hidden="true" className="ps-ini rounded-full bg-white/10 group-hover:bg-gold-500 text-white group-hover:text-black font-extrabold flex items-center justify-center transition-colors duration-300" style={{ width: '42cqw', height: '42cqw', fontSize: '15cqw' }}>
            {iniciales(p)}
          </span>
        </div>
      )}
    </div>
  )
}

export default function PonentesSitio() {
  const [dia, setDia] = useState(4)
  const [abierto, setAbierto] = useState(null)
  const volver = useRef(null)
  const cerrarBtn = useRef(null)
  const raiz = useRef(null)

  const lista = useMemo(() => PONENTES.filter((p) => p.diaNum === dia), [dia])
  const jornada = JORNADAS.find((j) => j.num === dia)
  const pos = lista.findIndex((p) => p.id === abierto)
  const actual = pos >= 0 ? lista[pos] : null

  // Aparición suave de las tarjetas
  useEffect(() => {
    const el = raiz.current
    if (!el) return
    const items = el.querySelectorAll('.ps-item')
    if (!('IntersectionObserver' in window)) { items.forEach((i) => i.classList.add('in')); return }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: 0.12 })
    items.forEach((i) => io.observe(i))
    return () => io.disconnect()
  }, [dia])

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

  return (
    <div ref={raiz} className="ps text-left">
      {/* Pestañas por jornada: mismo estilo que las pestañas de la página */}
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10 bg-dark-surface/80 p-2 rounded-2xl border border-white/10 max-w-2xl mx-auto backdrop-blur-md" role="group" aria-label="Elegir jornada">
        {JORNADAS.map((j) => (
          <button key={j.num} onClick={() => setDia(j.num)} aria-pressed={dia === j.num}
            className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 justify-center ${dia === j.num ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}>
            <CalendarDays size={18} className="hidden sm:block" />
            <span><span className="hidden sm:inline">{j.nombre}</span><span className="sm:hidden">{j.corto}</span> {j.num}</span>
          </button>
        ))}
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{jornada.nombre} {jornada.num} de noviembre</h2>
        <p className="text-gray-400 mt-2">{lista.length} {lista.length === 1 ? 'ponente' : 'ponentes'} · II CONIMAPE 2026</p>
      </div>

      <ul key={dia} className="ps-grid">
        {lista.map((p, k) => (
          <li key={p.id} className="ps-item" style={{ '--k': k % 4 }}>
            <button
              onClick={(e) => { volver.current = e.currentTarget; setAbierto(p.id) }}
              aria-label={`Ver la ponencia de ${p.nombre}`}
              className="group h-full w-full flex flex-col text-center overflow-hidden bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/30 rounded-3xl hover:border-gold-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full aspect-square bg-dark-surface">
                <Media p={p} />
                <div className="absolute top-3 left-3 flex flex-col items-start gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm border border-amber-500/20 text-amber-400 text-[11px] font-semibold">
                    <Clock size={12} /> {p.hora}
                  </span>
                  {p.pais && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-black text-[11px] font-bold">
                      <Globe2 size={12} /> {p.pais}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex-1 flex flex-col p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-gold-400 leading-snug">{p.nombre}</h3>
                {p.cargo && <p className="text-white text-xs sm:text-sm font-semibold mt-2 leading-snug">{p.cargo}</p>}
                <p className="text-gray-300 text-xs sm:text-sm mt-1 leading-snug">{p.empresa}</p>
                <span className="mt-auto pt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-amber-400 group-hover:gap-2.5 transition-all duration-300">
                  Ver ponencia <ArrowRight size={15} />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {actual && (
        <div className="ps-modal fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Ponencia de ${actual.nombre}`} onClick={(e) => e.target === e.currentTarget && cerrar()}>
          <article key={actual.id} className="ps-hoja group relative w-full max-w-4xl my-auto grid md:grid-cols-[0.8fr_1.5fr] overflow-hidden rounded-3xl border border-gold-500/40 bg-dark-surface shadow-2xl shadow-black">
            <button ref={cerrarBtn} onClick={cerrar} aria-label="Cerrar" className="ps-cerrar w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"><X size={20} /></button>
            <div className="p-6 sm:p-8 md:pr-0 flex items-center justify-center">
              <div className="relative w-48 sm:w-60 md:w-full max-w-[300px] aspect-[2/3] rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl shadow-black">
                <Media p={actual} />
              </div>
            </div>
            <div className="p-7 sm:p-10 md:pl-8 flex flex-col">
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
