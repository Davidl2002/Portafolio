'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Spotlight from '@/components/Spotlight';

export default function Home() {
  useEffect(() => {
    // Inicializar animaciones globales si es necesario
    console.log('Portafolio cargado');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Spotlight />
      
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
