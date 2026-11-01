import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Building2, Cpu, Wrench, ShieldCheck, CheckCircle2, PhoneCall, Tag } from 'lucide-react'
import { WHATSAPP_NUMBER } from '../config/constants'

export default function FeriaTecnologicaPage() {
  const whatsappStandUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa reservar un Stand de Exhibición para el II CONIMAPE 2026.')}`

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
            <Sparkles size={16} /> EXHIBICIÓN Y RUEDA DE NEGOCIOS MINEROS
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Feria Tecnológica <span className="text-gold-500">EXPO CONIMAPE 2026</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            El escaparate tecnológico y comercial más relevante para la pequeña minería y minería artesanal del Perú. Soluciones, maquinaria y tecnologías limpias en un solo lugar.
          </p>
        </div>

        {/* Bloque Alquiler de Stand Destacado */}
        <div className="bg-gradient-to-br from-amber-500/20 via-dark-surface to-dark-surface border-2 border-amber-400 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16 text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-500/30">
                <Tag size={14} /> CONVOCATORIA ABIERTA A PROVEEDORES
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                Alquiler de Stands para Exhibición Comercial
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Posiciona tu marca ante más de 350 líderes, profesionales, pequeños productores y empresarios de la minería artesanal en Arequipa.
              </p>

              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Espacio físico asignado en la zona de exhibición del II CONIMAPE 2026</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Presencia de marca en materiales de difusión oficiales y rueda de negocios</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                  <span>Pases de acreditación para los expositores de tu empresa</span>
                </li>
              </ul>
            </div>

            {/* Cuadro de Tarifa de Stand */}
            <div className="bg-black/50 border border-amber-500/40 rounded-2xl p-6 text-center flex flex-col justify-between h-full shadow-xl">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">RESERVA TU STAND</span>
                <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                  Consulta disponibilidad y solicita más información para asegurar el espacio de tu empresa en el evento.
                </p>
              </div>

              <a
                href={whatsappStandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 text-sm"
              >
                <PhoneCall size={16} />
                <span>Reservar Stand por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Card Estado Vacío / Próximamente Catálogo Completo */}
        <div className="bg-gradient-to-b from-dark-surface to-dark-bg border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden mb-16">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4 shadow-lg">
              <Cpu size={32} />
            </div>

            <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
              Catálogo de Expositores
            </span>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Grilla de Stands en Construcción
            </h3>

            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Estamos consolidando la distribución de marcas de maquinaria pesada, laboratorios y startups tecnológicas que estarán presentes en la feria.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8 text-left">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Building2 size={24} className="text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Stands Comerciales</h4>
                <p className="text-[11px] text-gray-400">Exhibición directa de productos y servicios para la MAPE.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <Wrench size={24} className="text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Equipamiento & Equipos</h4>
                <p className="text-[11px] text-gray-400">Demostraciones de gravimetría y procesamiento ecológico.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
                <ShieldCheck size={24} className="text-amber-400 mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Seguridad & EPP</h4>
                <p className="text-[11px] text-gray-400">Tecnologías de prevención de riesgos en socavón.</p>
              </div>
            </div>

            <Link
              to="/"
              className="bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold px-6 py-3 rounded-full transition-all text-xs"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
