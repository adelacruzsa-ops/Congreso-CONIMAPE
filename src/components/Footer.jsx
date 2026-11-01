import { SOCIAL_LINKS, LOCATION_INFO, CONTACT_EMAIL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER, WHATSAPP_COMMUNITY_LINK } from '../config/constants'
import { Link } from 'react-router-dom'

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <footer>
      {/* Sección Historia */}
      {/*       <section
        id="historia"
        className="py-24 px-6 md:px-12 text-center bg-cover bg-center relative"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.95)), url('/imagenes/fondo pagina web.png')` }}
      >
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Revive CONIMAPE I Edición
          </h2>
          <p className="text-gray-300 text-lg md:text-2xl leading-relaxed mb-8">
            Recordamos los mejores momentos del primer encuentro que dio inicio a esta gran comunidad minera.
          </p>
          <Link
            to="/galeria"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-bold text-lg px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            Ver Galería Completa
          </Link>
        </div>
      </section> */}

      {/* Sección Contacto, Redes Sociales y Copyright */}
      <section id="contacto" className="py-16 px-6 bg-black border-t border-white/10 text-center">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Logo y Titular */}
          <div className="flex flex-col items-center">
            <img src="/imagenes/logo2.png" alt="Logo CONIMAPE" className="w-52 md:w-60 max-h-24 object-contain mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold text-gold-400 mb-2">
              Contáctanos
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mb-6">
              {LOCATION_INFO.address}
            </p>

            {/* Datos Directos de Contacto (Correo y Teléfono) */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500 px-6 py-3 rounded-full text-gray-200 hover:text-gold-400 transition-all duration-300 text-sm font-medium"
              >
                <i className="fa-solid fa-envelope text-gold-400 text-lg"></i>
                <span>{CONTACT_EMAIL}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-green-500/20 border border-white/10 hover:border-green-500 px-6 py-3 rounded-full text-gray-200 hover:text-green-400 transition-all duration-300 text-sm font-medium"
              >
                <i className="fa-brands fa-whatsapp text-green-400 text-lg"></i>
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Botones de Redes Sociales */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4 font-semibold">
              Síguenos en Redes Sociales
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
                title="Facebook CONIMAPE"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
                title="Instagram CONIMAPE"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0A66C2] text-white flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
                title="LinkedIn CONIMAPE"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              {/* TikTok */}
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-black hover:border hover:border-white/40 text-white flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 shadow-lg"
                title="TikTok CONIMAPE"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>

            {/* Banner Únete a la Comunidad Oficial en WhatsApp */}
            <div className="mt-8">
              <a
                href={WHATSAPP_COMMUNITY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 hover:from-emerald-500 hover:to-green-400 text-white font-extrabold px-7 py-3.5 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-sm"
              >
                <i className="fa-brands fa-whatsapp text-2xl"></i>
                <span>Unirse al Grupo Oficial de la Comunidad en WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2026 CONIMAPE - II Congreso Internacional de la Pequeña Minería y Minería Artesanal. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </section>
    </footer>
  )
}
