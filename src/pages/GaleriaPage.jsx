import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2, X, Calendar, ArrowRight } from 'lucide-react'
import { GALERIA_FOTOS, LINK_FORM } from '../config/constants'

export default function GaleriaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % GALERIA_FOTOS.length)
  }, [])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + GALERIA_FOTOS.length) % GALERIA_FOTOS.length)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || isFullscreen) return
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [isPlaying, isFullscreen, handleNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') setIsFullscreen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleNext, handlePrev])

  const currentFoto = GALERIA_FOTOS[currentIndex]

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-3 border border-amber-500/20">
          Revive los mejores momentos
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4">
          Galería de la I Edición
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-10">
          Recordamos las ponencias, encuentros y experiencias del primer congreso que dio inicio a esta gran comunidad minera.
        </p>

        {/* Carousel Container */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 backdrop-blur-md">
          {/* Main Image Viewport */}
          <div className="relative h-[350px] sm:h-[480px] md:h-[580px] w-full flex items-center justify-center bg-black overflow-hidden group">
            {GALERIA_FOTOS.map((foto, index) => (
              <img
                key={foto.id}
                src={foto.url}
                alt={foto.titulo}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${index === currentIndex
                  ? 'opacity-100 scale-100 z-10'
                  : 'opacity-0 scale-105 z-0 pointer-events-none'
                  }`}
              />
            ))}

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-20 pointer-events-none" />

            {/* Control Bar Top Left / Right */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white/90 border border-white/10">
                {currentIndex + 1} / {GALERIA_FOTOS.length}
              </span>
            </div>

            <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2.5 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300"
                title={isPlaying ? 'Pausar reproducción' : 'Reproducir carrusel'}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-2.5 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300"
                title="Ver pantalla completa"
              >
                <Maximize2 size={18} />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-amber-500 text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-amber-500 text-white hover:text-black border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={24} />
            </button>

            {/* Caption Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-30 text-left">
              <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 drop-shadow-md">
                {currentFoto.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-amber-400 font-medium">I CONIMAPE · Memoria Fotográfica</p>
            </div>
          </div>

          {/* Indicators / Dot Bar */}
          <div className="p-4 bg-black/80 flex items-center justify-center gap-2 border-t border-white/10">
            {GALERIA_FOTOS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'w-8 bg-amber-400'
                  : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Selector Grid */}
        <div className="mt-8 grid grid-cols-5 gap-3 max-w-4xl mx-auto">
          {GALERIA_FOTOS.map((foto, index) => (
            <button
              key={foto.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative rounded-xl overflow-hidden aspect-video border-2 transition-all duration-300 ${index === currentIndex
                ? 'border-amber-400 scale-105 shadow-lg shadow-amber-500/20'
                : 'border-transparent opacity-50 hover:opacity-100 hover:scale-102'
                }`}
            >
              <img
                src={foto.url}
                alt={foto.titulo}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Call to Action Section (Inscripción & II Edición) */}
        {/*         <div className="mt-16 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 rounded-3xl p-8 sm:p-12 text-center backdrop-blur-md relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/30">
              <Calendar size={16} /> Próximo Evento · 04 - 06 Noviembre 2026
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              ¡Forma parte de la II Edición CONIMAPE 2026!
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
              Sé parte del encuentro más importante de la Pequeña Minería y Minería Artesanal en Arequipa. Conéctate con especialistas, descubre innovaciones tecnológicas y fortalece tu actividad minera.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={LINK_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 hover:scale-105"
              >
                Inscríbete Ahora <ArrowRight size={18} />
              </a>
              <Link
                to="/programa"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 border border-white/20"
              >
                Ver Programa 2026
              </Link>
            </div>
          </div>
        </div> */}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex justify-between items-center z-50">
            <span className="text-gray-300 text-sm font-medium">
              {currentFoto.titulo} ({currentIndex + 1} / {GALERIA_FOTOS.length})
            </span>
            <button
              onClick={() => setIsFullscreen(false)}
              className="p-3 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Fullscreen Image */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={currentFoto.url}
              alt={currentFoto.titulo}
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 p-4 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black backdrop-blur-md transition-all"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 p-4 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black backdrop-blur-md transition-all"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center text-gray-400 text-sm">
            Presiona <kbd className="px-2 py-0.5 rounded bg-white/10 text-white">ESC</kbd> o las flechas del teclado para navegar
          </div>
        </div>
      )}
    </div>
  )
}
