import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
const Contact: React.FC = () => {
  const {
    t
  } = useLanguage();
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "Thank you for contacting me. I'll respond soon."
    });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'albertodavalos.ia@gmail.com',
    href: 'mailto:albertodavalos.ia@gmail.com'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+34 611 511 075',
    href: 'tel:+34611511075'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Barcelona, Spain',
    href: '#'
  }, {
    icon: Clock,
    label: 'Schedule',
    value: 'Mon - Fri, 9:00 - 18:00',
    href: '#'
  }];
  const copyEmail = () => {
    navigator.clipboard.writeText('albertodavalos.ia@gmail.com');
    toast({
      title: "Email copied!",
      description: "albertodavalos.ia@gmail.com has been copied to your clipboard."
    });
  };
  const socialLinks = [{
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Kstor10',
    color: 'hover:text-gray-400'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/luis-alberto-dávalos-5b7a94188',
    color: 'hover:text-blue-400'
  }, {
    icon: Mail,
    label: 'Email',
    href: '#',
    color: 'hover:text-green-400',
    onClick: copyEmail
  }];
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t('contact.direct.title')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contact.direct.subtitle')}
              </p>
            </div>

            {/* Contact Details */}
            <div className="cyber-card p-6">
              <div className="space-y-6">
                {contactInfo.map(info => {
                const Icon = info.icon;
                return <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        {info.href && info.href !== '#' ? <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {info.value}
                          </a> : <div className="text-muted-foreground">{info.value}</div>}
                      </div>
                    </div>;
              })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="cyber-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium text-green-500">{t('contact.availability')}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Currently accepting new freelance projects. Average response time: 2-4 hours.
              </p>
            </div>

            {/* Social Links */}
            <div className="cyber-card p-6">
              <h4 className="font-medium mb-4">Follow me on social media</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => {
                const Icon = social.icon;
                return social.onClick ? <button key={social.label} onClick={social.onClick} className={`p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.label}>
                      
                    </button> : <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.label}>
                      <Icon size={20} />
                    </a>;
              })}
              </div>
            </div>

            {/* Quick Response */}
            
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;