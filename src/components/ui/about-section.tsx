import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Users,
  Code,
  Mail,
  Phone,
  Linkedin,
  Github
} from 'lucide-react';
import profilePhoto from '@/assets/profile-photo-new.jpg';

const AboutSection = () => {
  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Tamil', level: 'Native' },
  ];

  return (
    <section id="about" className="py-20 tech-section relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* BIG PROFILE PHOTO (ONLY ONE) */}
        <div className="flex justify-center mb-14">
          <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
            <img
              src={profilePhoto}
              alt="K. Ameer Malik Bahad"
              className="w-full h-full object-cover"
            />
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
            driven by a passion for building intelligent solutions with real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Journey */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 font-space">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As a forward-thinking innovator, I transform ideas into powerful,
                real-world solutions that blend creativity with precision.
              </p>
              <p>
                My interests revolve around AI-driven systems, data analytics,
                and scalable modern web applications.
              </p>
              <p>
                Currently pursuing B.Tech in CSE (Data Science & AI),
                I constantly push boundaries to turn ambitious visions into reality.
              </p>
            </div>

            {/* Education */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 font-space">Education</h3>
              <Card className="bg-gradient-card border-primary/20 shadow-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl gradient-text mb-2">
                        B.Tech CSE (Data Science & AI)
                      </h4>
                      <p className="font-semibold mb-2">
                        Dr. M.G.R Educational and Research Institute
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-accent" />
                          2022 – 2026
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-accent" />
                          Chennai
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Languages + Contact */}
          <div className="space-y-8 animate-fade-in">

            {/* Languages */}
            <div>
              <h3 className="text-2xl font-bold mb-6 font-space">Languages</h3>
              <Card className="bg-gradient-card border-primary/20">
                <CardContent className="p-6 space-y-4">
                  {languages.map((language, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{language.name}</span>
                      <Badge variant="secondary">{language.level}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact */}
            <Card className="bg-gradient-card border-primary/20">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-bold text-lg gradient-text">Connect With Me</h4>

                <a href="mailto:ameermalikbahad07@gmail.com" className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-accent" />
                  <span className="text-sm">ameermalikbahad07@gmail.com</span>
                </a>

                <a href="tel:+919087223978" className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-secondary" />
                  <span className="text-sm">+91 9087223978</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/ameer-malik-bahad07"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <Linkedin className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/ameer2907"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3"
                >
                  <Github className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">GitHub</span>
                </a>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
