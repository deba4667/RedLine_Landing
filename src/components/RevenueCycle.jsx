import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cycleSteps = [
  { label: 'Patient\nRegistration', angle: 0 },
  { label: 'Insurance\nVerification', angle: 45 },
  { label: 'Charge\nCapture', angle: 90 },
  { label: 'Medical\nCoding', angle: 135 },
  { label: 'Claims\nSubmission', angle: 180 },
  { label: 'Payment\nPosting', angle: 225 },
  { label: 'Denial\nManagement', angle: 270 },
  { label: 'AR\nFollow-Up', angle: 315 },
];

export default function RevenueCycle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const orbitRadius = 190;

  return (
    <section className="py-24 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            The Full Picture
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-gray-900">
            The <span className="text-[#C8102E]">Revenue Cycle</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            A seamless, integrated workflow that covers every touchpoint from patient intake to final payment.
          </p>
        </motion.div>

        {/* Cycle Diagram */}
        <div className="relative flex items-center justify-center" style={{ height: '520px' }}>

          {/* Decorative rings */}
          {[430, 380, 330].map((size, i) => (
            <motion.div
              key={size}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className={`absolute rounded-full border ${
                i === 0
                  ? 'border-dashed border-red-200'
                  : i === 1
                  ? 'border-red-100'
                  : 'border-red-50'
              }`}
              style={{ width: size, height: size }}
            />
          ))}

          {/* Spin ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute rounded-full border border-dashed border-red-300/40"
            style={{ width: 440, height: 440 }}
          />

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 90 }}
            whileHover={{ scale: 1.06 }}
            className="relative z-20 flex flex-col items-center justify-center w-44 h-44 rounded-full shadow-2xl shadow-red-500/40 cursor-default"
            style={{ background: 'radial-gradient(circle at 35% 35%, #E63950, #8B0012)' }}
          >
            {/* Pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-[#C8102E]/30"
            />
            <p className="relative text-white text-2xl font-black font-heading text-center leading-tight">
              Revenue<br />cycle
            </p>
          </motion.div>

          {/* Cycle step bubbles */}
          {cycleSteps.map((step, i) => {
            const rad = (step.angle * Math.PI) / 180;
            const x = Math.cos(rad) * orbitRadius;
            const y = Math.sin(rad) * orbitRadius;

            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, x, y, scale: 1 } : {}}
                transition={{
                  duration: 0.65,
                  delay: 0.6 + i * 0.08,
                  type: 'spring',
                  stiffness: 80,
                }}
                whileHover={{ scale: 1.15, zIndex: 30 }}
                className="absolute group cursor-pointer"
                style={{ width: 100, height: 100 }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  className="w-full h-full rounded-full flex items-center justify-center text-center shadow-lg shadow-red-500/30 border-2 border-white transition-all duration-300 group-hover:shadow-red-500/50 group-hover:shadow-2xl"
                  style={{ background: `radial-gradient(circle at 35% 35%, #E03050, #9B0E24)` }}
                >
                  <span className="text-white font-bold text-xs leading-tight px-2 whitespace-pre-line">
                    {step.label}
                  </span>
                </motion.div>

                {/* Connector dot to center */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-red-300/60"
                  style={{
                    transformOrigin: 'center center',
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Steps list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {cycleSteps.map((step, i) => (
            <motion.div
              key={step.label}
              whileHover={{ x: 4, color: '#C8102E' }}
              className="flex items-center gap-3 cursor-default group"
            >
              <div className="w-8 h-8 rounded-full bg-[#C8102E] flex items-center justify-center text-white text-xs font-bold flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                {i + 1}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#C8102E] transition-colors duration-200 whitespace-pre-line">
                {step.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
