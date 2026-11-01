import { PUBLICO_OBJETIVO } from '../config/constants'

export default function Audience() {
  return (
    <section id="publico" className="py-24 px-6 md:px-12 bg-dark-surface text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
          Un encuentro para todos los actores del sector minero
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-16">
          CONIMAPE reúne a profesionales, productores, empresas e instituciones comprometidas con el desarrollo de una minería responsable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PUBLICO_OBJETIVO.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center group hover:border-gold-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl text-white mb-4 group-hover:text-gold-300 group-hover:scale-110 transition-all duration-300">
                <i className={item.iconoClass}></i>
              </div>
              <h3 className="text-xl font-bold text-gold-400 mb-3">
                {item.titulo}
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
