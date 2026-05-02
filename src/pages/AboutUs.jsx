import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">About Us</h1>
      <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
        <p>At Redline Outsourcing Solution, we're more than just a voice support provider. We're the human connection behind every customer conversation.</p>
        <p>Founded with a mission to deliver empathetic, reliable, and industry focused support, Redline specializes in serving insurance, pension, and healthcare companies that value clarity, care, and trust.</p>
        <p>Our team of trained voice agents understands that every call isn't just a task it's an opportunity to reassure, resolve, and retain.</p>
        <p className="font-bold text-gray-900">We operate with one belief at the core: Great support starts with people who care.</p>
        <p>Backed by operational excellence, deep domain experience, and a commitment to integrity, Redline is built to scale with your business whether you're navigating complex claims, guiding beneficiaries, or offering plan support.</p>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 font-heading">Our Promise</h2>
        <ul className="space-y-6">
          <li className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              <h3 className="font-bold text-gray-900 m-0 text-lg">Empathy First</h3>
            </div>
            <p className="text-gray-600 pl-3.5 m-0 text-base">Every client and customer is heard, understood, and respected.</p>
          </li>
          <li className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              <h3 className="font-bold text-gray-900 m-0 text-lg">Reliability Always</h3>
            </div>
            <p className="text-gray-600 pl-3.5 m-0 text-base">We deliver consistency, quality, and accountability with every interaction.</p>
          </li>
          <li className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
              <h3 className="font-bold text-gray-900 m-0 text-lg">Excellence in Execution</h3>
            </div>
            <p className="text-gray-600 pl-3.5 m-0 text-base">Our process-driven operations ensure accuracy and agility at scale.</p>
          </li>
        </ul>
      </div>
      
      <p className="text-lg text-gray-500 italic">Let's build something lasting one call at a time.</p>
    </motion.div>
  );
}
