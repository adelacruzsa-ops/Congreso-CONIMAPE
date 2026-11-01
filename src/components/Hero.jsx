import { EVENT_DETAILS } from '../config/constants'
import { Link } from 'react-router-dom'
import { ShieldCheck, Award, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/imagenes/hero-conimape-2026.mp4" type="video/mp4" />
      </video>

      {/* Capa de superposición con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 pt-12 pb-8 text-white flex flex-col items-center text-center">
        <span className="px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 tracking-[0.25em] text-xs md:text-sm font-bold uppercase mb-6 shadow-lg backdrop-blur-md">
          {EVENT_DETAILS.slogan}
        </span>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-6 drop-shadow-2xl">
          II CONIMAPE <span className="text-gold-500">{EVENT_DETAILS.title.split(' ')[2] || '2026'}</span>
        </h1>

        <h2 className="text-base sm:text-xl md:text-2xl font-light tracking-wide leading-relaxed max-w-3xl mb-8 text-gray-200">
          II Congreso Internacional de la Pequeña Minería y Minería Artesanal
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <span className="px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-semibold flex items-center gap-2">
            <i className="fa-solid fa-calendar-day text-gold-400"></i>
            {EVENT_DETAILS.date}
          </span>
          <span className="px-5 py-2.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-semibold flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-gold-400"></i>
            {EVENT_DETAILS.location}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/inscripcion"
            className="bg-gold-500 hover:bg-gold-400 text-black font-extrabold text-base px-9 py-4 rounded-full shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Inscríbete Ahora</span>
            <ArrowRight size={18} />
          </Link>
          <Link
            to="/participantes?tab=auspiciadores"
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300"
          >
            Auspiciar o Exponer
          </Link>
        </div>
      </div>

      {/* Bloque de Respaldo e Instituciones Organizadoras (Estilo ACOMIPE) */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-bold">Certificación Académica</p>
              <p className="text-sm font-semibold text-white">Horas lectivas certificadas por comités institucionales</p>
            </div>
          </div>

          <div className="h-px md:h-10 w-full md:w-px bg-white/10"></div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-center">
            <div className="flex items-center gap-3">
              <ShieldCheck size={18} className="text-amber-400" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Sede Oficial: CIP - CD Arequipa</span>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-users-gear text-amber-400 text-sm"></i>
              <span className="text-xs sm:text-sm text-gray-300 font-medium">Organizan Comisiones Especializadas</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
