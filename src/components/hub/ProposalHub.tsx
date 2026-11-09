import React, { useRef, useState, useEffect } from 'react';
import type { ViewType } from './../proposals/ProposalSwitcher';
import { Maximize2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProposalHubProps {
  onSelectProposal: (proposal: ViewType) => void;
}

interface MonitorPreviewProps {
  id: ViewType;
  title: string;
  number: string;
  onOpen: () => void;
}

interface PhonePreviewProps {
  id: ViewType;
  title: string;
  number: string;
  position: 'center' | 'left' | 'right';
  onOpen: () => void;
  onClickSide: () => void;
}

/* --- MOCKUP DE SMARTPHONE COMPACTO PARA MOBILE (STAGE 3D COVERFLOW) --- */
const PhonePreview: React.FC<PhonePreviewProps> = ({
  id,
  title,
  number,
  position,
  onOpen,
  onClickSide,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.46);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        // Viewport móvil base de 375px
        setScale(Math.max(0.4, currentWidth / 375));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const isCenter = position === 'center';
  const isLeft = position === 'left';

  // Clases dinámicas de posición 3D (Sin ring rectangular para evitar trazos azules)
  const positionClasses = isCenter
    ? 'z-20 translate-x-0 scale-100 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(120,84,255,0.35)] cursor-pointer pointer-events-auto outline-hidden ring-0'
    : isLeft
    ? 'z-10 -translate-x-[64px] xs:-translate-x-[76px] scale-[0.78] opacity-40 hover:opacity-65 brightness-[0.75] cursor-pointer pointer-events-auto outline-hidden ring-0'
    : 'z-10 translate-x-[64px] xs:translate-x-[76px] scale-[0.78] opacity-40 hover:opacity-65 brightness-[0.75] cursor-pointer pointer-events-auto outline-hidden ring-0';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCenter) {
      onOpen();
    } else {
      onClickSide();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute transition-all duration-500 ease-out select-none flex flex-col items-center outline-hidden ring-0 border-0 ${positionClasses}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Chasis de Celular Compacto Titanium con borde curvado natural */}
      <div
        className={`relative w-[172px] xs:w-[190px] bg-[#17171a] rounded-[34px] p-2 border-2 ${
          isCenter
            ? 'border-[#7854FF]/80 shadow-[0_0_20px_rgba(120,84,255,0.3)]'
            : 'border-[#2b2b32]'
        } shadow-2xl transition-colors duration-300 outline-hidden ring-0`}
      >
        {/* Dynamic Island / Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-16 h-3.5 bg-black rounded-full flex items-center justify-end px-2 gap-0.5 shadow-inner pointer-events-none">
          <span className="w-1 h-1 rounded-full bg-[#1e2538]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#121215] border border-[#232328]" />
        </div>

        {/* Pantalla Interna del Celular */}
        <div
          ref={containerRef}
          className="relative w-full h-[330px] xs:h-[365px] bg-[#0c0c0e] rounded-[26px] overflow-hidden outline-hidden ring-0"
        >
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#131316] text-neutral-400 gap-1.5 text-xs">
              <div className="w-4 h-4 border-2 border-[#7854FF] border-t-transparent rounded-full animate-spin" />
              <span className="font-mono text-[8px] tracking-wider uppercase text-neutral-400">
                Propuesta 0{number}
              </span>
            </div>
          )}

          <iframe
            src={`/#${id}?embed=true`}
            title={`Vista móvil ${title}`}
            loading="eager"
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '375px',
              height: '750px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            className={`border-0 w-[375px] h-[750px] origin-top-left transition-opacity duration-200 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } ${isCenter ? 'pointer-events-auto' : 'pointer-events-none'}`}
          />

          {/* Botón flotante para abrir tamaño completo (solo en el central) */}
          {isCenter && (
            <div
              className="absolute bottom-2 right-2 p-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white hover:bg-[#7854FF] transition-all shadow-lg pointer-events-none"
              title="Abrir propuesta completa"
            >
              <ExternalLink size={11} />
            </div>
          )}
        </div>

        {/* Home Indicator Bar */}
        <div className="w-16 h-1 bg-white/30 rounded-full mx-auto mt-1.5 mb-0.5 pointer-events-none" />
      </div>
    </div>
  );
};

/* --- MOCKUP DE MONITOR DESKTOP (WIDESCREEN 16:10) --- */
const MonitorPreview: React.FC<MonitorPreviewProps> = ({ id, title, number, onOpen }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.28);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;
        // Referencia base de 1280px para desktop
        setScale(Math.max(0.18, currentWidth / 1280));
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="flex flex-col items-center w-full group cursor-pointer" onClick={onOpen}>
      {/* Marco de Pantalla del Monitor */}
      <div className="relative w-full rounded-2xl bg-[#161619] border border-[#2a2a2e] group-hover:border-[#7854FF] shadow-2xl transition-all duration-300 overflow-hidden group-hover:shadow-[0_10px_35px_rgba(120,84,255,0.28)]">
        {/* Barra Superior estilo Navegador Mac / Studio Display */}
        <div className="h-9 px-3.5 bg-[#1c1c20] border-b border-[#28282d] flex items-center justify-between select-none">
          {/* Botones de control estilo Mac */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>

          {/* Barra de Dirección URL con Pill */}
          <div className="px-3 py-0.5 rounded-full bg-[#121214] border border-[#26262b] flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] animate-pulse" />
            <span className="text-neutral-300 font-medium">nido.pe/propuesta-{number}</span>
          </div>

          {/* Icono de Expansión / Ver tamaño real */}
          <div
            className="text-neutral-400 group-hover:text-white p-1 rounded transition-colors"
            title="Clic para ver en tamaño real"
          >
            <Maximize2 size={12} />
          </div>
        </div>

        {/* Viewport Interactivo con Scroll y Proporciones Reales de Monitor Widescreen (16:10) */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/10] bg-[#0c0c0e] overflow-hidden"
        >
          {!isLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#131316] text-neutral-400 gap-2 text-xs">
              <div className="w-5 h-5 border-2 border-[#7854FF] border-t-transparent rounded-full animate-spin" />
              <span className="font-mono text-[10px] tracking-wider uppercase">Cargando propuesta {number}...</span>
            </div>
          )}

          <iframe
            src={`/#${id}?embed=true`}
            title={`Vista previa ${title}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            style={{
              width: '1280px',
              height: `${Math.round(800)}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
            className="border-0 w-[1280px] h-[800px] origin-top-left pointer-events-auto"
          />

          {/* Botón discreto para abrir en tamaño real */}
          <div
            className="absolute bottom-2.5 right-2.5 p-1.5 sm:p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-neutral-300 group-hover:text-white group-hover:bg-[#7854FF] group-hover:border-[#7854FF] transition-all shadow-lg pointer-events-none"
            title="Abrir propuesta en tamaño real"
          >
            <ExternalLink size={12} />
          </div>
        </div>
      </div>

      {/* Cuello Metálico del Monitor */}
      <div className="w-12 h-2.5 bg-gradient-to-b from-[#26262a] to-[#18181b] border-x border-[#2a2a2e]" />
      {/* Base plana del Monitor */}
      <div className="w-24 h-1 bg-[#232326] rounded-full border border-[#303035] shadow-md" />
    </div>
  );
};

export const ProposalHub: React.FC<ProposalHubProps> = ({ onSelectProposal }) => {
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  // Detección reactiva de mobile para no montar iframes innecesarios
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Gestos touch de swipe para el escenario móvil
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      // Deslizar izquierda -> siguiente
      setMobileActiveIndex((prev) => (prev + 1) % 3);
    } else if (diff < -45) {
      // Deslizar derecha -> anterior
      setMobileActiveIndex((prev) => (prev - 1 + 3) % 3);
    }
  };

  // Escuchar mensaje emitido desde el iframe cuando el usuario hace clic dentro de la miniatura
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      if (event.data?.type === 'OPEN_PROPOSAL' && event.data.view) {
        onSelectProposal(event.data.view);
      }
    };
    window.addEventListener('message', handleIframeMessage);
    return () => window.removeEventListener('message', handleIframeMessage);
  }, [onSelectProposal]);

  const proposals = [
    {
      id: 'propuesta-1' as ViewType,
      number: '1',
      title: 'Propuesta 01',
    },
    {
      id: 'propuesta-2' as ViewType,
      number: '2',
      title: 'Propuesta 02',
    },
    {
      id: 'propuesta-3' as ViewType,
      number: '3',
      title: 'Propuesta 03',
    },
  ];

  // Calcular la posición 3D de cada maqueta móvil respecto a la activa
  const getMobilePosition = (idx: number): 'center' | 'left' | 'right' => {
    if (idx === mobileActiveIndex) return 'center';
    if (
      (mobileActiveIndex === 0 && idx === 2) ||
      (mobileActiveIndex === 1 && idx === 0) ||
      (mobileActiveIndex === 2 && idx === 1)
    ) {
      return 'left';
    }
    return 'right';
  };

  const activeProposal = proposals[mobileActiveIndex];

  return (
    <div className="font-flama min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-[#111113] text-white antialiased overflow-x-hidden selection:bg-[#7854FF] selection:text-white">
      {/* HEADER SUPERIOR SLIM FLAMA AGENCY */}
      <header className="h-16 shrink-0 bg-[#111113]/90 backdrop-blur-md border-b border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-full flex items-center justify-between">
          {/* Logotipo de Flama Agency */}
          <div className="flex items-center gap-3">
            <a href="https://flamaagency.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
              <img
                src="/img/logotipo-flama-agency.svg"
                alt="Flama Agency"
                className="h-6 brightness-100 group-hover:opacity-80 transition-opacity"
              />
            </a>
            <span className="hidden sm:inline-block h-3.5 w-px bg-white/20" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-neutral-400">
                Presentación para
              </span>
              <img
                src="/img/logotipo-nido-white.png"
                alt="NIDO."
                className="h-3.5 w-auto object-contain brightness-110"
              />
            </div>
          </div>

          {/* Badges / Pill de estado */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-[#7854FF] animate-pulse" />
              <span>3 Maquetas</span>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=51979456610"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors"
            >
              Contactar Agencia
            </a>
          </div>
        </div>
      </header>

      {/* CONTENEDOR CENTRAL: TITULAR BAJADO Y ENCUADRADO */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full pt-3 pb-16 sm:pb-8 z-10">
        {/* Titular Bajado y Encuadrado armónicamente */}
        <div className="text-center mb-2.5 sm:mb-6 lg:mb-7 space-y-1 sm:space-y-2 relative z-10 max-w-3xl mx-auto">
          {/* Glow de fondo Flama centrado tras el título */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[460px] h-[130px] sm:h-[160px] bg-gradient-to-r from-[#7854FF]/25 via-[#b663af]/15 to-[#FF5540]/25 blur-3xl pointer-events-none rounded-full" />

          <h1 className="font-flama-heading text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black uppercase tracking-tight text-white leading-tight">
            Tres propuestas{' '}
            <span className="bg-gradient-to-r from-[#7854FF] via-[#b663af] to-[#FF5540] bg-clip-text text-transparent">
              para NIDO.
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-400 font-normal max-w-lg mx-auto leading-relaxed px-2">
            <span className="hidden md:inline">
              Haz scroll dentro de cada monitor para explorar la maqueta o haz clic para abrirla en tamaño real.
            </span>
            <span className="md:hidden">
              Toca o desliza para alternar entre las maquetas. Toca la del centro para verla completa.
            </span>
          </p>
        </div>

        {/* --- VISTA DESKTOP: Grid de 3 Monitores Widescreen (16:10) --- */}
        {!isMobile && (
          <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 w-full items-center">
            {proposals.map((item) => (
              <MonitorPreview
                key={item.id}
                id={item.id}
                number={item.number}
                title={item.title}
                onOpen={() => onSelectProposal(item.id)}
              />
            ))}
          </div>
        )}

        {/* --- VISTA MOBILE: Escenario 3D Coverflow (Uno al frente, dos atrás) --- */}
        {isMobile && (
          <div
            className="block md:hidden w-full flex flex-col items-center"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Escenario de celulares compactos en capas */}
            <div className="relative w-full max-w-[340px] xs:max-w-[360px] h-[350px] xs:h-[385px] flex items-center justify-center my-1 overflow-visible">
              {proposals.map((item, idx) => {
                const position = getMobilePosition(idx);
                return (
                  <PhonePreview
                    key={item.id}
                    id={item.id}
                    number={item.number}
                    title={item.title}
                    position={position}
                    onOpen={() => onSelectProposal(item.id)}
                    onClickSide={() => setMobileActiveIndex(idx)}
                  />
                );
              })}
            </div>

            {/* Indicador de Propuesta Central Activa (sin nombres largos) */}
            <div className="text-center mt-2 mb-1 px-4 flex items-center justify-center transition-all duration-300">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#7854FF] font-bold">
                PROPUESTA 0{activeProposal.number}
              </span>
            </div>

            {/* Controles de Navegación del Escenario Móvil */}
            <div className="flex items-center justify-center gap-4 mt-1.5">
              <button
                onClick={() => setMobileActiveIndex((prev) => (prev - 1 + 3) % 3)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white cursor-pointer"
                aria-label="Propuesta anterior"
              >
                <ChevronLeft size={16} />
              </button>

              {/* Píldoras / Dots indicadores */}
              <div className="flex items-center gap-2">
                {proposals.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      mobileActiveIndex === idx
                        ? 'w-6 bg-gradient-to-r from-[#7854FF] to-[#FF5540]'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir a propuesta ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setMobileActiveIndex((prev) => (prev + 1) % 3)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all text-white cursor-pointer"
                aria-label="Siguiente propuesta"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* FOOTER SLIM */}
      <footer className="h-8 shrink-0 pb-16 sm:pb-0 px-4 sm:px-6 lg:px-10 flex items-center justify-between text-[10px] text-neutral-500 border-t border-white/5 z-20">
        <div className="flex items-center gap-1.5">
          <span>Diseñado por</span>
          <strong className="text-neutral-400">Flama Agency</strong>
          <span>© 2026</span>
        </div>
        <p className="font-mono text-[10px] text-neutral-500 hidden sm:block">
          TIERRA · MATERIA · HOGAR · PERMANENCIA
        </p>
      </footer>
    </div>
  );
};
