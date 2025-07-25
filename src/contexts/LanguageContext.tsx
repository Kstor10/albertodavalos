import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Desarrollador Full Stack & IA',
    'hero.subtitle': 'Creando experiencias digitales excepcionales con tecnologías modernas y soluciones de inteligencia artificial',
    'hero.cta': 'Ver Proyectos',
    'hero.download': 'Descargar CV',
    
    // Projects Section
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Una selección de mis trabajos más recientes en desarrollo web, IA y aplicaciones multiplataforma',
    'projects.filter.all': 'Todos',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.ai': 'IA',
    'projects.filter.extension': 'Extensiones',
    'projects.search': 'Buscar proyectos...',
    'projects.demo': 'Ver Demo',
    'projects.code': 'Ver Código',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador apasionado por crear soluciones innovadoras',
    'about.description': 'Con más de 5 años de experiencia en desarrollo full stack, me especializo en crear aplicaciones web modernas, soluciones de IA y aplicaciones multiplataforma. Mi objetivo es transformar ideas complejas en productos digitales elegantes y funcionales.',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.mobile': 'Mobile/Desktop',
    'about.skills.ai': 'Inteligencia Artificial',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.subtitle': 'Colaboremos en tu próximo proyecto',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.direct.title': 'Contacto Directo',
    'contact.direct.subtitle': 'Respuesta en menos de 24 horas',
    'contact.availability': 'Disponible para proyectos freelance',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con React, TypeScript y Tailwind CSS'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Full Stack Developer & AI',
    'hero.subtitle': 'Creating exceptional digital experiences with modern technologies and artificial intelligence solutions',
    'hero.cta': 'View Projects',
    'hero.download': 'Download CV',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my latest work in web development, AI, and cross-platform applications',
    'projects.filter.all': 'All',
    'projects.filter.web': 'Web',
    'projects.filter.mobile': 'Mobile',
    'projects.filter.ai': 'AI',
    'projects.filter.extension': 'Extensions',
    'projects.search': 'Search projects...',
    'projects.demo': 'View Demo',
    'projects.code': 'View Code',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about creating innovative solutions',
    'about.description': 'With over 5 years of experience in full stack development, I specialize in creating modern web applications, AI solutions, and cross-platform applications. My goal is to transform complex ideas into elegant and functional digital products.',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.mobile': 'Mobile/Desktop',
    'about.skills.ai': 'Artificial Intelligence',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.subtitle': "Let's collaborate on your next project",
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.direct.title': 'Direct Contact',
    'contact.direct.subtitle': 'Response within 24 hours',
    'contact.availability': 'Available for freelance projects',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with React, TypeScript and Tailwind CSS'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};