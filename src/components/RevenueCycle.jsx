import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const cycleSteps = [
  { title: 'Patient Registration', subtitle: 'Demographics &\ninsurance captured\naccurately at intake', angle: 0 },
  { title: 'Eligibility Verification', subtitle: 'Real-time payer\nchecks before\nservice delivery', angle: 45 },
  { title: 'Charge Capture', subtitle: 'All services\ndocumented & charges\ncoded (CPT/ICD-10)', angle: 90 },
  { title: 'Claim Scrubbing', subtitle: 'Automated + manual\nedits for error-free\nsubmissions', angle: 135 },
  { title: 'Claim Submission', subtitle: 'Electronic submission\nto payers within 24-48\nhours', angle: 180 },
  { title: 'Payment Posting', subtitle: 'ERA/EOB posted\ndaily; variances\nflagged immediately', angle: 225 },
  { title: 'Denial Management', subtitle: 'Root-cause analysis,\nappeals filed within 5\ndays', angle: 270 },
  { title: 'A/R Follow-Up', subtitle: 'Persistent payer &\npatient collections\nuntil resolved', angle: 315 },
];

function useOrbitConfig() {
  const [cfg, setCfg] = useState({ r: 240, bubble: 160, center: 240, diagram: 720 });
  useEffect(() => {
    function calc() {
      const vw = window.innerWidth;
      if (vw < 400)      setCfg({ r: 120, bubble: 90,  center: 130, diagram: 400 });
      else if (vw < 500) setCfg({ r: 145, bubble: 108, center: 160, diagram: 470 });
      else if (vw < 640) setCfg({ r: 170, bubble: 125, center: 180, diagram: 550 });
      else if (vw < 768) setCfg({ r: 205, bubble: 145, center: 220, diagram: 640 });
      else               setCfg({ r: 240, bubble: 160, center: 240, diagram: 720 });
    }
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  return cfg;
}

export default function RevenueCycle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { r: orbitRadius, bubble: bubbleSize, center: centerSize, diagram: diagramH } = useOrbitConfig();

  const ringsSizes = [orbitRadius * 2 + 80, orbitRadius * 2 + 30, orbitRadius * 2 - 20];

  return (
    <section id="revenue-cycle" className="min-h-screen bg-white overflow-x-hidden flex flex-col justify-center" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            The Full Picture
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-black text-gray-900">
            The <span className="text-[#C8102E]">Revenue Cycle</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base md:text-lg">
            A seamless, integrated workflow that covers every touchpoint from patient intake to final payment.
          </p>
        </motion.div>

        {/* Cycle Diagram */}
        <div
          className="relative flex items-center justify-center mx-auto"
          style={{ height: diagramH, maxWidth: diagramH + bubbleSize }}
        >
          {/* Decorative rings */}
          {ringsSizes.map((size, i) => (
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
            style={{ width: ringsSizes[0] + 10, height: ringsSizes[0] + 10 }}
          />

          {/* Center */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 90 }}
            whileHover={{ scale: 1.06 }}
            className="relative z-20 flex flex-col items-center justify-center rounded-full shadow-2xl shadow-red-500/40 cursor-default"
            style={{
              width: centerSize,
              height: centerSize,
              background: 'radial-gradient(circle at 35% 35%, #E63950, #8B0012)',
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-[#C8102E]/30"
            />
            <p
              className="relative text-white font-black font-heading text-center leading-tight"
              style={{ fontSize: `${centerSize * 0.13}px` }}
            >
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
                key={step.title}
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
                style={{ width: bubbleSize, height: bubbleSize }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.4,
                  }}
                  className="w-full h-full rounded-full flex flex-col items-center justify-center text-center shadow-lg shadow-red-500/30 border-2 border-white transition-all duration-300 group-hover:shadow-red-500/50 group-hover:shadow-2xl"
                  style={{ background: 'radial-gradient(circle at 35% 35%, #E03050, #9B0E24)' }}
                >
                  <div className="px-2 py-1 flex flex-col items-center justify-center h-full gap-1">
                    <p
                      className="text-white font-bold leading-tight text-center"
                      style={{ fontSize: `${Math.max(bubbleSize * 0.11, 11)}px` }}
                    >
                      {step.title}
                    </p>
                    <p
                      className="text-white leading-tight whitespace-pre-line text-center"
                      style={{ fontSize: `${Math.max(bubbleSize * 0.075, 8)}px`, opacity: 0.95 }}
                    >
                      {step.subtitle}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Steps list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 md:mt-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
