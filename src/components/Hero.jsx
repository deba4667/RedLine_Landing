import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#C8102E] pt-16"
      style={{ minHeight: '340px' }}
    >
      <div className="max-w-7xl mx-auto flex items-stretch w-full" style={{ minHeight: '320px' }}>
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 pr-4">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="font-heading font-black text-white leading-tight mb-3"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Revenue Cycle Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-semibold text-sm md:text-base mb-4"
          >
            End-to-End RCM Outsourcing for U.S. Healthcare Providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-2 max-w-lg"
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

        {/* Right: Placeholder Image with arc/curved left edge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="hidden md:flex flex-shrink-0 items-stretch relative overflow-hidden"
          style={{ width: '44%', maxWidth: '560px' }}
        >
          {/* SVG clip path for the curved left edge */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="heroImageClip" clipPathUnits="objectBoundingBox">
                {/* Left edge: arc curving inward from left, right edge flush */}
                <path d="M0.22,0 Q0.02,0.5 0.22,1 L1,1 L1,0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Image container */}
          <div
            className="w-full h-full relative"
            style={{ clipPath: 'url(#heroImageClip)' }}
          >
            {/* Placeholder image — gray with label */}
            <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-center min-h-[320px]">
              {/* Placeholder visual */}
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#9ca3af" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-gray-400 text-sm font-medium">Image Placeholder</span>
              <span className="text-gray-300 text-xs mt-1">Replace with office photo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
