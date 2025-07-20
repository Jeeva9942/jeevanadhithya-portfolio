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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web and mobile development 
            with cutting-edge technologies and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 card-gradient"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-white/90 text-primary"
                >
                  {project.category}
                </Badge>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    asChild
                    className="bg-white/90 hover:bg-white"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    asChild
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
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="flex-1"
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
                    className="flex-1"
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
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="group"
          >
            <a 
              href="https://github.com/jeevanadhithya" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;