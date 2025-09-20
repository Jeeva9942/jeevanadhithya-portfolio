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
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block">
                  Get to know me
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Passionate Developer & Creative Problem Solver
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                I'm <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Jeevan Adhithya</span>, 
                a passionate Full-Stack Developer and AI Expert based in Coimbatore, Tamil Nadu. 
                I specialize in creating <span className="font-semibold text-blue-600">cutting-edge digital experiences</span> that combine beautiful design 
                with intelligent functionality and seamless user interactions.
              </p>
              
              <p>
                My expertise spans across <span className="font-semibold text-purple-600">modern web technologies</span> including React, .NET, Java, Rust, and Flutter. 
                I believe in user-centered design and building <span className="font-semibold text-pink-600">AI-powered products</span> that truly enhance 
                user interactions while maintaining clean, efficient, and scalable code architecture.
              </p>

              <p>
                When I'm not coding, you can find me exploring emerging AI technologies, contributing to open source projects, 
                or working on innovative solutions that challenge my creativity and push the boundaries of what's possible with modern web development.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-white/80 backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl relative overflow-hidden shadow-inner">
                {/* Code animation visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/30 text-6xl font-mono font-bold">
                    <div className="animate-pulse">{'</>'}</div>
                  </div>
                </div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping" />
                  <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping animation-delay-1000" />
                  <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white rounded-full animate-ping animation-delay-2000" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium">React</span>
                </div>
                <div className="absolute top-16 right-4 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium">Flutter</span>
                </div>
                <div className="absolute bottom-16 left-6 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium">TypeScript</span>
                </div>
                <div className="absolute bottom-4 right-6 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30 shadow-lg">
                  <span className="text-white text-sm font-medium">AI/ML</span>
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