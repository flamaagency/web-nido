import React from 'react';
import { useScrollProgress, useScrollReveal, useParallax } from './scrollHooks';

/**
 * Barra de progreso fija superior ultra-fina (indicador de scroll premium)
 */
export const ScrollProgressBar: React.FC<{ color?: string }> = ({ color = '#9b5238' }) => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-black/5 z-[100] pointer-events-none">
      <div
        className="h-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(155,82,56,0.65)]"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

/**
 * Componente envoltorio ScrollReveal con animaciones de entrada y salida perceptibles
 */
interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'scale' | 'fade-left' | 'fade-right' | 'fade';
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 850,
  className = '',
  threshold,
  rootMargin,
}) => {
  const { ref, isRevealed } = useScrollReveal({ threshold, rootMargin });

  const getHiddenTransform = () => {
    switch (animation) {
      case 'scale':
        return 'translate3d(0, 48px, 0) scale(0.93)';
      case 'fade-left':
        return 'translate3d(-56px, 0, 0) scale(0.97)';
      case 'fade-right':
        return 'translate3d(56px, 0, 0) scale(0.97)';
      case 'fade':
        return 'translate3d(0, 0, 0) scale(1)';
      case 'fade-up':
      default:
        return 'translate3d(0, 56px, 0) scale(0.97)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0, 0, 0) scale(1)' : getHiddenTransform(),
        filter: isRevealed ? 'blur(0px)' : 'blur(4px)',
        transition: isRevealed
          ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : `opacity 450ms cubic-bezier(0.4, 0, 1, 1) 0ms, transform 450ms cubic-bezier(0.4, 0, 1, 1) 0ms, filter 450ms cubic-bezier(0.4, 0, 1, 1) 0ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Componente específico para textos (títulos, subtítulos, párrafos, badges)
 * Aplica una elevación suave con foco óptico (de blur sutil a nítido)
 */
interface ScrollTextProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

export const ScrollText: React.FC<ScrollTextProps> = ({
  children,
  delay = 0,
  duration = 750,
  className = '',
  as = 'div',
}) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.15, rootMargin: '-30px 0px -50px 0px' });
  const Component = as as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0, 0, 0)' : 'translate3d(0, 36px, 0)',
        filter: isRevealed ? 'blur(0px)' : 'blur(3px)',
        transition: isRevealed
          ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : `opacity 350ms cubic-bezier(0.4, 0, 1, 1) 0ms, transform 350ms cubic-bezier(0.4, 0, 1, 1) 0ms, filter 350ms cubic-bezier(0.4, 0, 1, 1) 0ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </Component>
  );
};

/**
 * Componente específico para cajas, tarjetas, figuras y contenedores
 * Aplica una aparición con profundidad, escala y elevación
 */
interface ScrollBoxProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollBox: React.FC<ScrollBoxProps> = ({
  children,
  delay = 0,
  duration = 900,
  className = '',
}) => {
  const { ref, isRevealed } = useScrollReveal({ threshold: 0.08, rootMargin: '-40px 0px -70px 0px' });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isRevealed ? 1 : 0,
        transform: isRevealed ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 60px, 0) scale(0.94)',
        filter: isRevealed ? 'blur(0px)' : 'blur(5px)',
        transition: isRevealed
          ? `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
          : `opacity 400ms cubic-bezier(0.4, 0, 1, 1) 0ms, transform 400ms cubic-bezier(0.4, 0, 1, 1) 0ms, filter 400ms cubic-bezier(0.4, 0, 1, 1) 0ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Componente Parallax Layer
 */
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  speed = 0.15,
  className = '',
  style = {},
}) => {
  const ref = useParallax<HTMLDivElement>(speed);

  return (
    <div
      ref={ref}
      className={`will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
