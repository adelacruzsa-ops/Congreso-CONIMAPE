import { PONENTES, LINK_FORM, WHATSAPP_NUMBER, CONTACT_EMAIL } from '../config/constants'
import { UserCheck, Send, Sparkles, BookOpen, ShieldCheck, Leaf, TrendingUp } from 'lucide-react'

export default function PonentesPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa postular como ponente para el II CONIMAPE 2026.')}`

  const hasSpeakers = PONENTES && PONENTES.length > 0

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-sm font-semibold mb-3 border border-gold-500/20">
          CONVOCATORIA DE PONENTES ABIERTA
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Ponentes y Conferencistas
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16">
          Conoce a los destacados ingenieros, investigadores y líderes que compartirán sus conocimientos en el II CONIMAPE 2026.
        </p>

        {hasSpeakers ? (
          /* Grid de Ponentes cuando existen datos */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {PONENTES.map((ponente) => (
              <div
                key={ponente.id}
                className="bg-dark-surface border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-gold-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between text-left"
              >
                {ponente.foto && (
                  <img
                    src={ponente.foto}
                    alt={ponente.nombre}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 uppercase tracking-wider">
                      {ponente.pais ? `Internacional · ${ponente.pais}` : ponente.dia}
                    </span>
                    <h2 className="text-xl font-bold text-white mt-3 mb-1">
                      {ponente.nombre}
                    </h2>
                    <p className="text-xs text-gray-400 font-medium mb-2">
                      {ponente.cargo}
                    </p>
                    <p className="text-xs text-gold-300 font-semibold mb-4">
                      {ponente.empresa}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado sin ponentes cargados (Convocatoria abierta) */
          <div className="bg-dark-surface/80 border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto mb-16 shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 bg-gold-500/10 text-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold-500/20">
              <UserCheck size={36} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Buscamos Expositores y Conferencistas Especializados
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-10">
              Actualmente se encuentra abierta la recepción de postulaciones y trabajos técnicos. Próximamente publicaremos la lista oficial de ponentes confirmados para el II CONIMAPE 2026.
            </p>

            <h3 className="text-lg font-bold text-gold-400 mb-6 uppercase tracking-wider text-center">
              Ejes Temáticos para Ponencias
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-10">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <BookOpen className="text-gold-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Formalización Minera</h4>
                  <p className="text-xs text-gray-400">Marcos normativos, legislación y procesos de formalización.</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <Leaf className="text-gold-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Tecnologías Limpias</h4>
                  <p className="text-xs text-gray-400">Gravimetría, cianuración eficiente y reducción de mercurio.</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <ShieldCheck className="text-gold-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Seguridad en Socavón</h4>
                  <p className="text-xs text-gray-400">SST, prevención de riesgos y salud ocupacional minera.</p>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <TrendingUp className="text-gold-400 shrink-0 mt-1" size={22} />
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">Comercialización y Mercado</h4>
                  <p className="text-xs text-gray-400">Trazabilidad de minerales, acceso a créditos y oro ético.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banner para postulaciones de ponentes (CTA Permanente) */}
        <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 p-8 sm:p-12 rounded-3xl text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 text-white text-xs font-semibold mb-4 border border-white/20">
              <Sparkles size={16} /> Ponencias y Exposición Técnica
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-3">
              ¿Deseas participar como Ponente en el II CONIMAPE?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Si cuentas con una investigación, experiencia de éxito o innovación tecnológica aplicable al sector minero artesanal y de pequeña escala, envía tu propuesta.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-green-400 text-2xl"></i>
                <span>Postular mi Ponencia por WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Postulacion%20de%20Ponencia%20CONIMAPE%202026`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all border border-white/30"
              >
                <Send size={18} />
                <span>Enviar Resumen por Correo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
