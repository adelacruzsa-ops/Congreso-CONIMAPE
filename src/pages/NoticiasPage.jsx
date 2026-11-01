import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { NOTICIAS } from '../config/constants'
import { ArrowLeft, Calendar, ExternalLink, Share2, Tag, ArrowRight } from 'lucide-react'

export default function NoticiasPage() {
  const [selectedNoticia, setSelectedNoticia] = useState(null)

  // Scroll to top when opening an article
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedNoticia])

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-5xl mx-auto">
        {selectedNoticia ? (
          /* =========================================================================
             VISTA DINÁMICA DE LECTURA DE NOTICIA COMPLETA
             ========================================================================= */
          <article className="animate-fadeIn">
            {/* Botón Volver */}
            <button
              onClick={() => setSelectedNoticia(null)}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold mb-8 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Volver a Noticias</span>
            </button>

            {/* Header del Artículo */}
            <div className="mb-8 text-left">
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400 mb-4">
                <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full border border-amber-500/20 font-semibold">
                  <Calendar size={14} /> {selectedNoticia.fecha}
                </span>

                {selectedNoticia.fuente && (
                  <span className="inline-flex items-center gap-1.5 text-gray-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    Fuente:
                    {selectedNoticia.fuenteUrl ? (
                      <a
                        href={selectedNoticia.fuenteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        {selectedNoticia.fuente}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="font-semibold text-white">{selectedNoticia.fuente}</span>
                    )}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                {selectedNoticia.titulo}
              </h1>
            </div>

            {/* Imagen Principal */}
            <div className="rounded-3xl overflow-hidden mb-10 border border-white/10 shadow-2xl max-h-[500px] bg-black">
              <img
                src={selectedNoticia.imagen}
                alt={selectedNoticia.titulo}
                className="w-full h-full object-cover max-h-[500px]"
              />
            </div>

            {/* Cuerpo del Artículo (Formateado por párrafos) */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-xl text-left">
              <div className="prose prose-invert max-w-none text-gray-200 text-base sm:text-lg leading-relaxed space-y-6">
                {selectedNoticia.contenido.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-justify leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags si existen */}
              {selectedNoticia.tags && selectedNoticia.tags.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
                  <Tag size={16} className="text-amber-400 shrink-0 mr-1" />
                  {selectedNoticia.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 hover:bg-white/10 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Banner CTA al pie de la noticia */}
            <div className="bg-gradient-to-r from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 rounded-3xl p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  ¿Quieres ser parte del II CONIMAPE 2026 en Arequipa?
                </h3>
                <p className="text-gray-300 text-sm">
                  Acompáñanos del 04 al 06 de noviembre en el encuentro más importante del sector minero artesanal.
                </p>
              </div>
              <Link
                to="/inscripcion"
                className="shrink-0 bg-amber-500 hover:bg-amber-400 text-black font-bold px-6 py-3 rounded-full transition-all shadow-lg inline-flex items-center gap-2"
              >
                Inscríbete Aquí <ArrowRight size={16} />
              </Link>
            </div>

            {/* Otras Noticias Relacionadas */}
            <div className="border-t border-white/10 pt-12 text-left">
              <h3 className="text-2xl font-bold text-white mb-8">Otras Noticias de Interés</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {NOTICIAS.filter((item) => item.id !== selectedNoticia.id).map((noticia) => (
                  <div
                    key={noticia.id}
                    onClick={() => setSelectedNoticia(noticia)}
                    className="bg-dark-surface border border-white/10 rounded-2xl overflow-hidden p-5 flex gap-4 cursor-pointer hover:border-amber-400 transition-all group"
                  >
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-24 h-24 object-cover rounded-xl shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col justify-between">
                      <span className="text-xs text-amber-400 font-semibold">{noticia.fecha}</span>
                      <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
                        {noticia.titulo}
                      </h4>
                      <span className="text-xs text-gray-400 inline-flex items-center gap-1">
                        Leer nota →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ) : (
          /* =========================================================================
             VISTA REJILLA (LISTADO DE NOTICIAS)
             ========================================================================= */
          <div>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-3 border border-amber-500/20">
                Prensa & Novedades
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                Noticias y Comunicados
              </h1>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Mantente informado sobre las publicaciones oficiales, coberturas y avances del II CONIMAPE 2026.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {NOTICIAS.map((noticia) => (
                <article
                  key={noticia.id}
                  className="bg-dark-surface border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between text-left group"
                >
                  <div className="relative overflow-hidden h-52 bg-black">
                    <img
                      src={noticia.imagen}
                      alt={noticia.titulo}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {noticia.fuente && (
                      <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-white/10">
                        {noticia.fuente}
                      </span>
                    )}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 mb-2">
                        <Calendar size={14} /> {noticia.fecha}
                      </span>
                      <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                        {noticia.titulo}
                      </h2>
                      <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
                        {noticia.resumen}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedNoticia(noticia)}
                      className="text-amber-400 hover:text-amber-300 font-bold text-sm inline-flex items-center gap-2 pt-4 border-t border-white/10"
                    >
                      <span>Leer nota completa</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
