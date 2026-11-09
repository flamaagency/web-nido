import React, { useState } from 'react';
import { ScrollReveal, Parallax, ScrollProgressBar } from '../../hooks/useScrollAnimations';

export const Proposal2: React.FC = () => {
  const [isManifestoOpen, setIsManifestoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cascanuecesImage, setCascanuecesImage] = useState('/img/cascanueces/fachada-principal.webp');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#faf9f6] font-body-md text-[#1a1c1a] antialiased min-h-screen">
      <ScrollProgressBar color="#9b5238" />
      {/* Header fijo */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-[#D8D4CC]">
        <div className="h-16 md:h-20 w-full px-4 sm:px-6 md:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-sm md:gap-space-md">
            <a
              className="hover:opacity-85 transition-opacity flex items-center"
              href="#inicio"
              aria-label="NIDO Inicio"
            >
              <img
                src="/img/logotipo-nido.png"
                alt="NIDO."
                className="h-5.5 md:h-7 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-space-lg">
            <a
              className="font-label-code text-[11px] tracking-widest transition-colors text-black font-semibold hover:text-[#9b5238]"
              href="#manifiesto"
            >
              01 / MANIFIESTO
            </a>
            <a
              className="font-label-code text-[11px] text-[#555349] hover:text-[#9b5238] font-medium tracking-widest transition-colors"
              href="#proyectos"
            >
              02 / PROYECTOS
            </a>
            <a
              className="font-label-code text-[11px] text-[#555349] hover:text-[#9b5238] font-medium tracking-widest transition-colors"
              href="#detalle"
            >
              03 / EN DETALLE
            </a>
            <a
              className="font-label-code text-[11px] text-[#555349] hover:text-[#9b5238] font-medium tracking-widest transition-colors"
              href="#contacto"
            >
              04 / CONTACTO
            </a>
          </nav>

          <div className="flex items-center gap-space-sm md:gap-space-md">
            <a
              className="hidden sm:inline-flex items-center border border-[#0C0C0C] px-space-md py-space-xs font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C] hover:bg-[#9b5238] hover:border-[#9b5238] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              href="#contacto"
            >
              [ INICIAR DIÁLOGO ]
            </a>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-[18px]">
                person
              </span>
            </div>
            {/* Hamburger para móviles */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-1.5 text-black hover:text-[#605e5a] transition-colors ml-1"
              aria-label="Abrir menú"
            >
              <span className="material-symbols-outlined text-[24px]">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-[#faf9f6] border-b border-[#D8D4CC] px-6 py-6 space-y-4 font-label-code text-[12px] uppercase tracking-wider animate-in fade-in">
            <a
              href="#manifiesto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1 text-black font-semibold border-b border-[#D8D4CC]/40"
            >
              01 / Manifiesto
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1 text-[#444748] border-b border-[#D8D4CC]/40"
            >
              02 / Proyectos
            </a>
            <a
              href="#detalle"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1 text-[#444748] border-b border-[#D8D4CC]/40"
            >
              03 / En Detalle
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-1 text-[#444748]"
            >
              04 / Contacto
            </a>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main id="inicio" className="w-full pt-20 bg-[#faf9f6] min-h-screen">
        <div className="flex flex-col w-full relative">
          {/* Subtle Architectural Intersection Guide Lines with Parallax */}
          <Parallax speed={0.12} className="pointer-events-none absolute inset-0 overflow-hidden z-0 opacity-40">
            <svg
              className="w-full h-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1440 3800"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                stroke="#D8D4CC"
                strokeDasharray="4 6"
                strokeWidth="0.75"
                x1="-100"
                x2="1600"
                y1="420"
                y2="1200"
              ></line>
              <line
                stroke="#9b5238"
                strokeOpacity="0.6"
                strokeWidth="0.75"
                x1="120"
                x2="1440"
                y1="1800"
                y2="2800"
              ></line>
              <line
                stroke="#EBE8E1"
                strokeWidth="0.75"
                x1="880"
                x2="880"
                y1="200"
                y2="3600"
              ></line>
              <line
                stroke="#EBE8E1"
                strokeWidth="0.75"
                x1="280"
                x2="280"
                y1="900"
                y2="3200"
              ></line>
            </svg>
          </Parallax>

          {/* HERO SECTION */}
          <section className="relative z-10 w-full px-margin md:px-margin-desktop pt-space-xl md:pt-space-2xl pb-space-2xl overflow-hidden">
            {/* Video de obra arquitectónica mimetizado con el fondo claro de la Propuesta 2 */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster="/img/nido-hero-poster.webp"
                className="w-full h-full object-cover opacity-45 md:opacity-50 filter contrast-110 grayscale-[15%] brightness-95"
              >
                <source src="/video/nido-hero.mp4" type="video/mp4" />
              </video>
              {/* Capas de fundido orgánico con el lienzo #faf9f6: protege la tipografía izquierda sin apagar el video */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/85 to-transparent w-full md:w-3/5" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#faf9f6] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#faf9f6] to-transparent" />
            </div>

            {/* Monumental Header Block con renglones separados y respirados */}
            <div className="relative z-10 max-w-7xl">
              <h1 className="font-headline-xl text-[25px] xs:text-[29px] sm:text-[54px] md:text-[88px] lg:text-[124px] leading-[1.15] sm:leading-[1.18] md:leading-[1.2] tracking-tight text-[#0C0C0C] font-bold uppercase break-normal">
                NIDO.
                <br />
                <span className="whitespace-nowrap">ARQUITECTURA</span>
                <br />
                <span className="whitespace-nowrap">Y DESARROLLO</span>
              </h1>
            </div>

            {/* Secondary Meta Grid & Mini Book-style Floating Card */}
            <div className="relative z-10 mt-space-xl md:mt-space-2xl grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
              {/* Subtitle block con legibilidad sólida y color oficial Piedra */}
              <div className="md:col-span-5 space-y-space-xs">
                <p className="font-headline-md text-[24px] leading-tight text-[#0C0C0C] font-semibold">
                  Desarrolladora Inmobiliaria
                  <br />
                  <span className="text-[#555349] font-normal">
                    / Arquitectura Residencial
                  </span>
                </p>
              </div>

              {/* Mini Project Teaser Card (Hashimoto Book Style) */}
              <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
                <a
                  className="group block bg-[#0C0C0C] text-white p-space-md transition-all duration-300 hover:bg-black shadow-xl border border-black/10"
                  href="#cascanueces"
                >
                  <div className="flex items-start justify-between pb-space-sm">
                    <span className="font-label-code text-[11px] text-white/80 tracking-widest uppercase font-medium">
                      / LANZAMIENTO DESTACADO
                    </span>
                    <span className="font-label-code text-[11px] text-[#dbb294] font-bold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      [ + ]
                    </span>
                  </div>
                  <div className="flex gap-space-md items-center">
                    <div className="w-16 h-20 bg-[#EBE8E1] shrink-0 overflow-hidden">
                      <img
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                        alt="CASCANUECES render de fachada"
                        src="/img/cascanueces/fachada-vertical.webp"
                      />
                    </div>
                    <div className="space-y-1">
                      <p className="font-headline-md text-[17px] leading-snug font-medium text-white">
                        NUESTRO PROYECTO // CASCANUECES
                      </p>
                      <p className="font-label-code text-[10px] leading-tight text-white/85 tracking-wider">
                        Residencias exclusivas concebidas con materiales nobles.
                        <br />
                        2026 Entrega Programada.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Editorial Slogan & Sub-navigation Row */}
            <div className="relative z-10 mt-space-2xl pt-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md bg-transparent">
              <div>
                <span className="font-label-code text-[11px] text-[#555349] font-medium tracking-widest uppercase block mb-1">
                  / PROPÓSITO EDITORIAL
                </span>
                <p className="font-body-lg text-[18px] text-[#0C0C0C] font-light tracking-tight">
                  Construimos lugares donde quieras quedarte.
                </p>
              </div>
              <div className="flex items-center gap-space-md font-label-code text-[11px] text-[#555349] font-medium tracking-widest uppercase">
                <a className="hover:text-[#0C0C0C] transition-colors" href="#manifiesto">
                  Manifiesto
                </a>
                <span className="text-[#a2a397]">/</span>
                <a className="hover:text-[#0C0C0C] transition-colors" href="#proyectos">
                  Proyectos
                </a>
                <span className="text-[#a2a397]">/</span>
                <a className="hover:text-[#0C0C0C] transition-colors" href="#detalle">
                  En Detalle
                </a>
                <span className="text-[#a2a397]">/</span>
                <a className="hover:text-[#0C0C0C] transition-colors" href="#contacto">
                  Contacto
                </a>
              </div>
            </div>
          </section>

          {/* SECTION 01: MANIFIESTO */}
          <section
            className="relative z-10 w-full px-margin md:px-margin-desktop py-space-2xl bg-[#f4f3f0]/40"
            id="manifiesto"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
              {/* Left Column: Architectural Fragment Image with Parallax & ScrollReveal */}
              <ScrollReveal animation="fade-right" className="md:col-span-5 lg:col-span-4 space-y-space-md">
                <Parallax speed={-0.06} className="relative w-full aspect-[4/5] bg-[#efeeeb] overflow-hidden shadow-xs">
                  <img
                    className="w-full h-full object-cover"
                    alt="Quiet interior space of a luxury residence in San Isidro, raw polished concrete wall meeting honed bone travertine floor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW0N2mzuNq_HS8x4sapBBNOWe8QiPEC-DazKUP4-iU2snVqpzrt0JNra8W9V_6H9PPhayOUVGoQWdj71wdJc_vpYeNGzcOIJVyRXCm7f8Mo45b7adNZmQWTtKlxiZ-e8rGVbUasILrZ0brVv5nHFOagzZDr4rBJHfGk8W1SpgD9G969Bm6zL5VEjljM6cwdaCinct3aHuoJAbjiuCNhzbhS5kwoVQOFZX5Prplkaxn"
                  />
                  <div className="absolute bottom-2 left-2 px-space-xs py-0.5 bg-black/80 font-label-code text-[9px] text-[#F8F7F4] tracking-widest uppercase">
                    ESTUDIO MATÉRICO // SAN ISIDRO
                  </div>
                </Parallax>
                <div className="space-y-space-xs">
                  <span className="font-label-code text-[11px] text-[#73706B] tracking-widest block uppercase">
                    01 // VISIÓN FILOSÓFICA
                  </span>
                  <p className="font-body-sm text-[13px] text-[#605e5a]">
                    La arquitectura no es adorno superficial, sino una disciplina silenciosa de luz, proporción y gravedad.
                  </p>
                </div>
              </ScrollReveal>

              {/* Right Column: Editorial Text & Questions with ScrollReveal */}
              <ScrollReveal animation="fade-up" delay={150} className="md:col-span-7 lg:col-span-7 lg:col-start-6 space-y-space-lg">
                <div className="space-y-space-md">
                  <p className="font-headline-md text-[22px] md:text-[24px] text-[#0C0C0C] leading-relaxed font-normal">
                    Creemos que un buen lugar para vivir empieza mucho antes de construirlo.
                  </p>
                  <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed">
                    En NIDO. desarrollamos proyectos inmobiliarios pensando más allá de los planos y los metros cuadrados. Nos importa dónde construimos, cómo se relaciona cada edificio con su entorno y cómo se vivirán sus espacios todos los días.
                  </p>
                  <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed">
                    Por eso, pensamos cada proyecto desde su ubicación, su arquitectura, la luz natural, la distribución y los materiales que elegimos.
                  </p>
                </div>

                {/* Highlight Callout Box */}
                <div className="p-space-lg bg-white space-y-space-sm border border-[#D8D4CC]/40">
                  <span className="font-label-code text-[11px] text-[#9b5238] tracking-widest uppercase block">
                    [ PREGUNTA RECTORA ]
                  </span>
                  <p className="font-headline-md text-[20px] md:text-[22px] text-[#0C0C0C] font-medium tracking-tight">
                    ¿Viviríamos aquí?
                  </p>
                  <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed pt-space-xs">
                    Porque creemos que un edificio no termina cuando lo entregamos. Es ahí cuando comienza a convertirse en hogar.
                  </p>
                  <p className="font-label-code text-[11px] text-[#555349] tracking-wider uppercase pt-space-sm">
                    NIDO. — construimos lugares donde quieras quedarte. // TIERRA · MATERIA · HOGAR · PERMANENCIA
                  </p>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => setIsManifestoOpen(!isManifestoOpen)}
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-[#F8F7F4] text-[#0C0C0C] font-label-code text-[11px] uppercase tracking-wider hover:bg-[#0C0C0C] hover:text-[#F8F7F4] transition-colors cursor-pointer border border-[#D8D4CC]"
                  >
                    <span>
                      {isManifestoOpen
                        ? '[ MENOS DETALLE [ - ] ]'
                        : '[ LEER MANIFIESTO COMPLETO [ + ] ]'}
                    </span>
                  </button>

                  {/* Collapsible Extended Manifesto Text */}
                  {isManifestoOpen && (
                    <div className="mt-space-md p-space-md bg-[#faf9f6] border border-[#a2a397]/50 space-y-space-sm font-body-sm text-[13px] text-[#605e5a] leading-relaxed animate-in fade-in">
                      <p className="font-medium text-[#555349]">
                        "La identidad de NIDO. comienza antes de construir, comienza en el lugar, en la materia y en las capas que forman un territorio. Nuestra identidad toma como punto de partida los estratos de tierra, formas que se superponen, conviven y se transforman con el tiempo. Como la construcción de un NIDO."
                      </p>
                      <p>
                        De esa manera, nace un lenguaje visual cálido y con un lujo sutil, donde la naturaleza y la arquitectura conviven en equilibrio. Los estratos de limo, piedra, arcilla y arena guían cada textura y escala habitacional.
                      </p>
                      <p className="font-label-code text-[11px] text-[#9b5238] uppercase">
                        // TIERRA · MATERIA · HOGAR · PERMANENCIA
                      </p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* SECTION 02: PROYECTOS / RESIDENCIAS */}
          <section className="relative z-10 w-full px-margin md:px-margin-desktop py-space-2xl" id="proyectos">
            {/* Giant Section Title */}
            <ScrollReveal animation="fade-up" className="mb-space-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-lg">
                <h2 className="font-headline-xl text-[34px] sm:text-[60px] md:text-[98px] leading-[0.95] md:leading-[0.92] tracking-[-0.035em] text-[#0C0C0C] font-semibold uppercase">
                  PROYECTOS
                  <br />
                  <span className="text-[#605e5a] font-light">/ RESIDENCIAS</span>
                </h2>
                <a
                  className="inline-block font-label-code text-[11px] text-[#0C0C0C] hover:text-[#605e5a] uppercase tracking-widest pb-2"
                  href="#contacto"
                >
                  [ VER TODOS LOS PROYECTOS [ + ] ]
                </a>
              </div>
            </ScrollReveal>

            {/* Asymmetric Project Mosaic */}
            <div className="space-y-space-2xl">
              {/* PROJECT 01: CASCANUECES (PROYECTO INSIGNIA CON RENDERS REALES) */}
              <ScrollReveal animation="scale" duration={950}>
                <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start" id="cascanueces">
                  <div className="md:col-span-8 lg:col-span-8 space-y-space-sm">
                    <div className="flex items-center justify-between font-label-code text-[11px] text-[#605e5a] tracking-widest uppercase">
                      <span>/ PROJECT — LANZAMIENTO EXCLUSIVO</span>
                      <span className="text-[#9b5238] font-bold">[ 2026 ]</span>
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-[#efeeeb] overflow-hidden group border border-[#D8D4CC]/60 shadow-xs">
                      <img
                        className="w-full h-full object-cover transition-opacity duration-500"
                        alt="CASCANUECES render arquitectónico oficial"
                        src={cascanuecesImage}
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#9b5238] text-white font-label-code text-[9px] uppercase tracking-widest">
                        RENDER OFICIAL
                      </div>
                    </div>

                    {/* Selector interactivo de espacios del proyecto */}
                    <div className="pt-1 flex items-center gap-1.5 overflow-x-auto pb-2 font-label-code text-[10px] uppercase tracking-wider">
                      <span className="text-[#73706B] mr-1 hidden sm:inline">Vistas:</span>
                      {[
                        { label: 'Fachada', src: '/img/cascanueces/fachada-principal.webp' },
                        { label: 'Sala Comedor', src: '/img/cascanueces/sala-comedor-1.webp' },
                        { label: 'Cocina', src: '/img/cascanueces/cocina.webp' },
                        { label: 'Dormitorio', src: '/img/cascanueces/dormitorio.webp' },
                        { label: 'Ingreso', src: '/img/cascanueces/ingreso.webp' },
                      ].map((item, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCascanuecesImage(item.src)}
                          className={`px-2.5 py-1 border transition-all cursor-pointer whitespace-nowrap ${
                            cascanuecesImage === item.src
                              ? 'bg-[#0C0C0C] text-white border-black font-semibold'
                              : 'bg-white text-[#555349] border-[#D8D4CC] hover:border-black'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 lg:col-span-4 md:pt-space-lg space-y-space-md">
                    <div className="space-y-space-xs">
                      <span className="font-label-code text-[11px] text-[#73706B] tracking-widest uppercase">
                        PROYECTO 01
                      </span>
                      <h3 className="font-headline-xl text-[44px] sm:text-[56px] text-[#0C0C0C] tracking-tight font-medium uppercase leading-none">
                        CASCANUECES
                      </h3>
                      <p className="font-body-lg text-[18px] text-[#0C0C0C] font-light italic">
                        Arquitectura residencial que dialoga con su entorno.
                      </p>
                    </div>

                    <div className="space-y-space-xs font-body-sm text-[13px] text-[#605e5a] pt-space-xs">
                      <p>
                        <strong className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C]">
                          Role:
                        </strong>{' '}
                        Arquitectura, Interiorismo y Desarrollo
                      </p>
                      <p>
                        <strong className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C]">
                          Espacios:
                        </strong>{' '}
                        Sala Comedor, Cocina Integrada, Suites y Despensa
                      </p>
                      <p>
                        <strong className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C]">
                          Materialidad:
                        </strong>{' '}
                        Maderas Nobles, Piedra Natural & Luz Tamizada
                      </p>
                      <p>
                        <strong className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C]">
                          Estado:
                        </strong>{' '}
                        Lanzamiento Oficial 2026
                      </p>
                    </div>

                    <div className="pt-space-sm">
                      <a
                        className="inline-flex items-center gap-space-xs font-label-code text-[11px] text-[#0C0C0C] hover:text-[#9b5238] uppercase tracking-widest transition-colors font-medium"
                        href="#contacto"
                      >
                        [ SOLICITAR DOSSIER CASCANUECES [ ↗ ] ]
                      </a>
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* TWO-COLUMN ROW: TRAYECTORIA PREVIA (MORATTA & BOSCO) CON PARALLAX ASIMÉTRICO */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop pt-space-xl">
                {/* PROJECT 02: MORATTA */}
                <ScrollReveal animation="fade-up" delay={100} className="md:col-span-6 lg:col-span-5 space-y-space-sm">
                  <article className="group cursor-pointer p-4 -m-4 rounded-xs border border-transparent hover:border-[#9b5238]/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center justify-between font-label-code text-[11px] text-[#605e5a] tracking-widest uppercase mb-2">
                      <span className="group-hover:text-[#9b5238] transition-colors">/ PROJECT — TRAYECTORIA</span>
                      <span className="text-black font-semibold">[ CONCLUIDO ]</span>
                    </div>
                    <Parallax speed={0.18} className="relative w-full aspect-[4/3] bg-[#efeeeb] overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                        alt="Fachada de edificio residencial MORATTA en Lima"
                        src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=900&auto=format&fit=crop"
                      />
                    </Parallax>
                    <div className="space-y-space-xs pt-space-xs">
                      <h4 className="font-headline-md text-[24px] text-[#0C0C0C] font-medium uppercase group-hover:text-[#9b5238] transition-colors">
                        MORATTA
                      </h4>
                      <p className="font-body-md text-[15px] text-[#605e5a] leading-normal">
                        Residencias multifamiliares con énfasis en privacidad espacial y ventilación cruzada continua.
                      </p>
                      <p className="font-body-sm text-[13px] text-[#73706B] pt-space-xs">
                        <span className="font-label-code text-[11px] uppercase text-[#0C0C0C]">
                          Role:
                        </span>{' '}
                        Gestión y Desarrollo Previo
                      </p>
                    </div>
                  </article>
                </ScrollReveal>

                {/* PROJECT 03: BOSCO */}
                <ScrollReveal animation="fade-up" delay={250} className="md:col-span-6 lg:col-span-6 lg:col-start-7 space-y-space-sm md:mt-space-2xl">
                  <article className="group cursor-pointer p-4 -m-4 rounded-xs border border-transparent hover:border-[#9b5238]/40 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-center justify-between font-label-code text-[11px] text-[#605e5a] tracking-widest uppercase mb-2">
                      <span className="group-hover:text-[#9b5238] transition-colors">/ PROJECT — EN PORTAFOLIO</span>
                      <span className="text-[#9b5238] font-bold">[ DESARROLLO ]</span>
                    </div>
                    <Parallax speed={-0.16} className="relative w-full aspect-[16/11] bg-[#efeeeb] overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                        alt="Proyecto residencial frente al parque BOSCO"
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop"
                      />
                    </Parallax>
                    <div className="space-y-space-xs pt-space-xs">
                      <h4 className="font-headline-md text-[24px] text-[#0C0C0C] font-medium uppercase group-hover:text-[#9b5238] transition-colors">
                        BOSCO
                      </h4>
                      <p className="font-body-md text-[15px] text-[#605e5a] leading-normal">
                        Arquitectura contemporánea frente al parque, donde la luz natural y el entorno verde definen cada espacio.
                      </p>
                      <p className="font-body-sm text-[13px] text-[#73706B] pt-space-xs">
                        <span className="font-label-code text-[11px] uppercase text-[#0C0C0C]">
                          Role:
                        </span>{' '}
                        Conceptualización y Diseño
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* SECTION 03: EN DETALLE */}
          <section
            className="relative z-10 w-full px-margin md:px-margin-desktop py-space-2xl bg-[#e9e8e5]/30 border-t border-b border-[#D8D4CC]/50"
            id="detalle"
          >
            <div className="max-w-7xl mx-auto">
              <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-baseline justify-between mb-space-xl gap-space-sm">
                <div>
                  <span className="font-label-code text-[11px] text-[#73706B] tracking-widest uppercase block">
                    03 // ESPECIFICACIONES TÉCNICAS
                  </span>
                  <h2 className="font-headline-lg text-[40px] text-[#0C0C0C] uppercase font-semibold">
                    EN DETALLE
                  </h2>
                </div>
                <p className="font-label-code text-[11px] text-[#605e5a] uppercase tracking-widest">
                  RIGOR TÉCNICO // ESTÁNDAR GLOBAL
                </p>
              </ScrollReveal>

              {/* 3-Column Architectural Specs Bento con animación escalonada */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                {/* Spec 01 */}
                <ScrollReveal animation="fade-up" delay={0} className="h-full">
                  <div className="p-space-lg bg-white flex flex-col justify-between space-y-space-lg border border-[#D8D4CC]/40 hover:border-[#9b5238] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full group cursor-pointer">
                    <div className="space-y-space-sm">
                      <span className="font-label-code text-[11px] text-[#9b5238] tracking-widest block uppercase group-hover:tracking-[0.25em] transition-all">
                        01 / MATERIALES
                      </span>
                      <h3 className="font-headline-md text-[20px] text-[#0C0C0C] font-medium group-hover:text-[#9b5238] transition-colors">
                        Materiales que perduran.
                      </h3>
                      <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed">
                        Elegimos piedras sinterizadas, maderas nobles y concreto visto que envejecen con dignidad frente al tiempo y la brisa marina.
                      </p>
                    </div>
                    <div className="w-full h-36 bg-[#efeeeb] overflow-hidden">
                      <img
                        className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                        alt="Close up architectural detail of honed travertine stone texture meeting warm brushed European white oak wood joinery"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeb7-ExU5WUv8KlEdG6KrRTAlOUbVMzelZYv9aleYAiGt7bJV8Ym0DRGEJnit51OrfgIwUj7ETYb3noLfCPgkK6XUmu6GEJr774QkU1OVyIjCuBqRU4s-OERS-xjJQTcNcNlPiUfz8yI2CuRCLrCWWNwze7Viph8fkBdB1tejA5xvgU0OZhrGeQ2vBCb-sxcE399T-dcjCVZQ_fpIBdOVH6gzsgwvAUOMkleJDWb-_"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Spec 02 */}
                <ScrollReveal animation="fade-up" delay={150} className="h-full">
                  <div className="p-space-lg bg-white flex flex-col justify-between space-y-space-lg border border-[#D8D4CC]/40 hover:border-[#9b5238] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full group cursor-pointer">
                    <div className="space-y-space-sm">
                      <span className="font-label-code text-[11px] text-[#9b5238] tracking-widest block uppercase group-hover:tracking-[0.25em] transition-all">
                        02 / ARQUITECTURA
                      </span>
                      <h3 className="font-headline-md text-[20px] text-[#0C0C0C] font-medium group-hover:text-[#9b5238] transition-colors">
                        Diseño con intención.
                      </h3>
                      <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed">
                        Pensamos la arquitectura como un conjunto de decisiones que deben funcionar entre sí: confort térmico, acústica sellada y privacidad visual.
                      </p>
                    </div>
                    <div className="w-full h-36 bg-[#efeeeb] overflow-hidden">
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
                        alt="Technical architectural section blueprint diagram of an apartment interior layout"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzWPiaOV-o9W0BSbjBH9KP4ZNf0-N1aqIEhOmVkJOQDYXNKn4xlNJk-HPZKKAJ_DoADgaO0aRHlbahB7eSV4TKFbn6dWoZRXXQhBAtSJQKbMzZhrBvx4HEEQuYRRdE7HuRmqpMJYobtsgudF3Q87tyEk8ujD36OGA9tbIktnFZF5n3VKr1CrGOwak0tNNXP8b3mBj-IKkkRqqmOQ66i5y4-bM5yH-ApvrxCHWiA81z"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Spec 03 */}
                <ScrollReveal animation="fade-up" delay={300} className="h-full">
                  <div className="p-space-lg bg-white flex flex-col justify-between space-y-space-lg border border-[#D8D4CC]/40 hover:border-[#9b5238] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full group cursor-pointer">
                    <div className="space-y-space-sm">
                      <span className="font-label-code text-[11px] text-[#9b5238] tracking-widest block uppercase group-hover:tracking-[0.25em] transition-all">
                        03 / CALIDAD Y RESPALDO
                      </span>
                      <h3 className="font-headline-md text-[20px] text-[#0C0C0C] font-medium group-hover:text-[#9b5238] transition-colors">
                        Elegimos con quién construir.
                      </h3>
                      <p className="font-body-md text-[15px] text-[#605e5a] leading-relaxed">
                        Trabajamos con productos y proveedores de clase mundial para garantizar garantías de posventa estructurales sólidas y duraderas.
                      </p>
                    </div>
                    <div className="w-full h-36 bg-[#efeeeb] overflow-hidden">
                      <img
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700 ease-out"
                        alt="Architectural construction precision joint detail, sleek aluminum frame window glazing meeting fair-faced architectural concrete corner"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhX7TGjiSTAll1ER-WOYzbkGPmIHwNZCsigIqfnALyzhIf0QlVR2aSejHcHCSW4ZWdMrRX10VnK5nafevPy9WeUoZwanpR2ZSb35AX8UsDtNYP6bZjuQ0k7AXrZRsloM3vLKMspHS7aXc2XIYLJChckALEgk2qYDVLt960hdNPDeqyi1L7GFpHBMWDF1_Ng7edanz44DTLDz1sbFdCiGswHA8WeAQt32R4p9LmYqFz"
                      />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          {/* SECTION 04: DIÁLOGO & CONTACTO */}
          <section className="relative z-10 w-full px-margin md:px-margin-desktop py-space-2xl" id="contacto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
              {/* Contact Info & Channels Column */}
              <ScrollReveal animation="fade-up" className="lg:col-span-5 space-y-space-xl">
                <div className="space-y-space-xs">
                  <span className="font-label-code text-[11px] text-[#73706B] tracking-widest uppercase block">
                    04 // INICIAR CONVERSACIÓN
                  </span>
                  <h2 className="font-headline-lg text-[40px] text-[#0C0C0C] font-semibold tracking-tight uppercase leading-tight">
                    ESTAMOS LISTOS
                    <br />
                    PARA ESCUCHARTE.
                  </h2>
                  <p className="font-body-md text-[15px] text-[#605e5a] pt-space-xs">
                    Reserva una cita privada en nuestro showroom o solicita el dossier técnico completo de CASCANUECES.
                  </p>
                </div>

                <div className="space-y-space-md">
                  <span className="font-label-code text-[11px] text-[#605e5a] tracking-widest uppercase block">
                    / CANALES DISPONIBLES
                  </span>
                  <div className="flex flex-col space-y-space-sm font-label-code text-[11px]">
                    <a
                      className="text-[#0C0C0C] hover:text-[#9b5238] tracking-wider uppercase transition-colors"
                      href="https://wa.me/51999999999"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      WhatsApp [ 999-999-999 ]
                    </a>
                    <a
                      className="text-[#0C0C0C] hover:text-[#9b5238] tracking-wider uppercase transition-colors"
                      href="mailto:ejemplo@ejemplo.com"
                    >
                      Correo [ ejemplo@ejemplo.com ]
                    </a>
                    <a
                      className="text-[#0C0C0C] hover:text-[#9b5238] tracking-wider uppercase transition-colors"
                      href="https://instagram.com/nidoperu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram [ @nidoperu ]
                    </a>
                    <span className="text-[#605e5a] tracking-wider uppercase flex items-start gap-1.5 pt-1">
                      <span className="material-symbols-outlined text-[15px] text-[#9b5238] shrink-0">location_on</span>
                      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </span>
                  </div>
                </div>

                <div className="p-space-md bg-[#efeeeb] space-y-1">
                  <span className="font-label-code text-[10px] text-[#73706B] uppercase tracking-wider block">
                    HORARIO DE ATENCIÓN CURATORIAL
                  </span>
                  <p className="font-body-sm text-[13px] text-[#0C0C0C]">
                    Lunes a Viernes — 09:00 a 18:30 hrs
                    <br />
                    Sábados previa coordinación exclusiva.
                  </p>
                </div>
              </ScrollReveal>

              {/* Contact Registration Form */}
              <ScrollReveal animation="fade-up" delay={150} className="lg:col-span-7 lg:col-start-6">
                <div className="bg-white p-space-lg md:p-space-xl border border-[#D8D4CC]/60 shadow-sm">
                  <form onSubmit={handleSubmit} className="space-y-space-lg" id="contact-form">
                    <div className="space-y-space-xs">
                      <label
                        className="block font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wider"
                        htmlFor="name"
                      >
                        01 / NOMBRE COMPLETO *
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-[#0C0C0C] pb-2 pt-1 font-body-md text-[#0C0C0C] placeholder:font-label-code placeholder:text-[#605e5a]/40 placeholder:uppercase focus:outline-hidden focus:border-b-2 focus:border-black transition-all"
                        id="name"
                        placeholder="ESCRIBE TU NOMBRE..."
                        required
                        type="text"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wider"
                          htmlFor="email"
                        >
                          02 / CORREO ELECTRÓNICO *
                        </label>
                        <input
                          className="w-full bg-transparent border-0 border-b border-[#0C0C0C] pb-2 pt-1 font-body-md text-[#0C0C0C] placeholder:font-label-code placeholder:text-[#605e5a]/40 placeholder:uppercase focus:outline-hidden focus:border-b-2 focus:border-black transition-all"
                          id="email"
                          placeholder="CORREO@DOMINIO.COM"
                          required
                          type="email"
                        />
                      </div>
                      <div className="space-y-space-xs">
                        <label
                          className="block font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wider"
                          htmlFor="phone"
                        >
                          03 / TELÉFONO O WHATSAPP
                        </label>
                        <input
                          className="w-full bg-transparent border-0 border-b border-[#0C0C0C] pb-2 pt-1 font-body-md text-[#0C0C0C] placeholder:font-label-code placeholder:text-[#605e5a]/40 placeholder:uppercase focus:outline-hidden focus:border-b-2 focus:border-black transition-all"
                          id="phone"
                          placeholder="+51 900 000 000"
                          type="tel"
                        />
                      </div>
                    </div>

                    <div className="space-y-space-xs">
                      <label
                        className="block font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wider"
                        htmlFor="project"
                      >
                        04 / PROYECTO DE INTERÉS
                      </label>
                      <select
                        className="w-full bg-transparent border-0 border-b border-[#0C0C0C] pb-2 pt-1 font-body-md text-[#0C0C0C] focus:outline-hidden focus:border-b-2 focus:border-black transition-all cursor-pointer"
                        id="project"
                      >
                        <option value="CASCANUECES">CASCANUECES — Residencial Exclusivo (Lanzamiento)</option>
                        <option value="FUTUROS">Futuros desarrollos residenciales</option>
                        <option value="OTRO">Consulta general o colaboración</option>
                      </select>
                    </div>

                    <div className="space-y-space-xs">
                      <label
                        className="block font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wider"
                        htmlFor="message"
                      >
                        05 / MENSAJE
                      </label>
                      <textarea
                        className="w-full bg-transparent border-0 border-b border-[#0C0C0C] pb-2 pt-1 font-body-md text-[#0C0C0C] placeholder:font-label-code placeholder:text-[#605e5a]/40 placeholder:uppercase focus:outline-hidden focus:border-b-2 focus:border-black transition-all resize-none"
                        id="message"
                        placeholder="DETALLES DE METRAJE O CONSULTA ESPECÍFICA..."
                        rows={3}
                      ></textarea>
                    </div>

                    <div className="pt-space-sm flex items-center justify-between">
                      <button
                        className="px-space-lg py-space-sm bg-black text-[#F8F7F4] font-label-code text-[11px] uppercase tracking-widest hover:bg-[#605e5a] transition-colors cursor-pointer"
                        type="submit"
                      >
                        [ REGISTRAR CONSULTA [ ↗ ] ]
                      </button>
                    </div>

                    {formSubmitted && (
                      <div
                        className="p-space-sm bg-[#EBE8E1] font-label-code text-[11px] text-[#0C0C0C] uppercase tracking-wide border border-[#D8D4CC]"
                        id="form-feedback"
                      >
                        [ MENSAJE RECIBIDO // NUESTRO EQUIPO SE CONTACTARÁ A LA BREVEDAD ]
                      </div>
                    )}
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-[#faf9f6] border-t border-[#D8D4CC] pt-space-2xl pb-space-xl">
        <div className="w-full px-margin md:px-margin-desktop">
          <div className="border-b border-[#D8D4CC] pb-space-xl mb-space-xl">
            <a className="group block w-full" href="#contacto">
              <span className="font-marquee-cta-mobile lg:font-marquee-cta text-[32px] sm:text-[52px] lg:text-[120px] leading-[1.05] tracking-tighter text-[#0C0C0C] block group-hover:text-[#605e5a] transition-colors break-words">
                CONVERSEMOS [ ↗ ]
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            <div className="md:col-span-5 flex flex-col justify-between space-y-space-md">
              <div className="space-y-space-xs">
                <p className="font-label-code text-[11px] uppercase tracking-widest text-black">
                  NIDO. Arquitectura y Desarrollo Inmobiliario
                </p>
                <p className="font-body-sm text-[12px] text-[#605e5a] flex items-center gap-1.5 pt-1">
                  <span className="material-symbols-outlined text-[15px] text-[#9b5238]">location_on</span>
                  <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </p>
                <p className="font-body-sm text-[13px] text-[#605e5a]">
                  Para proyectos, desarrollos residenciales y consultas curatoriales.
                </p>
              </div>
              <p className="font-label-vertical text-[10px] text-[#73706B] tracking-widest uppercase">
                ARQUITECTURA DE VACÍO Y MATERIA // 2026
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-space-sm">
              <span className="font-label-code text-[11px] uppercase tracking-widest text-[#605e5a]">
                / CANALES DIRECTOS
              </span>
              <div className="flex flex-col space-y-space-xs">
                <a
                  className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C] hover:text-[#605e5a] transition-colors w-fit"
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp [ 999-999-999 ]
                </a>
                <a
                  className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C] hover:text-[#605e5a] transition-colors w-fit"
                  href="mailto:ejemplo@ejemplo.com"
                >
                  Correo [ ejemplo@ejemplo.com ]
                </a>
                <a
                  className="font-label-code text-[11px] uppercase tracking-wider text-[#0C0C0C] hover:text-[#605e5a] transition-colors w-fit"
                  href="https://instagram.com/nidoperu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram [ ↗ ]
                </a>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-space-md text-left md:text-right">
              <a
                className="font-label-code text-[11px] uppercase tracking-widest text-[#0C0C0C] hover:text-[#605e5a] transition-colors"
                href="#inicio"
              >
                VOLVER AL INICIO [ ↑ ]
              </a>
              <p className="font-label-code text-[11px] uppercase tracking-widest text-[#605e5a]">
                © 2026 NIDO. STUDIO.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
