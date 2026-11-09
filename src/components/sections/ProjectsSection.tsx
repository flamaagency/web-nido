import React, { useState, useEffect } from 'react';
import type { ProjectsData, ProjectGalleryItem } from '../../types';
import { ArrowRight, ArrowUpRight, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ScrollReveal, ScrollText, ScrollBox } from '../../hooks/useScrollAnimations';

interface ProjectsSectionProps {
  data: ProjectsData;
}

interface ActiveGalleryState {
  projectName: string;
  items: ProjectGalleryItem[];
  currentIndex: number;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
  const { mainProject, trajectoryBadge, trajectoryTitle, trajectoryDescription, priorProjects } = data;

  const morattaProject = priorProjects.find((p) => p.id === 'moratta') || priorProjects[0];
  const cascanuecesProject = priorProjects.find((p) => p.id === 'cascanueces') || priorProjects[1];

  // Estados para vistas activas directas
  const [boscoImage, setBoscoImage] = useState<string>(mainProject.imageSrc);
  const [morattaImage, setMorattaImage] = useState<string>(morattaProject?.imageSrc || '/img/moratta/nido-moratta-fachada.webp');
  const [cascanuecesImage, setCascanuecesImage] = useState<string>(cascanuecesProject?.imageSrc || '/img/cascanueces/nido-cascanueces-fachada-detalle.webp');

  // Estado para la Galería Modal Lightbox interactiva
  const [activeGallery, setActiveGallery] = useState<ActiveGalleryState | null>(null);

  const openGallery = (projectName: string, items: ProjectGalleryItem[], initialIndex: number = 0) => {
    setActiveGallery({
      projectName,
      items,
      currentIndex: Math.max(0, Math.min(initialIndex, items.length - 1)),
    });
  };

  const closeGallery = () => setActiveGallery(null);

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.items.length,
      };
    });
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
      };
    });
  };

  // Atajos de teclado para la galería (Esc, Flechas)
  useEffect(() => {
    if (!activeGallery) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeGallery();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeGallery]);

  // Componente interno para tira de tags (máximo 4 + tag numérico "+X" que abre la galería)
  const renderTagStrip = (
    projectName: string,
    items: ProjectGalleryItem[] | undefined,
    currentImage: string,
    onSelectImage: (src: string) => void,
    theme: 'dark' | 'light' = 'dark'
  ) => {
    if (!items || items.length === 0) return null;

    const MAX_TAGS = 4;
    const visibleTags = items.slice(0, MAX_TAGS);
    const remainingCount = items.length - MAX_TAGS;

    return (
      <div
        className={`flex items-center gap-1.5 overflow-x-auto ${
          theme === 'dark'
            ? 'p-3 sm:p-3.5 bg-neutral-950 border-t border-neutral-850'
            : 'pb-3 mb-3 font-mono text-[10px] uppercase tracking-wider'
        }`}
      >
        {visibleTags.map((item, idx) => {
          const isActive = currentImage === item.src;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectImage(item.src)}
              className={
                theme === 'dark'
                  ? `flex items-center gap-1.5 px-3 py-1.5 rounded-xs text-[11px] font-sans tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'bg-[#9b5238] text-white font-medium shadow-xs'
                        : 'bg-neutral-900/90 text-neutral-300 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                    }`
                  : `px-2.5 py-1 rounded-2xs border transition-all cursor-pointer whitespace-nowrap text-[10px] ${
                      isActive
                        ? 'bg-[#555349] text-white border-[#555349] font-semibold'
                        : 'bg-white text-neutral-600 border-neutral-300 hover:border-neutral-900 hover:text-neutral-900'
                    }`
              }
            >
              {theme === 'dark' && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />}
              <span>{item.label}</span>
            </button>
          );
        })}

        {remainingCount > 0 && (
          <button
            type="button"
            onClick={() => openGallery(projectName, items, MAX_TAGS)}
            title="Ver galería completa"
            className={
              theme === 'dark'
                ? 'px-2.5 py-1.5 rounded-xs text-[11px] font-mono font-semibold bg-neutral-900 text-[#dbb294] border border-[#dbb294]/40 hover:bg-[#9b5238] hover:text-white hover:border-[#9b5238] transition-all cursor-pointer whitespace-nowrap shadow-xs'
                : 'px-2.5 py-1 rounded-2xs border border-[#dbb294] text-[#9b5238] font-mono text-[10px] font-bold bg-[#faf8f5] hover:bg-[#9b5238] hover:text-white transition-all cursor-pointer whitespace-nowrap'
            }
          >
            <span>+{remainingCount}</span>
          </button>
        )}
      </div>
    );
  };

  return (
    <section
      id="proyectos"
      className="py-24 sm:py-32 bg-[#faf8f5] text-neutral-900 border-b border-[#e7e1d7]"
      aria-label="Proyectos inmobiliarios y portafolio de NIDO"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Encabezado de Sección */}
        <ScrollReveal animation="fade-up">
          <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#e7e1d7] text-xs uppercase tracking-widest text-neutral-400">
            <div className="flex items-center gap-3">
              <span className="font-mono text-neutral-900 font-semibold">{data.sectionNumber || '02'}</span>
              <span>/</span>
              <span>{data.sectionTag || 'PROYECTOS'}</span>
            </div>
            <span className="hidden sm:inline font-mono tracking-wider">DESARROLLOS SELECCIONADOS</span>
          </div>
        </ScrollReveal>

        {/* PROYECTO INSIGNIA: BOSCO */}
        <ScrollBox delay={80}>
          <article className="bg-white rounded-xs border border-[#e5dfd5] shadow-xs overflow-hidden mb-24 sm:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Información Editorial del Proyecto */}
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#e5dfd5]">
                <div>
                  <ScrollText delay={120}>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#73706B] font-semibold block mb-3">
                      {mainProject.badge || 'NUESTRO PRIMER PROYECTO'}
                    </span>
                  </ScrollText>

                  <ScrollText delay={200}>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-900 tracking-tight leading-none mb-3">
                      {mainProject.name}
                    </h2>
                  </ScrollText>

                  <ScrollText delay={280}>
                    <p className="text-lg sm:text-xl font-serif italic text-neutral-600 mb-6 font-light">
                      {mainProject.tagline || 'Vivir frente al parque lo cambia todo.'}
                    </p>
                  </ScrollText>

                  <ScrollText delay={360}>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-8">
                      {mainProject.description}
                    </p>
                  </ScrollText>
                </div>

                {/* Botón CTA */}
                <ScrollText delay={440}>
                  <div className="pt-4">
                    <a
                      href={mainProject.ctaLink || '#contacto'}
                      className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#555349] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-neutral-900 hover:shadow-md transition-all group cursor-pointer"
                    >
                      <span>{mainProject.ctaText || 'CONOCE BOSCO'}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </div>
                </ScrollText>
              </div>

              {/* Render Principal de BOSCO con tag de estado y tira de 4 tags + número */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-neutral-900 overflow-hidden">
                <div
                  onClick={() => openGallery('BOSCO', mainProject.gallery || [{ label: 'Fachada', src: boscoImage }])}
                  className="relative min-h-[380px] sm:min-h-[460px] flex-1 bg-neutral-950 group overflow-hidden cursor-pointer"
                  title="Clic para ver galería a pantalla completa"
                >
                  <img
                    src={boscoImage}
                    alt={`Render de ${mainProject.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-all duration-700 ease-out"
                  />
                  {/* Badge flotante de estado en el render */}
                  <div className="absolute top-6 right-6 px-3.5 py-1.5 bg-neutral-900/85 text-white text-[10px] uppercase tracking-widest font-semibold backdrop-blur-xs shadow-xs pointer-events-none">
                    {mainProject.statusTag || 'PRIMER PROYECTO NIDO.'}
                  </div>

                  {/* Icono discreto de expandir */}
                  <div className="absolute bottom-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white rounded-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Tira interactiva de 4 tags + selector numérico */}
                {renderTagStrip('BOSCO', mainProject.gallery, boscoImage, setBoscoImage, 'dark')}
              </div>
            </div>
          </article>
        </ScrollBox>

        {/* TRAYECTORIA PREVIA (MORATTA & CASCANUECES) */}
        <div className="pt-12 sm:pt-16 border-t border-[#e7e1d7]">
          <header className="max-w-3xl mb-12">
            <ScrollText delay={50}>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#73706B] font-semibold block mb-3">
                {trajectoryBadge || 'TRAYECTORIA'}
              </span>
            </ScrollText>
            <ScrollText delay={150}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
                {trajectoryTitle || 'La experiencia también se construye.'}
              </h3>
            </ScrollText>
            <ScrollText delay={250}>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                {trajectoryDescription}
              </p>
            </ScrollText>
          </header>

          {/* Dos Columnas de Proyectos Previos perfectamente alineadas y simétricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* PROYECTO PREVIO 1: MORATTA (EN ACABADOS) */}
            {morattaProject && (
              <ScrollBox delay={120} className="h-full">
                <article className="group bg-white p-6 sm:p-7 rounded-xs border border-[#e5dfd5] hover:border-[#555349] transition-all hover:shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <figure
                      onClick={() => openGallery('MORATTA', morattaProject.gallery || [{ label: 'Fachada', src: morattaImage }])}
                      style={{ aspectRatio: '16/10' }}
                      className="m-0 overflow-hidden rounded-xs bg-[#ede8e0] aspect-[16/10] w-full mb-4 shadow-xs border border-[#e5dfd5] relative cursor-pointer group/fig shrink-0"
                      title="Clic para ver galería completa"
                    >
                      <img
                        src={morattaImage}
                        alt={`Render de ${morattaProject.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover/fig:scale-104 transition-all duration-700 ease-out"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-xs text-white text-[9px] uppercase tracking-widest font-semibold shadow-xs">
                        {morattaProject.statusTag || 'EN ACABADOS'}
                      </div>
                    </figure>

                    {/* Selector interactivo de 4 tags + número */}
                    <div className="min-h-[38px] flex items-center">
                      {renderTagStrip('MORATTA', morattaProject.gallery, morattaImage, setMorattaImage, 'light')}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#73706B] font-semibold block mb-1">
                          {morattaProject.category} · {morattaProject.statusTag || 'EN ACABADOS'}
                        </span>
                        <h4 className="text-2xl font-serif text-neutral-900 tracking-tight group-hover:text-[#9b5238] transition-colors">
                          {morattaProject.name}
                        </h4>
                      </div>
                      <div
                        onClick={() => openGallery('MORATTA', morattaProject.gallery || [{ label: 'Fachada', src: morattaImage }])}
                        className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 group-hover:bg-[#555349] group-hover:text-white group-hover:border-[#555349] transition-colors shrink-0 cursor-pointer"
                        title="Ver galería"
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {morattaProject.description && (
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed min-h-[44px] flex items-start">
                        {morattaProject.description}
                      </p>
                    )}
                  </div>
                </article>
              </ScrollBox>
            )}

            {/* PROYECTO PREVIO 2: CASCANUECES (EN CONSTRUCCIÓN) */}
            {cascanuecesProject && (
              <ScrollBox delay={250} className="h-full">
                <article className="group bg-white p-6 sm:p-7 rounded-xs border border-[#e5dfd5] hover:border-[#555349] transition-all hover:shadow-sm h-full flex flex-col justify-between">
                  <div>
                    <figure
                      onClick={() => openGallery('CASCANUECES', cascanuecesProject.gallery || [{ label: 'Fachada', src: cascanuecesImage }])}
                      style={{ aspectRatio: '16/10' }}
                      className="m-0 overflow-hidden rounded-xs bg-[#ede8e0] aspect-[16/10] w-full mb-4 shadow-xs border border-[#e5dfd5] relative cursor-pointer group/fig shrink-0"
                      title="Clic para ver galería completa"
                    >
                      <img
                        src={cascanuecesImage}
                        alt={`Render de ${cascanuecesProject.name}`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover/fig:scale-104 transition-all duration-700 ease-out"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#9b5238] text-white text-[9px] uppercase tracking-widest font-semibold shadow-xs">
                        {cascanuecesProject.statusTag || 'EN CONSTRUCCIÓN'}
                      </div>
                    </figure>

                    {/* Selector interactivo de 4 tags + número */}
                    <div className="min-h-[38px] flex items-center">
                      {renderTagStrip('CASCANUECES', cascanuecesProject.gallery, cascanuecesImage, setCascanuecesImage, 'light')}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between pt-2">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#73706B] font-semibold block mb-1">
                          {cascanuecesProject.category} · {cascanuecesProject.statusTag || 'EN CONSTRUCCIÓN'}
                        </span>
                        <h4 className="text-2xl font-serif text-neutral-900 tracking-tight group-hover:text-[#9b5238] transition-colors">
                          {cascanuecesProject.name}
                        </h4>
                      </div>
                      <div
                        onClick={() => openGallery('CASCANUECES', cascanuecesProject.gallery || [{ label: 'Fachada', src: cascanuecesImage }])}
                        className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 group-hover:bg-[#555349] group-hover:text-white group-hover:border-[#555349] transition-colors shrink-0 cursor-pointer"
                        title="Ver galería"
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    {cascanuecesProject.description && (
                      <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed min-h-[44px] flex items-start">
                        {cascanuecesProject.description}
                      </p>
                    )}
                  </div>
                </article>
              </ScrollBox>
            )}
          </div>
        </div>
      </div>

      {/* MODAL GALERÍA LIGHTBOX FULLSCREEN */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Barra Superior */}
          <div className="flex items-center justify-between text-white pb-4 border-b border-white/15 max-w-7xl mx-auto w-full">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#dbb294] font-semibold block">
                GALERÍA DE PROYECTO
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-white tracking-tight">
                {activeGallery.projectName}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-neutral-400">
                {activeGallery.currentIndex + 1} / {activeGallery.items.length} · {activeGallery.items[activeGallery.currentIndex]?.label}
              </span>
              <button
                type="button"
                onClick={closeGallery}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Cerrar galería"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Imagen Central Ampliada con Navegación */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden max-w-6xl mx-auto w-full">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#9b5238] text-white backdrop-blur-xs transition-all cursor-pointer"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={28} />
            </button>

            <figure className="m-0 max-h-[68vh] sm:max-h-[72vh] max-w-full flex items-center justify-center">
              <img
                src={activeGallery.items[activeGallery.currentIndex]?.src}
                alt={activeGallery.items[activeGallery.currentIndex]?.label}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-[90vw] object-contain rounded-xs shadow-2xl animate-in zoom-in-95 duration-200"
              />
            </figure>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-[#9b5238] text-white backdrop-blur-xs transition-all cursor-pointer"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Tira inferior de miniaturas */}
          <div className="max-w-4xl mx-auto w-full pt-3 border-t border-white/15">
            <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-1">
              {activeGallery.items.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() =>
                    setActiveGallery((prev) => (prev ? { ...prev, currentIndex: idx } : null))
                  }
                  className={`h-12 w-16 sm:h-16 sm:w-24 rounded-xs overflow-hidden border-2 transition-all shrink-0 cursor-pointer relative ${
                    activeGallery.currentIndex === idx
                      ? 'border-[#dbb294] scale-105 shadow-md'
                      : 'border-transparent opacity-40 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] text-white text-center py-0.5 truncate px-1">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
