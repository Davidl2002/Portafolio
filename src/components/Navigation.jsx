'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect backdrop-blur-md py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-lg bg-pop-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">DL</span>
          </div>
          <span className="font-bold text-xl text-white hidden sm:inline">Esteban</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              whileHover={{ scale: 1.05, color: '#ff4500' }}
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-pop-500 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2 rounded-lg bg-white
                   text-black font-semibold hover:bg-pop-500 hover:text-white transition-all"
        >
          Contactame
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 relative w-8 h-6"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="container mx-auto px-4 py-4 border-t border-dark-800 flex flex-col gap-2">
          {navItems.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-pop-500 transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg bg-white
                     text-black font-semibold mt-2 hover:bg-pop-500 hover:text-white"
          >
            Contactame
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
