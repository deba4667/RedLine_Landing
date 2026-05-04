import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const reasons = [
  {
    title: 'Dedicated Account Team',
    desc: 'You get a dedicated Account Manager, Billing Specialist, and QA Analyst not a rotating call center queue. One point of contact. Always.',
  },
  {
    title: 'Transparent Reporting',
    desc: 'Weekly dashboard reviews, monthly financial reviews, and real time access to denial trends, collection rates, and aging buckets.',
  },
  {
    title: 'HIPAA-First Culture',
    desc: 'HIPAA compliance is embedded in every process, not bolted on. BAAs provided. All staff background checked and annually trained.',
  },
  {
    title: 'No Long-Term Lock-In',
    desc: 'Our results speak for themselves. Month to month contracts. Available after pilot phase.',
  },
  {
    title: 'Performance-Tied Pricing',
    desc: 'Our fees are tied to your collections we only win when you collect. No hidden fees. No per claim charges.',
  },
  {
    title: 'Fast Onboarding — 2 Weeks',
    desc: 'From contract signing to live billing in under 14 days. Our onboarding team handles EHR integration and payer enrollment.',
  },
  {
    title: 'EHR & PM System Compatibility',
    desc: (
      <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-gray-600">
        <span>Epic</span>
        <span>Cerner</span>
        <span>eClinicalWorks</span>
        <span>Kareo / Tebra</span>
        <span>athenahealth</span>
        <span>AdvancedMD</span>
        <span>Practice Fusion</span>
        <span>NextGen</span>
        <span>Medisoft</span>
        <span>Allscripts</span>
      </div>
    ),
  },
  {
    title: 'Compliance & Security',
    desc: 'HIPAA Compliant\nSOC 2 Practices\nAES-256 Encryption\nSecure VPN Access\nAnnual HIPAA Training',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-14 md:py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            The Redline Difference
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-gray-900">
            Why Choose <span className="text-[#C8102E]">Us</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 50px rgba(200,16,46,0.15)',
              }}
              className="group bg-white rounded-lg p-6 shadow-md border border-red-100 transition-all duration-300 cursor-default hover:border-[#C8102E]"
            >
              <h3 className="font-heading font-bold text-gray-900 text-base mb-3 group-hover:text-[#C8102E] transition-colors duration-300">
                {reason.title}
              </h3>
              <div className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {reason.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
