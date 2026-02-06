import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Briefcase,
  TrendingUp,
  Users,
  Award,
  Target,
  Code
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Python Full Stack Development Intern',
      company: 'Evolve Solutions',
      duration: 'Feb 2026 - Present',
      location: 'Ekkatuthangal, Chennai',
      type: 'Internship (Onsite)',
      status: 'Current',
      description: 'Gaining practical exposure to real-time projects and professional work culture in Python Full Stack Development. Working on hands-on projects involving frontend and backend technologies.',
      achievements: [
        'Working on real-time full stack development projects',
        'Learning professional software development practices',
        'Building applications using Python and modern frameworks',
        'Collaborating with development team on client projects',
        'Developing both frontend and backend components'
      ],
      skills: ['Python', 'Full Stack Development', 'Web Development', 'Backend APIs', 'Frontend Development'],
      icon: Code
    },
    {
      title: 'Machine Learning Intern',
      company: 'Thirumoolar IT Solutions',
      duration: 'Summer 2024',
      location: 'Chennai, India',
      type: 'Internship',
      status: 'Completed',
      description: 'Applied machine learning algorithms to real-world datasets, performed data preprocessing, and created Power BI dashboards to visualize insights. Gained basic fundamentals of prompt engineering.',
      achievements: [
        'Developed and implemented ML models for data analysis',
        'Created interactive Power BI dashboards for data visualization',
        'Performed comprehensive data preprocessing and cleaning',
        'Learned fundamentals of prompt engineering for AI applications',
        'Worked with real-world datasets to derive actionable insights',
        'Collaborated with team members on various ML projects'
      ],
      skills: ['Machine Learning', 'Python', 'Power BI', 'Data Preprocessing', 'Data Visualization', 'Prompt Engineering'],
      icon: Building2
    }
  ];

  const achievements = [
    {
      title: 'Hackathon Participation',
      description: 'Participated in college hackathon event, developing innovative solutions under time constraints',
      icon: Award,
      color: 'text-yellow-500'
    },
    {
      title: 'IoT Workshop',
      description: 'Completed hands-on IoT workshop, learning about connected devices and sensor integration',
      icon: Target,
      color: 'text-green-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Leading multiple project initiatives and mentoring fellow students in AI/ML concepts',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      title: 'Continuous Learning',
      description: 'Consistently upgrading skills through online courses and practical project implementation',
      icon: TrendingUp,
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="experience" className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="outline" className="mb-4">
            Professional Experience
          </Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 font-space">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on experience in machine learning, 
            data science, and full stack development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mb-12 lg:mb-16">
          <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 font-space flex items-center justify-center lg:justify-start">
            <Briefcase className="h-5 w-5 lg:h-6 lg:w-6 text-primary mr-2" />
            Professional Experience
          </h3>
          
          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <Card 
                key={index}
                className={`bg-card/80 border-primary/20 hover:border-primary/40 transition-all duration-300 ${experience.status === 'Current' ? 'border-green-500/30' : ''}`}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className={`p-3 rounded-lg self-start ${experience.status === 'Current' ? 'bg-green-500/20' : 'bg-primary/10'}`}>
                      <experience.icon className={`h-6 w-6 lg:h-7 lg:w-7 ${experience.status === 'Current' ? 'text-green-500' : 'text-primary'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <CardTitle className="text-lg lg:text-xl font-space">{experience.title}</CardTitle>
                        <Badge variant={experience.status === 'Current' ? 'default' : 'secondary'} className={experience.status === 'Current' ? 'bg-green-600 text-white' : ''}>
                          {experience.type}
                        </Badge>
                      </div>
                      <h4 className="text-base lg:text-lg font-semibold text-primary mb-2">{experience.company}</h4>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 pt-0">
                  <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Key Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold mb-3">Key Achievements & Responsibilities</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {experience.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-xs lg:text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-semibold mb-2">Skills Developed</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {experience.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Achievements */}
        <div>
          <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 font-space">Additional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-card/60 border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="p-5 lg:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors ${achievement.color}`}>
                      <achievement.icon className="h-5 w-5 lg:h-6 lg:w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors text-sm lg:text-base">
                        {achievement.title}
                      </h4>
                      <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-12 lg:mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/90 to-accent/80 text-primary-foreground border-none inline-block max-w-2xl">
            <CardContent className="p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold mb-3 font-space">Looking Forward</h3>
              <p className="mb-5 opacity-90 text-sm lg:text-base leading-relaxed">
                Currently working as a Python Full Stack Development Intern at Evolve Solutions while 
                pursuing opportunities to apply my AI and data science skills to solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary" className="text-xs lg:text-sm py-1.5 px-3">
                  Currently Interning
                </Badge>
                <Badge variant="secondary" className="text-xs lg:text-sm py-1.5 px-3">
                  Open to Opportunities
                </Badge>
                <Badge variant="secondary" className="text-xs lg:text-sm py-1.5 px-3">
                  Quick Learner
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
