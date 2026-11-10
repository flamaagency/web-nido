import React, { useState } from 'react';
import type { ContactData, ContactFormState } from '../../types';
import { MessageSquare, Mail, MapPin, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { ScrollText, ScrollBox } from '../../hooks/useScrollAnimations';
import { assetUrl } from '../../utils/assets';

const InstagramIcon: React.FC<{ size?: number; className?: string }> = ({ size = 18, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
  </svg>
);

interface ContactSectionProps {
  data: ContactData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => {
  const [formData, setFormData] = useState<ContactFormState>({
    fullName: '',
    email: '',
    phone: '',
    projectInterest: 'BOSCO',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const renderChannelIcon = (type: string) => {
    switch (type) {
      case 'whatsapp':
        return <MessageSquare size={18} className="text-neutral-800" />;
      case 'email':
        return <Mail size={18} className="text-neutral-800" />;
      case 'instagram':
        return <InstagramIcon size={18} className="text-neutral-800" />;
      default:
        return <MapPin size={18} className="text-neutral-800" />;
    }
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 bg-[#EEE6DB] text-neutral-900 border-b border-[#ded5c8]"
      aria-label="Contacto e información de proyectos"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Encabezado Fiel a la Captura y PDF */}
        <header className="mb-12 sm:mb-16">
          <ScrollText delay={50}>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#858E71] font-semibold block mb-3">
              {data.sectionTag || 'CONTACTO'}
            </span>
          </ScrollText>

          <ScrollText delay={150}>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#858E71] tracking-tight leading-none mb-4">
              {data.title || 'Conversemos.'}
            </h2>
          </ScrollText>

          <ScrollText delay={250}>
            <p className="text-base sm:text-lg md:text-xl font-serif text-[#858E71]/85 font-normal max-w-2xl leading-relaxed">
              {data.subtitle || '¿Te interesa alguno de nuestros proyectos? Nos encantará ayudarte a encontrar un lugar donde quieras quedarte.'}
            </p>
          </ScrollText>
        </header>

        {/* Estructura Principal: Imagen al costado del Formulario */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16 sm:mb-20">
          {/* Columna Izquierda: Fotografía de Arquitectura */}
          <ScrollBox delay={100} className="lg:col-span-5 h-full min-h-[420px] lg:min-h-[580px]">
            <figure className="m-0 h-full w-full overflow-hidden rounded-xs bg-[#e3dbcd] shadow-sm border border-[#ded5c8] relative group">
              <img
                src={data.imageSrc || assetUrl('img/content/nido-contacto-arquitectura-real.webp')}
                alt="Ambiente y arquitectura NIDO"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-103 group-hover:brightness-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
            </figure>
          </ScrollBox>

          {/* Columna Derecha: Tarjeta de Formulario "Hablemos de tu próximo hogar." */}
          <ScrollBox
            delay={220}
            className="lg:col-span-7 bg-[#FAF7F2] p-8 sm:p-12 rounded-xs border border-[#ded5c8] shadow-xs flex flex-col justify-center"
          >
            <h3 className="text-2xl sm:text-3xl font-serif text-[#858E71] mb-8 tracking-tight">
              {data.formTitle || 'Hablemos de tu próximo hogar.'}
            </h3>

            {isSubmitted ? (
              <div
                className="p-10 bg-white border border-[#ded5c8] text-center flex flex-col items-center justify-center space-y-4 rounded-xs shadow-xs"
                role="alert"
              >
                <CheckCircle2 size={44} className="text-[#858E71]" />
                <h4 className="text-2xl font-serif text-[#858E71]">
                  Mensaje recibido con éxito
                </h4>
                <p className="text-sm text-[#555349] font-light max-w-md leading-relaxed">
                  Gracias por tu interés en NIDO. Nos pondremos en contacto contigo en las próximas horas.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 bg-[#555349] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#858E71] transition-colors cursor-pointer"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555349] mb-2"
                  >
                    NOMBRE COMPLETO
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Carlos Mendoza"
                    className="w-full px-4 py-3.5 bg-white border border-[#ded5c8] text-neutral-900 text-sm focus:outline-hidden focus:border-[#858E71] focus:ring-1 focus:ring-[#858E71] transition-all rounded-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555349] mb-2"
                    >
                      CORREO ELECTRÓNICO
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-4 py-3.5 bg-white border border-[#ded5c8] text-neutral-900 text-sm focus:outline-hidden focus:border-[#858E71] focus:ring-1 focus:ring-[#858E71] transition-all rounded-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555349] mb-2"
                    >
                      TELÉFONO
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+51 987 654 321"
                      className="w-full px-4 py-3.5 bg-white border border-[#ded5c8] text-neutral-900 text-sm focus:outline-hidden focus:border-[#858E71] focus:ring-1 focus:ring-[#858E71] transition-all rounded-xs"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="projectInterest"
                    className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555349] mb-2"
                  >
                    PROYECTO DE INTERÉS
                  </label>
                  <div className="relative">
                    <select
                      id="projectInterest"
                      name="projectInterest"
                      value={formData.projectInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 bg-white border border-[#ded5c8] text-neutral-900 text-sm focus:outline-hidden focus:border-[#858E71] focus:ring-1 focus:ring-[#858E71] transition-all rounded-xs appearance-none cursor-pointer pr-10"
                    >
                      <option value="BOSCO">BOSCO — Vivir frente al parque lo cambia todo</option>
                      <option value="MORATTA">MORATTA — En Construcción</option>
                      <option value="CASCANUECES">CASCANUECES — En Acabados</option>
                      <option value="GENERAL">Información general / Próximos desarrollos</option>
                    </select>
                    <ChevronDown
                      size={18}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#555349] mb-2"
                  >
                    MENSAJE (OPCIONAL)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos sobre tus preferencias de metraje, dormitorios o dudas..."
                    className="w-full px-4 py-3 bg-white border border-[#ded5c8] text-neutral-900 text-sm focus:outline-hidden focus:border-[#858E71] focus:ring-1 focus:ring-[#858E71] transition-all rounded-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-[#555349] text-white text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#858E71] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs group"
                >
                  <span>{isLoading ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </form>
            )}
          </ScrollBox>
        </div>

        {/* Canales Directos y Visítanos (WhatsApp, Correo, Instagram, Oficina) */}
        <div className="pt-12 border-t border-[#ded5c8]">
          <ScrollText delay={50}>
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#858E71] font-semibold block mb-6">
              CANALES DE ATENCIÓN DIRECTA
            </span>
          </ScrollText>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.channels.map((channel, cIdx) => (
              <ScrollBox key={channel.id} delay={cIdx * 90}>
                <a
                  href={channel.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 bg-[#FAF7F2] border border-[#ded5c8] rounded-xs hover:border-[#858E71] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#e3dbcd] flex items-center justify-center shrink-0 border border-[#ded5c8] group-hover:bg-[#858E71] group-hover:text-white transition-all duration-300">
                    {renderChannelIcon(channel.type)}
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#858E71] font-semibold group-hover:text-[#555349] transition-colors">
                      {channel.title}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-900 block">
                      {channel.value}
                    </span>
                    <span className="text-[11px] text-[#555349] font-light truncate block max-w-[160px]">
                      {channel.subtext}
                    </span>
                  </div>
                </a>
              </ScrollBox>
            ))}

            {/* Visítanos */}
            {data.visitInfo && (
              <ScrollBox delay={data.channels.length * 90}>
                <div className="flex items-center gap-3.5 p-4 bg-[#FAF7F2] border border-[#ded5c8] rounded-xs hover:border-[#858E71] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-[#e3dbcd] flex items-center justify-center shrink-0 border border-[#ded5c8] group-hover:bg-[#858E71] group-hover:text-white transition-all duration-300">
                    <MapPin size={18} className="text-neutral-800 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="block text-[10px] uppercase tracking-wider text-[#858E71] font-semibold">
                      {data.visitInfo.title}
                    </span>
                    <a
                      href={data.visitInfo.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[#9b5238] transition-colors group/visita mt-0.5"
                    >
                      <span>{data.visitInfo.actionLabel || 'VER UBICACIÓN'}</span>
                      <ArrowRight size={12} className="group-hover/visita:translate-x-1 transition-transform" />
                    </a>
                    <span className="text-[11px] text-neutral-500 font-light block">
                      Oficina comercial
                    </span>
                  </div>
                </div>
              </ScrollBox>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
