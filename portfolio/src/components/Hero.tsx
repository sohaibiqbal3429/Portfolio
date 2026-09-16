'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-blue-400 font-medium text-lg mb-4"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Muhammad Sohaib Iqbal</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6"
            >
              Full Stack Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-400 text-lg mb-8 max-w-xl mx-auto md:mx-0"
            >
              Building scalable web and mobile applications with modern technologies. 
              Proficient in React, Next.js, Node.js, TypeScript, and AWS. 
              Passionate about delivering clean, performant, and production-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass border border-gray-600 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6 mt-8 justify-center md:justify-start"
            >
              <a
                href="https://github.com/sohaibiqbal3429"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
              <a
                href="mailto:sohaibiqbal3429@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              >
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 border-2 border-teal-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <div className="absolute inset-8 border-2 border-indigo-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
              
              {/* Image container */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/images/Muhammad-Sohaib.png"
                  alt="Muhammad Sohaib Iqbal - Professional Photo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full"
              >
                <span className="text-sm font-semibold text-blue-400">2+ Years Exp</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
              >
                <span className="text-sm font-semibold text-teal-400">50+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <ArrowDown size={32} className="animate-bounce" />
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}</style>
    </section>
  );
}
