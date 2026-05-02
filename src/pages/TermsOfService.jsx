import React from 'react';
import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Terms of Service</h1>
      <div className="prose prose-lg text-gray-600 max-w-none">
        <p className="font-semibold text-gray-900">Last Updated: April 2026</p>
        <p>Welcome to Redline Outsourcing Solution. By using our website and services, you agree to the following terms and conditions:</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Services Provided</h2>
        <p>Redline offers professional voice support services, including customer care and administrative solutions for industries like insurance, healthcare, and pensions.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Use of Website</h2>
        <p>You agree to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the site only for lawful purposes</li>
          <li>Not attempt to gain unauthorized access to our systems</li>
          <li>Not use our content for commercial purposes without permission</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
        <p>All content on this website, including logos, graphics, and text, is the property of Redline Outsourcing and may not be reproduced without prior written consent.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h2>
        <p>We strive to provide accurate and secure services, but we are not liable for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Any indirect, incidental, or consequential damages</li>
          <li>Any service interruptions or loss of data from website use</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Modifications</h2>
        <p>Redline may modify these terms at any time. Continued use of the site after changes implies your agreement to the new terms.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact</h2>
        <p>For questions, reach out to: <a href="mailto:contact@redlineoutsourcing.com" className="text-[#C8102E] hover:underline">contact@redlineoutsourcing.com</a></p>
      </div>
    </motion.div>
  );
}
