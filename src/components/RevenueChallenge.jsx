import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const CIRCLE_SIZE = 100; // all bubbles same size
const ORBIT_R = 190;

const challenges = [
  {
    id: 'high-claim',
    label: 'High Claim\nDenial Rates',
    desc: 'Average denial rates of 5–10% leave significant revenue uncollected, straining cash flow.',
    angle: 150,
  },
  {
    id: 'slow-reimburse',
    label: 'Slow\nReimbursement\nCycles',
    desc: 'Manual processes cause delays of 45–90+ days from service to payment, disrupting operations.',
    angle: 95,
  },
  {
    id: 'coding-billing',
    label: 'Coding &\nBilling\nErrors',
    desc: 'Incorrect CPT/ICD-10 codes are the #1 cause of claim rejections and compliance risk.',
    angle: 35,
  },
  {
    id: 'rising-overhead',
    label: 'Rising\nOverhead\nCosts',
    desc: 'In-house billing teams require continuous training, technology investment, and HR overhead.',
    angle: 345,
  },
  {
    id: 'complex-payer',
    label: 'Complex\nPayer\nRequirements',
    desc: 'Each payer has unique rules, failure to comply means rework, delays, and lost revenue.',
    angle: 295,
  },
  {
    id: 'hipaa',
    label: 'HIPAA\nCompliance\nBurden',
    desc: 'Maintaining data security and regulatory compliance demands dedicated expertise.',
    angle: 230,
  },
];

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hoveredId, setHoveredId] = useState(null);

  const hoveredChallenge = challenges.find((c) => c.id === hoveredId);

  return (
    <section id="services" className="py-20 bg-white overflow-visible" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">

          {/* ── LEFT: Circle diagram ── */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: '500px', height: '560px' }}
          >
            {/* Large circle ring */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="absolute rounded-full"
              style={{
                width: ORBIT_R * 2 + 20,
                height: ORBIT_R * 2 + 20,
                border: '1px solid #d1d5db',
              }}
            />

            {/* Center text */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute z-10 text-center"
              style={{ width: '150px' }}
            >
              <p className="font-heading font-black text-gray-900 leading-tight" style={{ fontSize: '22px' }}>
                Revenue Cycle<br />
                <span className="text-gray-900">Challenge</span>
              </p>
            </motion.div>

            {/* Bubbles */}
            {challenges.map((item, i) => {
              const rad = (item.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ORBIT_R;
              const y = -Math.sin(rad) * ORBIT_R;
              const isHovered = hoveredId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1, x, y } : {}}
                  transition={{ duration: 0.55, delay: 0.4 + i * 0.1, type: 'spring', stiffness: 90 }}
                  className="absolute cursor-pointer"
                  style={{
                    width: CIRCLE_SIZE,
                    height: CIRCLE_SIZE,
                    zIndex: isHovered ? 20 : 10,
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Fluid glow ring on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={
                      isHovered
                        ? {
                          scale: [1, 1.35, 1.2],
                          opacity: [0, 0.55, 0],
                        }
                        : { scale: 1, opacity: 0 }
                    }
                    transition={
                      isHovered
                        ? { duration: 0.9, repeat: Infinity, ease: 'easeInOut' }
                        : { duration: 0.2 }
                    }
                    style={{
                      background: 'radial-gradient(circle, rgba(200,16,46,0.5) 0%, transparent 70%)',
                      zIndex: -1,
                    }}
                  />

                  {/* Main bubble */}
                  <motion.div
                    className="w-full h-full rounded-full flex items-center justify-center text-center shadow-lg"
                    animate={
                      isHovered
                        ? {
                          scale: 1.14,
                          boxShadow: '0 0 28px 8px rgba(200,16,46,0.45)',
                        }
                        : {
                          scale: 1,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                        }
                    }
                    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                    style={{
                      background: 'radial-gradient(circle at 35% 35%, #E03050, #9B0E24)',
                    }}
                  >
                    <span
                      className="text-white font-bold leading-tight px-2 whitespace-pre-line"
                      style={{ fontSize: '10px' }}
                    >
                      {item.label}
                    </span>
                  </motion.div>


                </motion.div>
              );
            })}
          </div>

          {/* ── RIGHT: Description panel ── */}
          <div className="flex-1 lg:pl-8 flex flex-col justify-center min-h-[260px]">
            {/* Mobile heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="font-heading font-black text-gray-900 text-3xl mb-6 lg:hidden"
            >
              Revenue Cycle Challenge
            </motion.h2>

            {/* Default: all bullets shown when nothing hovered */}
            <AnimatePresence mode="wait">
              {!hoveredId ? (
                <motion.div
                  key="all"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-5"
                >
                  {challenges.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#C8102E] flex-shrink-0" />
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                /* Hovered: show only the matching description, enlarged */
                <motion.div
                  key={hoveredId}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 22 }}
                  className="flex flex-col gap-4"
                >
                  {/* Badge label */}
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center rounded-full text-white font-bold text-xs px-4 py-1.5 shadow-lg"
                      style={{
                        background: 'radial-gradient(circle at 35% 35%, #E03050, #9B0E24)',
                        letterSpacing: '0.03em',
                        whiteSpace: 'pre-line',
                        textAlign: 'center',
                      }}
                    >
                      {hoveredChallenge?.label.replace(/\n/g, ' ')}
                    </span>
                    <motion.div
                      className="h-px flex-1 bg-gradient-to-r from-[#C8102E]/40 to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                  </div>

                  {/* Description text */}
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    {hoveredChallenge?.desc}
                  </p>

                  {/* Decorative bottom bar */}
                  <motion.div
                    className="h-0.5 w-16 rounded-full bg-[#C8102E]"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
