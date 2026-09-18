'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { easings, slideInLeft, slideInRight, fadeUp, buttonSpring, float } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with blur-to-sharp reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easings.easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: easings.easeOut }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Images Section - Slide from left */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Formal Photo with premium hover effect */}
              <motion.div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl group cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: easings.easeOut }}
              >
                <Image
                  src="/images/Muhammad-Sohaib.png"
                  alt="Muhammad Sohaib Iqbal - Professional"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    Professional
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Casual Photo with staggered entrance */}
              <motion.div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-xl group mt-8 cursor-default"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: easings.easeOut }}
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/Muhammad-Sohaib(2).png"
                  alt="Muhammad Sohaib Iqbal - Casual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm"
                    initial={{ y: 10, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    Casual
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative blurred orbs */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: easings.easeInOut }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: easings.easeInOut, delay: 1 }}
            />
          </motion.div>

          {/* Text Content - Slide from right */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: easings.easeOut }}
            >
              A Passionate Developer Based in Pakistan
            </motion.h3>

            {[
              "I'm a Full Stack Developer with ~2 years of hands-on experience building scalable web and mobile applications. Currently based in Islamabad/Rawalpindi, Pakistan, I specialize in creating modern, user-centric digital solutions.",
              "My expertise spans across the entire development stack - from crafting beautiful, responsive frontends with React and Next.js, to building robust backend systems with Node.js, Express, and MongoDB. I'm also experienced in cloud deployment, CI/CD pipelines, and mobile app development with React Native.",
              "What sets me apart is my commitment to writing clean, maintainable code and my passion for staying updated with the latest industry trends. I believe in continuous learning and leverage modern AI-powered tools like Cursor and Codex to enhance my development workflow."
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: easings.easeOut }}
                className="text-gray-300 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Stats with floating animation */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: easings.easeOut }}
            >
              <motion.div 
                className="glass p-4 rounded-xl"
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.p 
                  className="text-3xl font-bold gradient-text"
                  animate="floating"
                  variants={float}
                >
                  2+
                </motion.p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </motion.div>
              <motion.div 
                className="glass p-4 rounded-xl"
                whileHover={{ scale: 1.05, borderColor: 'rgba(20, 184, 166, 0.5)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.p 
                  className="text-3xl font-bold gradient-text"
                  animate="floating"
                  variants={float}
                  style={{ animationDelay: '0.3s' }}
                >
                  50+
                </motion.p>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons with spring animation */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: easings.easeOut }}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold text-white shadow-lg shadow-blue-500/25"
                variants={buttonSpring}
                whileHover="hover"
                whileTap="tap"
              >
                Let&apos;s Talk
              </motion.a>
              <motion.a
                href="/Muhammad_Sohaib_CV.pdf"
                download
                className="px-6 py-3 glass border border-gray-600 rounded-full font-semibold text-white"
                variants={buttonSpring}
                whileHover="hover"
                whileTap="tap"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
