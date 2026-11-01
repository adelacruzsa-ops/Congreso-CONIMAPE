import Hero from '../components/Hero'
import VideoPromo from '../components/VideoPromo'
import Countdown from '../components/Countdown'
import About from '../components/About'
import Topics from '../components/Topics'
import Audience from '../components/Audience'
import Benefits from '../components/Benefits'
import LocationMap from '../components/LocationMap'
import { PONENTES, AUSPICIADORES, ESTADISTICAS_EVENTO, LINK_FORM, WHATSAPP_COMMUNITY_LINK } from '../config/constants'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoPromo />
      <Countdown />
      <About />

      {/* Sección de Impacto e Inscritos */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/90 via-dark-surface to-dark-bg border-y border-white/10 text-center">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            IMPACTO Y PROYECCIÓN DEL EVENTO
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            El Encuentro Minero en Números
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-16">
            Mineros artesanales, profesionales, estudiantes y delegaciones de todo el país se suman día a día al II CONIMAPE 2026.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 - Inscritos */}
            <div className="bg-dark-surface/90 border border-amber-500/20 p-6 rounded-3xl text-center shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center">
              <div className="w-24 h-14 mb-2 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 220 124" aria-hidden="true">
                  <path d="M30,110 A80,80 0 0 1 190,110" fill="none" stroke="#262626" strokeWidth="13" strokeLinecap="round" />
                  <path d="M30,110 A80,80 0 0 1 160,50" fill="none" stroke="#d99a22" strokeWidth="13" strokeLinecap="round" />
                  <circle cx="110" cy="110" r="6" fill="#d99a22" />
                </svg>
              </div>
              <span className="block text-4xl font-extrabold text-amber-400 mb-1">+350</span>
              <h3 className="text-sm font-bold text-white mb-1">Inscritos Confirmados</h3>
              <p className="text-xs text-gray-400 leading-tight">Mineros, profesionales y estudiantes registrados</p>
            </div>

            {/* Stat 2 - Delegaciones */}
            <div className="bg-dark-surface/90 border border-amber-500/20 p-6 rounded-3xl text-center shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center">
              <div className="w-full h-10 my-2 px-4 flex items-center">
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-600 to-amber-400 h-full w-[85%] rounded-full"></div>
                </div>
              </div>
              <span className="block text-4xl font-extrabold text-amber-400 mb-1">+15</span>
              <h3 className="text-sm font-bold text-white mb-1">Delegaciones Regionales</h3>
              <p className="text-xs text-gray-400 leading-tight">Puno, Arequipa, Madre de Dios, Piura y más</p>
            </div>

            {/* Stat 3 - Ponencias */}
            <div className="bg-dark-surface/90 border border-amber-500/20 p-6 rounded-3xl text-center shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center">
              <div className="w-20 h-12 my-1 flex justify-center items-center gap-1.5 text-amber-400">
                <i className="fa-solid fa-user-doctor text-xl"></i>
                <i className="fa-solid fa-user-gear text-xl"></i>
                <i className="fa-solid fa-user-graduate text-xl"></i>
              </div>
              <span className="block text-4xl font-extrabold text-amber-400 mb-1">+25</span>
              <h3 className="text-sm font-bold text-white mb-1">Ponencias & Talleres</h3>
              <p className="text-xs text-gray-400 leading-tight">Especialistas nacionales e internacionales</p>
            </div>

            {/* Stat 4 - Empresas Aliadas */}
            <div className="bg-dark-surface/90 border border-amber-500/20 p-6 rounded-3xl text-center shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between items-center">
              <div className="w-full h-10 my-2 px-4 flex items-center">
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full w-[70%] rounded-full"></div>
                </div>
              </div>
              <span className="block text-4xl font-extrabold text-amber-400 mb-1">+30</span>
              <h3 className="text-sm font-bold text-white mb-1">Empresas & Expositores</h3>
              <p className="text-xs text-gray-400 leading-tight">Presentes en la Feria EXPO CONIMAPE</p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/inscripcion"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 text-sm sm:text-base"
            >
              <span>¡Asegura tu vacante! Inscríbete Aquí</span>
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </Link>
          </div>
        </div>
      </section>

      <Topics />

      {/* Call To Action de Ponentes y Conferencistas */}
      <section className="py-20 px-6 bg-dark-bg text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white/5 to-transparent p-10 md:p-14 rounded-3xl border border-gold-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 text-gold-400 text-xs font-semibold mb-4 border border-gold-500/20">
              CONVOCATORIA DE PONENTES & EXPERTOS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ponentes y Conferencistas
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Descubre a los especialistas del sector minero que compartirán su conocimiento, o postula tu trabajo técnico para formar parte de la agenda oficial del II CONIMAPE 2026.
            </p>

            <Link
              to="/participantes?tab=ponentes"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 text-sm md:text-base"
            >
              <span>Ver Lista Completa y Postular Ponencia</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <Audience />
      <Benefits />

      {/* Call To Action de Auspiciadores y Aliados */}
      <section className="py-20 px-6 bg-dark-surface text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-amber-500/5 to-transparent p-10 md:p-14 rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
              CONVOCATORIA ABIERTA A EMPRESAS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Auspiciadores y Aliados Estratégicos
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Posiciona tu empresa ante los líderes y profesionales de la pequeña minería y minería artesanal. Conoce los paquetes de patrocinio y marcas participantes.
            </p>

            <Link
              to="/participantes?tab=auspiciadores"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-black font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:scale-105 text-sm md:text-base"
            >
              <span>Ver Marcas Auspiciadoras e Información de Patrocinio</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Invitación al Grupo Oficial de WhatsApp */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-950/40 via-dark-surface to-emerald-950/40 border-t border-emerald-500/20 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-emerald-500/10 to-transparent p-8 sm:p-12 rounded-3xl border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -z-0"></div>
          <div className="relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 border border-emerald-500/30">
              <i className="fa-brands fa-whatsapp text-sm mr-1.5"></i> COMUNIDAD OFICIAL CONIMAPE
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Únete a la Comunidad Minera en WhatsApp
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
              Mantente al día con anuncios del evento, convocatorias de trabajos técnicos, networking directo y novedades del sector MAPE en nuestro grupo oficial.
            </p>

            <a
              href={WHATSAPP_COMMUNITY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-black font-extrabold px-8 py-4 rounded-full transition-all shadow-xl hover:scale-105 text-sm md:text-base"
            >
              <i className="fa-brands fa-whatsapp text-2xl"></i>
              <span>Unirme al Grupo de WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <LocationMap />
    </main>
  )
}
