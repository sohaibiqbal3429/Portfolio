'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import { 
  easings, 
  heroStagger, 
  fadeUp, 
  float, 
  buttonSpring 
} from '@/lib/animations';
import { useMousePosition } from '@/hooks/useAnimation';

// Premium stagger delays for text reveal - creates natural reading rhythm
const TEXT_STAGGER_DELAYS = [0.2, 0.3, 0.4, 0.5, 0.6];

export default function Hero() {
  const { x, y } = useMousePosition();
  
  // Calculate subtle parallax offset based on mouse position
  // Very gentle movement (divided by 100) - just enough to feel premium
  const parallaxX = typeof window !== 'undefined' ? (x - window.innerWidth / 2) / 100 : 0;
  const parallaxY = typeof window !== 'undefined' ? (y - window.innerHeight / 2) / 100 : 0;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Note: Background gradients now handled by BackgroundGradient component in page.tsx */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content - Staggered reveal using variants */}
          <motion.div
            variants={heroStagger}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left order-2 md:order-1"
          >
            {/* "Hello, I'm" - First line reveal */}
            <motion.p
              variants={fadeUp}
              className="text-blue-400 font-medium text-lg mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name - Main heading with gradient text */}
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Muhammad Sohaib Iqbal</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>

            {/* Bio */}
            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0"
            >
              Building scalable web and mobile applications with modern technologies. 
              Proficient in React, Next.js, Node.js, TypeScript, and AWS. 
              Passionate about delivering clean, performant, and production-ready solutions.
            </motion.p>

            {/* CTA Buttons - Spring animation on hover */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25"
                variants={buttonSpring}
                whileHover="hover"
                whileTap="tap"
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 glass border border-gray-600 rounded-full font-semibold text-white"
                variants={buttonSpring}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 mt-8 justify-center md:justify-start"
            >
              {[
                { href: 'https://github.com/sohaibiqbal3429', icon: Github, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/muhammad-sohaib-085164268', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:sohaibiqbal3429@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Section with Parallax Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: parallaxX,
              y: parallaxY,
            }}
            transition={{ 
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
            }}
            className="relative order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative rotating rings - smoother animation with Framer Motion */}
              <motion.div
                className="absolute inset-0 border-2 border-blue-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-teal-500/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-indigo-500/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Image container with subtle glow pulse */}
              <motion.div 
                className="absolute inset-12 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl shadow-blue-500/20"
                animate={{
                  boxShadow: [
                    '0 25px 50px -12px rgba(59, 130, 246, 0.2)',
                    '0 25px 50px -12px rgba(59, 130, 246, 0.3)',
                    '0 25px 50px -12px rgba(59, 130, 246, 0.2)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/images/Muhammad-Sohaib.png"
                  alt="Muhammad Sohaib Iqbal - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Floating badges with continuous float animation */}
              <motion.div
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.span 
                  className="text-sm font-semibold text-blue-400"
                  animate="floating"
                  variants={float}
                >
                  2+ Years Exp
                </motion.span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <motion.span 
                  className="text-sm font-semibold text-teal-400"
                  animate="floating"
                  variants={float}
                  style={{ animationDelay: '0.5s' }}
                >
                  50+ Projects
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Smooth bounce animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a 
            href="#about" 
            className="text-gray-400 hover:text-white transition-colors inline-block"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
