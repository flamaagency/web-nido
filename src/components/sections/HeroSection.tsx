import React from 'react';
import type { HeroData } from '../../types';
import { ArrowDown } from 'lucide-react';
import { ScrollReveal } from '../../hooks/useScrollAnimations';

interface HeroSectionProps {
  data: HeroData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const isEmbedded =
    typeof window !== 'undefined' &&
    (window.self !== window.top ||
      window.location.search.includes('embed=true') ||
      window.location.hash.includes('embed=true'));

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-neutral-900 pt-28 pb-12"
      aria-label="Presentación principal NIDO"
    >
      {/* Background Video en blanco y negro luminoso con filtro negro sutil para legibilidad */}
      <div className="absolute inset-0 z-0">
        {!isEmbedded && data.videoSrc ? (
          <video
            className="w-full h-full object-cover scale-102 opacity-90 filter grayscale brightness-115 contrast-105"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={data.fallbackImageSrc}
          >
            <source src={data.videoSrc} type="video/mp4" />
            <img
              src={data.fallbackImageSrc}
              alt="Estructura de obra NIDO"
              className="w-full h-full object-cover opacity-90 filter grayscale brightness-115 contrast-105"
            />
          </video>
        ) : (
          <img
            src={data.fallbackImageSrc}
            alt="Estructura de obra NIDO"
            className="w-full h-full object-cover opacity-90 filter grayscale brightness-115 contrast-105"
            loading={isEmbedded ? 'eager' : 'lazy'}
          />
        )}
        {/* Filtro negro sutil uniforme + degradado suave superior/inferior */}
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* Espaciador superior */}
      <div className="w-full" />

      {/* Titular Principal en Dos Líneas con sombra sutil inferior */}
      <ScrollReveal
        animation="fade-up"
        duration={1000}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white my-auto flex flex-col items-center select-none"
      >
        <h1 className="tracking-tight text-center">
          <span className="block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-normal leading-[1.02] text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.55)]">
            Construimos
          </span>
          <span className="block font-sans not-italic text-xl sm:text-3xl md:text-4xl lg:text-[40px] text-white/95 font-light leading-[1.3] mt-4 sm:mt-5 tracking-[0.04em] [text-shadow:0_3px_10px_rgba(0,0,0,0.6)]">
            lugares donde quieras quedarte.
          </span>
        </h1>
      </ScrollReveal>

      {/* Indicador inferior "Scroll to explore" */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <a
          href="#nosotros"
          className="text-white/85 hover:text-[#a2a397] hover:scale-105 flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase font-medium transition-all group py-2 [text-shadow:0_2px_6px_rgba(0,0,0,0.55)]"
          aria-label="Desplazar hacia abajo a la sección Nosotros"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce text-[#a2a397]" />
        </a>
      </div>
    </section>
  );
};
