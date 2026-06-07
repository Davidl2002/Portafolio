'use client';

import { motion } from 'framer-motion';

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function AboutSection() {
  return (
    <section className="relative py-20 px-4 overflow-hidden" id="about">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
            Sobre <span className="text-pop-500">mí</span>
          </h2>
          <div className="w-20 h-1 bg-pop-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="bg-black border border-dark-800 p-8 hover:border-pop-500 transition-colors duration-300"
          >
            <p className="text-gray-300 leading-relaxed mb-4">
              Soy Esteban David Lopez Nuñez, Ingeniero de Software, 
              con pasión por crear interfaces modernas, intuitivas y accesibles.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Mi enfoque está en el desarrollo frontend, diseño responsivo y experiencias de usuario excepcionales. 
              Me encanta aprender nuevas tecnologías y mejores prácticas en desarrollo web para crear soluciones de calidad.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Trabajo con React, Next.js y Tailwind CSS para construir aplicaciones web. 
              Creo en la importancia de escribir código limpio, bien documentado y fácil de mantener.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            {[
              { title: 'Formación', desc: 'Ingeniería de Software - UTA' },
              { title: 'Especialidad', desc: 'Frontend & Backend' },
              { title: 'Enfoque', desc: 'Experiencias web modernas' },
              { title: 'Objetivo', desc: 'Desarrollador Full-Stack' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="p-4 bg-black border border-dark-800 hover:border-pop-500 transition-colors group"
              >
                <h3 className="text-white group-hover:text-pop-500 font-bold mb-1 uppercase tracking-wide transition-colors">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
