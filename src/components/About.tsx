import { Code, Coffee, Heart, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects', value: '5+' },
    { icon: Coffee, label: 'Years Experience', value: '2+' },
    { icon: Heart, label: 'Technologies', value: '7+' },
    { icon: Zap, label: 'Happy Clients', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-primary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="font-semibold text-primary">Jeevan Adhithya</span>, 
                a passionate UI/UX & Web Developer and AI Expert based in Coimbatore, Tamil Nadu. 
                I specialize in creating cutting-edge digital experiences that combine beautiful design 
                with intelligent functionality.
              </p>
              
              <p>
                My expertise spans across modern web technologies including React, .NET, Java, Rust, and Flutter. 
                I believe in user-centered design and building AI-powered products that truly enhance 
                user interactions while maintaining clean, efficient code.
              </p>

              <p>
                When I'm not coding, you can find me exploring new AI technologies, contributing to open source, 
                or working on innovative projects that challenge my creativity and technical skills.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center card-gradient border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-card rounded-3xl p-8 shadow-large">
              <div className="w-full h-full bg-gradient-primary rounded-2xl relative overflow-hidden">
                {/* Code animation visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-6xl font-mono">
                    <div className="animate-pulse">{'<dev>'}</div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">React</span>
                </div>
                <div className="absolute top-16 right-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Flutter</span>
                </div>
                <div className="absolute bottom-16 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">TypeScript</span>
                </div>
                <div className="absolute bottom-4 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;