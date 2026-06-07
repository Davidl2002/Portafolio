'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/TiltCard';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Estilos & Diseño',
    skills: ['Tailwind CSS', 'Responsive Design', 'CSS Grid', 'Flexbox', 'Figma', 'Prototipos'],
  },
  {
    category: 'Experiencia de Usuario',
    skills: ['UI/UX Design', 'Wireframing', 'Accesibilidad', 'Usabilidad', 'Animaciones', 'Micro-interacciones'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'REST APIs', 'Express', 'SQL', 'PostgreSQL', 'Autenticación'],
  },
  {
    category: 'Herramientas & Control',
    skills: ['Git & GitHub', 'NPM', 'VS Code', 'DevTools', 'Testing', 'Debugging'],
  },
  {
    category: 'Conceptos Clave',
    skills: ['Clean Code', 'Componentes Reutilizables', 'SEO', 'Performance', 'Versionado', 'Metodologías Ágiles'],
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
  },
};

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-4 bg-black border-t border-dark-800" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight text-white">
            Habilidades & <span className="text-pop-500">Tecnologías</span>
          </h2>
          <div className="w-20 h-1 bg-pop-500" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, idx) => (
            <TiltCard key={idx} className="h-full">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-black border border-dark-800 p-6 hover:border-pop-500 transition-colors duration-300 h-full group"
            >
              <div className="mb-6 border-b border-dark-800 pb-2 group-hover:border-pop-500 transition-colors">
                <h3 className="font-bold text-white text-lg uppercase tracking-wide">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs bg-dark-900 border border-dark-700
                             text-gray-300 hover:border-pop-500 hover:text-pop-500 transition-colors uppercase"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
