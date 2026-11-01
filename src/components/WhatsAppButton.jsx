import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/constants'

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-2xl shadow-green-500/40 hover:scale-110 transition-all duration-300 group"
      title="Contactar por WhatsApp"
      aria-label="WhatsApp Contacto"
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  )
}
