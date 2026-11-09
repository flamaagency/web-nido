import React from 'react';
import type { AboutData } from '../../types';
import { ScrollReveal, ScrollText, ScrollBox } from '../../hooks/useScrollAnimations';

interface AboutSectionProps {
  data: AboutData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  return (
    <section
      id="nosotros"
      className="py-24 sm:py-32 bg-[#faf8f5] text-neutral-900 border-b border-[#e7e1d7]"
      aria-label="Nosotros y filosofía de NIDO"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-24 sm:space-y-32">
        {data.blocks.map((block, idx) => {
          const isImageRight = block.imagePosition === 'right';

          return (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                idx !== data.blocks.length - 1 ? 'pb-24 sm:pb-32 border-b border-[#e7e1d7]' : ''
              }`}
            >
              {/* Texto (Lado izquierdo o derecho según layout de la imagen de referencia) */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${
                  isImageRight ? 'order-1' : 'order-1 lg:order-2'
                }`}
              >
                <ScrollText delay={50}>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#73706B] font-semibold block mb-4">
                    {block.tag}
                  </span>
                </ScrollText>

                <ScrollText delay={150}>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-neutral-900 leading-[1.2] tracking-tight mb-5">
                    {block.heading}
                  </h2>
                </ScrollText>

                <ScrollText delay={250}>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light max-w-xl">
                    {block.text}
                  </p>
                </ScrollText>

                {/* Detalle de acento para la fila 3 */}
                {block.tag === 'LO QUE NOS MUEVE' && (
                  <ScrollReveal delay={350} animation="fade-left">
                    <div className="w-10 h-0.5 bg-[#9b5238] mt-6" />
                  </ScrollReveal>
                )}
              </div>

              {/* Fotografía de alta resolución correspondiente a la maqueta con animación de caja */}
              <div
                className={`lg:col-span-6 ${
                  isImageRight ? 'order-2' : 'order-2 lg:order-1'
                }`}
              >
                <ScrollBox delay={200}>
                  <figure className="m-0 overflow-hidden rounded-xs bg-[#f0eae1] aspect-[16/10] shadow-sm border border-[#e5dfd5] group cursor-pointer">
                    <img
                      src={block.imageSrc}
                      alt={block.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </figure>
                </ScrollBox>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
