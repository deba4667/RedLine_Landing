import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

/**
 * EXACT MATCH: RevenueChallenge section
 * - Large circle arc, center shifted LEFT (partially offscreen on small screens)
 * - 6 red bubbles ON the circle perimeter
 * - Thin dashed connector lines from bubble → description text
 * - Text descriptions float next to each bubble
 * - "Revenue Cycle Challenge" text sits INSIDE the circle (left area)
 * - Hover: bubble scale up + ripple pulse + description highlight
 */

// ── SVG canvas dimensions ──
const W = 960;
const H = 580;

// ── Circle definition ──
// Center pushed LEFT so it feels like the arc is rooted left
const CX = 310;
const CY = 290;
const CR = 215;

const toRad = (deg) => (deg * Math.PI) / 180;

// ── Bubble definitions ──
// angle: degrees CCW from +X axis (standard math convention)
// sx/sy: where the description text box starts (SVG units)
const RAW = [
  {
    id: 'high-claim',
    label: ['High Claim', 'Denial Rates'],
    angle: 152,
    size: 76,
    desc: 'Average denial rates of 5–10% leave significant revenue uncollected, straining cash flow.',
    // text to upper-right of bubble
    sx: 130,
    sy: 52,
    textWidth: 170,
  },
  {
    id: 'slow-reimb',
    label: ['Slow', 'Reimbursement', 'Cycles'],
    angle: 65,
    size: 86,
    desc: 'Manual processes cause delays of 45–90+ days from service to payment, disrupting operations.',
    // text to the right, above
    sx: 490,
    sy: 88,
    textWidth: 190,
  },
  {
    id: 'coding',
    label: ['Coding &', 'Billing', 'Errors'],
    angle: 5,
    size: 102,
    desc: 'Incorrect CPT/ICD-10 codes are the #1 cause of claim rejections and compliance risk.',
    // text far right
    sx: 640,
    sy: 235,
    textWidth: 200,
  },
  {
    id: 'rising',
    label: ['Rising', 'Overhead', 'Costs'],
    angle: -50,
    size: 80,
    desc: 'In-house billing teams require continuous training, technology investment, and HR overhead.',
    // text lower right
    sx: 545,
    sy: 442,
    textWidth: 195,
  },
  {
    id: 'complex',
    label: ['Complex', 'Payer', 'Requirements'],
    angle: -115,
    size: 86,
    desc: "Each payer has unique rules; failure to comply means rework, delays, and lost revenue.",
    // text below, slightly right of bubble
    sx: 160,
    sy: 520,
    textWidth: 175,
  },
  {
    id: 'hipaa',
    label: ['HIPAA', 'Compliance', 'Burden'],
    angle: -157,
    size: 76,
    desc: 'Maintaining data security and regulatory compliance demands dedicated expertise.',
    // text lower left (to the left/below of bubble)
    sx: 0,
    sy: 440,
    textWidth: 160,
  },
];

// Compute bubble center coordinates
const BUBBLES = RAW.map((b) => {
  const rad = toRad(b.angle);
  return {
    ...b,
    bx: CX + CR * Math.cos(rad),
    by: CY - CR * Math.sin(rad),
  };
});

// Word-wrap helper — splits desc into lines of ~maxChars
function wrapText(text, maxChars = 28) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  words.forEach((w) => {
    if ((current + ' ' + w).trim().length <= maxChars) {
      current = (current + ' ' + w).trim();
    } else {
      if (current) lines.push(current);
      current = w;
    }
  });
  if (current) lines.push(current);
  return lines;
}

export default function RevenueChallenge() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section id="services" ref={ref} className="w-full bg-white" style={{ paddingTop: '40px', paddingBottom: '20px' }}>
      {/* Responsive SVG container — full width up to 1100px */}
      <div className="w-full" style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ display: 'block', overflow: 'visible' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* ── Circle ring ── */}
          <motion.circle
            cx={CX}
            cy={CY}
            r={CR}
            fill="none"
            stroke="#c8c8c8"
            strokeWidth="1.2"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            style={{ transformOrigin: `${CX}px ${CY}px` }}
          />

          {/* ── "Revenue Cycle Challenge" label inside circle ── */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <text
              x={CX - 95}
              y={CY - 10}
              fontSize="18"
              fontWeight="700"
              fontFamily="Poppins, Inter, sans-serif"
              fill="#111827"
            >
              Revenue Cycle
            </text>
            <text
              x={CX - 95}
              y={CY + 18}
              fontSize="30"
              fontWeight="900"
              fontFamily="Poppins, Inter, sans-serif"
              fill="#111827"
            >
              Challenge
            </text>
          </motion.g>

          {/* ── Connector lines + description text ── */}
          {BUBBLES.map((b, i) => {
            const isActive = hovered === b.id;
            const descLines = wrapText(b.desc, 27);

            // Line goes from bubble edge (toward text) to text start
            const angle = toRad(b.angle);
            // Direction from center to bubble
            const dx = Math.cos(angle);
            const dy = -Math.sin(angle);
            // Line start: bubble edge
            const lx1 = b.bx + dx * (b.size / 2);
            const ly1 = b.by + dy * (b.size / 2);
            // Line end: text box
            const lx2 = b.sx + (b.bx < b.sx ? 0 : b.textWidth);
            const ly2 = b.sy + descLines.length * 7;

            return (
              <motion.g
                key={b.id}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
              >
                {/* Connector line */}
                <line
                  x1={lx1}
                  y1={ly1}
                  x2={lx2}
                  y2={ly2}
                  stroke={isActive ? '#C8102E' : '#b0b0b0'}
                  strokeWidth={isActive ? '1.2' : '0.8'}
                  strokeDasharray="5 3"
                  style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                />

                {/* Description text */}
                {descLines.map((line, li) => (
                  <text
                    key={li}
                    x={b.sx}
                    y={b.sy + li * 13}
                    fontSize="10.5"
                    fontFamily="Inter, sans-serif"
                    fill={isActive ? '#C8102E' : '#374151'}
                    style={{ transition: 'fill 0.3s' }}
                  >
                    {line}
                  </text>
                ))}
              </motion.g>
            );
          })}

          {/* ── Bubbles (SVG foreignObject for Framer Motion) ── */}
          {BUBBLES.map((b, i) => {
            const isActive = hovered === b.id;
            const half = b.size / 2;

            return (
              <motion.g
                key={b.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.55,
                  delay: 0.4 + i * 0.1,
                  type: 'spring',
                  stiffness: 130,
                  damping: 14,
                }}
                style={{ transformOrigin: `${b.bx}px ${b.by}px`, cursor: 'pointer' }}
                onHoverStart={() => setHovered(b.id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{
                  scale: 1.14,
                  transition: { type: 'spring', stiffness: 350, damping: 18 },
                }}
                whileTap={{ scale: 0.93 }}
              >
                {/* Ripple ring — visible on hover */}
                {isActive && (
                  <motion.circle
                    cx={b.bx}
                    cy={b.by}
                    r={half}
                    fill="none"
                    stroke="#C8102E"
                    strokeWidth="2"
                    initial={{ scale: 1, opacity: 0.8 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ transformOrigin: `${b.bx}px ${b.by}px` }}
                  />
                )}

                {/* Bubble circle with radial gradient */}
                <defs>
                  <radialGradient id={`grad-${b.id}`} cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#E8304E" />
                    <stop offset="100%" stopColor="#8B0012" />
                  </radialGradient>
                </defs>
                <circle
                  cx={b.bx}
                  cy={b.by}
                  r={half + (isActive ? 4 : 0)}
                  fill={`url(#grad-${b.id})`}
                  filter={isActive ? 'drop-shadow(0 8px 16px rgba(200,16,46,0.5))' : 'drop-shadow(0 4px 8px rgba(200,16,46,0.3))'}
                  style={{ transition: 'r 0.25s, filter 0.25s' }}
                />

                {/* Label text */}
                {b.label.map((line, li) => (
                  <text
                    key={li}
                    x={b.bx}
                    y={b.by - ((b.label.length - 1) * 7) + li * 13}
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
