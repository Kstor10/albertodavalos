import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
