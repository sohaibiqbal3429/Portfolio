'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Formal Photo */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl group">
                <Image
                  src="/images/Muhammad-Sohaib.png"
                  alt="Muhammad Sohaib Iqbal - Professional"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm">Professional</p>
                </div>
              </div>

              {/* Casual Photo */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl group mt-8">
                <Image
                  src="/images/Muhammad-Sohaib(2).png"
                  alt="Muhammad Sohaib Iqbal - Casual"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-semibold text-sm">Casual</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              A Passionate Developer Based in Pakistan
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I&apos;m a Full Stack Developer with ~2 years of hands-on experience building 
              scalable web and mobile applications. Currently based in Islamabad/Rawalpindi, 
              Pakistan, I specialize in creating modern, user-centric digital solutions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              My expertise spans across the entire development stack - from crafting 
              beautiful, responsive frontends with React and Next.js, to building robust 
              backend systems with Node.js, Express, and MongoDB. I&apos;m also experienced 
              in cloud deployment, CI/CD pipelines, and mobile app development with React Native.
            </p>

            <p className="text-gray-300 leading-relaxed">
              What sets me apart is my commitment to writing clean, maintainable code and 
              my passion for staying updated with the latest industry trends. I believe in 
              continuous learning and leverage modern AI-powered tools like Cursor and Codex 
              to enhance my development workflow.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="glass p-4 rounded-xl">
                <p className="text-3xl font-bold gradient-text">2+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Let&apos;s Talk
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 glass border border-gray-600 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
