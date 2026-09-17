'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Link href="#home" className="text-2xl font-bold gradient-text mb-4 inline-block">
              MS
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full Stack Developer passionate about building modern, scalable web and mobile 
              applications with clean code and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/sohaibiqbal3429"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:sohaibiqbal3429@gmail.com"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">
                Islamabad / Rawalpindi, Pakistan
              </li>
              <li>
                <a
                  href="tel:+923345451159"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +92 333 455 1159
                </a>
              </li>
              <li>
                <a
                  href="mailto:sohaibiqbal3429@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  sohaibiqbal3429@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Muhammad Sohaib Iqbal. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
