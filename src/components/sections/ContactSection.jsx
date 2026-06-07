'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        title: formData.subject,       
        from_name: formData.name,      
        name: formData.name,           
        from_email: formData.email,    
        message: formData.message,     
        time: new Date().toLocaleString(), 
      };

      await emailjs.send(
        'service_sjy0tf7',
        'template_7gcrdv9',
        templateParams,
        'jLt5dRN0FjIQArfBh' 
      );

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error('Error al enviar email:', err);
      setError('Error al enviar el mensaje. Por favor intenta de nuevo.');
    }
  };

  const contactLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Davidl2002',
      icon: '🐙',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/david-lopez-ab7a96376/',
      icon: '💼',
    },
    {
      name: 'Email',
      url: 'mailto:dl735894@gmail.com',
      icon: '📧',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/davidlopez._2/',
      icon: '📸',
    },
  ];

  return (
    <section className="relative py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">¿Hablamos?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones. Contactame directamente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-xl"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none
                           transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none
                           transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none
                           transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none
                           transition-colors resize-none"
                  placeholder="Tu mensaje aquí..."
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600
                         text-white font-semibold hover:shadow-lg transition-all relative overflow-hidden"
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400"
                  >
                    ✓ Mensaje enviado
                  </motion.span>
                ) : (
                  'Enviar mensaje'
                )}
              </motion.button>
            </div>
          </motion.form>

          {/* Enlaces de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-white">Conecta conmigo</h3>
              <div className="space-y-3">
                {contactLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 
                             transition-colors group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-white">Ubicación</h3>
              <p className="text-gray-400">Ambato, Ecuador 🇪🇨</p>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-lg font-bold mb-2 text-white">Disponibilidad</h3>
              <p className="text-gray-400">Disponible para proyectos y colaboraciones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
