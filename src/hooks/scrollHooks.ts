import { useEffect, useRef, useState } from 'react';

/**
 * Hook para detectar el progreso del scroll en la ventana (0 a 100%)
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

/**
 * Hook para detectar si la página ha sido scroleada (para compactar / estilizar navbar)
 */
export function useScrolledState(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}

/**
 * Hook de revelado reactivo por IntersectionObserver bidireccional
 * Dispara animación visible al entrar a la ventana y desvanece suavemente al salir
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
}) {
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reactivo bidireccional: entra -> true, sale -> false
        setIsRevealed(entry.isIntersecting);
      },
      {
        threshold: options?.threshold ?? 0.1,
        // -60px en bottom asegura que el elemento empiece a animarse DENTRO del viewport visible
        // -40px en top asegura que empiece a desvanecerse al irse por arriba
        rootMargin: options?.rootMargin ?? '-40px 0px -60px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isRevealed };
}

/**
 * Hook para efecto parallax vertical fluido
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed: number = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight + 150 && rect.bottom > -150) {
            const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;
            const translateY = distanceFromCenter * speed;
            element.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
          }
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}
