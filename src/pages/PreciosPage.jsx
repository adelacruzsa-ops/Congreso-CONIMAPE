import { PRECIOS, LINK_FORM, LINKS_INSCRIPCION, WHATSAPP_NUMBER, CONTACT_EMAIL } from '../config/constants'
import { Check, ShieldCheck, CreditCard, Sparkles, HelpCircle, ArrowRight, Calendar } from 'lucide-react'

export default function PreciosPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría información sobre los métodos de pago e inscripción para el II CONIMAPE 2026.')}`

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-3 border border-amber-500/20">
          TARIFAS E INVERSIÓN
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Precios de Inscripción CONIMAPE 2026
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          Elige la tarifa que mejor se adapte a tu perfil y asegura tu vacante para el congreso minero más importante del año en Arequipa.
        </p>

        {/* Banner Preventa Ampliada */}
        <div className="mb-10 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 text-amber-300 border border-amber-500/30 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
          <Calendar size={18} className="text-amber-400 shrink-0" />
          <span>¡Tarifas de preventa y descuentos ampliados hasta el <strong>15 DE OCTUBRE</strong>!</span>
        </div>

        <div className="mb-16">
          <a
            href="/inscripcion"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <Sparkles size={18} />
            <span>Ver Guía Detallada de Medios de Pago e Inscripción</span>
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Grid de Tarjetas de Precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {PRECIOS.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 ${plan.destacado
                  ? 'bg-gradient-to-b from-amber-500/20 via-dark-surface to-dark-surface border-2 border-amber-400 shadow-2xl shadow-amber-500/15 scale-105 z-10'
                  : 'bg-dark-surface border border-white/10 shadow-xl hover:border-white/30'
                }`}
            >
              {plan.destacado && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-extrabold px-4 py-1.5 rounded-full shadow-lg tracking-wider flex items-center gap-1">
                  <Sparkles size={14} /> {plan.popularLabel || 'MÁS POPULAR'}
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.nombre}</h3>
                <p className="text-xs text-gray-400 mb-6 min-h-[36px]">{plan.subtitulo}</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-extrabold text-amber-400">
                    {plan.precio}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold ml-2 uppercase">
                    / {plan.moneda}
                  </span>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {plan.beneficios.map((beneficio, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-200">
                      <div className="p-0.5 rounded-full bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                        <Check size={14} />
                      </div>
                      <span>{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.link || LINKS_INSCRIPCION.individual}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3.5 rounded-full transition-all duration-300 shadow-md ${plan.destacado
                      ? 'bg-amber-500 hover:bg-amber-400 text-black shadow-amber-500/20 hover:scale-102'
                      : 'bg-white/10 hover:bg-amber-500 hover:text-black text-white'
                    }`}
                >
                  <span>Inscríbete Ahora</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sección Informativa sobre Pagos y Garantías */}
        <div className="bg-dark-surface/80 border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl backdrop-blur-md text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <CreditCard size={28} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">¿Cómo realizar tu pago e inscripción?</h3>
              <p className="text-xs sm:text-sm text-gray-400">Proceso rápido y seguro en 3 sencillos pasos</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <span className="inline-block w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm text-center leading-8 mb-3">
                1
              </span>
              <h4 className="text-white font-semibold text-sm mb-1">Elige tu categoría</h4>
              <p className="text-xs text-gray-400">Selecciona el tipo de entrada (Estudiante, Minero o Profesional).</p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <span className="inline-block w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm text-center leading-8 mb-3">
                2
              </span>
              <h4 className="text-white font-semibold text-sm mb-1">Completa el Formulario</h4>
              <p className="text-xs text-gray-400">Llena tus datos en el formulario oficial de inscripción.</p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
              <span className="inline-block w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-sm text-center leading-8 mb-3">
                3
              </span>
              <h4 className="text-white font-semibold text-sm mb-1">Adjunta tu Pago</h4>
              <p className="text-xs text-gray-400">Sube la foto del váucher (BCP, Yape, Plin o Transferencia) y ¡listo!</p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-amber-400 shrink-0" size={18} />
              <span>Certificación digital oficial verificable emitida al concluir el congreso.</span>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:underline font-semibold text-xs shrink-0"
            >
              <HelpCircle size={16} />
              <span>¿Consultas sobre inscripciones corporativas? Escríbenos</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
