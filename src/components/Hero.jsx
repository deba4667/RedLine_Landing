import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const stats = [
  { value: '98%', label: 'Collection Rate' },
  { value: '45%', label: 'Denial Reduction' },
  { value: '30+', label: 'Days Faster Payments' },
  { value: '500+', label: 'Providers Served' },
];

export default function Hero() {
  const scrollToNext = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0205] via-[#C8102E] to-[#8B0012]" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: `${[10, 60, 80, 20, 50][i]}%`,
              top: `${[20, 60, 20, 80, 40][i]}%`,
            }}
            animate={{
              x: [0, 20, -20, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                #1 Revenue Cycle Management Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.05] mb-6"
            >
              Revenue
              <span className="block text-white/30">Cycle</span>
              <span className="block">Management</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg"
            >
              End-to-end revenue cycle management solutions that maximize your
              reimbursements, reduce denials, and accelerate cash flow—so you can
              focus on delivering exceptional patient care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 bg-white text-[#C8102E] px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:bg-gray-100"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-300 hover:border-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Stats + Image Area */}
          <div className="hidden md:flex flex-col gap-6 items-end">
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-72"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93V18c0-.55-.45-1-1-1s-1 .45-1 1v1.93C7.06 19.44 4.56 16.94 4.07 14H6c.55 0 1-.45 1-1s-.45-1-1-1H4.07C4.56 8.06 7.06 5.56 10 5.07V7c0 .55.45 1 1 1s1-.45 1-1V5.07C15.94 5.56 18.44 8.06 18.93 11H17c-.55 0-1 .45-1 1s.45 1 1 1h1.93C18.44 16.94 15.94 19.44 13 19.93z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Total Revenue Recovered</p>
                  <p className="text-white/60 text-xs">Last 12 months</p>
                </div>
              </div>
              <p className="text-3xl font-black text-white">$2.4M+</p>
              <div className="mt-3 h-1.5 bg-white/20 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '87%' }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-white rounded-full"
                />
              </div>
              <p className="text-white/60 text-xs mt-1">87% improvement</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-72">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center cursor-default transition-all duration-300"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-white/60 text-xs mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="md:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
            >
              <p className="text-xl font-black text-white">{stat.value}</p>
              <p className="text-white/60 text-xs">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  );
}
