'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useAnimation';
import { easings, navLink } from '@/lib/animations';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

// Animation variants for mobile menu
const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: easings.easeOut,
      staggerChildren: 0.08,
    },
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.3, ease: easings.easeIn },
  },
};

const mobileLinkVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: easings.easeOut },
  },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Track active section for navigation highlighting
  const activeSection = useActiveSection(navLinks.map(link => link.href.slice(1)));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            aria-label="Muhammad Sohaib Iqbal home"
            className="group relative mr-2 flex items-center rounded-xl border border-blue-400/20 bg-slate-950/70 p-1.5 shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-slate-900 hover:shadow-blue-500/20 md:mr-3 md:p-2"
          >
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src="/images/ms-logo.svg"
              alt="MS"
              width={128}
              height={80}
              priority
              className="relative h-8 w-auto rounded-md object-contain drop-shadow-[0_2px_8px_rgba(37,99,235,0.45)] md:h-9"
            />
          </Link>

          {/* Desktop Navigation with active state highlighting */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.href.slice(1) 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                {link.name}
                {/* Animated underline for active/hover state */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                  initial={false}
                  animate={{
                    scaleX: activeSection === link.href.slice(1) ? 1 : 0,
                    opacity: activeSection === link.href.slice(1) ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: easings.easeOut }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/sohaibiqbal3429"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-sohaib-085164268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sohaibiqbal3429@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden glass border-t border-gray-800 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={mobileLinkVariants}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 font-medium ${
                    activeSection === link.href.slice(1)
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Active indicator dot for mobile */}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full ml-2"
                    />
                  )}
                </motion.a>
              ))}
            <motion.div 
              variants={mobileLinkVariants}
              className="flex items-center space-x-4 pt-4 border-t border-gray-800"
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
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.nav>
  );
}
