'use client';

import { motion } from 'framer-motion';
import TiltCard from '@/components/TiltCard';

const skillsData = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Estilos & Diseño',
    skills: ['Tailwind CSS', 'Responsive Design', 'CSS Grid', 'Flexbox', 'Figma', 'Prototipos'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Experiencia de Usuario',
    skills: ['UI/UX Design', 'Wireframing', 'Accesibilidad', 'Usabilidad', 'Animaciones', 'Micro-interacciones'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'REST APIs', 'Express', 'SQL', 'PostgreSQL', 'Autenticación'],
    color: 'from-orange-500 to-red-500',
  },
  {
    category: 'Herramientas & Control',
    skills: ['Git & GitHub', 'NPM', 'VS Code', 'DevTools', 'Testing', 'Debugging'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    category: 'Conceptos Clave',
    skills: ['Clean Code', 'Componentes Reutilizables', 'SEO', 'Performance', 'Versionado', 'Metodologías Ágiles'],
    color: 'from-cyan-500 to-blue-500',
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
    boxShadow: '0 20px 40px rgba(14, 165, 233, 0.2)',
  },
};

export default function SkillsSection() {
  return (
    <section className="relative py-20 px-4" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Habilidades & Tecnologías</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
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
              className="glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all h-full"
            >
              <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${category.color} w-fit`}>
                <h3 className="font-bold text-white text-sm">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/20
                             text-gray-300 hover:border-primary-400 transition-colors"
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
