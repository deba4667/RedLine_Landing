import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const solutions = [
  {
    title: 'Patient Registration & Eligibility',
    desc: 'Real-time insurance eligibility verification and accurate patient demographic capture to reduce downstream errors.',
    icon: '🏥',
  },
  {
    title: 'Medical Coding & Documentation(CPT/ICD-10/HCPCS)',
    desc: 'Certified coders ensuring accurate code assignment across all specialties.',
    icon: '📋',
  },
  {
    title: 'Claims Submission & Tracking',
    desc: 'Clean claim scrubbing and electronic submission to all major payers',
    icon: '📤',
  },
  {
    title: 'Denial Management & Appeals',
    desc: 'Proactive denial tracking, root-cause analysis, and timely appeals.',
    icon: '🔄',
  },
  {
    title: 'Payment Posting & Reconciliation',
    desc: 'Accurate ERA/EOB posting with daily reconciliation for full revenue visibility.',
    icon: '💳',
  },
  {
    title: 'AR Follow-Up & Collections',
    desc: 'Aggressive A/R management targeting payers and patients for maximum recovery.',
    icon: '📊',
  },
];

const features = [
  'HIPAA Compliant Workflows',
  '24/7 Real-time Dashboard',
  'Dedicated Account Manager',
  '99.9% Uptime SLA',
];

export default function RCMSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="solutions" className="py-14 md:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            Our Comprehensive Approach
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-gray-900">
            RCM <span className="text-[#C8102E]">Solution</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            A complete end-to-end revenue cycle solution designed to eliminate billing inefficiencies and accelerate your practice's financial performance.
          </p>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-2 bg-white border border-red-100 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              <CheckCircle size={14} className="text-[#C8102E]" />
              {f}
            </div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px rgba(200,16,46,0.15)',
                borderColor: '#C8102E',
              }}
              className="group bg-white rounded-2xl p-6 border-2 border-transparent shadow-md transition-all duration-300 cursor-default"
            >
              {/* Icon strip */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-[#C8102E] transition-colors duration-300">
                  <span className="group-hover:grayscale-0">{sol.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-gray-900 text-base leading-tight group-hover:text-[#C8102E] transition-colors duration-300">
                    {sol.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{sol.desc}</p>

              {/* Bottom accent */}
              <div className="mt-5 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.4 }}
                  className="h-full bg-gradient-to-r from-[#C8102E] to-[#E63950]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(200,16,46,0.3)' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#C8102E] text-white font-bold rounded-xl transition-all duration-300 hover:bg-[#9B0E24]"
          >
            Start Optimizing Today
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-[#C8102E] text-[#C8102E] font-bold rounded-xl transition-all duration-300 hover:bg-red-50"
          >
            See Why We're Different
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
