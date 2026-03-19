import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import GithubRepos from '@/components/GithubRepos';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const { theme } = useTheme();
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scrollreveal animations for all sections
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      // Don't animate the first section (Hero) here as it has its own entry animation
      if (index === 0) return;

      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power4.out",
        clearProps: "all"
      });
    });

    // Handle scroll-based section visibility (Intersection Observer fallback for classes if needed)
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className={`min-h-screen transition-all duration-1000 ${theme === 'dark' ? 'dark-bg' : 'light-bg'} selection:bg-blue-500/30`}>
      <Header />
      <Hero />
      <About />
      <GithubRepos />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
