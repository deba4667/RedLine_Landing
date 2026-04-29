import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  { title: 'Hospitals', icon: '🏥', count: '120+' },
  { title: 'Physician Groups', icon: '👨‍⚕️', count: '200+' },
  { title: 'Ambulatory Surgery Centers', icon: '🏨', count: '45+' },
  { title: 'Behavioral Health', icon: '🧠', count: '80+' },
  { title: 'Urgent Care Centers', icon: '⚡', count: '60+' },
  { title: 'Rehabilitation Centers', icon: '💪', count: '35+' },
  { title: 'Radiology Practices', icon: '🔬', count: '50+' },
  { title: 'Cardiology Groups', icon: '❤️', count: '40+' },
  { title: 'Orthopedics', icon: '🦴', count: '55+' },
  { title: 'Oncology Centers', icon: '🎗️', count: '30+' },
  { title: 'Telehealth Providers', icon: '💻', count: '90+' },
  { title: 'Multi-Specialty Clinics', icon: '🏪', count: '75+' },
];

export default function WhoWeHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="who-we-help" className="py-24 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, #8B0012 0%, #C8102E 50%, #9B0E24 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-white/60 font-semibold text-sm uppercase tracking-widest">
            Our Clientele
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-white">
            Who We Help
          </h2>
          <p className="mt-4 text-white/70 max-w-xl mx-auto text-lg">
            We partner with healthcare organizations of all sizes and specialties to optimize their revenue cycle performance.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(255,255,255,0.2)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
              }}
              className="group relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 cursor-default transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-white font-bold text-sm leading-tight mb-1">{cat.title}</h3>
              <p className="text-white/50 text-xs">{cat.count} clients</p>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <p className="text-white/70 text-lg mb-6">
            Don't see your specialty? We work with all healthcare providers.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-[#C8102E] px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-gray-100"
          >
            Talk to an Expert
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
