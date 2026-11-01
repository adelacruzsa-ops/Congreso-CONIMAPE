import { Play } from 'lucide-react'

export default function VideoPromo() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 bg-dark-bg border-t border-white/10 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-3 border border-amber-500/20">
            <Play size={14} className="fill-amber-400" /> VIDEO OFICIAL DEL CONGRESO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
            II CONIMAPE <span className="text-gold-500">2026</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Conoce más sobre la propuesta, los objetivos y el alcance del segundo congreso internacional de la pequeña minería y minería artesanal.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/30 shadow-2xl bg-black/80 group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl -z-0 pointer-events-none"></div>

          <video
            controls
            preload="metadata"
            poster="/imagenes/fondo pagina web.png"
            className="w-full aspect-video object-cover rounded-3xl relative z-10"
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
          </video>
        </div>
      </div>
    </section>
  )
}
