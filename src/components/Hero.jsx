import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-16"
      style={{ background: '#C8102E', minHeight: '340px' }}
    >
      {/* Wrapper clips everything */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '340px' }}>

        {/* Gray image panel — full height, pinned right */}
        <div
          className="absolute top-0 bottom-0 right-0 hidden md:block bg-gray-200"
          style={{ width: '45%' }}
        >
          {/* Arc mask: curved left edge via SVG inset */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Mask that reveals only the right portion with curved left edge */}
            <defs>
              <mask id="arcMask">
                <rect width="100" height="100" fill="black" />
                <path d="M15,0 Q2,50 15,100 L100,100 L100,0 Z" fill="white" />
              </mask>
            </defs>
            <rect width="100" height="100" fill="#e5e7eb" mask="url(#arcMask)" />
          </svg>

          {/* Placeholder content — also clipped by the same mask shape */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              clipPath: 'path("M15% 0%, 2% 50%, 15% 100%, 100% 100%, 100% 0%")',
            }}
          >
            <div className="ml-8 flex flex-col items-center">
              <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
              <span className="text-gray-300 text-xs mt-0.5">Replace with office photo</span>
            </div>
          </div>
        </div>

        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col justify-center py-10 px-6 md:px-10 lg:px-16"
          style={{ maxWidth: '60%', minHeight: '340px' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading font-black text-white leading-tight mb-3"
            style={{ fontSize: 'clamp(28px, 3.5vw, 52px)' }}
          >
            Revenue Cycle Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-semibold text-sm md:text-base mb-4"
          >
            End-to-End RCM Outsourcing for U.S. Healthcare Providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
            style={{ maxWidth: '460px' }}
          >
            <p className="text-white/85 text-xs md:text-sm leading-relaxed">
              Redline Outsourcing Solutions is a dynamic Business Process Outsourcing firm
              headquartered to serve U.S. healthcare markets.
            </p>
            <p className="text-white/85 text-xs md:text-sm leading-relaxed">
              Our RCM division specializes in managing the full financial lifecycle of healthcare
              organizations, from patient eligibility verification to final reimbursement collection.
              With a commitment to HIPAA compliance, accuracy, and measurable financial outcomes,
              We operate as a seamless extension of your team.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
