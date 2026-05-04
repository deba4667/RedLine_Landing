import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Privacy Policy</h1>
      <div className="prose prose-lg text-gray-600 max-w-none">
        <p className="font-semibold text-gray-900">Last Updated: April 2026</p>
        <p>At Redline Outsourcing Solutions, we value your privacy. This Privacy Policy outlines how we collect, use, and protect the information you provide when you interact with our website or services.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>We may collect:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Personal information such as your name, email address, phone number, or resume when you submit inquiries or job applications.</li>
          <li>Technical data like IP address, browser type, and usage patterns for analytics and website performance.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respond to your inquiries or service requests</li>
          <li>Process job applications</li>
          <li>Improve our website and service offerings</li>
          <li>Communicate updates, promotions, or opportunities (only with your consent)</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
        <p>We do not sell, rent, or share your personal information with third parties for marketing purposes. We may share data with trusted service providers under confidentiality agreements, only as necessary to deliver services.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Security</h2>
        <p>We use standard security measures to protect your personal data from unauthorized access, loss, or misuse.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
        <p>You may request to access, correct, or delete your personal data by contacting us at <a href="mailto:contact@redlineoutsourcing.com" className="text-[#C8102E] hover:underline">contact@redlineoutsourcing.com</a>.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Cookies</h2>
        <p>Our website may use cookies to enhance user experience. You can control cookie settings through your browser.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised date.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
        <p>For any questions or concerns about this policy, contact us at: <a href="mailto:contact@redlineoutsourcing.com" className="text-[#C8102E] hover:underline">contact@redlineoutsourcing.com</a></p>
      </div>
    </motion.div>
  );
}
