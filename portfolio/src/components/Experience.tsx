'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Chatter Labs',
    type: 'Full-time',
    location: 'Rawalpindi, Pakistan',
    period: 'May 2025 – Present',
    description: [
      'Built full-stack web applications using React, Node.js, and Express.',
      'Designed and integrated RESTful APIs, authentication systems, and optimized backend performance.',
      'Collaborated on frontend architecture and clean UI design.',
    ],
    current: true,
  },
  {
    title: 'Backend Developer (Internship)',
    company: 'EZITECH',
    type: 'Internship',
    location: 'Rawalpindi, Pakistan',
    period: 'March 2025 – May 2025',
    description: [
      'Developed backend services and REST APIs with Node.js + Express.',
      'Worked with MongoDB, API design, and error handling.',
    ],
    current: false,
  },
  {
    title: 'Full Stack Developer (Internship)',
    company: 'PNY Trainings',
    type: 'Internship',
    location: 'Rawalpindi, Pakistan',
    period: 'August 2024 – February 2025',
    description: [
      'Built full-stack features using React + Node.js/Express.',
      'Developed responsive UIs and integrated them with backend APIs.',
    ],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through the tech industry
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-indigo-500" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-gray-900 z-10 mt-6" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-2xl p-6 hover:border-gray-600 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase size={18} className="text-blue-400" />
                          <span className="text-sm text-blue-400 font-medium">{exp.type}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-lg text-gray-300">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-blue-400 mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
