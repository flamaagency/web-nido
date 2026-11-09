import React, { useState, useEffect } from 'react';
import { ProposalHub } from './components/hub/ProposalHub';
import { Proposal1 } from './components/proposals/Proposal1';
import { Proposal2 } from './components/proposals/Proposal2';
import { Proposal3 } from './components/proposals/Proposal3';
import { ProposalSwitcher, type ViewType } from './components/proposals/ProposalSwitcher';

export const App: React.FC = () => {
  // Detección de modo embebido (en miniaturas iframe del hub)
  const isEmbedded =
    typeof window !== 'undefined' &&
    (window.location.search.includes('embed=true') ||
      window.location.hash.includes('embed=true'));

  // Por defecto, la web oficial en el inicio "/" es la Propuesta 1 elegida por el cliente.
  // El Hub con las 3 propuestas queda respaldado y accesible vía "/#hub" o "/#propuestas".
  const getInitialView = (): ViewType => {
    if (typeof window === 'undefined') return 'propuesta-1';
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('propuesta-2')) return 'propuesta-2';
    if (hash.includes('propuesta-3')) return 'propuesta-3';
    if (hash.includes('hub') || hash.includes('propuestas')) return 'hub';
    // Por defecto: Propuesta 1 oficial
    return 'propuesta-1';
  };

  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);

  const handleSelectView = (view: ViewType) => {
    setCurrentView(view);
    if (view === 'propuesta-1') {
      // Dejar hash limpio o en inicio
      window.history.pushState(null, '', window.location.pathname);
    } else if (view === 'hub') {
      window.location.hash = 'hub';
    } else {
      window.location.hash = view;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('propuesta-2')) {
        setCurrentView('propuesta-2');
      } else if (hash.includes('propuesta-3')) {
        setCurrentView('propuesta-3');
      } else if (hash.includes('hub') || hash.includes('propuestas')) {
        setCurrentView('hub');
      } else if (hash.includes('propuesta-1')) {
        setCurrentView('propuesta-1');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Notificar al iframe padre si está embebido
  useEffect(() => {
    if (isEmbedded) {
      const handleIframeClick = () => {
        window.parent.postMessage({ type: 'OPEN_PROPOSAL', view: currentView }, '*');
      };
      window.addEventListener('click', handleIframeClick);
      return () => window.removeEventListener('click', handleIframeClick);
    }
  }, [isEmbedded, currentView]);

  const showSwitcher =
    !isEmbedded &&
    (currentView === 'propuesta-2' ||
      currentView === 'propuesta-3' ||
      window.location.hash.toLowerCase().includes('switcher'));

  return (
    <div className="relative min-h-screen">
      {/* Vistas según selección */}
      {currentView === 'hub' && (
        <ProposalHub onSelectProposal={(p) => handleSelectView(p)} />
      )}

      {currentView === 'propuesta-1' && <Proposal1 />}

      {currentView === 'propuesta-2' && <Proposal2 />}

      {currentView === 'propuesta-3' && <Proposal3 />}

      {/* Switcher flotante para navegar entre propuestas alternativas */}
      {showSwitcher && (
        <ProposalSwitcher
          currentView={currentView}
          onSelectView={handleSelectView}
        />
      )}
    </div>
  );
};

export default App;
