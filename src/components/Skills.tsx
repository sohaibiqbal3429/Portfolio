'use client';

import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Cloud, Terminal, Layers } from 'lucide-react';
import { easings, fadeUpStagger, scalePop, skillTag } from '@/lib/animations';

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

// Container variant for staggered card animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with fade-up animation */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easings.easeOut }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: easings.easeOut }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        {/* Skills grid with staggered entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={scalePop}
              whileHover={{ 
                scale: 1.03,
                borderColor: 'rgba(255, 255, 255, 0.2)',
                transition: { duration: 0.3, ease: easings.easeOut }
              }}
              className="glass rounded-2xl p-6 transition-all duration-300 group cursor-default"
            >
              <motion.div 
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4`}
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {category.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillTag}
                    initial="rest"
                    whileHover="hover"
                    className="px-3 py-1.5 bg-white/5 border border-gray-700 rounded-lg text-sm text-gray-300 cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats with staggered scale animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: easings.easeOut }}
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
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass rounded-2xl p-6 text-center cursor-default"
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
