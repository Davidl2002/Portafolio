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
    <section className="relative py-20 px-4 bg-black border-t border-dark-800" id="contact">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
            ¿<span className="text-pop-500">Hablamos?</span>
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
            className="bg-black border border-dark-800 p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 
                           text-white placeholder-gray-500 focus:border-pop-500 focus:outline-none
                           transition-colors rounded-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 
                           text-white placeholder-gray-500 focus:border-pop-500 focus:outline-none
                           transition-colors rounded-none"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 
                           text-white placeholder-gray-500 focus:border-pop-500 focus:outline-none
                           transition-colors rounded-none"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wider">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-dark-900 border border-dark-700 
                           text-white placeholder-gray-500 focus:border-pop-500 focus:outline-none
                           transition-colors resize-none rounded-none"
                  placeholder="Tu mensaje aquí..."
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900 border border-red-500 text-red-100 text-sm font-bold"
                >
                  {error}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-4 bg-white text-black font-bold uppercase tracking-wider
                         hover:bg-pop-500 hover:text-white transition-all duration-300 rounded-none border border-white"
              >
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-pop-500"
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
            <div className="bg-black border border-dark-800 p-6">
              <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Conecta conmigo</h3>
              <div className="space-y-3">
                {contactLinks.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-3 border border-transparent hover:border-dark-700 bg-dark-900 
                             transition-colors group"
                  >
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">{link.icon}</span>
                    <span className="text-gray-300 group-hover:text-pop-500 font-bold uppercase text-sm tracking-wider transition-colors">
                      {link.name}
                    </span>
                    <span className="ml-auto text-dark-500 group-hover:text-pop-500 transition-colors">→</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-black border border-dark-800 p-6">
              <h3 className="text-lg font-bold mb-2 text-white uppercase tracking-wider">Ubicación</h3>
              <p className="text-gray-400">Ambato, Ecuador 🇪🇨</p>
            </div>

            <div className="bg-black border border-dark-800 p-6">
              <h3 className="text-lg font-bold mb-2 text-white uppercase tracking-wider">Disponibilidad</h3>
              <p className="text-gray-400">Disponible para proyectos y colaboraciones</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
