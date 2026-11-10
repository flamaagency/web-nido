import React from 'react';
import type { DetailsData } from '../../types';
import { ScrollText, ScrollBox } from '../../hooks/useScrollAnimations';

interface DetailsSectionProps {
  data: DetailsData;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  return (
    <section
      id="en-detalle"
      className="py-24 sm:py-32 bg-[#EEE6DB] text-neutral-900 border-b border-[#ded5c8]"
      aria-label="Detalles constructivos y rigor arquitectónico"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Título de Sección Fiel al PDF (Página 4 y 5) */}
        <header className="max-w-3xl mb-16 sm:mb-20">
          <ScrollText delay={50}>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#858E71] font-semibold block mb-3">
              {data.sectionTag}
            </span>
          </ScrollText>
          <ScrollText delay={150}>
            <h2 className="text-4xl sm:text-5xl font-serif text-[#858E71] tracking-tight leading-tight mb-5">
              {data.title}
            </h2>
          </ScrollText>
          <ScrollText delay={250}>
            <p className="text-sm sm:text-base text-[#555349] font-light leading-relaxed">
              {data.intro}
            </p>
          </ScrollText>
        </header>

        {/* 3 Bloques Horizontales Apilados (Página 5 del PDF) con animación independiente de cajas */}
        <div className="space-y-12 sm:space-y-16">
          {data.pillars.map((pillar, idx) => (
            <ScrollBox key={pillar.index} delay={idx * 140}>
              <article className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FAF7F2] p-6 sm:p-10 rounded-xs border border-[#ded5c8] hover:border-[#858E71] hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer">
                {/* Imagen del detalle a la izquierda */}
                <div className="md:col-span-5 lg:col-span-4">
                  <figure className="m-0 overflow-hidden rounded-xs bg-[#e3dbcd] aspect-[16/11] sm:aspect-[4/3] shadow-xs border border-[#ded5c8]">
                    <img
                      src={pillar.imageSrc}
                      alt={pillar.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-106 group-hover:brightness-105 transition-all duration-700 ease-out"
                    />
                  </figure>
                </div>

                {/* Texto del detalle a la derecha con animaciones escalonadas */}
                <div className="md:col-span-7 lg:col-span-8 space-y-3">
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#9b5238] font-bold block">
                    {pillar.index} / {pillar.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#858E71] tracking-tight group-hover:text-[#9b5238] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#555349] font-light leading-relaxed max-w-2xl">
                    {pillar.description}
                  </p>
                </div>
              </article>
            </ScrollBox>
          ))}
        </div>
      </div>
    </section>
  );
};
