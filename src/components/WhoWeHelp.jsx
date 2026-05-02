import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Stethoscope, Users, Heart, Bone, Baby, Pill, Brain, Smile, Zap, AlertCircle, Activity, Dumbbell, Wind, UtensilsCrossed, PenTool, Building2 } from 'lucide-react';

const categories = [
  { title: 'Internal Medicine', icon: Stethoscope },
  { title: 'Family Practice', icon: Users },
  { title: 'Cardiology', icon: Heart },
  { title: 'Orthopedics', icon: Bone },
  { title: 'OB/GYN', icon: Baby },
  { title: 'Dermatology', icon: Pill },
  { title: 'Neurology', icon: Brain },
  { title: 'Psychiatry & Behavioral Health', icon: Smile },
  { title: 'Oncology', icon: Zap },
  { title: 'Urgent Care', icon: AlertCircle },
  { title: 'Radiology & Imaging', icon: Activity },
  { title: 'Physical Therapy', icon: Dumbbell },
  { title: 'Anesthesiology', icon: Wind },
  { title: 'Gastroenterology', icon: UtensilsCrossed },
  { title: 'Pediatrics', icon: PenTool },
  { title: 'Multi-Specialty Groups', icon: Building2 },
];

export default function WhoWeHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="who-we-help" className="py-14 md:py-24 overflow-hidden" ref={ref}
      style={{ background: 'linear-gradient(135deg, #8B0012 0%, #C8102E 50%, #9B0E24 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
            Who we help
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
                }}
                className="group relative bg-transparent border border-white/40 rounded-lg p-6 cursor-default transition-all duration-300 flex flex-col items-center justify-center gap-3"
              >
                <Icon size={28} className="text-white group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-bold text-base text-center leading-tight">{cat.title}</h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
