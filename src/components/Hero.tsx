import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const heroImage = '/lovable-uploads/59358476-f50b-4d20-8e85-067c769692e2.png';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Expert UI/UX & Web Developer{' '}
                <span className="text-gradient bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                  + AI Expert
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                Creating beautiful, functional, and user-centered digital experiences with AI-powered solutions.
              </p>
              <p className="text-lg text-blue-200 max-w-xl mx-auto lg:mx-0">
                Based in Coimbatore, Tamil Nadu. Specializing in UI/UX design, web development, and artificial intelligence solutions. 
                Turning innovative ideas into reality with cutting-edge technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToProjects}
                className="group"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={scrollToContact}
              >
                Contact Me
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a
                href="https://github.com/Jeeva9942"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jeevan-adhithya-m-264202360"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end slide-up">
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-10" />
              
              {/* Main image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-large">
                <img
                  src={heroImage}
                  alt="Jeevan Adhithya - Web & App Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
                <span className="text-white font-semibold">I AM</span>
                <br />
                <span className="text-blue-200">Jeevan Adhithya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;