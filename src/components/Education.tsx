'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: "Associate's Degree – Computer Science",
    institution: 'Virtual University of Pakistan',
    location: 'Pakistan',
    period: 'Sep 2024 – Dec 2026',
    description: 'Computer Science',
  },
  {
    degree: 'Diploma of Associate Engineering – Computer Information Technology',
    institution: 'Punjab Board of Technical Education (PBTE), Lahore',
    location: 'Lahore, Pakistan',
    period: 'Sep 2021 – Jul 2024',
    description: 'Computer Information Technology',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Academic background and qualifications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <GraduationCap size={24} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <span>{edu.location}</span>
                  </div>

                  <p className="text-gray-400 text-sm">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certifications & Courses
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: 'Full Stack Development', issuer: 'Various Platforms' },
              { name: 'React Native', issuer: 'Mobile App Development' },
              { name: 'AWS Cloud Basics', issuer: 'Amazon Web Services' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass rounded-xl p-5 text-center hover:border-gray-600 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
