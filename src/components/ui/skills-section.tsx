import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Code, 
  Database, 
  Brain, 
  Palette, 
  BarChart3, 
  Globe, 
  Cpu,
  Monitor
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'Python' },
        { name: 'Java' },
        { name: 'SQL' },
        { name: 'JavaScript' },
      ],
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-purple-500',
      skills: [
        { name: 'Machine Learning' },
        { name: 'Artificial Intelligence' },
        { name: 'Data Analysis' },
        { name: 'Deep Learning' },
      ],
    },
    {
      title: 'Design & Development',
      icon: Palette,
      color: 'text-green-500',
      skills: [
        { name: 'UI/UX Design' },
        { name: 'HTML/CSS' },
        { name: 'JavaScript' },
        { name: 'DBMS' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: Monitor,
      color: 'text-orange-500',
      skills: [
        { name: 'Git/GitHub' },
        { name: 'Azure' },
        { name: 'IoT' },
        { name: 'React.js' },
      ],
    },
  ];

  const certifications = [
    'Introduction to Generative AI Studio – Google Cloud',
    'IBM Data Science Professional Certificate',
    'IBM Data Analytics Certificate',
    'Data Analytics Job Simulation – Deloitte',
    'Machine Learning Certification – ThingBator',
    'Python for Data Analysis',
    'Power BI Online Workshop',
    'Microsoft Azure Technical Skills (Fundamentals)',
    'Cybersecurity Certification – NASSCOM',
    'NPTEL Elite – User-Centric Computing (HCI)',
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 glow-button animate-pulse-glow">
            Skills & Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-space">
            Technical <span className="gradient-text">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning artificial intelligence, web development, 
            and modern technologies, built through hands-on projects and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-primary/30 project-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-3">
                  <div className={`p-2 bg-primary/10 rounded-lg ${category.color} glow-button animate-pulse-glow`}>
                    <category.icon className="h-5 w-5 glow-icon" />
                  </div>
                  <span className="font-space">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse-glow"></div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center font-space">
            Professional <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Problem-Solving & Critical Thinking',
              'Team Collaboration & Leadership', 
              'Adaptability & Continuous Learning',
              'Effective Communication',
              'Creativity & Innovation',
              'Time Management & Organization'
            ].map((skill, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/30 project-glow group hover:shadow-glow transition-all duration-300"
              >
                <CardContent className="p-4 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors glow-button">
                      <BarChart3 className="h-5 w-5 text-accent glow-icon" />
                    </div>
                  </div>
                  <span className="text-sm font-medium">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 text-center font-space">
            Certifications & <span className="gradient-text">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-primary/30 project-glow group"
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 bg-accent/10 rounded group-hover:bg-accent/20 transition-colors glow-button">
                      <BarChart3 className="h-4 w-4 text-accent glow-icon animate-icon-glow" />
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{cert}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;