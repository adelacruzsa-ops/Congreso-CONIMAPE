import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FAQ_MUQUI, WHATSAPP_NUMBER } from '../config/constants'
import { ChevronDown, ChevronUp, RotateCcw, X, Send, Sparkles } from 'lucide-react'

export default function MuquiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)
  const faqRefs = useRef([])

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Muqui, me gustaría más información sobre el II CONIMAPE 2026.')}`

  const handleToggleFaq = (index) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null)
    } else {
      setActiveFaqIndex(index)
      // Auto scroll al elemento abierto
      setTimeout(() => {
        if (faqRefs.current[index]) {
          faqRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
      }, 100)
    }
  }

  const handleReset = () => {
    setActiveFaqIndex(null)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Ventana Modal del Chatbot */}
      {isOpen && (
        <div className="bg-[#121212] border border-amber-500/40 rounded-3xl shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden flex flex-col h-[520px] animate-fadeIn">
          {/* Header del Chat */}
          <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 p-4 flex items-center justify-between text-black shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black/20 p-1 border border-black/10 flex items-center justify-center shrink-0">
                <img
                  src="/imagenes/muqui.png"
                  alt="Muqui Asistente"
                  className="w-8 h-8 object-contain drop-shadow"
                />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-base leading-tight">Muqui Bot</h4>
                <span className="text-[11px] text-black/80 font-semibold">Asistente Virtual II CONIMAPE</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleReset}
                className="p-1.5 rounded-full hover:bg-black/10 text-black/80 hover:text-black transition-colors"
                title="Contraer respuestas"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-black/10 text-black font-bold transition-colors"
                aria-label="Cerrar chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Mensaje de Bienvenida Fijo */}
          <div className="p-3.5 bg-white/5 border-b border-white/10 flex items-start gap-3 text-left">
            <img
              src="/imagenes/muqui.png"
              alt="Muqui"
              className="w-7 h-7 object-contain shrink-0 mt-0.5"
            />
            <p className="text-xs text-gray-200 leading-relaxed">
              👋 ¡Hola! Soy <strong className="text-amber-400">Muqui</strong>. Haz clic en cualquiera de las preguntas para <strong className="text-white">ver la respuesta directamente debajo de la opción</strong>:
            </p>
          </div>

          {/* Lista Interactiva de Preguntas Frecuentes con Respuesta Desplegable Debajo */}
          <div className="p-3.5 flex-1 overflow-y-auto space-y-3 bg-black/70 text-left text-xs">
            {FAQ_MUQUI.map((item, index) => {
              const isExpanded = activeFaqIndex === index

              return (
                <div
                  key={index}
                  ref={(el) => (faqRefs.current[index] = el)}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-dark-surface border-amber-500/50 shadow-lg shadow-amber-500/10'
                      : 'bg-white/5 border-white/10 hover:border-amber-500/40 hover:bg-white/10'
                  }`}
                >
                  {/* Botón de la Pregunta */}
                  <button
                    onClick={() => handleToggleFaq(index)}
                    className="w-full text-left p-3 flex items-start justify-between gap-2.5 transition-colors"
                  >
                    <span className="font-semibold text-gray-100 flex-1 leading-snug">
                      ❓ {item.pregunta}
                    </span>
                    <span className="text-amber-400 shrink-0 mt-0.5">
                      {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* RESPUESTA DESPLEGADA JUSTO DEBAJO DE LA OPCIÓN PRESIONADA */}
                  {isExpanded && (
                    <div className="p-3.5 pt-1 bg-amber-500/10 border-t border-amber-500/20 text-xs text-gray-200 space-y-2.5 animate-fadeIn">
                      <div className="flex items-start gap-2.5">
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles size={13} />
                        </div>
                        <p className="leading-relaxed text-gray-100 text-justify flex-1 font-normal">
                          {item.respuesta}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer del Chat con Botón de Inscripción */}
          <div className="p-3 bg-[#181818] border-t border-white/10 text-center">
            <Link
              to="/inscripcion"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs py-2.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Inscríbete aquí (Guía y Formularios)</span>
              <Send size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Botón Flotante para Abrir Chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold px-4 py-3 rounded-full shadow-2xl shadow-amber-500/40 hover:-translate-y-1 transition-all duration-300 group border border-amber-300/40"
      >
        <img
          src="/imagenes/muqui.png"
          alt="Muqui"
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform drop-shadow"
        />
        <span className="hidden sm:inline text-xs font-bold">¿Consultas? Pregunta a Muqui</span>
      </button>
    </div>
  )
}
