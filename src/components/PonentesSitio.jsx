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
const iniciales = (p) => (p.corto || p.nombre).split(' ').slice(0, 2).map((w) => w[0]).join('').toUpperCase()

function Contador({ n }) {
  const [v, setV] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const correr = () => {
      const t0 = performance.now()
      const paso = (t) => { const k = Math.min(1, (t - t0) / 900); setV(Math.round(n * (1 - Math.pow(1 - k, 3)))); if (k < 1) requestAnimationFrame(paso) }
      requestAnimationFrame(paso)
    }
    if (!('IntersectionObserver' in window)) { setV(n); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { correr(); io.disconnect() } }, { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [n])
  return <span ref={ref}>{v}</span>
}

// Foto del ponente o, mientras no haya, un panel ámbar con curvas de nivel (mapa minero)
function Media({ p, grande }) {
  if (p.foto) {
    return (
      <>
        <img src={p.foto} alt={`Foto de ${p.nombre}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[50%_12%] transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20" />
      </>
    )
  }
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700" />
      <div className="absolute inset-0 mix-blend-multiply"><Contornos id={p.id} color="#000" gain={0.55} /></div>
      <span aria-hidden="true" className={`absolute inset-0 flex items-center justify-center font-bebas text-black/85 tracking-wide ${grande ? 'text-[11rem]' : 'text-[8.5rem]'} leading-none`}>{iniciales(p)}</span>
      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent" />
    </>
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
  const nInt = PONENTES.filter((p) => p.pais).length

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
    <div ref={raiz} className="ps text-left">
      {/* Cifras */}
      <div className="grid grid-cols-3 gap-3 sm:gap-5 max-w-3xl mx-auto mb-10">
        {[[PONENTES.length, 'Ponentes confirmados'], [3, 'Jornadas'], [nInt, 'Desde Chile']].map(([n, t]) => (
          <div key={t} className="rounded-2xl bg-white/5 border border-white/10 py-4 px-3 text-center">
            <div className="font-bebas text-4xl sm:text-5xl text-amber-400 leading-none"><Contador n={n} /></div>
            <div className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-400">{t}</div>
          </div>
        ))}
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
          <div className="flex items-center gap-4 mb-7">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold border border-amber-500/20 whitespace-nowrap">
              {g.nombre} {g.num} de noviembre
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-amber-500/40 to-transparent" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 whitespace-nowrap">{g.items.length} {g.items.length === 1 ? 'ponente' : 'ponentes'}</span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {g.items.map((p) => (
              <li key={p.id} className="ps-item" style={{ '--k': k++ % 6 }}>
                <button
                  onClick={(e) => { volver.current = e.currentTarget; setAbierto(p.id) }}
                  onMouseMove={brillo}
                  aria-label={`Ver la ponencia de ${p.nombre}`}
                  className="ps-card group relative w-full h-full flex flex-col text-left overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-b from-white/10 to-white/5 hover:border-gold-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 cursor-pointer"
                >
                  <span className="ps-glow" aria-hidden="true" />
                  <div className="relative h-72 overflow-hidden">
                    <Media p={p} />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur text-amber-300 text-xs font-bold border border-amber-500/30">
                      <Clock size={12} /> {p.hora}
                    </span>
                    {p.pais && (
                      <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-black text-xs font-extrabold uppercase tracking-wide">
                        <Globe2 size={12} /> {p.pais}
                      </span>
                    )}
                  </div>
                  <div className="relative p-6 pt-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-extrabold text-white leading-snug mb-1">{p.nombre}</h3>
                    {p.cargo && <p className="text-sm text-amber-400 font-semibold leading-snug">{p.cargo}</p>}
                    <p className="text-sm text-gray-300 leading-snug mt-0.5">{p.empresa}</p>
                    <div className="mt-5 pt-4 border-t border-white/10 flex-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-amber-500 mb-1.5">Tema de ponencia</p>
                      <p className={`text-sm leading-relaxed line-clamp-3 ${p.tema ? 'text-gray-200' : 'text-gray-500 italic'}`}>{p.tema || 'Tema por confirmar'}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:gap-3 transition-all">
                      Ver detalle <ArrowRight size={16} />
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {actual && (
        <div className="ps-modal fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto" role="dialog" aria-modal="true" aria-label={`Ponencia de ${actual.nombre}`} onClick={(e) => e.target === e.currentTarget && cerrar()}>
          <article key={actual.id} className="ps-hoja relative w-full max-w-4xl my-auto grid md:grid-cols-[1fr_1.35fr] overflow-hidden rounded-3xl border border-gold-500/40 bg-dark-surface shadow-2xl shadow-black">
            <div className="relative h-72 md:h-auto md:min-h-[460px] overflow-hidden">
              <Media p={actual} grande />
            </div>
            <div className="relative p-7 sm:p-10 flex flex-col">
              <button ref={cerrarBtn} onClick={cerrar} aria-label="Cerrar" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-colors"><X size={20} /></button>
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
