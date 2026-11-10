import React from 'react';
import { assetUrl } from '../../utils/assets';

export const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#424039] text-[#faf8f5] py-14 sm:py-16 border-t border-[#555349]"
      aria-label="Pie de página NIDO"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logotipo Oficial NIDO en blanco */}
          <a href="#inicio" className="inline-block hover:opacity-85 transition-opacity">
            <img
              src={assetUrl('img/nido-logotipo-oficial-blanco.png')}
              alt="NIDO Desarrollos Inmobiliarios"
              className="h-8 sm:h-9 w-auto object-contain brightness-105"
            />
          </a>

          {/* Lema Oficial Fiel al PDF con tipografía cursiva refinada */}
          <p className="font-cursive-tagline text-lg sm:text-2xl text-[#a2a397] text-center md:text-right font-normal tracking-wide">
            "Construimos lugares donde quieras quedarte."
          </p>
        </div>

        {/* Barra Inferior Discreta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/60 font-light tracking-wider">
          <div>
            © {new Date().getFullYear()} NIDO Desarrollos Inmobiliarios. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest">
            <a href="#nosotros" className="hover:text-white transition-colors">
              Nosotros
            </a>
            <a href="#proyectos" className="hover:text-white transition-colors">
              Proyectos
            </a>
            <a href="#en-detalle" className="hover:text-white transition-colors">
              En detalle
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
