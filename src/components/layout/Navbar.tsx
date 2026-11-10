import React, { useState, useEffect } from 'react';
import type { NavLinkItem } from '../../types';
import { Menu, X } from 'lucide-react';
import { assetUrl } from '../../utils/assets';

interface NavbarProps {
  links: NavLinkItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#EEE6DB]/95 backdrop-blur-md border-b border-[#ded5c8] py-3.5 shadow-xs'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Brand Logo Oficial */}
        <a
          href="#"
          className="flex items-center hover:opacity-85 hover:scale-102 transition-all duration-300"
          aria-label="NIDO Inicio"
        >
          <img
            src={isScrolled ? assetUrl('img/nido-logotipo-oficial.png') : assetUrl('img/nido-logotipo-oficial-blanco.png')}
            alt="NIDO Desarrollos Inmobiliarios"
            className="h-6 sm:h-7.5 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation (A la derecha con bastante espacio entre ellas como pide el PDF) */}
        <nav
          className="hidden md:flex items-center gap-10 lg:gap-14"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 relative group py-1 ${
                isScrolled ? 'text-neutral-700 hover:text-[#9b5238]' : 'text-white/90 hover:text-[#a2a397]'
              }`}
            >
              <span>{link.label}</span>
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-[#9b5238]' : 'bg-[#a2a397]'
                }`}
              />
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-md transition-colors cursor-pointer ${
            isScrolled ? 'text-neutral-900 hover:bg-neutral-200/50' : 'text-white hover:bg-white/10'
          }`}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav
          className="md:hidden bg-[#EEE6DB] text-neutral-900 px-6 py-8 border-b border-[#ded5c8] shadow-xl flex flex-col gap-4 animate-in fade-in duration-200"
          aria-label="Menú móvil"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
              className="text-xs uppercase font-semibold tracking-widest py-3 border-b border-neutral-200/60 hover:text-[#9b5238] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-3 text-center text-xs uppercase tracking-widest font-semibold px-4 py-3 bg-[#9b5238] text-white rounded-xs hover:bg-[#803f29] transition-colors shadow-sm"
          >
            Conversemos
          </a>
        </nav>
      )}
    </header>
  );
};
