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
    'hero.title': 'AI Product Manager',
    'hero.subtitle': 'Liderando el desarrollo de productos basados en IA end-to-end, desde la ideación hasta el despliegue, combinando expertise técnico con visión de producto',
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
    'projects.featured': 'Destacado',
    'projects.noResults': 'No se encontraron proyectos',
    'projects.noResultsDesc': 'Prueba diferentes términos de búsqueda o selecciona una categoría diferente',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.subtitle': 'AI Product Manager con sólida base en inteligencia artificial y desarrollo de productos',
    'about.description': 'AI Product Manager con experiencia en construcción de soluciones de IA end-to-end para problemas de negocio reales. Combino expertise técnico en IA y APIs con mentalidad orientada a producto y comprensión profunda de las necesidades del cliente. Especializado en liderar equipos multifuncionales y impulsar la innovación a través de productos basados en IA.',
    'about.skills.ai': 'AI & ML',
    'about.skills.tools': 'Herramientas & Automatización',
    'about.skills.languages': 'Lenguajes de Programación',
    'about.skills.product': 'Product Management',
    
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
    
    // Project descriptions
    'project.realEstate.title': 'Sistema de Inversión Inmobiliaria',
    'project.realEstate.description': 'Sistema de análisis de inversiones inmobiliarias potenciado por IA para el mercado español. Integra APIs de Idealista y Fotocasa con agentes CrewAI para evaluación automática de oportunidades de inversión.',
    'project.chatbot.title': 'Chatbot IA The Green Brand',
    'project.chatbot.description': 'Chatbot conversacional para e-commerce integrado con TypeScript y Voiceflow, alineado con KPIs del cliente para soporte automatizado al cliente.',
    'project.focusflow.title': 'FocusFlow',
    'project.focusflow.description': 'Extensión de Chrome con temporizador Pomodoro y bloqueador de sitios web para mejorar la productividad durante el trabajo.',
    'project.hedgeFund.title': 'Fondo de Cobertura IA',
    'project.hedgeFund.description': 'Agentes de trading automatizado con análisis de sentimientos y capas de estrategia para gestión inteligente de inversiones.',
    'project.eliza.title': 'Agentes Framework Eliza',
    'project.eliza.description': 'Desarrollo e implementación de agentes autónomos personalizados usando el framework Eliza para automatización avanzada.',

    // Experience
    'experience.datway.title': 'Cofundador y AI Product Manager',
    'experience.datway.company': 'Datway.ai (freelance)',
    'experience.datway.description': 'Lideré el ciclo completo de vida de productos basados en IA, desde la ideación hasta la implementación y validación de usuarios. Diseñé e implementé chatbots conversacionales personalizados y automaticé flujos de trabajo complejos.',
    'experience.hospitality.title': 'Consultor de Hospitalidad y Coctelería',
    'experience.hospitality.company': 'Freelance',
    'experience.hospitality.description': 'Creé menús de cócteles personalizados, definí planes estratégicos y lideré equipos. Preparé estructuras de costos y presupuestos.',
    'experience.business.title': 'Desarrollador de Negocios',
    'experience.business.company': 'Schweppes Premium Mixers',
    'experience.business.description': 'Gestioné y mantuve carteras de clientes en toda España. Creé menús digitales y estrategias de marketing.',

    // Education
    'education.aipm.title': 'Curso de AI Product Manager',
    'education.aipm.institution': 'Microsoft',
    'education.aipm.description': 'Curso especializado en gestión de productos de inteligencia artificial',
    'education.dam.title': 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    'education.dam.institution': 'La Salle Barcelona',
    'education.dam.description': 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    'education.master.title': 'Máster en IA e Innovación',
    'education.master.institution': 'Founderz x Microsoft',
    'education.master.description': 'Máster en Inteligencia Artificial e Innovación',
    'education.advanced.title': 'Curso Avanzado en IA Generativa',
    'education.advanced.institution': 'UDIA/UCAM',
    'education.advanced.description': 'Curso Universitario Avanzado en IA Generativa',

    // Footer
    'footer.rights': 'Todos los derechos reservados',
    'footer.built': 'Construido con React, TypeScript y Tailwind CSS',
    'footer.backToTop': 'Volver arriba'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'AI Product Manager',
    'hero.subtitle': 'Leading end-to-end AI product development from ideation to deployment, combining technical expertise with product vision',
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
    'projects.featured': 'Featured',
    'projects.noResults': 'No projects found',
    'projects.noResultsDesc': 'Try different search terms or select a different category',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'AI Product Manager with strong foundation in artificial intelligence and product development',
    'about.description': 'AI Product Manager experienced in building end-to-end AI solutions for real-world business problems. I combine technical expertise in AI and APIs with a product-oriented mindset and deep understanding of customer needs. Specialized in leading cross-functional teams and driving innovation through AI-driven products.',
    'about.skills.ai': 'AI & ML',
    'about.skills.tools': 'Tools & Automation',
    'about.skills.languages': 'Programming Languages',
    'about.skills.product': 'Product Management',
    
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
    
    // Project descriptions
    'project.realEstate.title': 'Real Estate Investment System',
    'project.realEstate.description': 'AI-powered real estate investment analysis system for the Spanish market. Integrates Idealista and Fotocasa APIs with CrewAI agents for automatic investment opportunity evaluation.',
    'project.chatbot.title': 'AI Chatbot The Green Brand',
    'project.chatbot.description': 'Conversational chatbot for e-commerce integrated with TypeScript and Voiceflow, aligned with client KPIs for automated customer support.',
    'project.focusflow.title': 'FocusFlow',
    'project.focusflow.description': 'Chrome extension with Pomodoro timer and website blocker to improve productivity during work.',
    'project.hedgeFund.title': 'AI Hedge Fund',
    'project.hedgeFund.description': 'Automated trading agents with sentiment analysis and strategy layers for intelligent investment management.',
    'project.eliza.title': 'Eliza Framework Agents',
    'project.eliza.description': 'Development and deployment of custom autonomous agents using the Eliza framework for advanced automation.',

    // Experience
    'experience.datway.title': 'Cofounder & AI Product Manager',
    'experience.datway.company': 'Datway.ai (freelance)',
    'experience.datway.description': 'Led the full product lifecycle of AI-based solutions, from ideation to implementation and user validation. Designed and deployed custom conversational chatbots and automated complex workflows.',
    'experience.hospitality.title': 'Hospitality & Cocktail Consultant',
    'experience.hospitality.company': 'Freelance',
    'experience.hospitality.description': 'Created signature cocktail menus, defined strategic plans and led teams. Prepared cost structures and budgets.',
    'experience.business.title': 'Business Developer',
    'experience.business.company': 'Schweppes Premium Mixers',
    'experience.business.description': 'Managed and retained client portfolios across Spain. Created digital menus and marketing strategies.',

    // Education
    'education.aipm.title': 'AI Product Manager Course',
    'education.aipm.institution': 'Microsoft',
    'education.aipm.description': 'Specialized course in artificial intelligence product management',
    'education.dam.title': 'HND in Multiplatform Software Development',
    'education.dam.institution': 'La Salle Barcelona',
    'education.dam.description': 'Higher National Diploma in Multiplatform Software Development',
    'education.master.title': 'Master in AI & Innovation',
    'education.master.institution': 'Founderz x Microsoft',
    'education.master.description': 'Master in Artificial Intelligence and Innovation',
    'education.advanced.title': 'Advanced Course in Generative AI',
    'education.advanced.institution': 'UDIA/UCAM',
    'education.advanced.description': 'Advanced University Course in Generative AI',

    // Footer
    'footer.rights': 'All rights reserved',
    'footer.built': 'Built with React, TypeScript and Tailwind CSS',
    'footer.backToTop': 'Back to top'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

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