import React from 'react';
import { motion } from 'framer-motion';

export default function CookiesPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">Cookies Policy</h1>
      <div className="prose prose-lg text-gray-600 max-w-none">
        <p className="font-semibold text-gray-900">Last Updated: April 2026</p>
        <p>Redline Outsourcing Solutions uses cookies to improve user experience, analyze site traffic, and deliver better service.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. What Are Cookies?</h2>
        <p>Cookies are small data files stored on your device when you visit a website. They help websites remember your preferences and activity.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
        <p>We use cookies to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve website performance</li>
          <li>Understand how visitors interact with the site</li>
          <li>Enable basic functionality like form submissions</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-gray-900">Essential Cookies</strong> – Enable core functionality such as security and form handling</li>
          <li><strong className="text-gray-900">Analytics Cookies</strong> – Help us analyze user behavior (e.g., via Google Analytics)</li>
          <li><strong className="text-gray-900">Performance Cookies</strong> – Improve site speed and responsiveness</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Managing Cookies</h2>
        <p>You can control cookies through your browser settings. Disabling some cookies may impact your experience.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Consent</h2>
        <p>By using our website, you consent to our use of cookies as described in this policy.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact</h2>
        <p>If you have questions about our cookies or privacy practices, contact: <a href="mailto:contact@redlineoutsourcing.com" className="text-[#C8102E] hover:underline">contact@redlineoutsourcing.com</a></p>
      </div>
    </motion.div>
  );
}
