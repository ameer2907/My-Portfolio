import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  ExternalLink, 
  Github, 
  ShoppingCart, 
  Monitor,
  Brain,
  Navigation,
  Utensils
} from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Tutor Website - Intelligent Adaptive Learning Platform',
      description: 'An AI-powered educational platform delivering personalized, interactive tutoring experiences using NLP and ML. Features context-aware explanations, adaptive learning paths, progress tracking, and intelligent content recommendations.',
      icon: Brain,
      status: 'Active',
      featured: true,
      technologies: ['React.js', 'Python', 'NLP', 'Machine Learning', 'Node.js', 'AI Models', 'Speech Recognition'],
      features: [
        'Natural language Q&A with context awareness',
        'Personalized adaptive learning paths',
        'Interactive quizzes with instant feedback',
        'Progress tracking and analytics dashboard',
        'Multilingual support and gamification'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
    {
      title: 'Advanced Traffic Management System with IoT Dashboard',
      description: 'Intelligent traffic control system utilizing IoT sensors and machine learning algorithms to optimize traffic flow, reduce congestion, and provide real-time monitoring through an interactive dashboard.',
      icon: Navigation,
      status: 'Completed',
      featured: true,
      technologies: ['IoT', 'Python', 'Machine Learning', 'Real-time Analytics', 'Dashboard', 'Sensor Integration'],
      features: [
        'IoT-enabled traffic monitoring',
        'Real-time dashboard analytics',
        'Smart signal optimization',
        'Traffic flow prediction',
        'Congestion management system'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
    {
      title: 'AI-Driven Predictive Waste Management System for Urban Sustainability Using IoT',
      description: 'An intelligent IoT-based waste management system that leverages AI and machine learning for predictive analytics, automated waste classification, and optimized collection routes to promote urban sustainability and environmental conservation.',
      icon: Navigation,
      status: 'Active',
      featured: true,
      technologies: ['IoT', 'Python', 'Machine Learning', 'Arduino', 'Real-time Analytics', 'Sensor Integration'],
      features: [
        'IoT-enabled smart waste bin monitoring',
        'AI-powered waste classification',
        'Predictive fill-level analytics',
        'Optimized collection route planning',
        'Real-time dashboard & alerts'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
    {
      title: 'The South Plate - Online Food Restaurant Platform',
      description: 'A complete restaurant management and food ordering application with user-friendly interface, order tracking, menu management, and payment integration. Deployed and live for real-world usage.',
      icon: Utensils,
      status: 'Deployed',
      featured: true,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway', 'Real-time Orders', 'Admin Dashboard'],
      features: [
        'Interactive menu with categories',
        'Real-time order tracking',
        'Secure payment integration',
        'Admin dashboard for management',
        'Customer reviews and ratings'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
    {
      title: 'E-commerce Website',
      description: 'Built a modern shopping platform with product display, dark mode, chatbot integration, and custom animations for a professional user experience.',
      icon: ShoppingCart,
      status: 'Completed',
      featured: false,
      technologies: ['React.js', 'Node.js', 'Socket.io', 'Payment Integration'],
      features: [
        'Responsive design',
        'Shopping cart functionality',
        'Payment integration',
        'Real-time chat support',
        'Admin dashboard'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
    {
      title: 'Portfolio Website',
      description: 'Designed and developed a responsive, animated personal portfolio showcasing skills, projects, and certifications with interactive UI/UX features.',
      icon: Monitor,
      status: 'Completed',
      featured: false,
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      features: [
        'Responsive design',
        'Interactive animations',
        'Dark/Light mode',
        'Contact form',
        'SEO optimized'
      ],
      github: 'https://github.com/ameer2907',
      demo: 'https://github.com/ameer2907'
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 font-space">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions demonstrating expertise in AI, web development, and problem-solving.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 font-space flex items-center justify-center lg:justify-start">
            <span className="w-2 h-2 bg-accent rounded-full mr-3" />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 group overflow-hidden"
              >
                {/* Project Header */}
                <div className="h-24 lg:h-28 relative bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute top-4 left-4">
                    <div className="p-2.5 bg-background/80 backdrop-blur-sm rounded-lg">
                      <project.icon className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Completed' || project.status === 'Deployed' ? 'default' : 'secondary'}
                      className={`text-xs ${project.status === 'Active' ? 'bg-green-600 text-white' : project.status === 'Deployed' ? 'bg-blue-600 text-white' : ''}`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3 pt-4">
                  <h4 className="text-lg lg:text-xl font-bold font-space leading-tight">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Technologies</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                          +{project.technologies.length - 5}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Key Features</h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="glow" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 font-space">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card 
                key={index}
                className="bg-card/60 border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-bold font-space text-sm lg:text-base truncate">{project.title}</h4>
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          {project.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs px-1.5 py-0">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs h-7"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github className="h-3 w-3 mr-1" />
                          Code
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="text-xs h-7"
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <Card className="bg-gradient-to-r from-primary/90 to-accent/80 text-primary-foreground border-none inline-block">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 font-space">Want to see more?</h3>
              <p className="mb-5 opacity-90 text-sm lg:text-base">
                Check out my GitHub for additional projects and contributions.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://github.com/ameer2907', '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                View All Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
