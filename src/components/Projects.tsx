import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import project images
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A fully responsive online store built with React and modern payment integration, featuring secure transactions and intuitive user experience.',
      image: project1,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/jeevanadhithya/shopeasy',
      live: '#',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Food Delivery App',
      description: 'A cross-platform mobile app using Flutter, with real-time order tracking, push notifications, and seamless payment integration.',
      image: project2,
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      github: 'https://github.com/jeevanadhithya/foodbliss',
      live: '#',
      category: 'Mobile Development'
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A comprehensive project management tool with drag-and-drop functionality, team collaboration features, and real-time updates.',
      image: project3,
      technologies: ['React', 'TypeScript', 'Redux', 'Material-UI'],
      github: 'https://github.com/jeevanadhithya/tasksync',
      live: '#',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'A modern messaging platform with real-time communication, file sharing, group chats, and emoji reactions.',
      image: project4,
      technologies: ['React', 'Socket.io', 'Firebase', 'CSS3'],
      github: 'https://github.com/jeevanadhithya/chatapp',
      live: '#',
      category: 'Web Development'
    },
    {
      id: 5,
      title: 'E-Learning Platform',
      description: 'An interactive online learning platform with video streaming, progress tracking, quizzes, and certificate generation.',
      image: project5,
      technologies: ['React', 'Node.js', 'MongoDB', 'Video.js'],
      github: 'https://github.com/jeevanadhithya/edulearn',
      live: '#',
      category: 'Web Development'
    },
    {
      id: 6,
      title: 'Health Monitoring App',
      description: 'A comprehensive health tracking mobile application with fitness metrics, goal setting, and health data visualization.',
      image: project6,
      technologies: ['Flutter', 'Dart', 'Charts', 'SQLite'],
      github: 'https://github.com/jeevanadhithya/fittrack',
      live: '#',
      category: 'Mobile Development'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-blue-600 tracking-wider uppercase mb-2 block">
              Portfolio Showcase
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            Featured Projects & Innovations
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6" />
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Explore my latest projects showcasing <span className="font-semibold text-blue-600">modern web and mobile development</span> 
            with <span className="font-semibold text-purple-600">cutting-edge technologies</span> and user-centered design principles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm border border-white/20">
                  {project.category}
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="bg-white/90 hover:bg-white text-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 rounded-full border border-blue-200/50 hover:from-blue-100 hover:to-purple-100 transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-16">
          <Button
            variant="default"
            size="lg"
            asChild
            className="group bg-gradient-to-r from-slate-800 to-blue-800 hover:from-blue-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <a 
              href="https://github.com/jeevanadhithya" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Explore All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;