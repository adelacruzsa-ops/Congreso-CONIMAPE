import { Users, Building2, Cpu, Award, BadgePercent, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Benefits() {
  return (
    <section id="beneficios" className="py-24 px-6 md:px-12 bg-dark-bg text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
            BENEFICIOS DE PARTICIPACIÓN
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            ¿Por qué ser parte del <span className="text-gold-500">II CONIMAPE 2026</span>?
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Una experiencia integral diseñada para conectar, capacitar y potenciar a los productores, profesionales y empresas de la pequeña minería.
          </p>
        </div>

        {/* Bento Grid layout estilo ACOMIPE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1 - Networking */}
          <div className="md:col-span-2 bg-gradient-to-br from-white/10 to-white/5 border border-amber-500/30 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400 transition-all duration-300 shadow-xl">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all"></div>
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-6">
              <Users size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Contacto Directo y Networking Minero
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Espacios de relacionamiento estratégico para conectar directamente a productores mineros artesanales, profesionales, empresas proveedoras e instituciones públicas del sector.
            </p>
          </div>

          {/* Card 2 - Certificación */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-gold-500 transition-all duration-300 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Certificación Académica
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Reconocimiento oficial por las horas lectivas del congreso, avalado por comités organizadores e instituciones del rubro.
            </p>
          </div>

          {/* Card 3 - Innovación */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-gold-500 transition-all duration-300 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-6">
              <Cpu size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Tecnologías Limpias
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Conoce soluciones alternativas al uso de mercurio, métodos de gravimetría eficiente y lixiviación amigable con el ambiente.
            </p>
          </div>

          {/* Card 4 - EXPO CONIMAPE */}
          <div className="md:col-span-2 bg-gradient-to-br from-amber-500/15 via-white/5 to-transparent border border-amber-500/30 p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400 transition-all duration-300 shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center mb-6">
              <Building2 size={28} />
            </div>
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Feria Tecnológica & Rueda de Negocios
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              La exhibición comercial donde los principales proveedores muestran maquinaria, reactivos ecológicos, servicios de seguridad e ingeniería minera de vanguardia.
            </p>
          </div>

        </div>

        <div className="mt-12">
          <Link
            to="/inscripcion"
            className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-extrabold text-base px-9 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
          >
            <span>Inscríbete Ahora y Asegura tu Lugar</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
