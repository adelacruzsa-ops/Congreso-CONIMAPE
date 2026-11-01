import React from 'react'
import { LINKS_INSCRIPCION, WHATSAPP_NUMBER } from '../config/constants'
import {
  User,
  Users,
  Building2,
  CreditCard,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  HelpCircle,
  PhoneCall,
  Clock,
  MapPin,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  Check,
  Building,
  Info
} from 'lucide-react'

export default function InscripcionDetallePage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, tengo dudas sobre el proceso de pago e inscripción para el II CONIMAPE 2026.')}`
  const whatsappCastillo = `https://wa.me/51942503614?text=${encodeURIComponent('Hola Cristhopher Castillo, me comunico para consultas sobre mi inscripción al CONIMAPE 2026.')}`

  const tiposFormularios = [
    {
      id: 'individual',
      titulo: 'Inscripción Individual',
      subtitulo: 'Para profesionales, ingenieros CIP y estudiantes que se registran de manera personal.',
      icono: User,
      badgeText: 'INDIVIDUAL',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      color: 'border-white/10 hover:border-amber-400/50',
      btnColor: 'bg-amber-500 hover:bg-amber-400 text-black font-extrabold',
      link: LINKS_INSCRIPCION.individual,
      tarifas: [
        { cat: 'Público General', precio: 'S/ 80.00' },
        { cat: 'Ingenieros Colegiados CIP', precio: 'S/ 70.00' },
        { cat: 'Estudiantes Pregrado', precio: 'S/ 50.00' },
      ]
    },
    {
      id: 'grupal',
      titulo: 'Inscripción Grupal',
      subtitulo: '¡Aprovecha el descuento especial para delegaciones a partir de 5 personas!',
      icono: Users,
      badgeText: '¡AHORRA MÁS! (5 PERSONAS)',
      badgeColor: 'bg-amber-400 text-black font-extrabold',
      color: 'border-2 border-amber-400 bg-gradient-to-b from-amber-500/15 via-dark-surface to-dark-surface shadow-2xl shadow-amber-500/15 scale-105 z-10',
      btnColor: 'bg-amber-400 hover:bg-amber-300 text-black font-extrabold shadow-lg shadow-amber-400/20',
      link: LINKS_INSCRIPCION.grupal,
      destacado: true,
      tarifas: [
        { cat: 'Público General (c/u)', precio: 'S/ 60.00' },
        { cat: 'Ingenieros Colegiados CIP (c/u)', precio: 'S/ 50.00' },
        { cat: 'Estudiantes Pregrado (c/u)', precio: 'S/ 30.00' },
      ]
    },
    {
      id: 'corporativo',
      titulo: 'Inscripción Corporativa',
      subtitulo: 'Registro exclusivo para empresas e instituciones que registran a la planilla de sus trabajadores.',
      icono: Building2,
      badgeText: 'PARA EMPRESAS',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      color: 'border-blue-500/30 hover:border-blue-400',
      btnColor: 'bg-gradient-to-r from-blue-600 to-amber-500 hover:from-blue-500 hover:to-amber-400 text-white font-extrabold',
      link: LINKS_INSCRIPCION.corporativa,
      tarifas: [
        { cat: 'Facturación / Planilla', precio: 'Atención Directa' },
        { cat: 'Atención Personalizada', precio: 'Incluida' },
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 md:px-12 bg-dark-bg min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header Consolidado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-xs sm:text-sm font-semibold mb-4 border border-amber-500/20">
            <Sparkles size={16} />
            <span>GUÍA COMPLETA DE TARIFAS, PAGO Y REGISTRO</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Inscripción Anticipada <span className="text-amber-400">CONIMAPE 2026</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Minería que impulsa desarrollo · Elige la opción que mejor va contigo y asegura tu lugar en Arequipa.
          </p>

          {/* Banner Ofertas Preventa */}
          <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-amber-300 text-sm font-medium shadow-lg">
            <div className="flex items-center gap-3">
              <Calendar className="shrink-0 text-amber-400" size={24} />
              <span>Aprovecha estas ofertas de preventa ampliadas hasta el <strong>25 DE OCTUBRE</strong></span>
            </div>
            <div className="flex items-center gap-2 text-xs bg-amber-500/20 text-amber-200 px-3 py-1.5 rounded-lg border border-amber-500/30 shrink-0">
              <MapPin size={14} className="text-amber-400" />
              <span>4 al 6 de Noviembre 2026 · Arequipa</span>
            </div>
          </div>
        </div>

        {/* SECCIÓN 1: TARIFARIO DE INSCRIPCIÓN Y LINKS DE REGISTRO */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20">
              PASO 1: SELECCIONA TU TARIFA & FORMULARIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
              Tarifas por Categoría (Individual y Grupal)
            </h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Las tarifas grupales aplican a partir de <strong>5 personas</strong>. Haz clic en el botón correspondiente para ir directamente al formulario oficial.
            </p>
          </div>

          {/* Grilla Tarifario Unificada */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-12">
            {tiposFormularios.map((tipo) => {
              const IconComp = tipo.icono
              return (
                <div
                  key={tipo.id}
                  className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-dark-surface border transition-all duration-300 shadow-xl ${tipo.color}`}
                >
                  {tipo.badgeText && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs tracking-wider border shadow-lg ${tipo.badgeColor}`}>
                      {tipo.badgeText}
                    </div>
                  )}

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20">
                      <IconComp size={28} />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{tipo.titulo}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 mb-6 leading-relaxed min-h-[40px]">
                      {tipo.subtitulo}
                    </p>

                    {/* Desglose Tarifas */}
                    <div className="space-y-2 mb-8 bg-black/40 p-4 rounded-2xl border border-white/5 text-left">
                      <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Tarifas por Perfil</p>
                      {tipo.tarifas.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-xs text-gray-300 py-1.5 border-b border-white/5 last:border-0">
                          <span>{item.cat}:</span>
                          <span className="font-extrabold text-white text-sm">{item.precio}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ÚNICO BOTÓN DIRECTO POR TARJETA */}
                  <div>
                    <a
                      href={tipo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl transition-all duration-300 shadow-lg group ${tipo.btnColor}`}
                    >
                      <span className="font-extrabold text-sm sm:text-base">
                        Ir al {tipo.titulo}
                      </span>
                      <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* SECCIÓN 2: MEDIOS DE PAGO COMPLETOS (BCP & SCOTIABANK & CAJA CIP) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2 border border-amber-500/20">
              PASO 2: REALIZA TU PAGO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
              Medios de Pago y Cuentas Oficiales CIP CDA
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Elige el medio de pago preferido y completa la transferencia o depósito a nombre del <strong>Consejo Departamental de Arequipa - Capítulo de Ingeniería de Minas</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

            {/* BCP */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-extrabold text-xl">
                      BCP
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Banco de Crédito del Perú</h3>
                      <span className="text-xs text-red-400 font-semibold uppercase tracking-wider block">BCP NO TIENE N° DE CUENTA DIRECTO</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6 flex items-start gap-3">
                  <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-amber-200 text-justify leading-relaxed">
                    <strong>IMPORTANTE BCP:</strong> Por cualquier operación en agente, VIABCP o BCP APP, debes adicionar <strong>S/ 1.50</strong> por concepto de comisión por transacción; de lo contrario no se hará efectivo su depósito.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-gray-300">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="font-bold text-amber-400 block text-sm mb-1">1. Agente BCP:</span>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Indicar: <em>Pago de servicios</em></li>
                      <li>A nombre de: <strong>COLEGIO INGENIEROS AQP</strong></li>
                      <li>Código del CIP CDA para el agente: <strong className="text-amber-300 text-sm bg-black/60 px-2 py-0.5 rounded font-mono">14913</strong></li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="font-bold text-amber-400 block text-sm mb-1">2. BCP APP Móvil:</span>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Seleccionar: <em>Pagar servicios</em></li>
                      <li>Buscar: <strong>Colegio Ingenieros AQP</strong></li>
                      <li>Seleccionar: <em>Pago cuota mensual</em></li>
                      <li>Ingresar código de servicio: N° CIP o DNI (si no es Ingeniero)</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <span className="font-bold text-amber-400 block text-sm mb-1">3. Por internet (www.viabcp.com):</span>
                    <ul className="list-disc list-inside space-y-1 text-gray-300">
                      <li>Ingresar a: <em>Pagos &gt; Pagar un servicio</em></li>
                      <li>Buscar: <strong>Colegio de Ingenieros - Arequipa</strong></li>
                      <li>Seleccionar: <em>Pagos cuota mensual</em></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* SCOTIABANK */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-extrabold text-xl">
                      SCO
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Scotiabank</h3>
                      <p className="text-xs text-amber-400 font-medium">Cuenta Corriente Oficial</p>
                    </div>
                  </div>
                </div>

                {/* Datos de Cuenta Scotiabank del Afiche oficial */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-6 space-y-2">
                  <div>
                    <span className="text-xs text-gray-400 block">Cuenta Corriente (Soles):</span>
                    <strong className="text-lg text-amber-400 font-mono tracking-wider">000 - 1319957</strong>
                  </div>
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-xs text-gray-400 block">CCI (Código de Cuenta Interbancario):</span>
                    <strong className="text-sm text-white font-mono tracking-wider">009-310-000001319957-45</strong>
                  </div>
                </div>

                {/* Avisos Importantes Scotiabank */}
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 mb-6 space-y-2">
                  <div className="flex items-start gap-2 text-xs text-amber-200">
                    <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Comisión Transacción:</strong> Por cualquier operación en agente, vía Scotiabank o Scotiabank APP, debe adicionar <strong>S/ 1.00</strong> por concepto de comisión por transacción; de lo contrario no se hará efectivo su depósito.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-amber-200 pt-2 border-t border-amber-500/20">
                    <AlertTriangle className="text-amber-400 shrink-0 mt-0.5" size={16} />
                    <p>
                      <strong>Comisión Interplaza:</strong> Si se encuentra fuera de la Ciudad de Arequipa y realiza depósitos en agentes o ventanillas Scotiabank, deberá adicionar <strong>S/ 7.50</strong> a su depósito por comisión interplaza del banco.
                    </p>
                  </div>
                </div>

                {/* Instrucciones App/Web Scotiabank */}
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-xs text-gray-300">
                  <span className="font-bold text-amber-400 block text-sm mb-1">APP / WEB (mi.scotiabank.com.pe/login):</span>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Pagar servicios / instituciones</li>
                    <li>Buscar: <strong>Colegio de Ingenieros - Arequipa</strong></li>
                    <li>Ingresar: Monto, CIP, Nombre del Ingeniero y Referencia (concepto del depósito)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* CAJA CIP Y CONSIDERACIONES ADICIONALES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Pagos en Caja CIP CDA */}
            <div className="bg-dark-surface border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Building size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Pagos en Caja CIP CDA</h4>
              </div>
              <div className="space-y-3 text-xs text-gray-300">
                <div>
                  <strong className="text-white block">Sede Principal:</strong>
                  <span>Av. Independencia N° 150</span>
                </div>
                <div>
                  <strong className="text-white block">Sede Casa del Ingeniero:</strong>
                  <span>Calle Consuelo N° 306</span>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <strong className="text-amber-400 block">Horarios de atención:</strong>
                  <p>• Lunes a viernes: 9:00 a.m. - 1:00 p.m. y 3:30 p.m. - 8:00 p.m.</p>
                  <p>• Sábados: 9:00 a.m. - 1:00 p.m.</p>
                </div>
              </div>
            </div>

            {/* Consideraciones Importantes */}
            <div className="bg-dark-surface border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Info size={20} />
                </div>
                <h4 className="text-base font-bold text-white">Consideraciones Clave</h4>
              </div>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Verifique que el número de cuenta y titular sean los correctos.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Conserve su comprobante de pago o váucher</strong> para registrarlo en el formulario de inscripción.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-amber-400 shrink-0 mt-0.5" />
                  <span>Ante cualquier consulta, comuníquese directamente con la organización del evento.</span>
                </li>
              </ul>
            </div>

            {/* Contacto de Inscripciones */}
            <div className="bg-dark-surface border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <PhoneCall size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white">Contacto de Inscripciones</h4>
                </div>
                <div className="space-y-3 text-xs text-gray-300 mb-4">
                  <div>
                    <strong className="text-white block text-sm">Cristhopher Castillo</strong>
                    <span className="text-amber-400 font-mono text-base font-bold">+51 942 503 614</span>
                  </div>
                  <div className="bg-amber-500/10 p-3 rounded-xl border border-amber-500/20 text-amber-200">
                    <p><strong>IMPORTANTE:</strong> Conserve su comprobante de pago o váucher para registrarlo en el formulario de inscripción.</p>
                  </div>
                </div>
              </div>

              <a
                href={whatsappCastillo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs transition-all shadow-md"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Chatear con Cristhopher Castillo</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
