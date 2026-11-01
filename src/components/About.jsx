import { PILARES } from '../config/constants'

export default function About() {
  return (
    <section id="conocenos" className="py-24 px-6 md:px-12 bg-dark-surface">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Texto Informativo */}
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gold-500 mb-4 tracking-tight">
            CONÓCENOS
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-white leading-snug mb-6">
            II Congreso Internacional de la
            <br />
            Pequeña Minería y Minería Artesanal
          </h3>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4 text-justify">
            CONIMAPE 2026 es un evento académico, técnico y empresarial enfocado en fortalecer
            la formalización, productividad, innovación y sostenibilidad de la pequeña minería
            y minería artesanal en el Perú.
          </p>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 text-justify">
            Un espacio de integración entre mineros, profesionales, estudiantes, empresas
            proveedoras e instituciones para compartir conocimientos, experiencias y soluciones
            aplicadas al sector minero.
          </p>

          {/* Pilares Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {PILARES.map((pilar, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center hover:border-gold-500 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="block text-3xl mb-2">{pilar.icono}</span>
                <span className="font-bold text-gold-400 text-sm md:text-base">{pilar.titulo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Imagen Mascota */}
        <div className="flex justify-center">
          <img
            src="/imagenes/muqui.png"
            alt="Mascota Muqui CONIMAPE"
            className="w-72 md:w-96 object-contain animate-float drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  )
}
