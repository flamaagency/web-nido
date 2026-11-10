import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { DetailsSection } from '../sections/DetailsSection';
import { ContactSection } from '../sections/ContactSection';
import { ScrollProgressBar } from '../../hooks/useScrollAnimations';

import {
  navigationLinks,
  heroContent,
  aboutContent,
  projectsContent,
  detailsContent,
  contactContent,
} from '../../data/content';

export const Proposal1: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#EEE6DB] text-neutral-900 selection:bg-neutral-800 selection:text-white">
      <ScrollProgressBar color="#9b5238" />
      <Navbar links={navigationLinks} />
      <main className="flex-1">
        <HeroSection data={heroContent} />
        <AboutSection data={aboutContent} />
        <ProjectsSection data={projectsContent} />
        <DetailsSection data={detailsContent} />
        <ContactSection data={contactContent} />
      </main>
      <Footer />
    </div>
  );
};
