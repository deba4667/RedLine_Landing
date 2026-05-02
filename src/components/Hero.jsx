import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpeg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#C8102E]"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Full-bleed flex row */}
      <div className="flex flex-col md:flex-row items-stretch w-full h-full pt-16">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 py-12 z-10">
          {/* Subtle badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-1.5 mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white/90 text-xs font-semibold uppercase tracking-widest">
              U.S. Healthcare RCM Experts
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-black text-white leading-[1.05] mb-5"
            style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
          >
            Revenue Cycle<br />Management
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white font-semibold mb-5"
            style={{ fontSize: 'clamp(14px, 1.4vw, 20px)' }}
          >
            End-to-End RCM Outsourcing for U.S. Healthcare Providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 max-w-xl mb-10"
          >
            <p className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>
              Redline Outsourcing Solutions is a dynamic Business Process Outsourcing firm
              headquartered to serve U.S. healthcare markets.
            </p>
            <p className="text-white/80 leading-relaxed" style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}>
              Our RCM division specializes in managing the full financial lifecycle of healthcare
              organizations — from patient eligibility verification to final reimbursement collection.
              HIPAA compliant, accurate, and built to be a seamless extension of your team.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#C8102E] font-bold px-8 py-3.5 rounded-lg text-sm tracking-wide transition-all duration-200 hover:bg-gray-50 shadow-lg"
            >
              Get Started Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector('#solutions');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-2 border-white/70 text-white font-bold px-8 py-3.5 rounded-lg text-sm tracking-wide transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              Explore RCM Solutions
            </motion.button>
          </motion.div>
        </div>

        {/* Right: Hero Image with curved left edge */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex flex-shrink-0 items-stretch relative overflow-hidden"
          style={{ width: '48%' }}
        >
          {/* SVG clip path for the curved left edge */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="heroImageClip" clipPathUnits="objectBoundingBox">
                <path d="M0.18,0 Q-0.02,0.5 0.18,1 L1,1 L1,0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Image container */}
          <div
            className="w-full h-full relative"
            style={{ clipPath: 'url(#heroImageClip)' }}
          >
            <img
              src={heroImg}
              alt="Redline RCM team"
              className="w-full h-full object-cover"
            />
            {/* Subtle dark overlay at bottom for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative wave / gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(200,16,46,0.15))',
        }}
      />
    </section>
  );
}
