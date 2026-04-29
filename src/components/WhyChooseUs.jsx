import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Shield, Clock, Users, Award, Zap } from 'lucide-react';

const reasons = [
  {
    icon: TrendingUp,
    title: 'Proven Revenue Growth',
    desc: 'Our clients see an average 25-40% increase in net collections within the first 90 days of partnering with us.',
    metric: '40%',
    metricLabel: 'avg. revenue increase',
  },
  {
    icon: Shield,
    title: 'Zero-Risk Compliance',
    desc: 'Full HIPAA compliance, OIG monitoring, and continuous regulatory updates keep your practice protected from audits.',
    metric: '100%',
    metricLabel: 'compliance rate',
  },
  {
    icon: Clock,
    title: 'Faster Reimbursements',
    desc: 'Our streamlined processes reduce your Days in AR from industry average of 45+ days to under 25 days.',
    metric: '<25',
    metricLabel: 'days in AR',
  },
  {
    icon: Users,
    title: 'Dedicated Expert Team',
    desc: 'Each client gets a dedicated account manager, certified coders, and billing specialists who know your specialty.',
    metric: '1:1',
    metricLabel: 'dedicated support',
  },
  {
    icon: Award,
    title: 'Industry-Leading Accuracy',
    desc: 'Our multi-layer QA process achieves a 99.2% clean claim rate on first submission, far above the industry average.',
    metric: '99.2%',
    metricLabel: 'clean claim rate',
  },
  {
    icon: Zap,
    title: 'Rapid Onboarding',
    desc: 'We get you live in as little as 2 weeks with zero disruption to your existing workflows or patient care routines.',
    metric: '2 wks',
    metricLabel: 'to go live',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="py-24 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            The Redline Difference
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-gray-900">
            Why Choose <span className="text-[#C8102E]">Us</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            We don't just process claims — we become an extension of your practice, fully invested in your financial success.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 50px rgba(200,16,46,0.12)',
                }}
                className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-default"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center group-hover:bg-[#C8102E] transition-colors duration-300">
                    <Icon size={22} className="text-[#C8102E] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-[#C8102E] font-heading">{reason.metric}</p>
                    <p className="text-xs text-gray-400 font-medium">{reason.metricLabel}</p>
                  </div>
                </div>

                <h3 className="font-heading font-bold text-gray-900 text-base mb-2 group-hover:text-[#C8102E] transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>

                {/* Progress bar animation */}
                <div className="mt-5 h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${[87, 100, 72, 95, 99, 80][i]}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-[#C8102E] to-[#E63950] rounded-full"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
