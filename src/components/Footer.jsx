'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navegación',
      links: [
        { label: 'Inicio', href: '#' },
        { label: 'Sobre mí', href: '#about' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub', href: 'https://github.com/Davidl2002' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-lopez-ab7a96376/' },
        { label: 'Instagram', href: 'https://www.instagram.com/davidlopez._2/' },
        { label: 'Email', href: 'mailto:dl735894@gmail.com' },
      ],
    },
    // {
    //   title: 'Recursos',
    //   links: [
    //     { label: 'Blog', href: '#' },
    //     { label: 'Documentación', href: '#' },
    //     { label: 'Descargar CV', href: '#' },
    //     { label: 'Portfolio PDF', href: '#' },
    //   ],
    // },
  ];

  return (
    <footer className="relative border-t border-dark-800 bg-black">
      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-pop-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DL</span>
                </div>
                <span className="font-bold text-xl text-white">Esteban</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Desarrollador de Software enfocado en soluciones innovadoras.
              </p>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((column, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-bold text-white mb-4 uppercase tracking-wider">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-pop-500 transition-colors text-sm font-semibold uppercase tracking-wide"
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-dark-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
              <p>© {currentYear} Esteban David Lopez Nuñez. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-black border border-dark-800 flex items-center justify-center
                   hover:border-pop-500 hover:bg-pop-500 group transition-all rounded-none"
        >
          <svg
            className="w-6 h-6 text-white group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7-7m0 0l-7 7m7-7v12"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
