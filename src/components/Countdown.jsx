import { useCountdown } from '../hooks/useCountdown'
import { EVENT_DETAILS } from '../config/constants'

export default function Countdown() {
  const timeLeft = useCountdown(EVENT_DETAILS.targetDate)

  return (
    <section className="bg-gold-500 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-black/85 via-black/75 to-black/90 p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Identidad de Marca */}
        <div className="flex items-center gap-6 text-center lg:text-left">
          <img
            src="/imagenes/logo2.png"
            alt="Logo CONIMAPE"
            className="w-36 md:w-52 max-h-24 object-contain drop-shadow-xl"
          />
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight tracking-tight">
            Cuenta<br />
            Regresiva
          </h2>
        </div>

        {/* Información y Contador */}
        <div className="text-center text-white">
          <p className="text-xs md:text-sm tracking-widest uppercase text-gray-300 mb-2">
            II CONIMAPE 2026 será realizado en...
          </p>
          <h3 className="text-xl md:text-3xl font-bold tracking-wider text-gold-400 mb-6">
            {EVENT_DETAILS.location}
          </h3>

          <div className="flex justify-center gap-4 md:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[70px] md:min-w-[100px]">
              <span className="block text-4xl md:text-6xl font-light text-white leading-none mb-2">
                {timeLeft.dias}
              </span>
              <small className="text-xs tracking-widest text-gold-400 font-semibold">DÍAS</small>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[70px] md:min-w-[100px]">
              <span className="block text-4xl md:text-6xl font-light text-white leading-none mb-2">
                {timeLeft.horas}
              </span>
              <small className="text-xs tracking-widest text-gold-400 font-semibold">HORAS</small>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[70px] md:min-w-[100px]">
              <span className="block text-4xl md:text-6xl font-light text-white leading-none mb-2">
                {timeLeft.minutos}
              </span>
              <small className="text-xs tracking-widest text-gold-400 font-semibold">MIN</small>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 min-w-[70px] md:min-w-[100px]">
              <span className="block text-4xl md:text-6xl font-light text-white leading-none mb-2">
                {timeLeft.segundos}
              </span>
              <small className="text-xs tracking-widest text-gold-400 font-semibold">SEG</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
