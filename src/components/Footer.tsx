import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
const Footer: React.FC = () => {
  const {
    t
  } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative py-12 border-t border-border">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white text-xs font-bold font-mono">{'<>'}</span>
              </div>
              <span className="font-bold text-gradient">Luis Alberto Dávalos </span>
            </div>
            
            <div className="hidden md:block w-px h-4 bg-border"></div>
            
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 {t('footer.rights')}
            </p>
          </div>

          {/* Center Section */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>{t('footer.built')}</span>
            <Heart className="text-red-500" size={16} />
          </div>

          {/* Right Section - Back to Top */}
          <button onClick={scrollToTop} className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105 group" aria-label="Volver arriba">
            <span className="text-sm font-medium">Volver arriba</span>
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
        {/* Bottom Line */}
        <div className="mt-8 pt-6 border-t border-border text-center">
          
        </div>
      </div>
    </footer>;
};
export default Footer;