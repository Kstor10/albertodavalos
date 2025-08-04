import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import realEstateImg from '@/assets/real-estate-ai.jpg';
import chatbotImg from '@/assets/chatbot-ai.jpg';
import focusflowImg from '@/assets/focusflow.jpg';
import hedgeFundImg from '@/assets/ai-hedge-fund.jpg';
import elizaImg from '@/assets/eliza-agents.jpg';

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
      title: t('project.realEstate.title'),
      description: t('project.realEstate.description'),
      image: realEstateImg,
      technologies: ['Python', 'CrewAI', 'REST APIs', 'Data Analysis', 'dotenv'],
      category: 'ai',
      date: '2024-12',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: '2',
      title: t('project.chatbot.title'),
      description: t('project.chatbot.description'),
      image: chatbotImg,
      technologies: ['TypeScript', 'Voiceflow', 'API Integration'],
      category: 'ai',
      date: '2024-11',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: '3',
      title: t('project.focusflow.title'),
      description: t('project.focusflow.description'),
      image: focusflowImg,
      technologies: ['JavaScript', 'Chrome Extension APIs'],
      category: 'extension',
      date: '2024-10',
      demoUrl: '#',
      codeUrl: '#',
      featured: true
    },
    {
      id: '4',
      title: t('project.hedgeFund.title'),
      description: t('project.hedgeFund.description'),
      image: hedgeFundImg,
      technologies: ['Python', 'AI Agents', 'Financial APIs', 'Sentiment Analysis'],
      category: 'ai',
      date: '2024-09',
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: '5',
      title: t('project.eliza.title'),
      description: t('project.eliza.description'),
      image: elizaImg,
      technologies: ['Eliza Framework', 'Node.js', 'AI Agents', 'Jupyter'],
      category: 'ai',
      date: '2024-08',
      demoUrl: '#',
      codeUrl: '#'
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
                        {t('projects.featured')}
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
            <h3 className="text-xl font-semibold mb-2">{t('projects.noResults')}</h3>
            <p className="text-muted-foreground">
              {t('projects.noResultsDesc')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;