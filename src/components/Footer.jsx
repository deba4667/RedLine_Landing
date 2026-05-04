import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const footerLinks = {
  Company: [
    { name: 'About Us', path: '/about-us' },
    { name: 'Terms of Service', path: '/terms-of-service' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Careers', path: '/careers' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
  ],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: Logo & Description */}
          <div>
            <div className="mb-6">
              <img src={logo} alt="Redline Logo" className="h-20 w-auto" />
            </div>
            <p className="text-sm leading-relaxed mb-8 text-gray-400">
              Transforming healthcare revenue cycles with expert billing, coding, and AR management solutions.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-8">
              {[
                { Icon: FaLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
                { Icon: Phone, label: 'Call', url: 'tel:+1-978-705-9590' },
                { Icon: Mail, label: 'Email', url: 'mailto:contact@redlineoutsourcing.com' }
              ].map(({ Icon, label, url }, i) => (
                <motion.a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#C8102E] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Section 2: Contact Information */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider font-heading">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { Icon: Phone, text: 'US: +1 978-705-9590' },
                { Icon: Phone, text: 'India: +91 866-050-9308' },
                { Icon: Phone, text: 'India: +91 9480172919' },
                { Icon: Mail, text: 'contact@redlineoutsourcing.com' },
                { Icon: MapPin, text: 'Dover, DE 19901, USA' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm">
                  <Icon size={16} className="text-[#C8102E] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Company Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-6 uppercase tracking-wider font-heading">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path}>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-sm text-gray-400 hover:text-[#C8102E] transition-all duration-200 block"
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom bar */}
      <div className="bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500 text-center md:text-left">
            © {new Date().getFullYear()} Redline RCM. All rights reserved. | HIPAA Compliant
          </p>
          
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 bg-[#C8102E] rounded-lg flex items-center justify-center text-white hover:bg-[#9B0E24] transition-colors duration-300"
            title="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
