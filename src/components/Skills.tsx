'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Terminal, Layers } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code size={24} />,
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend',
    icon: <Database size={24} />,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Authentication & Authorization'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Mobile',
    icon: <Smartphone size={24} />,
    skills: ['React Native', 'Mobile App Development', 'Cross-platform Apps'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud size={24} />,
    skills: ['AWS', 'CI/CD Pipelines', 'Nginx', 'Docker (basics)', 'Git & GitHub'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Tools',
    icon: <Terminal size={24} />,
    skills: ['Prompt Engineering (Cursor / Codex)', 'VS Code', 'Postman', 'MongoDB Compass', 'Agile'],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    title: 'Other Skills',
    icon: <Layers size={24} />,
    skills: ['API Design', 'System Architecture', 'Performance Optimization', 'Code Review', 'Team Collaboration'],
    color: 'from-teal-500 to-blue-500',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-gray-300 hover:border-gray-500 hover:bg-white/10 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '2+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Technologies' },
            { number: '20+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
