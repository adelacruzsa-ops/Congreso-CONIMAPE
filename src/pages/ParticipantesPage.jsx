import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PONENTES, AUSPICIADORES, COLABORADORES, WHATSAPP_NUMBER, CONTACT_EMAIL, MOSTRAR_PONENTES } from '../config/constants'
import PonentesIndice from '../components/PonentesIndice'
import { UserCheck, Award, Users, Send, CheckCircle2, BookOpen, Leaf, ShieldCheck, TrendingUp, Sparkles, HeartHandshake, ClipboardList, Quote } from 'lucide-react'

export default function ParticipantesPage({ defaultTab }) {
  const location = useLocation()
  const navigate = useNavigate()

  // Get initial tab from prop, query parameter ?tab=... or default to 'ponentes'
  const queryParams = new URLSearchParams(location.search)
  const initialTab = defaultTab || queryParams.get('tab') || 'ponentes'

  const [activeTab, setActiveTab] = useState(initialTab)

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab)
    } else {
      const tabFromQuery = new URLSearchParams(location.search).get('tab')
      if (tabFromQuery) setActiveTab(tabFromQuery)
    }
  }, [defaultTab, location.search])

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    navigate(`/participantes?tab=${tabId}`, { replace: true })
  }

  const hasSpeakers = PONENTES && PONENTES.length > 0
  const hasSponsors =
    (AUSPICIADORES.platino && AUSPICIADORES.platino.length > 0) ||
    (AUSPICIADORES.oro && AUSPICIADORES.oro.length > 0) ||
    (AUSPICIADORES.aliados && AUSPICIADORES.aliados.length > 0)
  const hasColaboradores = COLABORADORES && COLABORADORES.length > 0

  const whatsappUrlPonentes = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa postular como ponente para el II CONIMAPE 2026.')}`
  const whatsappUrlAuspicios = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo recibir información sobre los paquetes de auspicio para el II CONIMAPE 2026.')}`
  const whatsappUrlColaboradores = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, deseo sumarme como colaborador/voluntario para el II CONIMAPE 2026.')}`

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Principal */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-3 border border-amber-500/20">
          Comunidad & Participantes
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
          Red de Actores del II CONIMAPE 2026
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
          Un espacio donde convergen conferencistas destacados, marcas aliadas y el equipo de colaboradores que hacen posible la transformación de la minería artesanal.
        </p>

        {/* =========================================================================
            BOTONES / TABS DE NAVEGACIÓN ENTRE SECCIONES
           ========================================================================= */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12 bg-dark-surface/80 p-2 rounded-2xl border border-white/10 max-w-3xl mx-auto backdrop-blur-md">
          <button
            onClick={() => handleTabChange('ponentes')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 justify-center ${activeTab === 'ponentes'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-102'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <UserCheck size={20} />
            <span>Ponentes</span>
          </button>

          <button
            onClick={() => handleTabChange('auspiciadores')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 justify-center ${activeTab === 'auspiciadores'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-102'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <Award size={20} />
            <span>Auspiciadores</span>
          </button>

          <button
            onClick={() => handleTabChange('colaboradores')}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 flex-1 justify-center ${activeTab === 'colaboradores'
              ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20 scale-102'
              : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
          >
            <Users size={20} />
            <span>Colaboradores</span>
          </button>
        </div>

        {/* =========================================================================
            TAB 1: PONENTES Y CONFERENCISTAS
           ========================================================================= */}
        {activeTab === 'ponentes' && (
          <div className="animate-fadeIn">
            {MOSTRAR_PONENTES && hasSpeakers ? (
              <div className="mb-16">
                <p className="text-sm text-gray-400 mb-8">
                  <span className="text-amber-400 font-bold">{PONENTES.length} ponentes confirmados</span> · La lista se irá actualizando
                </p>
                <PonentesIndice />
              </div>
            ) : (
              /* ESTADO OCULTO / PRÓXIMAMENTE PARA PONENTES */
              <div className="bg-dark-surface border border-amber-500/20 rounded-3xl p-10 sm:p-14 text-center max-w-3xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6 shadow-lg">
                    <UserCheck size={40} />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 border border-amber-500/30">
                    PRÓXIMAMENTE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                    Lista de Ponentes Confirmados en Confirmación
                  </h2>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
                    Estamos consolidando la lista oficial de ponentes, especialistas y conferencistas magistrales que participarán en el II CONIMAPE 2026.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me interesa postular como ponente para el II CONIMAPE 2026.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-black font-extrabold px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2 text-sm"
                  >
                    <span>Postula tu Ponencia / Trabajo Técnico</span>
                    <Send size={16} />
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =========================================================================
            TAB 2: AUSPICIADORES Y PATROCINADORES
           ========================================================================= */}
        {activeTab === 'auspiciadores' && (
          <div className="animate-fadeIn">
            {hasSponsors ? (
              <div className="space-y-12 mb-16">
                {/* Categoría Platino */}
                {AUSPICIADORES.platino?.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-amber-400 mb-6 uppercase tracking-wider text-center">
                      Auspiciadores Platino
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {AUSPICIADORES.platino.map((item, idx) => (
                        <div key={idx} className="bg-dark-surface border border-amber-500/40 p-6 rounded-3xl text-left shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between">
                          <div className="flex items-center gap-4 mb-4">
                            <img src={item.logo} alt={item.nombre} className="h-10 object-contain" />
                            <div>
                              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 uppercase">
                                {item.categoria}
                              </span>
                              <h3 className="text-lg font-bold text-white mt-1">{item.nombre}</h3>
                            </div>
                          </div>
                          {item.descripcion && (
                            <p className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                              {item.descripcion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categoría Oro */}
                {AUSPICIADORES.oro?.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-yellow-400 mb-6 uppercase tracking-wider text-center">
                      Auspiciadores Oro
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {AUSPICIADORES.oro.map((item, idx) => (
                        <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-3xl text-left shadow-xl hover:border-white/30 transition-all flex flex-col justify-between">
                          <div className="flex items-center gap-4 mb-4">
                            <img src={item.logo} alt={item.nombre} className="h-9 object-contain" />
                            <div>
                              <span className="text-[10px] font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-0.5 rounded-full border border-yellow-500/20 uppercase">
                                {item.categoria}
                              </span>
                              <h3 className="text-base font-bold text-white mt-1">{item.nombre}</h3>
                            </div>
                          </div>
                          {item.descripcion && (
                            <p className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                              {item.descripcion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Aliados Institucionales */}
                {AUSPICIADORES.aliados?.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-gray-300 mb-6 uppercase tracking-wider text-center">
                      Aliados Institucionales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                      {AUSPICIADORES.aliados.map((item, idx) => (
                        <div key={idx} className="bg-dark-surface border border-white/10 p-6 rounded-3xl text-left shadow-xl hover:border-white/30 transition-all flex flex-col justify-between">
                          <div className="flex items-center gap-4 mb-4">
                            <img src={item.logo} alt={item.nombre} className="h-9 object-contain" />
                            <div>
                              <span className="text-[10px] font-bold text-gray-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20 uppercase">
                                {item.categoria}
                              </span>
                              <h3 className="text-base font-bold text-white mt-1">{item.nombre}</h3>
                            </div>
                          </div>
                          {item.descripcion && (
                            <p className="text-xs text-gray-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                              {item.descripcion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {/* Banner CTA permanente para convocar más Auspiciadores */}
            <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 p-8 sm:p-12 rounded-3xl text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-black/20 text-white text-xs font-semibold mb-3 border border-white/20">
                  <Award className="inline mr-1" size={14} /> CONVOCATORIA DE PATROCINIOS Y AUSPICIOS
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold mb-3">
                  ¿Quieres promocionar tu empresa en el II CONIMAPE 2026?
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
                  Posiciona tu marca ante cientos de empresarios, ingenieros y mineros artesanales. Solicita nuestro Dossier Comercial con paquetes exclusivos.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrlAuspicios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-black hover:bg-gray-900 text-white font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105"
                  >
                    <i className="fa-brands fa-whatsapp text-green-400 text-2xl"></i>
                    <span>Solicitar Dossier por WhatsApp</span>
                  </a>

                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=Solicitud%20de%20Informacion%20de%20Auspicio%20CONIMAPE%202026`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all border border-white/30"
                  >
                    <Send size={18} />
                    <span>Enviar Correo Comercial</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: COLABORADORES Y ORGANIZACIÓN
           ========================================================================= */}
        {activeTab === 'colaboradores' && (
          <div className="animate-fadeIn">
            {hasColaboradores ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {COLABORADORES.map((colab) => (
                  <div
                    key={colab.id}
                    className="bg-dark-surface border border-white/10 rounded-3xl overflow-hidden text-left shadow-xl hover:border-amber-400 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Imagen o Avatar del Colaborador */}
                      <div className="relative h-48 bg-black overflow-hidden">
                        <img
                          src={colab.foto || 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80'}
                          alt={colab.nombre}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-bold text-black bg-amber-400 px-3 py-1 rounded-full shadow-md">
                          {colab.comision}
                        </span>
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                          {colab.nombre}
                        </h3>
                        <p className="text-xs text-amber-400 font-semibold mb-1">
                          {colab.rol}
                        </p>
                        <p className="text-xs text-gray-400 mb-4 font-medium">
                          🎓 {colab.institucion}
                        </p>

                        {colab.biografia && (
                          <div className="text-xs text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5 flex gap-2">
                            <Quote size={16} className="text-amber-400 shrink-0 mt-0.5" />
                            <p className="italic">{colab.biografia}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {/* Banner CTA permanente para invitar más Colaboradores */}
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-md">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold mb-3 border border-amber-500/30">
                <Users className="inline mr-1" size={14} /> SUMATE AL EQUIPO ORGANIZADOR
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                ¿Quieres ser colaborador o voluntario en el II CONIMAPE 2026?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                Buscamos estudiantes y jóvenes líderes para integrar nuestras comisiones de Logística, Acreditación, Protocolo y Prensa en Arequipa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={whatsappUrlColaboradores}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-base px-8 py-3.5 rounded-full transition-all shadow-xl hover:scale-105"
                >
                  <i className="fa-brands fa-whatsapp text-xl"></i>
                  <span>Unirme al Equipo por WhatsApp</span>
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Voluntariado%20y%20Colaboradores%20CONIMAPE%202026`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-full transition-all border border-white/20"
                >
                  <Send size={18} />
                  <span>Enviar CV por Correo</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
