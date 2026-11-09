import type {
  NavLinkItem,
  HeroData,
  AboutData,
  ProjectsData,
  DetailsData,
  ContactData,
} from '../types';

export const navigationLinks: NavLinkItem[] = [
  { id: 'nosotros', label: 'Nosotros', href: '#nosotros' },
  { id: 'proyectos', label: 'Proyectos', href: '#proyectos' },
  { id: 'en-detalle', label: 'En detalle', href: '#en-detalle' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const heroContent: HeroData = {
  tagline: 'Construimos lugares donde quieras quedarte.',
  videoSrc: '/video/nido-arquitectura-construccion.mp4',
  fallbackImageSrc: '/img/nido-hero-poster.webp',
};

export const aboutContent: AboutData = {
  sectionNumber: '02',
  sectionTag: 'NOSOTROS',
  blocks: [
    {
      tag: 'NOSOTROS',
      heading: 'Creemos que un buen lugar para vivir empieza mucho antes de construirlo.',
      text: 'En NIDO. desarrollamos proyectos inmobiliarios pensando más allá de los planos y los metros cuadrados.',
      imageSrc: '/img/content/nido-nosotros-filosofia.webp',
      imageAlt: 'Fachada arquitectónica residencial NIDO con sombra de árboles y terrazas',
      imagePosition: 'right',
    },
    {
      tag: 'NUESTRA MIRADA',
      heading: '¿Viviríamos aquí?',
      text: 'Nos importa dónde construimos, cómo se relaciona cada edificio con su entorno y cómo se vivirán sus espacios todos los días. Por eso, pensamos cada proyecto desde su ubicación, su arquitectura, la luz natural, la distribución y los materiales que elegimos.',
      imageSrc: '/img/content/nido-nosotros-nuestra-mirada.webp',
      imageAlt: 'Muestras de materiales nobles, piedra sinterizada, madera y acabados arquitectónicos NIDO',
      imagePosition: 'left',
    },
    {
      tag: 'LO QUE NOS MUEVE',
      heading: 'Un edificio no termina cuando lo entregamos.',
      text: 'Es ahí cuando comienza a convertirse en hogar.',
      imageSrc: '/img/content/nido-nosotros-lo-que-nos-mueve.webp',
      imageAlt: 'Ambiente residencial cálido y luminoso de NIDO integrado con terraza y naturaleza exterior',
      imagePosition: 'right',
    },
  ],
};

export const projectsContent: ProjectsData = {
  sectionNumber: '03',
  sectionTag: 'PROYECTOS',
  mainProject: {
    id: 'bosco',
    badge: 'NUESTRO PRIMER PROYECTO',
    statusTag: 'EN DESARROLLO',
    name: 'BOSCO',
    tagline: 'Vivir frente al parque lo cambia todo.',
    description: 'Un proyecto que nace de nuestra manera de entender la arquitectura, donde la ubicación, la luz natural y la relación con el entorno forman parte de cada decisión.',
    ctaText: 'CONOCE BOSCO',
    ctaLink: '#contacto',
    imageSrc: '/img/content/nido-bosco-fachada-parque.webp',
    gallery: [
      { label: 'Fachada', src: '/img/content/nido-bosco-fachada-parque.webp' },
      { label: 'Sala Comedor', src: '/img/cascanueces/nido-cascanueces-sala-comedor.webp' },
      { label: 'Cocina', src: '/img/cascanueces/nido-cascanueces-cocina.webp' },
      { label: 'Dormitorio', src: '/img/cascanueces/nido-cascanueces-dormitorio.webp' },
      { label: 'Terraza', src: '/img/cascanueces/nido-cascanueces-terraza.webp' },
    ],
  },
  trajectoryBadge: 'TRAYECTORIA',
  trajectoryTitle: 'La experiencia también se construye.',
  trajectoryDescription: 'Antes de NIDO., participamos en el desarrollo de proyectos que forman parte de nuestra trayectoria y de los aprendizajes que hoy llevamos a cada nueva propuesta.',
  priorProjects: [
    {
      id: 'moratta',
      name: 'MORATTA',
      category: 'EXPERIENCIA PREVIA',
      statusTag: 'EN ACABADOS',
      imageSrc: '/img/moratta/nido-moratta-fachada.webp',
      description: 'Residencias multifamiliares con énfasis en privacidad espacial y ventilación cruzada continua.',
      gallery: [
        { label: 'Fachada', src: '/img/moratta/nido-moratta-fachada.webp' },
        { label: 'Ingreso', src: '/img/moratta/nido-moratta-ingreso.webp' },
        { label: 'Lobby', src: '/img/moratta/nido-moratta-lobby.webp' },
        { label: 'Sala Comedor', src: '/img/moratta/nido-moratta-sala-comedor.webp' },
        { label: 'Cocina', src: '/img/moratta/nido-moratta-cocina.webp' },
        { label: 'Dormitorio', src: '/img/moratta/nido-moratta-dormitorio-principal.webp' },
        { label: 'Baño', src: '/img/moratta/nido-moratta-bano.webp' },
      ],
    },
    {
      id: 'cascanueces',
      name: 'CASCANUECES',
      category: 'EXPERIENCIA PREVIA',
      statusTag: 'EN CONSTRUCCIÓN',
      imageSrc: '/img/cascanueces/nido-cascanueces-fachada-detalle.webp',
      description: 'Edificio residencial exclusivo diseñado en armonía con su entorno urbano.',
      gallery: [
        { label: 'Fachada', src: '/img/cascanueces/nido-cascanueces-fachada-detalle.webp' },
        { label: 'Sala Comedor', src: '/img/cascanueces/nido-cascanueces-sala-comedor.webp' },
        { label: 'Cocina', src: '/img/cascanueces/nido-cascanueces-cocina.webp' },
        { label: 'Dormitorio', src: '/img/cascanueces/nido-cascanueces-dormitorio.webp' },
        { label: 'Ingreso', src: '/img/cascanueces/nido-cascanueces-ingreso.webp' },
      ],
    },
  ],
};

export const detailsContent: DetailsData = {
  sectionNumber: '04',
  sectionTag: 'EN DETALLE',
  title: 'Cada elección tiene una razón.',
  intro: 'Creemos que los detalles hacen la diferencia. Por eso, prestamos atención a los materiales, al diseño y a la calidad de los productos que incorporamos en cada proyecto.',
  pillars: [
    {
      index: '01',
      category: 'MATERIALES',
      title: 'Materiales que perduran.',
      description: 'Elegimos materiales pensando tanto en su estética como en su resistencia y durabilidad. Nos interesan sus texturas, sus acabados y cómo se integran a la arquitectura de cada proyecto.',
      actionText: 'Texturas y acabados',
      imageSrc: '/img/content/nido-detalle-01-materiales.webp',
    },
    {
      index: '02',
      category: 'ARQUITECTURA',
      title: 'Diseño con intención.',
      description: 'Pensamos la arquitectura como un conjunto de decisiones que deben funcionar entre sí. Desde la distribución de los espacios hasta la fachada, buscamos que cada elemento tenga un propósito.',
      actionText: 'Proporción y luz',
      imageSrc: '/img/content/nido-detalle-02-arquitectura.webp',
    },
    {
      index: '03',
      category: 'CALIDAD Y RESPALDO',
      title: 'Elegimos con quién construir.',
      description: 'Trabajamos con productos y proveedores que nos ofrecen calidad, garantía y respaldo. Porque para nosotros, una buena elección también significa poder responder cuando nuestros clientes lo necesitan.',
      actionText: 'Garantía constructiva',
      imageSrc: '/img/content/nido-detalle-03-calidad-respaldo.webp',
    },
  ],
};

export const contactContent: ContactData = {
  sectionNumber: '05',
  sectionTag: 'CONTACTO',
  title: 'Conversemos.',
  subtitle: '¿Te interesa alguno de nuestros proyectos? Nos encantará ayudarte a encontrar un lugar donde quieras quedarte.',
  formTitle: 'Hablemos de tu próximo hogar.',
  imageSrc: '/img/content/nido-contacto-arquitectura-hogar.webp',
  channels: [
    {
      id: 'ws',
      type: 'whatsapp',
      title: 'WhatsApp',
      value: '+51 987 654 321',
      subtext: 'Atención directa inmediata',
      actionUrl: 'https://wa.me/51987654321',
    },
    {
      id: 'mail',
      type: 'email',
      title: 'Correo',
      value: 'hola@nidoperu.com',
      subtext: 'Escríbenos directamente para cotizaciones',
      actionUrl: 'mailto:hola@nidoperu.com',
    },
    {
      id: 'ig',
      type: 'instagram',
      title: 'Instagram',
      value: '@nidoperu',
      subtext: 'Sigue nuestras novedades y avances',
      actionUrl: 'https://instagram.com/nidoperu',
    },
  ],
  visitInfo: {
    title: 'Visítanos',
    description: 'Conversemos en nuestra oficina y conoce más sobre nuestros proyectos.',
    actionLabel: 'VER UBICACIÓN',
    mapUrl: 'https://maps.google.com',
  },
};
