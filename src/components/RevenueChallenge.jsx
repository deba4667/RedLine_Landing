import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const challenges = [
  {
    angle: 0,
    label: 'Pre-Auth\nErrors',
    desc: 'Prior authorization failures delaying care and payment',
    size: 'lg',
  },
  {
    angle: 45,
    label: 'Claim\nDenials',
    desc: 'High denial rates from payers eating into revenue',
    size: 'md',
  },
  {
    angle: 90,
    label: 'Coding\nErrors',
    desc: 'Incorrect medical coding leading to underpayments',
    size: 'lg',
  },
  {
    angle: 135,
    label: 'Slow\nPayments',
    desc: 'Extended AR days impacting cash flow significantly',
    size: 'sm',
  },
  {
    angle: 180,
    label: 'Staff\nBurnout',
    desc: 'Administrative burden reducing clinical staff efficiency',
    size: 'md',
  },
  {
    angle: 225,
    label: 'Compliance\nRisks',
    desc: 'Regulatory non-compliance exposing practices to audits',
    size: 'lg',
  },
  {
    angle: 270,
    label: 'Patient\nCollections',
    desc: 'Ineffective patient payment collection strategies',
    size: 'sm',
  },
  {
    angle: 315,
    label: 'Data\nSilos',
    desc: 'Fragmented systems causing information gaps',
    size: 'md',
  },
];

const sizeMap = { sm: 90, md: 110, lg: 130 };

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const orbitRadius = 200;

  return (
    <section id="services" className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            Understanding The Problem
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-gray-900">
            Revenue Cycle <span className="text-[#C8102E]">Challenge</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Healthcare practices face numerous obstacles that drain revenue and create inefficiencies throughout the billing process.
          </p>
        </motion.div>

        {/* Orbital Diagram */}
        <div className="relative flex items-center justify-center" style={{ height: '550px' }}>
          {/* Orbit rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute rounded-full border-2 border-dashed border-gray-200"
            style={{ width: orbitRadius * 2 + 130, height: orbitRadius * 2 + 130 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute rounded-full border border-red-100"
            style={{ width: orbitRadius * 2 - 30, height: orbitRadius * 2 - 30 }}
          />

          {/* Center Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.08 }}
            className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-br from-[#C8102E] to-[#8B0012] flex flex-col items-center justify-center text-center shadow-2xl shadow-red-500/40 cursor-default"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C8102E] to-[#8B0012] animate-pulse opacity-40 scale-110" />
            <p className="relative text-white text-xl font-black font-heading leading-tight">
              Revenue<br />Cycle<br />Challenge
            </p>
          </motion.div>

          {/* Orbiting Bubbles */}
          {challenges.map((item, i) => {
            const rad = (item.angle * Math.PI) / 180;
            const x = Math.cos(rad) * orbitRadius;
            const y = Math.sin(rad) * orbitRadius;
            const size = sizeMap[item.size];

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1, x, y }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.1,
                  type: 'spring',
                  stiffness: 80,
                }}
                whileHover={{ scale: 1.12, zIndex: 50 }}
                className="absolute group cursor-pointer"
                style={{ width: size, height: size }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#C8102E] to-[#9B0E24] flex items-center justify-center text-center shadow-lg shadow-red-500/30 transition-all duration-300 group-hover:shadow-red-500/60 group-hover:shadow-2xl">
                  <span className="text-white font-bold text-xs leading-tight px-2 whitespace-pre-line">
                    {item.label}
                  </span>
                </div>
                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 bg-gray-900 text-white text-xs p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50 shadow-xl">
                  {item.desc}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
