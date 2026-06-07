'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/TiltCard';

const projectsData = [
  {
    id: 1,
    title: 'Plataforma para la compra de tickes en terminal de buses',
    description: 'Sistema de venta de boletos en línea para terminales de buses, con selección de rutas, horarios y pagos seguros.',
    tags: ['JavaScript', 'PostgreSQL'],
    github: 'https://github.com/Davidl2002/Buses_Front',
    featured: true,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Gestor de barberías',
    description: 'Aplicación para administrar citas, clientes y servicios en barberías, con interfaz intuitiva y sistema de notificaciones.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/Davidl2002/Fronted_Barberia',
    featured: false,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Plataforma para adquirir seguros médicos',
    description: 'Portal web para comparar y adquirir seguros médicos, con filtros avanzados, cotizaciones en tiempo real y proceso de compra simplificado.',
    tags: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
    github: 'https://github.com/Davidl2002/front_seguros_medicos',
    featured: false,
    color: 'from-green-500 to-emerald-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProjectsSection() {
  return (
    <section className="relative py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Proyectos Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
        </motion.div>

        {/* Proyecto destacado */}
        {projectsData.find((p) => p.featured) && (
          <TiltCard className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ boxShadow: '0 30px 60px rgba(14, 165, 233, 0.2)' }}
            className="glass-effect p-8 rounded-xl border-2 border-gradient overflow-hidden h-full"
          >
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${projectsData[0].color} opacity-10 blur-3xl`} />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-accent-500/20 to-primary-500/20 
                            border border-accent-500/30 mb-4">
                <span className="text-xs font-semibold text-accent-400">Proyecto Principal</span>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-white">{projectsData[0].title}</h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">{projectsData[0].description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projectsData[0].tags.map((tag, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${projectsData[0].color} 
                             bg-opacity-20 border border-white/20 text-white`}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href={projectsData[0].github}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600
                          text-white font-semibold hover:shadow-lg transition-all"
              >
                Ver en GitHub →
              </motion.a>
            </div>
          </motion.div>
          </TiltCard>
        )}

        {/* Grid de otros proyectos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projectsData.slice(1).map((project) => (
            <TiltCard key={project.id}>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)' }}
              className="glass-effect p-6 rounded-xl group hover:border-primary-500/50 transition-all h-full"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} 
                            opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />

              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.github}
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span className="text-sm font-semibold">Ver proyecto</span>
                <span className="ml-2">→</span>
              </motion.a>
            </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
