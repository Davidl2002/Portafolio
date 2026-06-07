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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Fondo 3D */}
      <HeroScene />

      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradiente radial superior derecha */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-pop-500 rounded-full blur-3xl"
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          style={{ filter: 'blur(100px)' }}
        />

        {/* Gradiente radial inferior izquierda */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-pop-500 rounded-full blur-3xl"
          animate={{
            opacity: [0.02, 0.08, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          style={{ filter: 'blur(100px)' }}
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
          <div className="px-4 py-2 rounded-full border border-dark-800 bg-black">
            <p className="text-sm font-medium text-pop-500 uppercase tracking-widest">
              Bienvenido a mi portafolio
            </p>
          </div>
        </motion.div>

        {/* Título principal */}
        <motion.h1
          variants={titleVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block mb-2 text-white">
            Hola, soy{' '}
            <span className="text-white">
              David Lopez
            </span>
          </span>
          <span className="block text-pop-500">
            Desarrollador Web & Diseñador
          </span>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ingeniero de Software.
          Enfocado en <span className="text-white font-semibold">Frontend Development</span>,{' '}
          <span className="text-white font-semibold">Backend Development</span> y
          experiencias web <span className="text-white font-semibold">modernas e intuitivas</span>.
        </motion.p>

        {/* Botones de acción */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          {/* Botón principal */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white rounded-none font-bold uppercase tracking-wider
                       text-black hover:bg-pop-500 hover:text-white transition-all duration-300
                       relative overflow-hidden group"
          >
            <span className="relative z-10">Ver mis proyectos</span>
          </motion.button>

          {/* Botón secundario */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent rounded-none font-bold uppercase tracking-wider
                       text-white border-2 border-dark-800 hover:border-pop-500 hover:text-pop-500
                       transition-all duration-300"
          >
            Contactame
          </motion.button>
        </motion.div>

        {/* Stack de tecnologías */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 items-center"
        >
          <span className="text-sm text-gray-500 uppercase tracking-wider mr-2">Tech Stack:</span>
          {['React', 'Next.js', 'Java', 'JavaScript', 'Node.js', 'UI/UX', 'Responsive', 'Figma', 'SQL','SpringBoot', 'TypeScript', 'Python'].map((tech, index) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-3 py-1 text-xs rounded-none border border-dark-800
                         text-gray-400 hover:text-pop-500 hover:border-pop-500 transition-colors bg-black"
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
          <p className="text-xs text-gray-500 uppercase tracking-widest">Desplázate</p>
          <svg
            className="w-6 h-6 text-pop-500"
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
