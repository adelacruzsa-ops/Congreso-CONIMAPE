export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black font-semibold text-xs py-2 overflow-hidden border-b border-amber-400/30 relative z-50">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-8 px-4">
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-fire"></i> ¡Preventa Ampliada hasta el 15 de Octubre!</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-ticket"></i> Cupos Limitados - II CONIMAPE 2026</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-graduation-cap"></i> Certificación Académica Incluida</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-calendar-days"></i> 04, 05 y 06 de Noviembre 2026 · Arequipa, Perú</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-handshake-simple"></i> Tarifas Especiales para Mineros MAPE y Estudiantes</span>
          <span>•</span>
        </div>
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-fire"></i> ¡Preventa Ampliada hasta el 15 de Octubre!</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-ticket"></i> Cupos Limitados - II CONIMAPE 2026</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-graduation-cap"></i> Certificación Académica Incluida</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-calendar-days"></i> 04, 05 y 06 de Noviembre 2026 · Arequipa, Perú</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1.5"><i className="fa-solid fa-handshake-simple"></i> Tarifas Especiales para Mineros MAPE y Estudiantes</span>
          <span>•</span>
        </div>
      </div>
    </div>
  )
}
