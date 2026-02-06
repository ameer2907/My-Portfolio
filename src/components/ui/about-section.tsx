import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Award, Users, Code, Mail, Phone, Linkedin, Github } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-new.jpg';

const AboutSection = () => {
  const stats = [
    { label: 'Projects Completed', value: '4+', icon: Code },
    { label: 'Certifications', value: '8+', icon: Award },
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Technologies', value: '10+', icon: Users },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Native' },
  ];

  return (
    <section id="about" className="py-20 tech-section relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Profile Photo */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img 
                src={profilePhoto} 
                alt="K. Ameer Malik Bahad" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Code className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Passionate About <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a final-year Computer Science student specializing in Data Science and AI, 
            driven by a passion for creating intelligent solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Story & Description */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 font-space">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a forward-thinking innovator, I transform ideas into powerful, real-world solutions 
                that blend creativity with precision. My journey in technology began with a curiosity 
                about artificial intelligence and evolved into a passion for machine learning and data science.
              </p>
              <p>
                I thrive on tackling challenges with an intuitive, results-driven approach, 
                delivering outcomes that leave a lasting impact. Whether it's developing traffic 
                management systems or creating intelligent waste segregation solutions, 
                I'm fueled by a relentless drive for excellence.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science Engineering with a specialization 
                in Data Science & AI, I'm always eager to push boundaries and turn ambitious 
                visions into reality.
              </p>
            </div>

            {/* Education Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 font-space">Education</h3>
              <Card className="bg-gradient-card border-primary/20 shadow-glow hover:shadow-glow-intense transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg animate-glow">
                      <GraduationCap className="h-6 w-6 text-primary glow-icon" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl gradient-text mb-2">B.Tech CSE (Data Science & AI)</h4>
                      <p className="text-foreground font-semibold mb-2">Dr.M.G.R Educational and Research Institute</p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-accent" />
                          <span className="font-medium">2022 - 2026</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-accent" />
                          <span className="font-medium">Maduravoyal, Chennai, 600095</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats & Languages */}
          <div className="space-y-8 animate-fade-in">

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-space">Languages</h3>
              <Card className="bg-gradient-card border-primary/20">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {languages.map((language, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium">{language.name}</span>
                        <Badge variant="secondary">{language.level}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Connect With Me - Enhanced */}
            <Card className="bg-gradient-card border-primary/20 hover:shadow-glow-intense transition-all duration-300 animate-glow">
              <CardContent className="p-6">
                <h4 className="font-bold text-lg mb-6 gradient-text font-space">Connect With Me</h4>
                <div className="space-y-4">
                  <div className="contact-item flex items-center p-4 rounded-lg">
                    <div className="p-2 bg-primary/20 rounded-lg mr-3 animate-pulse-glow">
                      <MapPin className="h-4 w-4 text-primary contact-icon" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Location</p>
                      <p className="text-xs text-foreground/80">West Tambaram, Chennai-600045</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:ameermalikbahad07@gmail.com"
                    className="contact-item flex items-center p-4 rounded-lg group"
                  >
                    <div className="p-2 bg-accent/20 rounded-lg mr-3 group-hover:animate-glow">
                      <Mail className="h-4 w-4 text-accent contact-icon" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Email</p>
                      <p className="text-xs text-foreground/80 group-hover:text-accent transition-colors">ameermalikbahad07@gmail.com</p>
                    </div>
                  </a>
                  <a 
                    href="tel:+919087223978"
                    className="contact-item flex items-center p-4 rounded-lg group"
                  >
                    <div className="p-2 bg-secondary/20 rounded-lg mr-3 group-hover:animate-glow">
                      <Phone className="h-4 w-4 text-secondary contact-icon" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Phone</p>
                      <p className="text-xs text-foreground/80 group-hover:text-secondary transition-colors">+91 9087223978</p>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/ameer-malik-bahad07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item flex items-center p-4 rounded-lg group"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg mr-3 group-hover:animate-glow">
                      <Linkedin className="h-4 w-4 text-blue-500 contact-icon" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">LinkedIn</p>
                      <p className="text-xs text-foreground/80 group-hover:text-blue-400 transition-colors">www.linkedin.com/in/ameer-malik-bahad07</p>
                    </div>
                  </a>
                  <a 
                    href="https://github.com/ameer2907"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item flex items-center p-4 rounded-lg group"
                  >
                    <div className="p-2 bg-gray-500/20 rounded-lg mr-3 group-hover:animate-glow">
                      <Github className="h-4 w-4 text-gray-400 contact-icon" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">GitHub</p>
                      <p className="text-xs text-foreground/80 group-hover:text-gray-300 transition-colors">github.com/ameer2907</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 
