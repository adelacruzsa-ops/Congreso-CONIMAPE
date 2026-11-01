import { EJES_TEMATICOS } from '../config/constants'

export default function Topics() {
  return (
    <section id="ejes" className="py-24 px-6 md:px-12 bg-dark-bg text-center border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-3 border border-amber-500/20">
          EJE ACADÉMICO & TÉCNICO
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Ejes Temáticos
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          Conoce los principales desafíos y oportunidades que impulsan el desarrollo de la pequeña minería y minería artesanal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {EJES_TEMATICOS.map((eje) => (
            <div
              key={eje.id}
              className="bg-gradient-to-b from-white/10 to-white/5 border border-gold-500/30 p-8 rounded-3xl text-center group hover:border-gold-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-500 transition-colors duration-300">
                  <i className={`${eje.iconoClass} text-3xl text-white group-hover:text-black transition-colors duration-300`}></i>
                </div>
                <h3 className="text-xl font-bold text-gold-400 mb-4">
                  {eje.titulo}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {eje.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
