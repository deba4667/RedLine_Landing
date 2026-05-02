import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Share2, MessageCircle, ArrowUp } from 'lucide-react';
import logo from '../assets/logo.png';

const footerLinks = {
  Services: [
    'Patient Registration',
    'Medical Coding',
    'Claims Submission',
    'Denial Management',
    'Payment Posting',
    'AR Follow-Up',
  ],
  Company: [
    'About Us',
    'Our Team',
    'Case Studies',
    'Blog',
    'Careers',
    'Press',
  ],
  Specialties: [
    'Hospitals',
    'Physician Groups',
    'Behavioral Health',
    'Urgent Care',
    'Radiology',
    'Oncology',
  ],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 bg-white">
              <img src={logo} alt="Redline Logo" />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-500 max-w-xs">
              Transforming healthcare revenue cycles with expert billing, coding, and AR management solutions.
            </p>
            <div className="space-y-2.5">
              {[
                { Icon: Phone, text: 'US: +1 978-705-9590' },
                { Icon: Phone, text: 'India: +91 866-050-9308 / +91 9480172919' },
                { Icon: Mail, text: 'contact@redlineoutsourcing.com' },
                { Icon: MapPin, text: '8 the green #2342 Dover, DE 19901, United States' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm">
                  <Icon size={14} className="text-[#C8102E] flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#C8102E] hover:text-white transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-heading font-semibold text-sm mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4, color: '#C8102E' }}
                      className="text-sm text-gray-500 transition-all duration-200 block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Redline RCM. All rights reserved. HIPAA Compliant.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-[#C8102E] transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#C8102E] transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-gray-600 hover:text-[#C8102E] transition-colors">HIPAA Notice</a>
          </div>
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-[#C8102E] rounded-lg flex items-center justify-center text-white hover:bg-[#9B0E24] transition-colors duration-300"
          >
            <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
