import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative py-28 overflow-hidden" ref={ref}>
      {/* Gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8102E] via-[#A00C24] to-[#6B0A1A]" />

      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${[5, 60, 80, 30][i]}%`,
              top: `${[10, 50, 10, 70][i]}%`,
            }}
            animate={{
              x: [0, 15, -15, 0],
              y: [0, -15, 15, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-yellow-300" />
          <span className="text-white text-sm font-medium">Free Revenue Assessment Included</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6"
        >
          Ready to Optimize Your
          <span className="block text-white/80">Revenue Cycle?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/75 text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Let's start with a no-obligation 30-minute revenue cycle assessment.
          We'll identify gaps and show you exactly how we'll improve your
          collections.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 bg-white text-[#C8102E] px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-gray-50 shadow-2xl"
          >
            Get Free Assessment
            <ArrowRight size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 border-2 border-white/40 text-white px-10 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:border-white hover:bg-white/10 backdrop-blur-sm"
          >
            Schedule a Demo
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/50 text-sm"
        >
          {['Dedicated Account Team', 'Full HIPAA Compliance', '2-Week Onboarding'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
