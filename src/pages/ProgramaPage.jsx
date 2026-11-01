import { useState } from 'react'
import { CRONOGRAMA, MOSTRAR_PROGRAMA } from '../config/constants'
import { Link } from 'react-router-dom'
import { Clock, Calendar, Sparkles, ArrowRight } from 'lucide-react'

export default function ProgramaPage() {
  const [activeTab, setActiveTab] = useState(0)

  if (!MOSTRAR_PROGRAMA) {
    return (
      <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mx-auto bg-dark-surface border border-amber-500/20 rounded-3xl p-10 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-lg">
              <Clock size={40} />
            </div>
            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/30">
              PRÓXIMAMENTE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
              Programa Oficial en Elaboración
            </h1>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              Estamos ultimando los detalles de las ponencias magistrales, bloques temáticos y horarios del II CONIMAPE 2026. La agenda detallada estará disponible muy pronto.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/inscripcion"
                className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2 text-sm"
              >
                <span>Asegura tu Entrada Anticipada</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Programa y Cronograma del Evento
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Explora las ponencias, talleres y mesas de trabajo programadas para los 3 días de congreso en Arequipa.
        </p>

        {/* Tabs de Días */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {CRONOGRAMA.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${activeTab === index
                  ? 'bg-gold-500 text-white shadow-lg shadow-gold-500/30'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
            >
              {item.dia}
            </button>
          ))}
        </div>

        {/* Lista de Actividades del Día Seleccionado */}
        <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl text-left space-y-6">
          <h2 className="text-2xl font-bold text-gold-400 border-b border-white/10 pb-4">
            {CRONOGRAMA[activeTab].dia} ({CRONOGRAMA[activeTab].fecha})
          </h2>

          <div className="space-y-4">
            {CRONOGRAMA[activeTab].actividades.map((act, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-gold-500/50 transition-all"
              >
                <div className="space-y-1">
                  <span className="text-xs font-semibold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                    {act.hora}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{act.evento}</h3>
                  <p className="text-xs text-gray-400">Expositor: <span className="text-gray-200">{act.expositor}</span></p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-gray-300 bg-white/10 px-4 py-1.5 rounded-full border border-white/10">
                    📍 {act.sala}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <Link
              to="/inscripcion"
              className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg"
            >
              Inscríbete ahora para asistir
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
