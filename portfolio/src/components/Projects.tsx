'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'ReelFlix',
    subtitle: 'Mobile App + Admin CMS',
    description: 'Full React Native mobile application for short-form video content (Reels) with a professional Admin Panel (CMS). Features user app with featured/trending content, video catalog, and a powerful admin dashboard for content management.',
    stats: ['53,000+ Views', '180,000 Watch Minutes', 'High Engagement'],
    techStack: ['React Native', 'Node.js', 'MongoDB', 'Admin Dashboard'],
    images: ['/images/reelflix-mobile-app.png', '/images/reelflix-admin-panel.png'],
    liveUrl: '',
    highlight: true,
  },
  {
    title: 'ChatterLab CRM',
    subtitle: 'Customer Relationship Management',
    description: 'High-performance CRM platform with dashboard, client management, appointments, billing, and analytics. Features smart appointment scheduling, real-time analytics, integrated billing, and third-party integrations.',
    stats: ['Modern UI/UX', 'Real-time Analytics', 'Integrated Billing'],
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Charts'],
    images: ['/images/CRM-login.png', '/images/CRM-dashboard.png'],
    liveUrl: '',
    highlight: true,
  },
  {
    title: 'Chatters Health Solutions',
    subtitle: 'Medicare Assistance Platform',
    description: 'Medicare assistance platform with lead generation system integrated with Jornaya API for original LeadIDs. Includes a clean website and mobile-friendly contact form for connecting users with licensed agents.',
    stats: ['Jornaya Integration', 'Lead Generation', 'Mobile-Friendly'],
    techStack: ['React', 'Node.js', 'Jornaya API', 'Responsive Design'],
    images: ['/images/Jornaya-dadshboard.png', '/images/Jornaya-Leadid-form.png'],
    liveUrl: 'https://www.chattershealthsolutions.com/',
    highlight: false,
  },
  {
    title: 'Lend-Home / LENDLY',
    subtitle: 'Mortgage Calculator Platform',
    description: 'Full-stack mortgage platform with interactive calculator, residential & commercial finance options. Features live calculation results including loan amount, monthly payment, total interest, and more.',
    stats: ['Interactive Calculator', 'Live Results', 'Dual Finance Options'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    images: ['/images/Mogage-project.png'],
    liveUrl: 'https://lend-home-zpe7.vercel.app/',
    highlight: false,
  },
  {
    title: 'GripAid',
    subtitle: 'Roadside Assistance Website',
    description: 'Professional website for a mobile roadside assistance company. Clean, modern design focused on trust and urgency with clear service information and easy contact options.',
    stats: ['Professional Design', 'Trust-Focused', 'Quick Contact'],
    techStack: ['React', 'Tailwind CSS', 'Responsive Design'],
    images: ['/images/Roadside-project.png'],
    liveUrl: 'https://grip-aid.vercel.app/',
    highlight: false,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work and contributions
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(index)}
              className={`group cursor-pointer ${
                project.highlight ? 'md:grid md:grid-cols-2 md:gap-8' : ''
              }`}
            >
              <div className={`glass rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-gray-500 transition-all duration-500 ${
                project.highlight ? '' : 'md:hover:scale-[1.02]'
              }`}>
                {/* Project Images */}
                <div className={`relative overflow-hidden ${
                  project.highlight ? 'aspect-video md:aspect-auto md:h-full' : 'aspect-video'
                }`}>
                  <div className="flex h-full">
                    {project.images.map((img, imgIndex) => (
                      <div
                        key={img}
                        className={`relative flex-shrink-0 ${
                          project.images.length > 1 ? 'w-1/2' : 'w-full'
                        } h-full group-hover:scale-105 transition-transform duration-700 ease-out`}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index === 0}
                        />
                        {imgIndex < project.images.length - 1 && (
                          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-500/50 to-transparent" />
                        )}
                      </div>
                    ))}
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 backdrop-blur-sm">
                      <span className="px-8 py-4 bg-gradient-to-r from-blue-500/90 to-teal-500/90 backdrop-blur-md rounded-full text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/30 transform hover:translate-y-[-2px] transition-all duration-300">
                        View Details <ChevronRight size={18} />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-400 font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-gray-700 rounded-lg text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-900/90 backdrop-blur-sm z-10 flex items-center justify-between p-4 border-b border-gray-800">
              <div>
                <h3 className="text-xl font-bold text-white">{projects[selectedProject].title}</h3>
                <p className="text-blue-400 text-sm">{projects[selectedProject].subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            <div className="p-6">
              {/* Images */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {projects[selectedProject].images.map((img, imgIndex) => (
                  <div key={img} className="relative aspect-video rounded-2xl overflow-hidden border-2 border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-blue-500/15 hover:border-blue-500/30 transition-all duration-500 group/image">
                    <Image
                      src={img}
                      alt={`${projects[selectedProject].title} - Screenshot ${imgIndex + 1}`}
                      fill
                      className="object-cover object-center group-hover/image:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{projects[selectedProject].description}</p>

              {/* Stats */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].stats.map((stat) => (
                    <span
                      key={stat}
                      className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-white/5 border border-gray-700 rounded-lg text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full font-semibold text-white text-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => setSelectedProject(null)}
                >
                  Discuss Similar Project
                </a>
                {projects[selectedProject].liveUrl && (
                  <a
                    href={projects[selectedProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 glass border border-green-500/50 rounded-full font-semibold text-white hover:bg-green-500/10 transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> Live Site
                  </a>
                )}
                <a
                  href="https://github.com/sohaibiqbal3429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 glass border border-gray-600 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  <ExternalLink size={18} /> View Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
