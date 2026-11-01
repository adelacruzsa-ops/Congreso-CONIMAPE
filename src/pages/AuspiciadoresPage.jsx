import { AUSPICIADORES, WHATSAPP_NUMBER, CONTACT_EMAIL } from '../config/constants'
import { Award, Send, CheckCircle2 } from 'lucide-react'

export default function AuspiciadoresPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo recibir información sobre los paquetes de auspicio para el II CONIMAPE 2026.')}`

  const hasSponsors =
    (AUSPICIADORES.platino && AUSPICIADORES.platino.length > 0) ||
    (AUSPICIADORES.oro && AUSPICIADORES.oro.length > 0) ||
    (AUSPICIADORES.aliados && AUSPICIADORES.aliados.length > 0)

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-sm font-semibold mb-3 border border-gold-500/20">
          CONVOCATORIA ABIERTA 2026
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Auspiciadores y Aliados Estratégicos
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-12">
          Sé parte de las empresas e instituciones líderes que impulsan la formalización, innovación y sostenibilidad de la minería artesanal y de pequeña escala.
        </p>

        {/* If there are sponsors, render sponsor tiers */}
        {hasSponsors ? (
          <>
            {/* Categoría Platino */}
            {AUSPICIADORES.platino?.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-gold-400 mb-6 uppercase tracking-wider">Auspiciadores Platino</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {AUSPICIADORES.platino.map((item, idx) => (
                    <div key={idx} className="bg-dark-surface border border-gold-500/40 p-8 rounded-3xl flex items-center justify-center gap-4 hover:border-gold-500 transition-all shadow-xl">
                      <img src={item.logo} alt={item.nombre} className="h-12 object-contain" />
                      <span className="text-lg font-bold text-white">{item.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Categoría Oro */}
            {AUSPICIADORES.oro?.length > 0 && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-yellow-400 mb-6 uppercase tracking-wider">Auspiciadores Oro</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {AUSPICIADORES.oro.map((item, idx) => (
                    <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-2xl flex items-center justify-center gap-4 hover:border-white/30 transition-all">
                      <img src={item.logo} alt={item.nombre} className="h-10 object-contain" />
                      <span className="text-base font-semibold text-gray-200">{item.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Aliados Institucionales */}
            {AUSPICIADORES.aliados?.length > 0 && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wider">Aliados Institucionales</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {AUSPICIADORES.aliados.map((item, idx) => (
                    <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-2xl flex items-center justify-center gap-4">
                      <img src={item.logo} alt={item.nombre} className="h-10 object-contain" />
                      <span className="text-base font-medium text-gray-300">{item.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Estado cuando no hay auspiciadores aún */
          <div className="bg-dark-surface/80 border border-white/10 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto mb-16 shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 bg-gold-500/10 text-gold-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gold-500/20">
              <Award size={36} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ¡Convocatoria de Auspicios Abierta para el II CONIMAPE 2026!
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Actualmente nos encontramos en etapa de selección de marcas y aliados estratégicos. Posiciona a tu empresa ante cientos de profesionales, productores mineros e instituciones del sector.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-10">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="text-gold-400 shrink-0 mt-0.5" size={20} />
                <span className="text-xs sm:text-sm text-gray-200">Presencia de marca en stand y feria comercial</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="text-gold-400 shrink-0 mt-0.5" size={20} />
                <span className="text-xs sm:text-sm text-gray-200">Espacio para conferencias técnico-comerciales</span>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="text-gold-400 shrink-0 mt-0.5" size={20} />
                <span className="text-xs sm:text-sm text-gray-200">Difusión en canales digitales oficiales</span>
              </div>
            </div>
          </div>
        )}

        {/* Banner Comercial Permanente (CTA) */}
        <div className="bg-gradient-to-r from-gold-600 via-gold-500 to-amber-600 p-8 sm:p-12 rounded-3xl text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-4xl font-extrabold mb-3">
              ¿Quieres auspiciar el II CONIMAPE 2026?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
              Solicita nuestro Dossier Comercial de Patrocinios y descubre los beneficios exclusivos (Platino, Oro e Institucional).
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-bold text-base px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105"
              >
                <i className="fa-brands fa-whatsapp text-green-400 text-2xl"></i>
                <span>Solicitar Dossier por WhatsApp</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Solicitud%20de%20Informacion%20de%20Auspicio%20CONIMAPE%202026`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all border border-white/30"
              >
                <Send size={18} />
                <span>Enviar Correo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
