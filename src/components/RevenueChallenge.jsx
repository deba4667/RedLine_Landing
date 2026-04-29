import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Circle center and radius (within the SVG viewBox 0 0 1000 600)
const CX = 330;
const CY = 300;
const R = 210;

const toRad = (deg) => (deg * Math.PI) / 180;

// Each bubble: angle (degrees from +x axis, counterclockwise = positive), size, label
const challenges = [
  {
    id: 'high-claim',
    angle: 148,
    size: 80,
    label: 'High Claim\nDenial Rates',
    desc: 'Average denial rates of 5–10% leave significant revenue uncollected, straining cash flow.',
    // text anchor position in SVG units (where text box starts)
    tx: 215,
    ty: 55,
    textAnchor: 'start',
    lineEnd: { x: 215, y: 75 },
  },
  {
    id: 'slow-reimb',
    angle: 63,
    size: 88,
    label: 'Slow\nReimbursement\nCycles',
    desc: 'Manual processes cause delays of 45–90+ days from service to payment, disrupting operations.',
    tx: 495,
    ty: 90,
    textAnchor: 'start',
    lineEnd: { x: 492, y: 115 },
  },
  {
    id: 'coding',
    angle: 8,
    size: 105,
    label: 'Coding &\nBilling\nErrors',
    desc: 'Incorrect CPT/ICD-10 codes are the #1 cause of claim rejections and compliance risk.',
    tx: 640,
    ty: 230,
    textAnchor: 'start',
    lineEnd: { x: 637, y: 260 },
  },
  {
    id: 'rising',
    angle: -50,
    size: 83,
    label: 'Rising\nOverhead\nCosts',
    desc: 'In-house billing teams require continuous training, technology investment, and HR overhead.',
    tx: 548,
    ty: 440,
    textAnchor: 'start',
    lineEnd: { x: 545, y: 460 },
  },
  {
    id: 'complex',
    angle: -113,
    size: 88,
    label: 'Complex\nPayer\nRequirements',
    desc: 'Each payer has unique rules; failure to comply means rework, delays, and lost revenue.',
    tx: 160,
    ty: 535,
    textAnchor: 'start',
    lineEnd: { x: 230, y: 533 },
  },
  {
    id: 'hipaa',
    angle: -155,
    size: 80,
    label: 'HIPAA\nCompliance\nBurden',
    desc: 'Maintaining data security and regulatory compliance demands dedicated expertise.',
    tx: 0,
    ty: 445,
    textAnchor: 'start',
    lineEnd: { x: 100, y: 430 },
  },
];

// Compute x,y for each bubble
const bubbles = challenges.map((c) => {
  const rad = toRad(c.angle);
  return {
    ...c,
    bx: CX + R * Math.cos(rad),
    by: CY - R * Math.sin(rad),
  };
});

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="services" className="bg-white w-full py-10 overflow-visible" ref={ref}>
      <div className="relative w-full" style={{ maxWidth: '1100px', margin: '0 auto', height: '600px' }}>

        {/* ── SVG Layer: ring + connector lines ── */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
        >
          {/* Main circle ring */}
          <motion.circle
            cx={CX}
            cy={CY}
            r={R}
            fill="none"
            stroke="#d1d5db"
            strokeWidth="1.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
          />

          {/* Connector lines from each bubble to its text */}
          {bubbles.map((b, i) => (
            <motion.line
              key={b.id + '-line'}
              x1={b.bx}
              y1={b.by}
              x2={b.lineEnd.x}
              y2={b.lineEnd.y}
              stroke="#9ca3af"
              strokeWidth="0.8"
              strokeDasharray="4 3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
            />
          ))}

          {/* Text labels for each bubble — rendered in SVG */}
          {bubbles.map((b, i) => {
            const lines = b.desc.split(' ');
            // chunk desc into ~3 lines of ~5 words each
            const chunkSize = Math.ceil(lines.length / 3);
            const chunks = [];
            for (let j = 0; j < lines.length; j += chunkSize) {
              chunks.push(lines.slice(j, j + chunkSize).join(' '));
            }
            return (
              <motion.g
                key={b.id + '-text'}
                initial={{ opacity: 0, y: 6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.8 + i * 0.1 }}
              >
                {chunks.map((line, li) => (
                  <text
                    key={li}
                    x={b.tx}
                    y={b.ty + li * 14}
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                    fill="#4b5563"
                    textAnchor={b.textAnchor}
                    style={{ maxWidth: '130px' }}
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            );
          })}
        </svg>

        {/* ── Center text label ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="absolute flex flex-col items-start justify-center select-none"
          style={{
            left: `${((CX - 130) / 1000) * 100}%`,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '220px',
          }}
        >
          <p className="font-heading font-bold text-gray-800 leading-tight" style={{ fontSize: '20px' }}>
            Revenue Cycle
          </p>
          <p className="font-heading font-black text-gray-900 leading-tight" style={{ fontSize: '32px' }}>
            Challenge
          </p>
        </motion.div>

        {/* ── Bubble elements (HTML over SVG) ── */}
        {bubbles.map((b, i) => {
          // Convert SVG coords to percentage of container
          const leftPct = (b.bx / 1000) * 100;
          const topPct = (b.by / 600) * 100;

          return (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + i * 0.1,
                type: 'spring',
                stiffness: 120,
                damping: 14,
              }}
              whileHover={{
                scale: 1.14,
                zIndex: 30,
                boxShadow: '0 12px 40px rgba(200,16,46,0.45)',
                transition: { duration: 0.25, type: 'spring', stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              className="absolute rounded-full flex items-center justify-center text-center cursor-pointer select-none"
              style={{
                width: b.size,
                height: b.size,
                left: `${leftPct}%`,
                top: `${topPct}%`,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle at 35% 30%, #E8304E, #9B0E24)',
                boxShadow: '0 6px 20px rgba(200,16,46,0.35)',
                zIndex: 10,
              }}
            >
              <span
                className="text-white font-bold leading-tight px-2 whitespace-pre-line"
                style={{ fontSize: '9.5px', lineHeight: '1.3' }}
              >
                {b.label}
              </span>

              {/* Ripple on hover */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: '2px solid rgba(200,16,46,0.4)' }}
                initial={{ scale: 1, opacity: 0 }}
                whileHover={{
                  scale: [1, 1.35, 1.6],
                  opacity: [0.7, 0.3, 0],
                  transition: { duration: 0.7, repeat: Infinity },
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
