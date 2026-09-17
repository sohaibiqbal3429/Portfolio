'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Github, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'sohaibiqbal3429@gmail.com',
      href: 'mailto:sohaibiqbal3429@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+92 333 455 1159',
      href: 'tel:+923345451159',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Islamabad / Rawalpindi, Pakistan',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
              <p className="text-gray-300 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your visions. Whether you have a question or just want to say hi, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-4 glass p-4 rounded-xl hover:border-gray-600 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sohaibiqbal3429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:sohaibiqbal3429@gmail.com"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-gray-600 transition-all duration-300 group"
                >
                  <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass p-4 rounded-xl border border-green-500/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="text-white font-medium">Available for Work</p>
                  <p className="text-gray-400 text-sm">Open to full-time opportunities</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitted
                    ? 'bg-green-500'
                    : isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-teal-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]'
                }`}
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent Successfully!
                  </>
                ) : isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
