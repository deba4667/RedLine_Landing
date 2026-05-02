import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const phases = [
  {
    phase: '01',
    title: 'Discovery Call',
    day: 'DAY 1',
    description: 'Understand your specialty, EHR systems, payer mix, and current pain points. No obligation.',
    color: '#C8102E',
  },
  {
    phase: '02',
    title: 'Workflow Audit',
    day: 'DAY 2-5',
    description: 'We analyze your existing RCM workflow, aging report, and denial patterns.',
    color: '#9B0E24',
  },
  {
    phase: '03',
    title: 'Custom Proposal',
    day: 'DAY 5-7',
    description: 'We analyze your existing RCM workflow, aging report, and denial patterns.',
    color: '#7A0B1C',
  },
  {
    phase: '04',
    title: 'Contract & BAA',
    day: 'DAY 8',
    description: 'Agreements signed including Business Associate Agreement (HIPAA BAA).',
    color: '#5C0813',
  },
  {
    phase: '05',
    title: 'System Integration',
    day: 'DAY 9-12',
    description: 'EHR/PM access configured, payer enrollment updated, team onboarded.',
    color: '#3D0508',
  },
  {
    phase: '06',
    title: 'Go Live',
    day: 'DAY 14',
    description: 'First claims submitted. Weekly check-ins begin. 30-day pilot review scheduled.',
    color: '#2C0306',
  },
];

export default function EngagementModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="engagement-model" className="relative py-14 md:py-24 bg-gray-900 overflow-hidden" ref={ref}>
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
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-black text-white">
            Engagement Model & Onboarding
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            A structured, transparent four-phase journey from first conversation to full optimization.
          </p>
        </motion.div>

        {/* Phases */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: '0 25px 60px rgba(0,0,0,0.4)' }}
              className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 cursor-default transition-all duration-300 hover:border-[#C8102E]/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-1 group-hover:text-[#E63950] transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-[#C8102E] text-xs font-semibold uppercase tracking-wide">
                    {phase.day}
                  </p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {phase.description}
              </p>

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${phase.color}, transparent)` }}
              />
            </motion.div>
          ))}
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
