'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link href="#home" className="text-xl md:text-2xl font-bold gradient-text">
            MS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass border-t border-gray-800"
        >
          <div className="px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-800">
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
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
