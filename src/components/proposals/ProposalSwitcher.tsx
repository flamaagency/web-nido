import React from 'react';
import { Layers, ArrowLeft, Eye, Building2 } from 'lucide-react';

export type ViewType = 'hub' | 'propuesta-1' | 'propuesta-2' | 'propuesta-3';

interface ProposalSwitcherProps {
  currentView: ViewType;
  onSelectView: (view: ViewType) => void;
}

export const ProposalSwitcher: React.FC<ProposalSwitcherProps> = ({ currentView, onSelectView }) => {
  return (
    <aside
      aria-label="Selector de propuestas visuales"
      style={{ bottom: 'max(14px, env(safe-area-inset-bottom, 14px))' }}
      className="fixed left-1/2 -translate-x-1/2 z-[9999] bg-[#141413]/95 text-white backdrop-blur-xl px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.75)] flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs max-w-[96vw] overflow-x-auto select-none pointer-events-auto"
    >
      <button
        type="button"
        onClick={() => onSelectView('hub')}
        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
          currentView === 'hub'
            ? 'bg-white text-neutral-950 font-semibold shadow-xs'
            : 'text-neutral-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <ArrowLeft size={12} />
        <span>Hub</span>
      </button>

      <span className="w-px h-3.5 bg-white/20 shrink-0" />

      <button
        type="button"
        onClick={() => onSelectView('propuesta-1')}
        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
          currentView === 'propuesta-1'
            ? 'bg-[#dbb294] text-neutral-950 font-semibold shadow-xs'
            : 'text-neutral-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <Eye size={12} />
        <span><span className="hidden sm:inline">Propuesta </span>1</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectView('propuesta-2')}
        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
          currentView === 'propuesta-2'
            ? 'bg-[#dbb294] text-neutral-950 font-semibold shadow-xs'
            : 'text-neutral-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <Layers size={12} />
        <span><span className="hidden sm:inline">Propuesta </span>2</span>
      </button>

      <button
        type="button"
        onClick={() => onSelectView('propuesta-3')}
        className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
          currentView === 'propuesta-3'
            ? 'bg-[#9b5238] text-white font-semibold shadow-xs'
            : 'text-neutral-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <Building2 size={12} />
        <span><span className="hidden sm:inline">Propuesta </span>3</span>
      </button>
    </aside>
  );
};
