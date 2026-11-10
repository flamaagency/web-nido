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
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-neutral-950 pt-28 pb-12"
      aria-label="Presentación principal NIDO"
    >
      {/* Background Video con tratamiento blanco y negro luminoso de alto contraste */}
      <div className="absolute inset-0 z-0">
        {!isEmbedded && data.videoSrc ? (
          <video
            className="w-full h-full object-cover scale-102 opacity-75 filter grayscale contrast-125 brightness-90"
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
              className="w-full h-full object-cover opacity-75 filter grayscale contrast-125 brightness-90"
            />
          </video>
        ) : (
          <img
            src={data.fallbackImageSrc}
            alt="Estructura de obra NIDO"
            className="w-full h-full object-cover opacity-75 filter grayscale contrast-125 brightness-90"
            loading={isEmbedded ? 'eager' : 'lazy'}
          />
        )}
        {/* Degradado suave para contraste legible sin oscurecer la escena */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
      </div>

      {/* Espaciador superior */}
      <div className="w-full" />

      {/* Titular Principal en Dos Líneas (Construimos grande + lugares donde quieras quedarte en tipografía recta no cursiva) */}
      <ScrollReveal
        animation="fade-up"
        duration={1000}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white my-auto flex flex-col items-center select-none"
      >
        <h1 className="tracking-tight text-center">
          <span className="block font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-normal leading-[1.02] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Construimos
          </span>
          <span className="block font-serif not-italic text-2xl sm:text-4xl md:text-5xl lg:text-[54px] text-[#EEE6DB] font-normal leading-[1.15] mt-3 sm:mt-5 tracking-normal drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            lugares donde quieras quedarte.
          </span>
        </h1>
      </ScrollReveal>

      {/* Indicador inferior "Scroll to explore" */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <a
          href="#nosotros"
          className="text-white/70 hover:text-[#a2a397] hover:scale-105 flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase font-medium transition-all group py-2"
          aria-label="Desplazar hacia abajo a la sección Nosotros"
        >
          <span>Scroll to explore</span>
          <ArrowDown size={14} className="animate-bounce text-[#a2a397]" />
        </a>
      </div>
    </section>
  );
};
