// =========================================================================
// ARCHIVO DE CONFIGURACIÓN Y CONTENIDOS CENTRALIZADOS DE CONIMAPE 2026
// Edita este archivo para modificar textos, agregar ponentes, noticias o auspiciadores.
// =========================================================================

export const LINKS_INSCRIPCION = {
    individual: 'https://forms.gle/FeGs4GmvtyRWoUaEA',
    grupal: 'https://forms.gle/oj8vHPq4AWH7Yonj6',
    corporativa: 'https://forms.gle/cJCPnWPfDGEt4UjW9',
}
export const LINK_FORM = LINKS_INSCRIPCION.individual

// =========================================================================
// VARIABLES DE CONTROL DE VISIBILIDAD (Configura en true o false)
// =========================================================================
export const MOSTRAR_PROGRAMA = false
export const MOSTRAR_PONENTES = true

export const WHATSAPP_NUMBER = '51942503614'
export const WHATSAPP_DISPLAY = '+51 942 503 614'
export const CONTACT_EMAIL = 'conimape.congreso@gmail.com'
export const WHATSAPP_MESSAGE = 'Hola, me gustaría recibir más información sobre el II CONIMAPE 2026.'

export const WHATSAPP_COMMUNITY_LINK = 'https://chat.whatsapp.com/CP2MCpcwB0S4VTeEmUDBID'

export const SOCIAL_LINKS = {
    facebook: 'https://web.facebook.com/profile.php?id=61594049040685',
    instagram: 'https://www.instagram.com/conimape.congreso/',
    linkedin: 'https://www.linkedin.com/in/ii-conimape-28120a433',
    tiktok: 'https://www.tiktok.com/@conimape?is_from_webapp=1&sender_device=pc',
}

export const EVENT_DETAILS = {
    title: 'II CONIMAPE 2026',
    subtitle: 'II Congreso Internacional de la Pequeña Minería y Minería Artesanal',
    slogan: 'TRADICIÓN MINERA · FUTURO SOSTENIBLE',
    date: '04 - 06 de Noviembre 2026',
    location: 'AREQUIPA · PERÚ',
    targetDate: 'November 4, 2026 09:00:00',
    mision: 'Promover el desarrollo integral, la innovación tecnológica y la formalización sostenible de la pequeña minería y minería artesanal en el Perú y Latinoamérica.',
    vision: 'Ser el congreso referente a nivel internacional para la transformación responsable, productiva y ambientalmente amigable del sector minero artesanal y de pequeña escala.',
}

export const LOCATION_INFO = {
    venue: 'Colegio de Ingenieros del Perú - CD Arequipa',
    city: 'Arequipa, Perú',
    address: 'Av. Independencia 150, Arequipa 04001',
    googleMapsUrl: 'https://maps.app.goo.gl/cRkFB2zM9wP3ZvpP8',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.420845112345!2d-71.530514!3d-16.406124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424a5b15000001%3A0x123456789abcdef!2sColegio%20de%20Ingenieros%20del%20Per%C3%BA%20-%20CD%20Arequipa!5e0!3m2!1ses-419!2spe!4v1700000000000!5m2!1ses-419!2spe',
}

export const NAV_LINKS = [
    { name: 'Inicio', href: '/' },
    { name: 'Programa', href: '/programa' },
    { name: 'Participantes', href: '/participantes' },
    { name: 'Precios e Inscripción', href: '/inscripcion' },
    { name: 'Feria Tecnológica', href: '/feria-tecnologica' },
    { name: 'Galería', href: '/galeria' },
]

export const PILARES = [
    { icono: '💡', titulo: 'Innovación' },
    { icono: '⚙️', titulo: 'Tecnología' },
    { icono: '📜', titulo: 'Formalización' },
    { icono: '🌱', titulo: 'Sostenibilidad' },
]

export const EJES_TEMATICOS = [
    {
        id: 1,
        iconoClass: 'fa-solid fa-file-signature',
        titulo: 'Formalización Minera',
        descripcion: 'Fortalecemos procesos de formalización, productividad y desarrollo sostenible para los pequeños productores mineros.',
    },
    {
        id: 2,
        iconoClass: 'fa-solid fa-helmet-safety',
        titulo: 'Seguridad Minera',
        descripcion: 'Promovemos una cultura preventiva, buenas prácticas de SST y protección integral de la vida del trabajador.',
    },
    {
        id: 3,
        iconoClass: 'fa-solid fa-leaf',
        titulo: 'Gestión Ambiental y Tecnologías Limpias',
        descripcion: 'Impulsamos una minería responsable, reducción del uso de mercurio, cianuración eficiente y cuidado del entorno.',
    }
]

// =========================================================================
// LISTA DE PONENTES (CONFERENCISTAS CONFIRMADOS Y DESTACADOS)
// =========================================================================
export const PONENTES = [
    // Campos: nombre, corto (para las miniaturas), cargo, empresa, pais (solo internacionales),
    // dia / diaNum, hora, tema, bio (opcional, admite <b>), foto (opcional, ruta dentro de /public/ponentes/)
    // ---- Miércoles 4 de noviembre ----
    { id: 1, nombre: 'José Farfán Estrada', corto: 'José Farfán', cargo: 'Abogado · Ex Director General de Formalización Minera', empresa: 'MINEM', dia: 'Miércoles 4', diaNum: 4, hora: '2:00 – 3:00 p.m.', tema: 'Propuestas para una Ley MAPE con seguridad jurídica y competitividad', bio: 'Dos veces Director General de Formalización Minera del <b>MINEM</b>, con más de <b>25 años</b> en el sector minero-energético y ambiental. Es fundador y presidente honorario del <b>IPF MAPE</b>.', foto: '/ponentes/jose-farfan.jpg' },
    { id: 2, nombre: 'Eduardo Mansilla', corto: 'Eduardo Mansilla', cargo: '', empresa: 'Geosismic Consulting', dia: 'Miércoles 4', diaNum: 4, hora: '3:00 – 4:00 p.m.', tema: '' },
    { id: 3, nombre: 'Cristyan Valdez Merma', corto: 'Cristyan Valdez', cargo: 'Gerente', empresa: 'MVP Consultores', dia: 'Miércoles 4', diaNum: 4, hora: '4:00 – 5:00 p.m.', tema: 'Más allá del REINFO: estrategias para la continuidad operativa' },
    { id: 4, nombre: 'Oscar Calero Revolledo', corto: 'Oscar Calero', cargo: 'Vicepresidente de Operaciones', empresa: 'CAV Mining', dia: 'Miércoles 4', diaNum: 4, hora: '5:00 – 6:00 p.m.', tema: 'La IA en la pequeña minería y la minería artesanal: Minería 5.0' },
    // ---- Jueves 5 de noviembre ----
    { id: 5, nombre: 'Luciano Alejandro Taco Prado', corto: 'Luciano Taco', cargo: 'Presidente', empresa: 'Capítulo de Ingeniería de Minas, CIP Arequipa', dia: 'Jueves 5', diaNum: 5, hora: '9:00 – 9:30 a.m.', tema: 'De la informalidad hacia una minería formal, segura, productiva y sostenible' },
    { id: 6, nombre: 'Patricio Céspedes Guzmán', corto: 'Patricio Céspedes', cargo: 'Presidente', empresa: 'Asociación Gremial Minera de Antofagasta', pais: 'Chile', dia: 'Jueves 5', diaNum: 5, hora: '9:30 – 10:00 a.m.', tema: 'El desarrollo de la pequeña minería en la formalidad' },
    { id: 7, nombre: 'Betsabeth Obando Flores', corto: 'Betsabeth Obando', cargo: 'Gerente General', empresa: 'Minerva Crime & Compliance', pais: 'Chile', dia: 'Jueves 5', diaNum: 5, hora: '10:00 – 11:00 a.m.', tema: 'Minería ilegal y crimen organizado: ¿puede el compliance ser un blindaje estratégico?' },
    { id: 8, nombre: 'Raúl Pango Rondón', corto: 'Raúl Pango', cargo: 'Coach Profesional · Docente de Posgrado', empresa: 'UNSA', dia: 'Jueves 5', diaNum: 5, hora: '2:00 – 3:00 p.m.', tema: 'Habilidades de poder para una negociación efectiva' },
    { id: 9, nombre: 'Héctor Bolaños Sosa', corto: 'Héctor Bolaños', cargo: 'Administrador General', empresa: 'CILME Río Seco, UNSA', dia: 'Jueves 5', diaNum: 5, hora: '3:00 – 4:00 p.m.', tema: 'Pequeña minería en el Perú: de la problemática a la transformación tecnológica y sostenible' },
    { id: 10, nombre: 'Willian Nuñez Zoras', corto: 'Willian Nuñez', cargo: 'Ingeniero de Minas', empresa: 'FAMESA Explosivos', dia: 'Jueves 5', diaNum: 5, hora: '4:00 – 5:00 p.m.', tema: 'Seguridad con explosivos' },
    { id: 11, nombre: 'Manuel Redondez Roque', corto: 'Manuel Redondez', cargo: 'Gerente Corporativo SSOMA', empresa: 'JCI Ingeniería', dia: 'Jueves 5', diaNum: 5, hora: '5:00 – 6:00 p.m.', tema: 'Cero fatalidades: ¿es posible en la pequeña minería y minería artesanal?' },
    // ---- Viernes 6 de noviembre ----
    { id: 12, nombre: 'Franco Arista Rivera', corto: 'Franco Arista', cargo: 'Gerente Comercial', empresa: 'Soleil Metals', dia: 'Viernes 6', diaNum: 6, hora: '10:00 – 11:00 a.m.', tema: 'Plantas que transforman: hacia una cadena de oro responsable, del procesamiento del mineral a la creación de valor compartido' },
    { id: 13, nombre: 'Paolo Andrés Alzamora', corto: 'Paolo Alzamora', cargo: 'Ex Presidente Ejecutivo', empresa: 'INGEMMET', dia: 'Viernes 6', diaNum: 6, hora: '11:00 a.m. – 12:00 m.', tema: 'Geología para formalizar: información geocientífica al servicio de la MAPE' },
    { id: 14, nombre: 'Zoila Alejandro', corto: 'Zoila Alejandro', cargo: '', empresa: 'Marca Zoila Alejandro', dia: 'Viernes 6', diaNum: 6, hora: '2:00 – 3:00 p.m.', tema: 'Minería con alma: la condición humana como fuerza de transformación de la MAPE' },
]

// =========================================================================
// PROGRAMA / CRONOGRAMA POR DÍAS
// =========================================================================
export const CRONOGRAMA = [
    {
        dia: 'Día 1 - Miércoles 04 Noviembre',
        fecha: '04 Nov 2026',
        actividades: [
            { hora: '08:00 AM - 09:30 AM', evento: 'Registro de Participantes y Entrega de Credenciales', expositor: 'Comité Organizador', sala: 'Auditorio Principal' },
            { hora: '09:30 AM - 10:30 AM', evento: 'Ceremonia de Inauguración II CONIMAPE 2026', expositor: 'Autoridades y Comité', sala: 'Auditorio Principal' },
            { hora: '10:30 AM - 11:30 AM', evento: 'Conferencia Magistral: Marco Regulatorio y Formalización Minera', expositor: 'Ing. Carlos Mendoza', sala: 'Auditorio Principal' },
            { hora: '02:00 PM - 04:00 PM', evento: 'Mesa de Trabajo: Desafíos Ambientales en la Pequeña Minería', expositor: 'Panel de Especialistas', sala: 'Sala A' },
        ]
    },
    {
        dia: 'Día 2 - Jueves 05 Noviembre',
        fecha: '05 Nov 2026',
        actividades: [
            { hora: '09:00 AM - 10:30 AM', evento: 'Tecnologías Limpias para Procesamiento de Minerales', expositor: 'Dra. María Elena Torres', sala: 'Auditorio Principal' },
            { hora: '11:00 AM - 01:00 PM', evento: 'Taller Práctico: Seguridad y Salud en Minería de Socavón', expositor: 'Dr. John Miller', sala: 'Sala B' },
            { hora: '03:00 PM - 05:30 PM', evento: 'Feria Tecnológica y Rueda de Negocios Mineros', expositor: 'Empresas Auspiciadoras', sala: 'Explanada Cerro Juli' },
        ]
    },
    {
        dia: 'Día 3 - Viernes 06 Noviembre',
        fecha: '06 Nov 2026',
        actividades: [
            { hora: '09:30 AM - 11:30 AM', evento: 'Financiamiento y Comercialización Responsable de Oro', expositor: 'Ing. Ana Paula Quispe', sala: 'Auditorio Principal' },
            { hora: '11:30 AM - 01:00 PM', evento: 'Presentación de Conclusiones y Propuestas CONIMAPE 2026', expositor: 'Comité Académico', sala: 'Auditorio Principal' },
            { hora: '01:00 PM - 02:00 PM', evento: 'Clausura y Almuerzo de Confraternidad Minera', expositor: 'Todos los asistentes', sala: 'Gran Salón' },
        ]
    }
]

// =========================================================================
// AUSPICIADORES Y ALIADOS ESTRATÉGICOS
// =========================================================================
export const AUSPICIADORES = {
    platino: [
        {
            nombre: 'ExploraMining SAC',
            logo: '/imagenes/logo2.png',
            categoria: 'Platino',
            descripcion: 'Proveedor de maquinaria pesada y soluciones tecnológicas orientadas al incremento de la productividad con seguridad en pequeña minería.',
        }
    ],
    oro: [
        {
            nombre: 'EcoTecnia Soluciones Mineras',
            logo: '/imagenes/logo2.png',
            categoria: 'Oro',
            descripcion: 'Empresa especializada en el diseño de circuitos gravimétricos y equipos de recuperación de oro sin uso de sustancias contaminantes.',
        }
    ],
    aliados: [
        {
            nombre: 'Colegio de Ingenieros del Perú - CD Arequipa',
            logo: '/imagenes/logo2.png',
            categoria: 'Institucional',
            descripcion: 'Institución gremial aliada comprometida con el desarrollo ético, técnico y profesional de los ingenieros y el sector minero regional.',
        }
    ]
}

// =========================================================================
// EQUIPO ORGANIZADOR Y COLABORADORES
// =========================================================================
export const COLABORADORES = [
    {
        id: 1,
        nombre: 'María Emilia Pacompia Quilca',
        rol: 'Coordinación de Logística y Protocolo',
        institucion: 'Estudiante de Ing. de Minas - UNSA',
        comision: 'Comisión Organizadora II CONIMAPE',
        foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
        biografia: 'Apasionada por la ingeniería de minas y motivada por contribuir al desarrollo de una minería artesanal formal, eficiente y con responsabilidad social.',
    },
    {
        id: 2,
        nombre: 'Diego Alejandro Mendoza Soto',
        rol: 'Coordinación de Prensa y Cobertura Digital',
        institucion: 'Estudiante de Ing. de Minas - UNSA',
        comision: 'Comisión de Comunicaciones',
        foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
        biografia: 'Convencido de que la difusión clara de soluciones tecnológicas e investigaciones conecta a los productores mineros con el conocimiento de vanguardia.',
    },
    {
        id: 3,
        nombre: 'Valeria Sofía Quispe Mamani',
        rol: 'Acreditación y Registro de Participantes',
        institucion: 'Estudiante de Ing. Geológica - UNSA',
        comision: 'Comisión de Registro y Atención',
        foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
        biografia: 'Entusiasmada por la integración multidisciplinaria y por brindar la mejor atención y experiencia a cada congresista en Arequipa.',
    }
]

// =========================================================================
// TARIFAS E INVERSIÓN (PRECIOS DE INSCRIPCIÓN)
// =========================================================================
export const PRECIOS = [
    {
        id: 'individual',
        nombre: 'Inscripción Individual',
        precio: 'S/. 80',
        moneda: 'PEN',
        subtitulo: 'Asistentes individuales (General S/80, CIP S/70, Estudiantes S/50)',
        destacado: false,
        link: LINKS_INSCRIPCION.individual,
        beneficios: [
            'Acceso libre a las conferencias los 3 días',
            'Kit oficial de congresista CONIMAPE 2026',
            'Certificado digital de participación (30 horas)',
            'Ingreso a la Feria Tecnológica EXPO CONIMAPE'
        ]
    },
    {
        id: 'grupal',
        nombre: 'Inscripción Grupal (5 Asistentes)',
        precio: 'S/. 60',
        moneda: 'PEN / pers.',
        subtitulo: '¡Ahorra más! Tarifa especial para delegaciones (General S/60, CIP S/50, Estudiantes S/30)',
        destacado: true,
        popularLabel: 'MÁS RECOMENDADO (DELEGACIONES)',
        link: LINKS_INSCRIPCION.grupal,
        beneficios: [
            'Descuento especial aplicable desde 5 personas',
            'Acceso completo a ponencias y mesas de trabajo',
            'Kits oficiales para todos los integrantes',
            'Certificados individuales de participación',
            'Pase a la Rueda de Negocios y Feria'
        ]
    },
    {
        id: 'corporativa',
        nombre: 'Inscripción Corporativa',
        precio: 'Personalizado',
        moneda: 'EMPRESAS',
        subtitulo: 'Registro institucional para delegaciones empresariales y planillas',
        destacado: false,
        link: LINKS_INSCRIPCION.corporativa,
        beneficios: [
            'Facturación y atención personalizada',
            'Kits corporativos premium para la delegación',
            'Certificados oficiales con mención institucional',
            'Pases preferenciales al área de networking',
            'Inclusión en el directorio de delegaciones'
        ]
    }
]

// =========================================================================
// ESTADÍSTICAS E IMPACTO DEL CONGRESO (INSCRITOS HASTA AHORA)
// =========================================================================
export const ESTADISTICAS_EVENTO = [
    { id: 1, numero: '+350', titulo: 'Inscritos Confirmados', descripcion: 'Mineros, profesionales y estudiantes registrados', icono: 'fa-solid fa-users' },
    { id: 2, numero: '+15', titulo: 'Delegaciones Regionales', descripcion: 'Representantes de Puno, Arequipa, Madre de Dios y más', icono: 'fa-solid fa-map-location-dot' },
    { id: 3, numero: '+25', titulo: 'Ponencias y Talleres', descripcion: 'Conferencias especializadas en 3 días de congreso', icono: 'fa-solid fa-chalkboard-user' },
    { id: 4, numero: '+30', titulo: 'Empresas Aliadas', descripcion: 'Participando en la feria de tecnología minera', icono: 'fa-solid fa-handshake' },
]

// =========================================================================
// NOTICIAS Y NOVEDADES
// =========================================================================
export const NOTICIAS = [
    {
        id: 1,
        titulo: 'Arequipa será sede del II CONIMAPE 2026 sobre Minería Artesanal y Pequeña Minería',
        fecha: '05 de Septiembre, 2026',
        fuente: 'El Muqui Minería (@elmuquimineria)',
        fuenteUrl: 'https://www.instagram.com/elmuquimineria/',
        resumen: 'Del 4 al 6 de noviembre, Arequipa reunirá a pequeños productores, mineros artesanales, especialistas y autoridades para discutir los principales desafíos de la MAPE.',
        imagen: '/carrusel/img5.jpeg',
        contenido: `Del 4 al 6 de noviembre, Arequipa será sede del II Congreso Internacional de la Pequeña Minería y Minería Artesanal (CONIMAPE 2026), encuentro que reunirá a pequeños productores, mineros artesanales, especialistas, empresas y representantes del sector para discutir los principales desafíos de la MAPE.

El congreso abordará temas como formalización minera, tecnologías limpias, seguridad y gestión ambiental, además de las dificultades que enfrenta el sector en capacitación técnica, acceso a financiamiento e incorporación a cadenas de valor formales. También se realizarán conferencias, mesas de diálogo, exhibiciones tecnológicas y una rueda de negocios.

En un momento en que el país discute una nueva Ley MAPE, CONIMAPE 2026 se presenta como un espacio para intercambiar experiencias y plantear propuestas desde la realidad de la pequeña minería y minería artesanal. El encuentro es presidido por el ingeniero Luciano Taco Prado y busca reunir a representantes de distintas regiones del país.`,
        tags: ['#ElMuqui', '#MineríaArtesanal', '#CONIMAPE2026', '#MAPE', '#Arequipa']
    },
    {
        id: 2,
        titulo: 'Programa de Becas y Facilidades para Estudiantes e Investigadores Universitarios',
        fecha: '28 de Agosto, 2026',
        fuente: 'Comité Académico CONIMAPE',
        resumen: 'El comité organizador del II CONIMAPE 2026 anunció la apertura de 100 becas de inscripción dirigidas a estudiantes de ingeniería de minas, geología y carreras afines.',
        imagen: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80',
        contenido: `Con el firme compromiso de impulsar la formación académica y el desarrollo científico de las nuevas generaciones, el Comité Organizador del II CONIMAPE 2026 dispondrá de un programa especial de 100 becas integrales y parciales para estudiantes destacados de las facultades de Ingeniería de Minas, Geología, Metalurgia, Ciencias Ambientales y carreras afines de universidades públicas y privadas del Perú.

Las becas otorgarán acceso completo a las conferencias magistrales, talleres especializados, feria tecnológica y certificado digital de participación firmado por las instituciones organizadoras. Los estudiantes interesados deberán presentar una constancia de estudios vigente y una breve carta de motivación donde expliquen su interés en el sector de la pequeña minería y minería artesanal.

"Queremos que los futuros profesionales de la minería conozcan de cerca los retos reales del sector MAPE y aporten con innovación y tecnología a su desarrollo sostenible", señaló la comisión académica del congreso. La convocatoria estará abierta hasta agotar las vacantes disponibles.`,
        tags: ['#BecasCONIMAPE', '#IngenieríaDeMinas', '#EstudiantesMineros', '#Innovación']
    },
    {
        id: 3,
        titulo: 'Convocatoria Abierta para la Presentación de Trabajos de Investigación y Casos de Éxito',
        fecha: '18 de Agosto, 2026',
        fuente: 'Comisión Técnica CONIMAPE',
        resumen: 'Investigadores, ingenieros y empresas del sector minero podrán enviar sus ponencias y resúmenes técnicos para ser presentados durante las jornadas del congreso.',
        imagen: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
        contenido: `La Comisión Técnica del II Congreso Internacional de la Pequeña Minería y Minería Artesanal (CONIMAPE 2026) invita formalmente a profesionales, investigadores, docentes universitarios, consultores y productores mineros a enviar sus resúmenes (abstracts) de trabajos técnicos para ser evaluados por nuestro comité evaluador.

Las ponencias seleccionadas serán presentadas oralmente dentro del programa oficial del evento y publicadas en las memorias del congreso. Las áreas temáticas comprenden:
• Procesos de formalización y normatividad ambiental.
• Métodos de explotación eficientes y seguridad en minería subterránea.
• Tecnologías de procesamiento gravimétrico y lixiviación ecológica sin mercurio.
• Economía circular, gestión de relaves y sostenibilidad comunitaria.

Los resúmenes deberán ser enviados a través de nuestros canales oficiales. La fecha límite para la recepción de propuestas es el 30 de septiembre de 2026. Todos los ponentes aceptados recibirán un reconocimiento oficial y pase preferencial durante los tres días del congreso.`,
        tags: ['#TrabajosTécnicos', '#InvestigaciónMinera', '#TecnologíaMAPE', '#Ponencias2026']
    }
]

// =========================================================================
// GALERÍA DE IMÁGENES (I EDICIÓN - CARRUSEL)
// =========================================================================
export const GALERIA_FOTOS = [
    { id: 5, titulo: 'Presentación en el Colegio de Ingenieros', url: '/carrusel/img5.jpeg' },
    { id: 1, titulo: 'Conferencia del Sector Minero', url: '/carrusel/img1.jpeg' },
    { id: 2, titulo: 'Asistentes y Participación del Público', url: '/carrusel/img2.jpeg' },
    { id: 3, titulo: 'Ponencia Magistral del Evento', url: '/carrusel/img3.jpeg' },
    { id: 4, titulo: 'Exposición y Conferencia Especializada', url: '/carrusel/img4.jpeg' },
]

// =========================================================================
// PREGUNTAS FRECUENTES (FAQ) PARA EL ASISTENTE VIRTUAL "MUQUI"
// =========================================================================
export const FAQ_MUQUI = [
    {
        pregunta: '¿Cuándo y dónde se realizará el II CONIMAPE 2026?',
        respuesta: 'El congreso se realizará del 04 al 06 de Noviembre de 2026 en el Centro de Convenciones Cerro Juli, en Arequipa - Perú.',
    },
    {
        pregunta: '¿Cómo me inscribo al congreso?',
        respuesta: 'Puedes hacer clic en el botón "Inscríbete ahora" para llenar el formulario oficial de registro en Google Forms.',
    },
    {
        pregunta: '¿Se otorgará certificado de participación?',
        respuesta: '¡Sí! Todos los participantes que cumplan con la asistencia mínima recibirán un certificado digital firmado por el comité organizador e instituciones aliadas.',
    },
    {
        pregunta: '¿Quiénes pueden participar?',
        respuesta: 'Está dirigido a pequeños mineros, mineros artesanales, profesionales, ingenieros, estudiantes, empresas proveedoras e instituciones públicas/privadas.',
    },
    {
        pregunta: '¿Cómo puedo ser auspiciador del evento?',
        respuesta: 'En la sección "Auspiciadores" encontrarás la opción para contactarte con nuestro equipo comercial y solicitar el brochure corporativo de patrocinios.',
    },
]

export const PUBLICO_OBJETIVO = [
    {
        iconoClass: 'fa-solid fa-helmet-safety',
        titulo: 'Pequeños Mineros',
        descripcion: 'Productores mineros que buscan mejorar sus procesos y fortalecer su actividad.',
    },
    {
        iconoClass: 'fa-solid fa-person-digging',
        titulo: 'Mineros Artesanales',
        descripcion: 'Espacio para compartir experiencias, soluciones y oportunidades de desarrollo.',
    },
    {
        iconoClass: 'fa-solid fa-industry',
        titulo: 'Empresas Proveedoras',
        descripcion: 'Tecnología, equipos y servicios para el sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-user-gear',
        titulo: 'Profesionales y Técnicos',
        descripcion: 'Ingenieros y especialistas vinculados a la industria minera.',
    },
    {
        iconoClass: 'fa-solid fa-graduation-cap',
        titulo: 'Estudiantes',
        descripcion: 'Nuevas generaciones interesadas en minería sostenible.',
    },
    {
        iconoClass: 'fa-solid fa-building-columns',
        titulo: 'Instituciones',
        descripcion: 'Organizaciones comprometidas con el desarrollo minero.',
    },
]

export const BENEFICIOS = [
    {
        iconoClass: 'fa-solid fa-graduation-cap',
        titulo: 'Actualización Técnica',
        descripcion: 'Conoce nuevas metodologías, experiencias y soluciones aplicadas al sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-handshake-angle',
        titulo: 'Networking Especializado',
        descripcion: 'Conecta con profesionales, empresas proveedoras y actores del sector minero.',
    },
    {
        iconoClass: 'fa-solid fa-lightbulb',
        titulo: 'Innovación Minera',
        descripcion: 'Descubre tecnologías y herramientas para mejorar los procesos mineros.',
    },
    {
        iconoClass: 'fa-solid fa-chart-line',
        titulo: 'Nuevas Oportunidades',
        descripcion: 'Genera alianzas estratégicas y oportunidades de crecimiento.',
    },
]