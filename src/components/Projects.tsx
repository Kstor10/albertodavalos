import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'extension';
  date: string;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'FocusFlow - Chrome Extension',
      description: 'Extensión de productividad que ayuda a gestionar el tiempo y mantener el enfoque durante el trabajo, con análisis detallado de actividad.',
      image: '/api/placeholder/400/240',
      technologies: ['JavaScript', 'Chrome APIs', 'Chart.js', 'CSS3'],
      category: 'extension',
      date: '2024-01',
      demoUrl: 'https://chrome.google.com/webstore',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: '2',
      title: 'AI Chatbot Assistant',
      description: 'Asistente conversacional inteligente con capacidades de procesamiento de lenguaje natural y aprendizaje continuo.',
      image: '/api/placeholder/400/240',
      technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL', 'FastAPI'],
      category: 'ai',
      date: '2024-02',
      demoUrl: 'https://demo.example.com',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: '3',
      title: 'TaskMaster Mobile App',
      description: 'Aplicación móvil multiplataforma para gestión de tareas con sincronización en tiempo real y colaboración en equipo.',
      image: '/api/placeholder/400/240',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
      category: 'mobile',
      date: '2023-12',
      demoUrl: 'https://app.example.com',
      codeUrl: 'https://github.com',
      featured: true
    },
    {
      id: '4',
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con panel de administración, sistema de pagos y analytics avanzados.',
      image: '/api/placeholder/400/240',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
      category: 'web',
      date: '2023-11',
      demoUrl: 'https://shop.example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: '5',
      title: 'ML Image Classifier',
      description: 'Sistema de clasificación de imágenes usando machine learning con interfaz web para entrenamiento y predicción.',
      image: '/api/placeholder/400/240',
      technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'AWS'],
      category: 'ai',
      date: '2023-10',
      demoUrl: 'https://classifier.example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: '6',
      title: 'Portfolio Website',
      description: 'Sitio web personal responsivo con diseño moderno, optimizado para SEO y rendimiento.',
      image: '/api/placeholder/400/240',
      technologies: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
      category: 'web',
      date: '2023-09',
      demoUrl: 'https://portfolio.example.com',
      codeUrl: 'https://github.com'
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.filter.all') },
    { key: 'web', label: t('projects.filter.web') },
    { key: 'mobile', label: t('projects.filter.mobile') },
    { key: 'ai', label: t('projects.filter.ai') },
    { key: 'extension', label: t('projects.filter.extension') }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const CategoryIcon = ({ category }: { category: string }) => {
    const iconClass = "w-4 h-4";
    switch (category) {
      case 'web': return <span className={iconClass}>🌐</span>;
      case 'mobile': return <span className={iconClass}>📱</span>;
      case 'ai': return <span className={iconClass}>🤖</span>;
      case 'extension': return <span className={iconClass}>🧩</span>;
      default: return <Tag className={iconClass} />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1 max-w-md mx-auto lg:mx-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder={t('projects.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input pl-10 w-full"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-2">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'cyber-button text-white'
                    : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="cyber-card p-6 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                      <CategoryIcon category={project.category} />
                      <span className="capitalize">{project.category}</span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Date & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-primary hover:bg-primary-700 text-white transition-colors"
                          title={t('projects.demo')}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                          title={t('projects.code')}
                        >
                          <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No se encontraron proyectos</h3>
            <p className="text-muted-foreground">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;