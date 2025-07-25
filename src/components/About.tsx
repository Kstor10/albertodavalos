import React from 'react';
import { Code, Database, Smartphone, Brain, Award, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = {
    frontend: [
      'React', 'Vue.js', 'TypeScript', 'Next.js', 'TailwindCSS', 'SASS',
      'HTML5', 'CSS3', 'JavaScript ES6+', 'Webpack', 'Vite'
    ],
    backend: [
      'Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB',
      'Redis', 'Docker', 'AWS', 'Firebase', 'GraphQL', 'REST APIs'
    ],
    mobile: [
      'React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin',
      'Electron', 'PWA', 'Capacitor'
    ],
    ai: [
      'TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Hugging Face',
      'Scikit-learn', 'Pandas', 'NumPy', 'Computer Vision', 'NLP'
    ]
  };

  const skillCategories = [
    {
      key: 'frontend',
      title: t('about.skills.frontend'),
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: skills.frontend
    },
    {
      key: 'backend',
      title: t('about.skills.backend'),
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: skills.backend
    },
    {
      key: 'mobile',
      title: t('about.skills.mobile'),
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      skills: skills.mobile
    },
    {
      key: 'ai',
      title: t('about.skills.ai'),
      icon: Brain,
      color: 'from-orange-500 to-red-500',
      skills: skills.ai
    }
  ];

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Presente',
      description: 'Desarrollo de aplicaciones web escalables y soluciones de IA para empresas Fortune 500.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      period: '2020 - 2022',
      description: 'Creación de productos digitales innovadores usando tecnologías modernas y metodologías ágiles.'
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Desarrollo de interfaces de usuario responsivas y optimización de rendimiento web.'
    }
  ];

  const education = [
    {
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica',
      period: '2015 - 2019',
      description: 'Especialización en Desarrollo de Software e Inteligencia Artificial'
    },
    {
      title: 'Machine Learning Certification',
      institution: 'Coursera - Stanford University',
      period: '2021',
      description: 'Certificación en algoritmos de aprendizaje automático y redes neuronales'
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
                    <span className="text-4xl font-bold text-gradient font-mono">AG</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Alex García</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('about.description')}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Años</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Proyectos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Tecnologías</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfacción</div>
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