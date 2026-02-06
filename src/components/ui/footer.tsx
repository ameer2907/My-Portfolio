import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Heart,
  ExternalLink,
  ChevronUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ameer2907',
      username: '@ameer2907'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ameerofficial2907@gmail.com',
      username: 'ameerofficial2907@gmail.com'
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold font-space mb-2">
                  K.Ameer Malik Bahad
                </h3>
                <p className="text-secondary-foreground/80 text-lg mb-4">
                  AI & Data Science Engineer
                </p>
                <p className="text-secondary-foreground/70 leading-relaxed max-w-md">
                  Transforming ideas into intelligent solutions through innovative 
                  AI and machine learning applications. Always eager to tackle new 
                  challenges and create meaningful impact.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  Available for Internships
                </Badge>
                <Badge variant="outline" className="border-accent/30 text-accent">
                  Open to Collaboration
                </Badge>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4 font-space">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-secondary-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-semibold text-lg mb-4 font-space">Connect</h4>
              <div className="space-y-4">
                {/* Contact Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-secondary-foreground/70">
                    <MapPin className="h-4 w-4" />
                    <span>Chennai, India</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-foreground/70">
                    <Phone className="h-4 w-4" />
                    <span>+91 9087223978</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-secondary-foreground/70 hover:text-primary transition-colors duration-200 group"
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="text-sm">{social.username}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/20">
          <div className="flex justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-xl -translate-x-16 translate-y-16" />
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl translate-x-12 -translate-y-12" />
    </footer>
  );
};

export default Footer;