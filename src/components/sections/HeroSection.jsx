'use client';

import { motion } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene';

// Variantes de animación
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo 3D */}
      <HeroScene />

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradiente radial superior derecha */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-accent-600 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{ filter: 'blur(80px)', opacity: 0.15 }}
        />

        {/* Gradiente radial inferior izquierda */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary-500 to-transparent rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          style={{ filter: 'blur(80px)', opacity: 0.1 }}
        />
      </div>

      {/* Contenedor principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20 text-center max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Etiqueta pequeña de presentación */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 backdrop-blur-sm">
            <p className="text-sm font-medium text-accent-400">
              ✨ Bienvenido a mi portafolio
            </p>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block mb-2">
            Hola, soy{' '}
            <span className="gradient-text">
              David Lopez
            </span>
          </span>
          <span className="block gradient-text-accent">
            Desarrollador Web & Diseñador
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Estudiante de Ingeniería de Software en la Universidad Técnica de Ambato.
          Enfocado en <span className="text-primary-400 font-semibold">Frontend Development</span>,{' '}
          <span className="text-primary-400 font-semibold">Backend Development</span> y
          experiencias web <span className="text-primary-400 font-semibold">modernas e intuitivas</span>.
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Botón principal */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg font-semibold 
                       text-white hover:shadow-lg transition-all duration-300 border border-primary-400/30
                       relative overflow-hidden group"
          >
            <span className="relative z-10">Ver mis proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-500 opacity-0 
                          group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          {/* Botón secundario */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent rounded-lg font-semibold 
                       text-white border border-accent-500/50 hover:border-accent-400
                       transition-all duration-300 glass-effect hover:glass-effect-lg"
          >
            Contactame
          </motion.button>
        </motion.div>

        {/* Stack de tecnologías */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 items-center"
        >
          <span className="text-sm text-gray-400">Tech Stack:</span>
          {['React', 'Next.js', 'Java', 'JavaScript', 'Node.js', 'UI/UX', 'Responsive', 'Figma', 'SQL','SpringBoot', 'TypeScript', 'Python'].map((tech, index) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10
                         text-gray-300 hover:text-primary-400 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gray-400">Desplázate para explorar</p>
          <svg
            className="w-6 h-6 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
