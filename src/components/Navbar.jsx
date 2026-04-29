import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'RCM solution', href: '#solutions' },
  { label: 'Who we help', href: '#who-we-help' },
  { label: 'Why choose us', href: '#why-us' },
  { label: 'Revenue cycle', href: '#revenue-cycle' },
  { label: 'RCM Challenge', href: '#services' },
  { label: 'Visions', href: '#visions' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2.5 cursor-pointer flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            {/* Circular logo mark */}
            <div className="relative w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center overflow-hidden border-2 border-[#C8102E]">
              {/* Inner white circle design */}
              <div className="absolute w-6 h-6 rounded-full bg-white/20" />
              <span className="relative text-white font-black text-xs leading-none z-10">RL</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-black text-[#C8102E] text-base tracking-wide uppercase">
                REDLINE
              </span>
              <span className="text-gray-400 text-[9px] uppercase tracking-widest font-medium">
                Outsourcing Solution
              </span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                whileHover={{ color: '#C8102E' }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-3 py-2 text-[13px] font-medium transition-colors duration-200 rounded ${
                  active === link.href
                    ? 'text-[#C8102E]'
                    : 'text-gray-600 hover:text-[#C8102E]'
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-[#C8102E] rounded-full"
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 6px 20px rgba(200,16,46,0.35)' }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNavClick('#contact')}
              className="ml-3 px-5 py-2 bg-[#C8102E] text-white text-[13px] font-semibold rounded transition-all duration-200 hover:bg-[#9B0E24]"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2.5 text-sm text-gray-700 hover:text-[#C8102E] hover:bg-red-50 rounded-lg transition-all"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNavClick('#contact')}
                className="mt-2 py-2.5 bg-[#C8102E] text-white font-semibold rounded-lg text-sm"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
