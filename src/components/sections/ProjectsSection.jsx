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
  },
  {
    id: 2,
    title: 'Gestor de barberías',
    description: 'Aplicación para administrar citas, clientes y servicios en barberías, con interfaz intuitiva y sistema de notificaciones.',
    tags: ['TypeScript', 'HTML', 'CSS'],
    github: 'https://github.com/Davidl2002/Fronted_Barberia',
    featured: false,
  },
  {
    id: 3,
    title: 'Plataforma para adquirir seguros médicos',
    description: 'Portal web para comparar y adquirir seguros médicos, con filtros avanzados, cotizaciones en tiempo real y proceso de compra simplificado.',
    tags: ['JavaScript', 'HTML', 'CSS', 'TypeScript'],
    github: 'https://github.com/Davidl2002/front_seguros_medicos',
    featured: false,
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
    <section className="relative py-20 px-4 border-t border-dark-800 overflow-hidden" id="projects">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
            Proyectos <span className="text-pop-500">Destacados</span>
          </h2>
          <div className="w-20 h-1 bg-pop-500" />
        </motion.div>

        {/* Proyecto destacado */}
        {projectsData.find((p) => p.featured) && (
          <TiltCard className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black p-8 border-2 border-dark-800 hover:border-pop-500 transition-colors duration-300 h-full group"
          >
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-pop-500 mb-6">
                <span className="text-xs font-bold text-white uppercase tracking-widest">Proyecto Principal</span>
              </div>

              <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-pop-500 transition-colors">{projectsData[0].title}</h3>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">{projectsData[0].description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {projectsData[0].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-semibold bg-dark-900 border border-dark-700 text-gray-300 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={projectsData[0].github}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-pop-500 hover:text-white transition-all"
              >
                Ver en GitHub →
              </motion.a>
            </div>
          </motion.div>
          </TiltCard>
        )}

        {/* Grid de otros proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.slice(1).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="bg-black p-6 border border-dark-800 hover:border-pop-500 transition-all duration-300 h-full flex flex-col relative group">
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-pop-500 transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed relative z-10 flex-grow">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-dark-900 border border-dark-700 text-gray-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="inline-flex items-center text-white font-bold hover:text-pop-500 transition-colors relative z-10 mt-auto uppercase text-sm tracking-wider"
                  >
                    <span>Ver proyecto</span>
                    <span className="ml-2 transition-transform group-hover:translate-x-1 text-pop-500">→</span>
                  </a>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
