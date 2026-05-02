import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Careers() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Careers at Redline</h1>
      <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
        <p>At Redline Outsourcing, we're always looking for empathetic, motivated individuals who believe in the power of human connection.</p>
        <p>Whether you're starting your career in customer support or bringing years of voice experience, we offer a professional environment where your growth matters.</p>
        <p>Join us to make a difference one call at a time.</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">How to Apply</h2>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="text-[#C8102E]" size={24} />
          <a href="mailto:contact@redlineoutsourcing.com" className="text-gray-900 font-medium hover:text-[#C8102E] transition-colors">
            contact@redlineoutsourcing.com
          </a>
        </div>
        <p className="text-gray-600">
          Please email your resume to the address above to start your journey with Redline.
        </p>
      </div>
    </motion.div>
  );
}
