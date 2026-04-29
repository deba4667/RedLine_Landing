import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// 6 challenges positioned around a circle arc (not full orbit)
// Matching reference: bubbles at various positions on a large circle, text descriptions on the right side
const challenges = [
  {
    id: 'high-claim',
    label: 'High Claim\nDenial Rates',
    desc: 'Average denial rates of 5–10% leave significant revenue uncollected, straining cash flow.',
    // angle in degrees: 0 = right, 90 = bottom, 180 = left, 270 = top
    angle: 150, // upper-left area
    size: 90,
  },
  {
    id: 'slow-reimburse',
    label: 'Slow\nReimbursement\nCycles',
    desc: 'Manual processes cause delays of 45–90+ days from service to payment, disrupting operations.',
    angle: 95, // top-center-left
    size: 100,
  },
  {
    id: 'coding-billing',
    label: 'Coding &\nBilling\nErrors',
    desc: 'Incorrect CPT/ICD-10 codes are the #1 cause of claim rejections and compliance risk.',
    angle: 35, // upper-right
    size: 110,
  },
  {
    id: 'rising-overhead',
    label: 'Rising\nOverhead\nCosts',
    desc: 'In-house billing teams require continuous training, technology investment, and HR overhead.',
    angle: 355, // right side / nearly 0
    size: 95,
  },
  {
    id: 'complex-payer',
    label: 'Complex\nPayer\nRequirements',
    desc: 'Each payer has unique rules, failure to comply means rework, delays, and lost revenue.',
    angle: 305, // lower-right
    size: 100,
  },
  {
    id: 'hipaa',
    label: 'HIPAA\nCompliance\nBurden',
    desc: 'Maintaining data security and regulatory compliance demands dedicated expertise.',
    angle: 250, // lower-left
    size: 90,
  },
];

const ORBIT_R = 170; // px radius of the circle

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="py-20 bg-white overflow-visible" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

          {/* ── LEFT: Circle diagram ── */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: '460px', height: '520px' }}
          >
            {/* Large dashed circle ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute rounded-full border border-gray-300"
              style={{
                width: ORBIT_R * 2 + 20,
                height: ORBIT_R * 2 + 20,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: '#d1d5db',
              }}
            />

            {/* Center text "Revenue Cycle Challenge" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute z-10 text-center"
              style={{ width: '150px' }}
            >
              <p className="font-heading font-black text-gray-900 leading-tight"
                style={{ fontSize: '22px' }}>
                Revenue Cycle<br />
                <span className="text-gray-900">Challenge</span>
              </p>
            </motion.div>

            {/* Bubbles around the circle */}
            {challenges.map((item, i) => {
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ORBIT_R;
              const y = -Math.sin(rad) * ORBIT_R; // negative because CSS y goes down

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1, x, y } : {}}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.1, type: 'spring', stiffness: 90 }}
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                  className="absolute group cursor-pointer"
                  style={{
                    width: item.size,
                    height: item.size,
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center text-center shadow-lg transition-all duration-300 group-hover:shadow-red-400/50 group-hover:shadow-xl"
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #E03050, #9B0E24)',
                    }}
                  >
                    <span className="text-white font-bold leading-tight px-2 whitespace-pre-line"
                      style={{ fontSize: '10px' }}>
                      {item.label}
                    </span>
                  </div>
                  {/* Line from bubble center toward circle center */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: ORBIT_R,
                      height: '2px',
                      transform: `rotate(${item.angle + 180}deg)`,
                      transformOrigin: '0 0',
                      opacity: 0.2,
                    }}
                  >
                    <line x1="0" y1="1" x2={ORBIT_R} y2="1" stroke="#C8102E" strokeWidth="1" />
                  </svg>
                </motion.div>
              );
            })}
          </div>

          {/* ── RIGHT: Text descriptions ── */}
          <div className="flex-1 lg:pl-8 grid grid-cols-1 gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-heading font-black text-gray-900 text-3xl mb-2 lg:hidden"
            >
              Revenue Cycle Challenge
            </motion.h2>

            {challenges.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 group cursor-default"
              >
                {/* Small red dot */}
                <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#C8102E] flex-shrink-0 group-hover:scale-125 transition-transform duration-200" />
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-200">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
