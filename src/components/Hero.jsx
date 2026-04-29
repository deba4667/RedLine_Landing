import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#C8102E] pt-16 overflow-hidden"
    >
      {/* Full-bleed flex row */}
      <div className="flex items-stretch" style={{ minHeight: '340px' }}>

        {/* Left: Text — constrained to ~55% width */}
        <div
          className="flex flex-col justify-center py-10 z-10"
          style={{ width: '55%', paddingLeft: 'max(24px, calc((100vw - 1280px)/2 + 56px))', paddingRight: '40px' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading font-black text-white leading-tight mb-3"
            style={{ fontSize: 'clamp(26px, 3.5vw, 50px)' }}
          >
            Revenue Cycle Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-semibold text-sm md:text-base mb-4"
          >
            End-to-End RCM Outsourcing for U.S. Healthcare Providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2"
            style={{ maxWidth: '480px' }}
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
        </div>

        {/* Right: Placeholder image — 45% width, arc clip on left */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="hidden md:block flex-1 relative"
          style={{ clipPath: 'ellipse(100% 100% at 100% 50%)' }}
        >
          {/* Arc shape on left using SVG clip */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 560 340"
            preserveAspectRatio="none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <clipPath id="heroArc">
                <path d="M80,0 Q20,170 80,340 L560,340 L560,0 Z" />
              </clipPath>
            </defs>
            <rect
              x="0" y="0" width="560" height="340"
              fill="#e5e7eb"
              clipPath="url(#heroArc)"
            />
          </svg>

          {/* Actual placeholder content on top */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ clipPath: 'path("M80,0 Q20,170 80,340 L560,340 L560,0 Z")' }}
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
            <span className="text-gray-300 text-xs mt-1">Replace with office photo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
