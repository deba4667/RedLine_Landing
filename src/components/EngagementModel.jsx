import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardCheck, Settings, Rocket, BarChart2 } from 'lucide-react';

const phases = [
  {
    phase: '01',
    title: 'Discovery & Assessment',
    icon: ClipboardCheck,
    color: '#C8102E',
    items: [
      'Practice workflow analysis',
      'Current RCM audit & gap identification',
      'Technology stack evaluation',
      'KPI baseline establishment',
      'Custom roadmap creation',
    ],
  },
  {
    phase: '02',
    title: 'Setup & Integration',
    icon: Settings,
    color: '#9B0E24',
    items: [
      'EHR/PM system integration',
      'Payer credentialing verification',
      'Team training & onboarding',
      'Workflow customization',
      'Data migration & validation',
    ],
  },
  {
    phase: '03',
    title: 'Go-Live & Launch',
    icon: Rocket,
    color: '#7A0B1C',
    items: [
      'Parallel billing period',
      'Real-time monitoring setup',
      'Dedicated support team assigned',
      'First claims submission',
      'Payment posting activation',
    ],
  },
  {
    phase: '04',
    title: 'Optimize & Scale',
    icon: BarChart2,
    color: '#5C0813',
    items: [
      'Monthly performance reviews',
      'Denial trend analysis',
      'Continuous process improvement',
      'Quarterly strategic planning',
      'Revenue growth strategies',
    ],
  },
];

export default function EngagementModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 bg-gray-900 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #C8102E 0%, transparent 50%), radial-gradient(circle at 75% 50%, #C8102E 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            Our Process
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-white">
            Engagement Model & Onboarding
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            A structured, transparent four-phase journey from first conversation to full optimization.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -8, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
                className="group relative bg-gray-800 border border-gray-700 rounded-2xl p-6 cursor-default transition-all duration-300 hover:border-[#C8102E]/50"
              >
                {/* Phase number */}
                <div
                  className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg"
                  style={{ background: phase.color }}
                >
                  {phase.phase}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${phase.color}22` }}
                >
                  <Icon size={22} style={{ color: '#E63950' }} />
                </div>

                <h3 className="font-heading font-bold text-white text-base mb-4 group-hover:text-[#E63950] transition-colors duration-300">
                  {phase.title}
                </h3>

                <ul className="space-y-2.5">
                  {phase.items.map((item, j) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.15 + j * 0.05 }}
                      className="flex items-start gap-2.5 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C8102E] mt-2 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Bottom glow */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Timeline connector */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden xl:block mt-8 h-0.5 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent mx-20 origin-left"
        />
      </div>
    </section>
  );
}
