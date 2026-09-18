import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ScrollProgress, BackgroundGradient } from '@/components/ui/Animations';

export default function Home() {
  return (
    <main className="relative">
      {/* Scroll progress indicator - shows reading progress */}
      <ScrollProgress />
      
      {/* Subtle animated background gradients - adds depth without distraction */}
      <BackgroundGradient />
      
      {/* Main content - z-10 to sit above background */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
