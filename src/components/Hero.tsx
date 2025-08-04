import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
const Hero: React.FC = () => {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const copyEmail = () => {
    navigator.clipboard.writeText('albertodavalos.ia@gmail.com');
    toast({
      title: "Email copied!",
      description: "albertodavalos.ia@gmail.com has been copied to your clipboard."
    });
  };
  const downloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a');
    link.href = '/cv-luis-alberto-davalos.pdf'; // You'll need to add the CV file to public folder
    link.download = 'Luis-Alberto-Davalos-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const socialLinks = [{
    icon: Github,
    href: 'https://github.com/Kstor10',
    label: 'GitHub'
  }, {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/luis-alberto-dávalos-5b7a94188',
    label: 'LinkedIn'
  }, {
    icon: Mail,
    href: '#',
    label: 'Email',
    onClick: copyEmail
  }];
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="animate-fade-in">
            {/* Greeting */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-foreground">Luis Alberto Dávalos</span>
              <span className="block text-gradient">{t('hero.title')}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button onClick={scrollToProjects} className="cyber-button flex items-center justify-center gap-3 text-white font-medium">
                {t('hero.cta')}
                <ArrowRight size={20} />
              </button>
              
              
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({
              icon: Icon,
              href,
              label,
              onClick
            }) => onClick ? <button key={label} onClick={onClick} className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 hover:shadow-lg group" aria-label={label}>
                    <Icon size={20} className="group-hover:text-primary transition-colors" />
                  </button> : <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 hover:shadow-lg group" aria-label={label}>
                    <Icon size={20} className="group-hover:text-primary transition-colors" />
                  </a>)}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;