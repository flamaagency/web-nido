import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
} from 'lucide-react';
import { ScrollReveal, Parallax, ScrollProgressBar } from '../../hooks/useScrollAnimations';

export const Proposal3: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'CASCANUECES',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#1a202c] font-sans antialiased selection:bg-[#9b5238] selection:text-white">
      <ScrollProgressBar color="#9b5238" />
      {/* HEADER CORPORATIVO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#inicio" className="flex items-center hover:opacity-85 hover:scale-102 transition-all duration-300" aria-label="NIDO Inicio">
              <img
                src="/img/logotipo-nido.png"
                alt="NIDO."
                className="h-6 sm:h-7.5 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider text-neutral-600 uppercase">
            <a href="#filosofia" className="hover:text-[#9b5238] transition-colors py-1">
              Filosofía
            </a>
            <a href="#proyectos" className="hover:text-[#9b5238] transition-colors py-1">
              Proyectos
            </a>
            <a href="#valores" className="hover:text-[#9b5238] transition-colors py-1">
              Valores y Rigor
            </a>
            <a href="#contacto" className="hover:text-[#9b5238] transition-colors py-1">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-neutral-900 border border-neutral-300 rounded-full hover:border-[#9b5238] hover:bg-[#9b5238] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-2xs group cursor-pointer"
            >
              <span>Iniciar Diálogo</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9b5238] group-hover:bg-white group-hover:text-[#9b5238] text-white flex items-center justify-center text-[9px] sm:text-[10px] transition-colors">
                →
              </span>
            </a>

            {/* Hamburger para móviles */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-800 hover:bg-neutral-100 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white border-b border-neutral-200 px-6 py-6 space-y-3 font-semibold text-xs uppercase tracking-wider animate-in fade-in">
            <a
              href="#filosofia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-neutral-800 hover:text-neutral-950 border-b border-neutral-100"
            >
              Filosofía
            </a>
            <a
              href="#proyectos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-neutral-800 hover:text-neutral-950 border-b border-neutral-100"
            >
              Proyectos
            </a>
            <a
              href="#valores"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-neutral-800 hover:text-neutral-950 border-b border-neutral-100"
            >
              Valores y Rigor
            </a>
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-neutral-800 hover:text-neutral-950"
            >
              Contacto
            </a>
          </nav>
        )}
      </header>

      {/* HERO SECTION (DARK MIDNIGHT SLATE) */}
      <section
        id="inicio"
        className="relative pt-24 pb-16 sm:pt-36 sm:pb-24 md:py-44 bg-[#1f211e] text-white overflow-hidden border-b border-neutral-800"
      >
        {/* Fondo con video de obra arquitectónica mimetizado con Dark Midnight Slate */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/img/nido-hero-poster.webp"
            className="w-full h-full object-cover opacity-35 filter contrast-110 brightness-90"
          >
            <source src="/video/nido-hero.mp4" type="video/mp4" />
          </video>
          {/* Mimetización con la paleta Piedra Oscura de la Propuesta 3 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f211e] via-[#1f211e]/85 to-[#1f211e]/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f211e]/60 via-transparent to-[#1f211e]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <ScrollReveal animation="fade-up" duration={1000} className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#9b5238]">
              <span className="w-2 h-2 rounded-full bg-[#9b5238] animate-pulse shrink-0" />
              <span>Desarrollo Inmobiliario & Arquitectura Institucional</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08] break-words">
              Construyendo Espacios,
              <br />
              <span className="text-neutral-200">Asegurando Permanencia.</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-xl leading-relaxed">
              Empowering Living, Ensuring Architectural Quality. Proyectos residenciales donde cada decisión proyectual responde a la dignidad del habitar.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-neutral-900 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shadow-lg"
              >
                <span>Conoce Nuestro Portafolio</span>
                <span className="w-8 h-8 rounded-full bg-[#9b5238] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>

              <a
                href="#filosofia"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-300 border border-neutral-700 rounded-full hover:border-white hover:text-white transition-colors"
              >
                Filosofía Institucional
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 01: CORPORATE PHILOSOPHY (WHITE GROUND) */}
      <section id="filosofia" className="py-24 md:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header de sección bilingüe corporativo */}
          <ScrollReveal animation="fade-up" className="mb-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-[#9b5238]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b5238]">
                01 / PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-900">
              Corporate Philosophy
            </h2>
            <p className="text-base text-neutral-500 font-normal">
              Filosofía Institucional
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Columna Izquierda: Gran Fotografía y ficha con Parallax */}
            <ScrollReveal animation="fade-right" className="lg:col-span-5 space-y-4">
              <Parallax speed={-0.06} className="relative aspect-[4/5] bg-neutral-100 rounded-xs overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop"
                  alt="Interior corporativo con materiales nobles"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-neutral-900/90 text-white text-[10px] uppercase font-bold tracking-widest backdrop-blur-xs">
                  RIGOR TÉCNICO & ARQUITECTÓNICO
                </div>
              </Parallax>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Estudio espacial y materialidad noble. La arquitectura entendida como un compromiso de largo plazo con la ciudad.
              </p>
            </ScrollReveal>

            {/* Columna Derecha: Textos y Cita Destacada */}
            <ScrollReveal animation="fade-up" delay={150} className="lg:col-span-7 space-y-8">
              <div className="space-y-5 text-neutral-700 text-base leading-relaxed">
                <p className="text-xl font-semibold text-neutral-900 leading-snug">
                  Creemos que un buen lugar para vivir empieza mucho antes de construirlo. En NIDO desarrollamos proyectos inmobiliarios pensando más allá de los planos y los metros cuadrados.
                </p>
                <p>
                  Nos importa dónde construimos, cómo se relaciona cada edificio con su entorno y cómo se vivirán sus espacios todos los días. Por eso, pensamos cada proyecto desde su ubicación, su arquitectura, la luz natural, la distribución y los materiales que elegimos.
                </p>
              </div>

              {/* Callout Box con acento carmesí institucional */}
              <div className="p-8 bg-[#fafafa] border-l-4 border-[#9b5238] rounded-r-xs shadow-2xs space-y-3">
                <span className="text-[11px] uppercase tracking-widest font-bold text-[#9b5238] block">
                  PREGUNTA GUÍA INSTITUCIONAL
                </span>
                <blockquote className="text-xl sm:text-2xl font-semibold text-neutral-900 leading-snug">
                  “¿Viviríamos aquí? Porque creemos que un edificio no termina cuando lo entregamos. Es ahí cuando comienza a convertirse en hogar.”
                </blockquote>
                <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-800">NIDO.</span>
                  <span>— Comité de Desarrollo y Dirección Técnica</span>
                </div>
              </div>

              {/* Documento corporativo & sub-mosaico */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-3 pl-5 pr-2 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-full font-semibold text-xs uppercase tracking-wider transition-colors w-fit"
                >
                  <span>Documento Corporativo</span>
                  <span className="w-7 h-7 rounded-full bg-[#9b5238] text-white flex items-center justify-center text-xs">
                    →
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f9?q=80&w=300&auto=format&fit=crop"
                    alt="Trabajo de obra"
                    className="w-16 h-12 object-cover rounded-xs border border-neutral-200"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=300&auto=format&fit=crop"
                    alt="Espacio residencial"
                    className="w-16 h-12 object-cover rounded-xs border border-neutral-200"
                  />
                  <span className="text-[11px] text-neutral-400 font-medium">
                    Evidencia de campo
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 02: OUR BUSINESS / NUESTROS PROYECTOS (DARK SLATE) */}
      <section id="proyectos" className="py-24 md:py-32 bg-[#1a1c19] text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header con ScrollReveal */}
          <ScrollReveal animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-0.5 bg-[#9b5238]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b5238]">
                  02 / PORTAFOLIO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-white">
                Our Business
              </h2>
              <p className="text-base text-neutral-400 font-normal">
                Nuestros Proyectos
              </p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#9b5238]">
              DESARROLLOS DESTACADOS // 2026
            </span>
          </ScrollReveal>

          {/* Tarjeta Principal CASCANUECES con ScrollReveal & Parallax */}
          <ScrollReveal animation="scale" duration={950}>
            <article className="bg-[#242622] border border-neutral-800 rounded-xs overflow-hidden mb-16 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Fotos del Proyecto */}
                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col gap-4">
                  <Parallax speed={-0.04} className="relative aspect-[16/10] overflow-hidden rounded-xs bg-neutral-900">
                    <img
                      src="/img/cascanueces/fachada-principal.webp"
                      alt="CASCANUECES render principal de fachada"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#9b5238] text-white text-[10px] font-bold uppercase tracking-widest shadow-md">
                      EN LANZAMIENTO // PROYECTO INSIGNIA
                    </div>
                  </Parallax>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group overflow-hidden rounded-xs bg-neutral-900 aspect-[16/10]">
                      <img
                        src="/img/cascanueces/sala-comedor-1.webp"
                        alt="CASCANUECES Sala Comedor"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute bottom-1.5 left-2 px-2 py-0.5 bg-black/70 text-white text-[9px] uppercase tracking-wider font-semibold">
                        Sala Comedor
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-xs bg-neutral-900 aspect-[16/10]">
                      <img
                        src="/img/cascanueces/cocina.webp"
                        alt="CASCANUECES Cocina"
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute bottom-1.5 left-2 px-2 py-0.5 bg-black/70 text-white text-[9px] uppercase tracking-wider font-semibold">
                        Cocina de Autor
                      </div>
                    </div>
                  </div>
                </div>

                {/* Información Ejecutiva CASCANUECES */}
                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-neutral-800">
                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                        DESARROLLO RESIDENCIAL BAJO NIDO
                      </span>
                      <h3 className="text-4xl font-serif font-bold text-white tracking-tight">
                        CASCANUECES
                      </h3>
                      <p className="text-base font-semibold text-[#9b5238] mt-1">
                        Arquitectura residencial que dialoga con su entorno.
                      </p>
                    </div>

                    <p className="text-sm text-neutral-300 leading-relaxed font-light">
                      Un proyecto concebido desde la nobleza de sus materiales, la amplitud de sus ambientes y una iluminación natural que transforma el habitar cotidiano.
                    </p>

                    {/* Métricas clave */}
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-[#1f211d] border border-neutral-800 rounded-xs">
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase block mb-1">
                          Espacios
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white">Sala Comedor, Cocina, Suites</span>
                      </div>

                      <div className="p-4 bg-[#1f211d] border border-neutral-800 rounded-xs">
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase block mb-1">
                          Materialidad
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white">Maderas Nobles & Piedra</span>
                      </div>

                      <div className="p-4 bg-[#1f211d] border border-neutral-800 rounded-xs">
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase block mb-1">
                          Tipología
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white">Residencial de Autor</span>
                      </div>

                      <div className="p-4 bg-[#1f211d] border border-neutral-800 rounded-xs">
                        <span className="text-[10px] font-semibold text-neutral-400 uppercase block mb-1">
                          Estado
                        </span>
                        <span className="text-sm sm:text-base font-bold text-white">Lanzamiento 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <a
                      href="#contacto"
                      className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-neutral-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all w-fit"
                    >
                      <span>Solicitar Dossier de Ventas</span>
                      <span className="w-8 h-8 rounded-full bg-[#9b5238] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Dos Proyectos de Trayectoria Previa */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MORATTA */}
            <ScrollReveal animation="fade-up" delay={100}>
              <article className="bg-[#242622] p-6 border border-neutral-800 rounded-xs group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xs mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=900&auto=format&fit=crop"
                    alt="Proyecto Moratta"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-neutral-300 text-[10px] uppercase font-bold tracking-widest">
                    EXPERIENCIA PREVIA
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">MORATTA</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                  Desarrollo residencial multifamiliar con énfasis en confort acústico, privacidad y ventilación cruzada continua.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                  <span className="text-neutral-500 font-medium">Gestión y Construcción Previa</span>
                  <a href="#contacto" className="text-white hover:text-[#9b5238] font-semibold flex items-center gap-1">
                    <span>Ficha Técnica</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </ScrollReveal>

            {/* BOSCO */}
            <ScrollReveal animation="fade-up" delay={200}>
              <article className="bg-[#242622] p-6 border border-neutral-800 rounded-xs group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xs mb-5">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop"
                    alt="Proyecto Bosco"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/80 text-neutral-300 text-[10px] uppercase font-bold tracking-widest">
                    EN PORTAFOLIO
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">BOSCO</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                  Desarrollo residencial frente al parque con integración al paisaje, diseño bioclimático y altos estándares de habitabilidad.
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                  <span className="text-neutral-500 font-medium">Desarrollo y Paisajismo</span>
                  <a href="#contacto" className="text-white hover:text-[#9b5238] font-semibold flex items-center gap-1">
                    <span>Ficha Técnica</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 03: OUR VALUES & RIGOR / NUESTROS VALORES (WHITE GROUND) */}
      <section id="valores" className="py-24 md:py-32 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-0.5 bg-[#9b5238]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b5238]">
                  03 / EN DETALLE
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-900">
                Our Values & Rigor
              </h2>
              <p className="text-base text-neutral-500 font-normal">
                Nuestros Valores y Rigor Constructivo
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Columnas Ejecutivas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Materialidad */}
            <ScrollReveal animation="fade-up" delay={0} className="h-full">
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xs p-6 flex flex-col justify-between hover:border-[#9b5238] hover:shadow-[0_20px_35px_rgba(155,82,56,0.12)] hover:-translate-y-2 transition-all duration-500 group h-full cursor-pointer">
                <div>
                  <div className="aspect-[4/3] bg-neutral-200 rounded-xs overflow-hidden mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop"
                      alt="Materiales que perduran"
                      className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9b5238] block mb-2 group-hover:tracking-[0.25em] transition-all">
                    01 / MATERIALIDAD
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#9b5238] transition-colors">
                    Materiales que perduran.
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Piedras sinterizadas, maderas nobles y concreto visto elegidos por su resistencia y capacidad de envejecer con nobleza.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Arquitectura */}
            <ScrollReveal animation="fade-up" delay={120} className="h-full">
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xs p-6 flex flex-col justify-between hover:border-[#9b5238] hover:shadow-[0_20px_35px_rgba(155,82,56,0.12)] hover:-translate-y-2 transition-all duration-500 group h-full cursor-pointer">
                <div>
                  <div className="aspect-[4/3] bg-neutral-200 rounded-xs overflow-hidden mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop"
                      alt="Diseño con intención"
                      className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9b5238] block mb-2 group-hover:tracking-[0.25em] transition-all">
                    02 / ARQUITECTURA
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#9b5238] transition-colors">
                    Diseño con Intención.
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Decisiones proyectuales orientadas al confort térmico, distribución óptima y proporción equilibrada de los ambientes.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Calidad y Respaldo */}
            <ScrollReveal animation="fade-up" delay={240} className="h-full">
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xs p-6 flex flex-col justify-between hover:border-[#9b5238] hover:shadow-[0_20px_35px_rgba(155,82,56,0.12)] hover:-translate-y-2 transition-all duration-500 group h-full cursor-pointer">
                <div>
                  <div className="aspect-[4/3] bg-neutral-200 rounded-xs overflow-hidden mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop"
                      alt="Calidad y respaldo"
                      className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9b5238] block mb-2 group-hover:tracking-[0.25em] transition-all">
                    03 / RESPALDO
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#9b5238] transition-colors">
                    Calidad y Respaldo.
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Alianzas con proveedores de trayectoria comprobada y garantías de post-venta sólidas que protegen tu inversión.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Rigor y Sostenibilidad */}
            <ScrollReveal animation="fade-up" delay={360} className="h-full">
              <div className="bg-[#fafafa] border border-neutral-200 rounded-xs p-6 flex flex-col justify-between hover:border-[#9b5238] hover:shadow-[0_20px_35px_rgba(155,82,56,0.12)] hover:-translate-y-2 transition-all duration-500 group h-full cursor-pointer">
                <div>
                  <div className="aspect-[4/3] bg-neutral-200 rounded-xs overflow-hidden mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop"
                      alt="Rigor y sostenibilidad"
                      className="w-full h-full object-cover group-hover:scale-108 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#9b5238] block mb-2 group-hover:tracking-[0.25em] transition-all">
                    04 / INTEGRACIÓN
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-[#9b5238] transition-colors">
                    Rigor y Sostenibilidad.
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    Eficiencia energética, aislamiento acústico y bajo consumo hídrico proyectados bajo estándares internacionales.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SECTION 04: COMPANY INFORMATION & CONTACT (WARM EARTH CANVAS) */}
      <section id="contacto" className="py-24 md:py-32 bg-[#faf8f5] border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal animation="fade-up">
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-0.5 bg-[#9b5238]" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b5238]">
                  04 / ENLACE DIRECTO
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-neutral-900">
                Company Information & Contact
              </h2>
              <p className="text-base text-neutral-500 font-normal">
                Estructura Corporativa y Mesa de Enlace
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Columna Izquierda: Ficha Corporativa */}
            <ScrollReveal animation="fade-up" delay={0} className="lg:col-span-5">
              <div className="bg-white border border-neutral-200 rounded-xs p-8 shadow-xs space-y-6">
                <div className="border-b border-neutral-100 pb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b5238] block mb-1">
                    ENTIDAD PROMOTORA
                  </span>
                  <h3 className="text-xl font-bold text-neutral-900">
                    NIDO Desarrollos & Arquitectura S.A.
                  </h3>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#9b5238] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Sede Principal</span>
                      <span className="text-neutral-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 size={16} className="text-[#9b5238] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Actividad Registral</span>
                      <span className="text-neutral-600">Desarrollo de proyectos inmobiliarios, gerencia y diseño integral.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#9b5238] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Atención al Cliente</span>
                      <span className="text-neutral-600">Lunes a Viernes 08:30 — 18:30 hrs | Coordinación privada.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#9b5238] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Central Telefónica</span>
                      <span className="text-neutral-600">999-999-999</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-[#9b5238] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-neutral-900 block">Mesa de Enlace</span>
                      <span className="text-neutral-600">ejemplo@ejemplo.com</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 bg-[#9b5238] hover:bg-[#803f29] text-white text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors"
                  >
                    WhatsApp Comercial
                  </a>
                  <a
                    href="mailto:ejemplo@ejemplo.com"
                    className="flex-1 py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xs text-center transition-colors"
                  >
                    Enviar Correo
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Columna Derecha: Formulario "Iniciar Conversación Privada" */}
            <ScrollReveal animation="fade-up" delay={150} className="lg:col-span-7">
              <div className="bg-white border border-neutral-200 rounded-xs p-8 sm:p-10 shadow-xs">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#9b5238] block mb-1">
                  MESA DE ENLACE DIRECTO
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                  Iniciar Conversación Privada
                </h3>
                <p className="text-xs text-neutral-500 mb-6">
                  Completa el formulario para concertar una reunión con nuestro equipo de estructuración o solicitar el dossier de ventas de CASCANUECES.
                </p>

                {formSubmitted ? (
                  <div className="p-8 bg-neutral-50 border border-neutral-200 text-center space-y-3">
                    <CheckCircle2 size={36} className="text-[#9b5238] mx-auto" />
                    <h4 className="text-lg font-bold text-neutral-900">
                      Mensaje Registrado en Mesa Directiva
                    </h4>
                    <p className="text-xs text-neutral-600 max-w-md mx-auto">
                      Hemos recibido tus requerimientos de forma confidencial. Un ejecutivo senior se pondrá en contacto dentro de las próximas 24 horas.
                    </p>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="mt-2 text-xs font-semibold text-[#9b5238] uppercase tracking-wider underline cursor-pointer"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block uppercase font-bold text-neutral-700 tracking-wider mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Ej. Carlos Mendoza V."
                        className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xs text-neutral-900 focus:outline-hidden focus:border-[#9b5238] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block uppercase font-bold text-neutral-700 tracking-wider mb-1">
                          Correo Corporativo *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="carlos@empresa.com"
                          className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xs text-neutral-900 focus:outline-hidden focus:border-[#9b5238] focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block uppercase font-bold text-neutral-700 tracking-wider mb-1">
                          Teléfono Móvil *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="999-999-999"
                          className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xs text-neutral-900 focus:outline-hidden focus:border-[#9b5238] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 tracking-wider mb-1">
                        Proyecto o Materia de Consulta
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xs text-neutral-900 focus:outline-hidden focus:border-[#9b5238] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="CASCANUECES">CASCANUECES — Residencial Exclusivo (Dossier y Disponibilidad)</option>
                        <option value="INVERSIONES">Oportunidades de Inversión / Co-Desarrollo</option>
                        <option value="GENERAL">Consultas Generales o Institucionales</option>
                      </select>
                    </div>

                    <div>
                      <label className="block uppercase font-bold text-neutral-700 tracking-wider mb-1">
                        Detalle de la Consulta
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Indícanos número de dormitorios de interés, metraje estimado o cualquier requerimiento específico..."
                        className="w-full p-3 bg-neutral-50 border border-neutral-200 rounded-xs text-neutral-900 focus:outline-hidden focus:border-[#9b5238] focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-neutral-900 text-white rounded-full font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
                      >
                        <span>Enviar a Mesa Directiva</span>
                        <span className="w-8 h-8 rounded-full bg-[#9b5238] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER BANNER (DARK EXECUTIVE) */}
      <div className="bg-[#0b0f14] text-white py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold tracking-tight text-white mb-1">
              NIDO Taller de Arquitectura & Obras
            </h4>
            <p className="text-xs text-neutral-400 font-light max-w-xl">
              Visitas guiadas a obra y reuniones técnicas con cita previa en el showroom de San Isidro.
            </p>
          </div>

          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 bg-white text-neutral-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shrink-0"
          >
            <span>Agenda Visita a Obra</span>
            <span className="w-7 h-7 rounded-full bg-[#9b5238] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-[#080b0f] text-neutral-400 py-16 border-t border-neutral-900 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
            <div className="md:col-span-5 space-y-4">
              <a href="#inicio" className="inline-block hover:opacity-85 transition-opacity" aria-label="NIDO Inicio">
                <img
                  src="/img/logotipo-nido-white.png"
                  alt="NIDO."
                  className="h-6.5 sm:h-7.5 w-auto object-contain"
                />
              </a>
              <p className="text-xs text-neutral-400 font-light max-w-sm leading-relaxed">
                Empresa especializada en estructuración, diseño y desarrollo inmobiliario de alto estándar en Lima, Perú.
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 block mb-2">
                OFICINA CORPORATIVA
              </span>
              <p className="text-neutral-400 flex items-start gap-1.5">
                <MapPin size={14} className="text-[#9b5238] shrink-0 mt-0.5" />
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              </p>
              <p className="text-neutral-400 flex items-center gap-1.5 pt-1">
                <Phone size={14} className="text-[#9b5238] shrink-0" />
                <a href="tel:999999999" className="hover:text-white transition-colors">999-999-999</a>
              </p>
            </div>

            <div className="md:col-span-4 space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-300 block mb-2">
                MESA DE ASUNTOS TÉCNICOS
              </span>
              <p className="text-neutral-400">Consultas de arquitectura y especificación:</p>
              <a href="mailto:ejemplo@ejemplo.com" className="text-white hover:text-[#9b5238] transition-colors flex items-center gap-1.5">
                <Mail size={14} className="text-[#9b5238] shrink-0" />
                ejemplo@ejemplo.com
              </a>
              <p className="text-neutral-500 pt-1">RUC: 20608945121 — NIDO Desarrollos S.A.</p>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
            <p>© {new Date().getFullYear()} NIDO Desarrollos S.A. Todos los derechos reservados.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Privacidad de Datos
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors">
                Libro de Reclamaciones
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
