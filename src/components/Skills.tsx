import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'HTML5', level: 95, color: 'bg-orange-500' },
        { name: 'CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
      ],
    },
    {
      title: 'Backend & Programming',
      skills: [
        { name: '.NET', level: 85, color: 'bg-purple-600' },
        { name: 'Java', level: 80, color: 'bg-red-500' },
        { name: 'Rust', level: 75, color: 'bg-orange-600' },
        { name: 'C', level: 75, color: 'bg-gray-600' },
        { name: 'C++', level: 70, color: 'bg-blue-700' },
      ],
    },
    {
      title: 'Mobile & AI',
      skills: [
        { name: 'Flutter', level: 85, color: 'bg-blue-400' },
        { name: 'Dart', level: 80, color: 'bg-blue-600' },
        { name: 'AI/ML', level: 85, color: 'bg-green-500' },
        { name: 'Python', level: 80, color: 'bg-yellow-600' },
      ],
    },
    {
      title: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 90, color: 'bg-pink-500' },
        { name: 'Figma', level: 85, color: 'bg-purple-500' },
        { name: 'Git', level: 85, color: 'bg-orange-600' },
        { name: 'VS Code', level: 95, color: 'bg-blue-500' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to create 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-8 card-gradient border-0 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies showcase */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Technologies I Work With
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React', 'Flutter', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 
              'Tailwind CSS', '.NET', 'Java', 'Rust', 'AI/ML', 'Python', 'UI/UX Design', 'Figma'
            ].map((tech, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;