import { useEffect, useRef, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Github, Linkedin, MessageCircle, Zap, Sparkles, ArrowUpRight, Trophy, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import gsap from 'gsap';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import ThreeSphere from './ThreeSphere';

// Vercel/Production Fix: Use proper ES imports so Vite bundles the assets correctly
import heroImage from '../assets/media__1773835969101.jpg';

const Hero = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className={`min-h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${theme === 'dark' ? 'dark-bg' : 'light-bg'}`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <ThreeSphere theme={theme || 'light'} />
      </div>
      
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-[1] pointer-events-none opacity-30"
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            fpsLimit: 120,
            particles: {
              color: { value: theme === 'dark' ? "#ffffff" : "#4f46e5" },
              links: { color: theme === 'dark' ? "#ffffff" : "#4f46e5", distance: 150, enable: true, opacity: 0.05, width: 1 },
              move: { enable: true, speed: 0.6 },
              number: { value: 30, density: { enable: true, area: 800 } },
              opacity: { value: 0.1 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2 } },
            },
          } as any}
        />
      )}

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Left */}
          <div className="space-y-8 lg:pl-4 relative text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
            >
              <Zap className="w-3 h-3 text-blue-500 fill-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
                Crafting Elite AI Solutions
              </span>
            </motion.div>

            <div className="space-y-1">
              <div className="overflow-visible">
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                >
                  Jeevan
                </motion.h1>
              </div>
              <div className="overflow-visible">
                <motion.h1 
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none gradient-text"
                >
                  Adhithya
                </motion.h1>
              </div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className={`text-lg sm:text-lg max-w-lg leading-relaxed font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              Transforming complex visions into <span className={theme === 'dark' ? 'text-white' : 'text-blue-600 font-bold'}>state-of-the-art</span> digital ecosystems. I bridge the gap between <span className="text-blue-500 font-black">advanced AI</span> and seamless human experience.
            </motion.p>

            {/* Micro Stats */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="flex items-center space-x-12 py-4"
            >
              <div className="flex flex-col">
                <span className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>3+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Years Exp.</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>50+</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Projects Done</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>100%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Success Rate</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-5"
            >
              <Button
                onClick={() => scrollToSection('#projects')}
                className={`h-14 px-10 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-xl lg:w-auto w-full group ${
                  theme === 'dark' ? 'bg-white text-slate-950 hover:bg-white/90' : 'bg-slate-950 text-white hover:bg-slate-800'
                }`}
              >
                View Architectures
                <Code2 className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className={`h-14 px-10 rounded-xl font-black text-xs uppercase tracking-widest border-2 transition-all lg:w-auto w-full ${
                  theme === 'dark' 
                    ? 'border-white/20 hover:bg-white/5 text-white' 
                    : 'border-slate-200 hover:bg-slate-50 text-slate-900'
                }`}
              >
                Initiate Chat
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex gap-10 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/Jeeva9942" },
                { icon: Linkedin, href: "https://linkedin.com/in/jeevanadhithya21" },
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`transition-all hover:-translate-y-1 ${theme === 'dark' ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-blue-600'}`}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Hero Image Right */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className={`relative w-full max-w-[440px] aspect-[4/5] rounded-[4rem] p-4 backdrop-blur-2xl shadow-2xl transition-all duration-700 ${
              theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-slate-200'
            }`}>
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden shadow-2xl relative">
                <img
                  src={heroImage}
                  alt="Jeevan Adhithya"
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className={`absolute -top-6 -right-6 px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border min-w-[220px] bg-white border-slate-100`}
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-700 flex items-center justify-center text-white font-black text-xl shadow-lg border-2 border-white">
                  J
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-400">Project Architect</p>
                  <p className="text-sm font-black text-slate-900">Jeevan Adhithya</p>
                </div>
              </motion.div>

              <div className="absolute -inset-10 bg-blue-600/5 blur-[80px] -z-10 rounded-full animate-pulse" />
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;