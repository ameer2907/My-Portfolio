import { Button } from '@/components/ui/button';
import { ChevronDown, Download, Mail, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const highlights = [
    "Crafting AI solutions with impact",
    "Blending technical skill with creative design",
    "Turning ideas into interfaces",
    "Exploring Data Science & AI to solve real-world problems",
    "Building smart, sustainable, and user-centric tech projects"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentHighlight(prev => (prev + 1) % highlights.length);
        setIsVisible(true);
      }, 400);
    }, 3500);

    return () => clearInterval(timer);
  }, [highlights.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/K_Ameer_Malik_Resume.pdf';
    link.download = 'K_Ameer_Malik_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Subtle tech pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-primary/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-accent/20 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-background/95 to-black/90" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-slide-up max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 font-space">
            <span className="block text-foreground mb-1">Hello, I'm</span>
            <span className="block gradient-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Ameer Malik
            </span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6">
            AI & Data Science Enthusiast | Final-Year CSE Student
          </p>

          {/* Rotating highlights */}
          <div className="mb-8">
            <div className="min-h-[4rem] flex items-center justify-center">
              <div
                className={`
                  transition-all duration-500 ease-out transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                  font-medium tracking-wide
                  px-6 py-3 rounded-lg
                  bg-gradient-to-r from-primary/90 to-accent/80
                  text-primary-foreground
                  text-sm sm:text-base lg:text-lg
                  shadow-md
                `}
              >
                {highlights[currentHighlight]}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="glow"
              size="lg"
              onClick={scrollToProjects}
              className="hover:scale-105 transition-all duration-300"
            >
              <Github className="mr-2 h-4 w-4" />
              View Projects
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={downloadResume}
              className="hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary"
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
