import { LOCATION_INFO } from '../config/constants'

export default function LocationMap() {
  return (
    <section id="ubicacion" className="py-24 px-6 md:px-12 bg-dark-surface text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Lugar del Evento
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Arequipa será la sede oficial del <strong className="text-gold-400">II CONIMAPE 2026</strong>. Te esperamos en el corazón minero del sur del Perú.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Tarjeta con Información de Dirección */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/30 p-8 rounded-3xl text-left flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-14 h-14 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center text-2xl mb-6">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {LOCATION_INFO.venue}
              </h3>
              <p className="text-gold-400 font-medium mb-4">
                {LOCATION_INFO.city}
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                {LOCATION_INFO.address}
              </p>
            </div>

            <div>
              <a
                href={LOCATION_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-300 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <span>Abrir en Google Maps</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
              </a>
            </div>
          </div>

          {/* Iframe de Google Maps */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl min-h-[380px] bg-black/50">
            <iframe
              title="Google Maps Location CONIMAPE 2026"
              src={LOCATION_INFO.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
