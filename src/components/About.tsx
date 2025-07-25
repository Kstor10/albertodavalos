import React from 'react';
import { Code, Database, Smartphone, Brain, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = {
    ai: [
      'Azure ML', 'CrewAI', 'LangFlow', 'OpenAI API', 'Anthropic Claude', 'Hugging Face',
      'Pinecone', 'LangChain', 'RapidAPI', 'AI Agents', 'Machine Learning'
    ],
    tools: [
      'Make', 'Zapier', 'Voiceflow', 'N8N', 'PowerBI', 'Figma', 'Miro',
      'Jira', 'Notion', 'Airtable', 'Google Workspace', 'Microsoft PowerApps'
    ],
    languages: [
      'TypeScript', 'JavaScript', 'Python'
    ],
    product: [
      'Product Lifecycle', 'Stakeholder Management', 'Agile Methodologies', 
      'User Validation', 'Roadmapping', 'Cross-functional Teams', 'KPI Analysis'
    ]
  };

  const skillCategories = [
    {
      key: 'ai',
      title: t('about.skills.ai'),
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: skills.ai
    },
    {
      key: 'tools',
      title: t('about.skills.tools'),
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: skills.tools
    },
    {
      key: 'languages',
      title: t('about.skills.languages'),
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: skills.languages
    },
    {
      key: 'product',
      title: t('about.skills.product'),
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: skills.product
    }
  ];

  const experience = [
    {
      title: 'Cofounder & AI Product Manager',
      company: 'Datway.ai (freelance)',
      period: '2023 - 2025',
      description: 'Lideré el ciclo completo de productos basados en IA, desde ideación hasta implementación y validación de usuarios. Diseñé y desplegué chatbots conversacionales personalizados y automaticé flujos de trabajo complejos.'
    },
    {
      title: 'Hospitality & Cocktail Consultant',
      company: 'Freelance',
      period: 'Mar 2019 - Ene 2024',
      description: 'Creé menús de cócteles signature, definí planes estratégicos y lideré equipos. Preparé estructuras de costos y presupuestos.'
    },
    {
      title: 'Business Developer',
      company: 'Schweppes Premium Mixers',
      period: 'Feb 2020 - Oct 2020',
      description: 'Gestioné y mantuve portafolios de clientes en España. Creé menús digitales y estrategias de marketing.'
    }
  ];

  const education = [
    {
      title: 'AI Product Manager Course',
      institution: 'Microsoft',
      period: '2025 - En curso',
      description: 'Curso especializado en gestión de productos de inteligencia artificial'
    },
    {
      title: 'HND in Multiplatform Software Development',
      institution: 'La Salle Barcelona',
      period: '2025 - En curso',
      description: 'Higher National Diploma en Desarrollo de Software Multiplataforma'
    },
    {
      title: 'Master in AI & Innovation',
      institution: 'Founderz x Microsoft',
      period: 'Oct 2024 - Jun 2025',
      description: 'Máster en Inteligencia Artificial e Innovación'
    },
    {
      title: 'Advanced Course in Generative AI',
      institution: 'UDIA/UCAM',
      period: 'Jul 2024 - Oct 2024',
      description: 'Curso Universitario Avanzado en IA Generativa'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Bio Section */}
          <div className="lg:col-span-1">
            <div className="cyber-card p-8 text-center">
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl font-bold text-gradient font-mono">LAD</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Luis Alberto Dávalos</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Proyectos IA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">C2</div>
                  <div className="text-sm text-muted-foreground">Inglés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Idiomas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {skillCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.key} className="cyber-card p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-3`}>
                        <Icon className="text-white" size={20} />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span key={skill} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold">Experiencia</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="cyber-card p-6">
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <div className="text-primary font-medium mb-2">{item.company}</div>
                    <div className="text-sm text-muted-foreground mb-3">{item.period}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < experience.length - 1 && (
                    <div className="absolute left-4 top-full w-px h-6 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary mr-3" size={24} />
              <h3 className="text-2xl font-bold">Educación</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  <div className="cyber-card p-6">
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <div className="text-primary font-medium mb-2">{item.institution}</div>
                    <div className="text-sm text-muted-foreground mb-3">{item.period}</div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  
                  {/* Timeline connector */}
                  {index < education.length - 1 && (
                    <div className="absolute left-4 top-full w-px h-6 bg-border"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;