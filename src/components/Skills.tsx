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
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-l from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block">
              Technical Proficiency
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the cutting-edge tools I leverage to create 
            <span className="font-semibold text-blue-600"> exceptional digital experiences</span> and 
            <span className="font-semibold text-purple-600"> innovative solutions</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="p-8 bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-4" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-800 text-lg">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative w-full bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                          animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`
                        }}
                      >
                        {/* Animated shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies showcase */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
            Technologies I Work With
          </h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A curated selection of modern tools and frameworks that power my development workflow
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', color: 'from-blue-500 to-cyan-500' },
              { name: 'Flutter', color: 'from-blue-400 to-blue-600' },
              { name: 'JavaScript', color: 'from-yellow-400 to-orange-500' },
              { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
              { name: 'HTML5', color: 'from-orange-500 to-red-500' },
              { name: 'CSS3', color: 'from-blue-500 to-purple-500' },
              { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
              { name: '.NET', color: 'from-purple-600 to-indigo-600' },
              { name: 'Java', color: 'from-red-500 to-orange-600' },
              { name: 'Rust', color: 'from-orange-600 to-red-700' },
              { name: 'AI/ML', color: 'from-green-500 to-emerald-600' },
              { name: 'Python', color: 'from-yellow-500 to-green-500' },
              { name: 'UI/UX Design', color: 'from-pink-500 to-purple-500' },
              { name: 'Figma', color: 'from-purple-500 to-pink-500' }
            ].map((tech, index) => (
              <div 
                key={index}
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default border border-white/20 backdrop-blur-sm`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        {/* Skills visualization */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-2xl mb-8 relative">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">2+</span>
            </div>
            <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-blue-400/20 to-purple-400/20" />
          </div>
          <h4 className="text-2xl font-bold text-slate-800 mb-2">Years of Experience</h4>
          <p className="text-slate-600 max-w-md mx-auto">
            Continuously learning and evolving with the latest technologies to deliver cutting-edge solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
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