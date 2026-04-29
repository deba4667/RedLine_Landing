import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ── SVG canvas ──
const W = 960;
const H = 560;

// ── Circle (shifted left so it feels anchored left like the reference) ──
const CX = 305;
const CY = 285;
const CR = 210;

const toRad = (deg) => (deg * Math.PI) / 180;

// ── Bubble data ──
// angle: CCW degrees from +X. sx/sy: text box origin. textAlign: 'left'|'right'
const RAW = [
  {
    id: 'high-claim',
    label: ['High Claim', 'Denial Rates'],
    angle: 152,
    size: 76,
    desc: 'Average denial rates of 5–10% leave significant revenue uncollected, straining cash flow.',
    sx: 130, sy: 42, textWidth: 175, textAlign: 'left',
  },
  {
    id: 'slow-reimb',
    label: ['Slow', 'Reimbursement', 'Cycles'],
    angle: 65,
    size: 86,
    desc: 'Manual processes cause delays of 45–90+ days from service to payment, disrupting operations.',
    sx: 482, sy: 78, textWidth: 190, textAlign: 'left',
  },
  {
    id: 'coding',
    label: ['Coding &', 'Billing', 'Errors'],
    angle: 5,
    size: 104,
    desc: 'Incorrect CPT/ICD-10 codes are the #1 cause of claim rejections and compliance risk.',
    sx: 634, sy: 228, textWidth: 200, textAlign: 'left',
  },
  {
    id: 'rising',
    label: ['Rising', 'Overhead', 'Costs'],
    angle: -50,
    size: 80,
    desc: 'In-house billing teams require continuous training, technology investment, and HR overhead.',
    sx: 538, sy: 432, textWidth: 195, textAlign: 'left',
  },
  {
    id: 'complex',
    label: ['Complex', 'Payer', 'Requirements'],
    angle: -115,
    size: 86,
    desc: 'Each payer has unique rules; failure to comply means rework, delays, and lost revenue.',
    sx: 155, sy: 508, textWidth: 175, textAlign: 'left',
  },
  {
    id: 'hipaa',
    label: ['HIPAA', 'Compliance', 'Burden'],
    angle: -157,
    size: 76,
    desc: 'Maintaining data security and regulatory compliance demands dedicated expertise.',
    sx: 0, sy: 432, textWidth: 158, textAlign: 'left',
  },
];

// Compute bubble center x,y from angle
const BUBBLES = RAW.map((b) => {
  const rad = toRad(b.angle);
  return { ...b, bx: CX + CR * Math.cos(rad), by: CY - CR * Math.sin(rad) };
});

// Simple word-wrap into lines
function wrapText(text, maxChars = 26) {
  const words = text.split(' ');
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? cur + ' ' + w : w;
    if (test.length <= maxChars) { cur = test; }
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" ref={ref} className="w-full bg-white" style={{ paddingTop: '48px', paddingBottom: '24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ display: 'block', overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Gradient defs for each bubble ── */}
          <defs>
            {BUBBLES.map((b) => (
              <radialGradient key={`g-${b.id}`} id={`grad-${b.id}`} cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#E8304E" />
                <stop offset="100%" stopColor="#880010" />
              </radialGradient>
            ))}
          </defs>

          {/* ── Circle ring ── */}
          <motion.circle
            cx={CX} cy={CY} r={CR}
            fill="none" stroke="#cccccc" strokeWidth="1.3"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: 'easeOut' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          {/* ── "Revenue Cycle Challenge" text — always visible ── */}
          <motion.g
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <text x={CX - 90} y={CY - 8} fontSize="17" fontWeight="700"
              fontFamily="Poppins, Inter, sans-serif" fill="#111827">Revenue Cycle</text>
            <text x={CX - 90} y={CY + 30} fontSize="30" fontWeight="900"
              fontFamily="Poppins, Inter, sans-serif" fill="#111827">Challenge</text>
          </motion.g>

          {/* ── Hover: connector line + description text ── */}
          {BUBBLES.map((b) => {
            const isActive = hovered === b.id;
            const descLines = wrapText(b.desc, 26);
            const rad = toRad(b.angle);
            // Line starts at bubble edge, points toward text
            const lx1 = b.bx + Math.cos(rad) * (b.size / 2);
            const ly1 = b.by - Math.sin(rad) * (b.size / 2);
            // Line ends near the text box
            const lx2 = b.bx < b.sx ? b.sx : b.sx + b.textWidth;
            const ly2 = b.sy + descLines.length * 6.5;

            return (
              <AnimatePresence key={b.id + '-text'}>
                {isActive && (
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                  >
                    {/* Connector line */}
                    <motion.line
                      x1={lx1} y1={ly1} x2={lx2} y2={ly2}
                      stroke="#C8102E" strokeWidth="1"
                      strokeDasharray="5 3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Description text lines */}
                    {descLines.map((line, li) => (
                      <motion.text
                        key={li}
                        x={b.sx}
                        y={b.sy + li * 13}
                        fontSize="10.5"
                        fontFamily="Inter, sans-serif"
                        fill="#1f2937"
                        initial={{ opacity: 0, x: b.bx < b.sx ? -8 : 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: li * 0.04 }}
                      >
                        {line}
                      </motion.text>
                    ))}
                  </motion.g>
                )}
              </AnimatePresence>
            );
          })}

          {/* ── Bubbles ── */}
          {BUBBLES.map((b, i) => {
            const isActive = hovered === b.id;
            const half = b.size / 2;

            return (
              <motion.g
                key={b.id}
                style={{ transformOrigin: `${b.bx}px ${b.by}px`, cursor: 'pointer' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.09, type: 'spring', stiffness: 130, damping: 14 }}
                whileHover={{ scale: 1.13, transition: { type: 'spring', stiffness: 340, damping: 18 } }}
                whileTap={{ scale: 0.93 }}
                onHoverStart={() => setHovered(b.id)}
                onHoverEnd={() => setHovered(null)}
              >
                {/* Ripple ring — only when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.circle
                      cx={b.bx} cy={b.by} r={half}
                      fill="none" stroke="rgba(200,16,46,0.5)" strokeWidth="3"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: 1.7, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.75, repeat: Infinity, ease: 'easeOut' }}
                      style={{ transformOrigin: `${b.bx}px ${b.by}px` }}
                    />
                  )}
                </AnimatePresence>

                {/* Bubble fill */}
                <circle
                  cx={b.bx} cy={b.by}
                  r={isActive ? half + 5 : half}
                  fill={`url(#grad-${b.id})`}
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 8px 20px rgba(200,16,46,0.55))'
                      : 'drop-shadow(0 4px 10px rgba(200,16,46,0.3))',
                    transition: 'r 0.2s, filter 0.2s',
                  }}
                />

                {/* Label */}
                {b.label.map((line, li) => (
                  <text
                    key={li}
                    x={b.bx}
                    y={b.by - ((b.label.length - 1) * 6.5) + li * 13}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="9.5"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                    fill="white"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            );
          })}
        </svg>
      </div>
    </section>
  );
}
