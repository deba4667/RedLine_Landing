import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapPin } from "react-icons/fa";

// Initialize EmailJS with public key from environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // Prepare the template parameters
    const templateParams = {
      to_email: 'contact@redlineoutsourcing.com',
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone,
      message: formData.message,
    };

    // Send email using EmailJS with environment variables
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        (response) => {
          setSubmitStatus('success');
          setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: '',
          });
          setTimeout(() => setSubmitStatus(null), 5000); // Clear message after 5 seconds
        },
        (error) => {
          setSubmitStatus('error');
          console.error('Failed to send email:', error);
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="py-16 md:py-28 bg-white" ref={ref} id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
             <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
            Let's Connect
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-heading font-black text-gray-900">
            Get In <span className="text-[#C8102E]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
            Ready to transform your revenue cycle? Our team is standing by to help you get started.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Ready to enhance your revenue cycle? Get in touch with our team today.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C8102E]">
                    <FaPhoneSquareAlt size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Phone / WhatsApp</h3>
                  <p className="text-sm text-gray-600 mt-1">US: +1 978-705-9590</p>
                  <p className="text-sm text-gray-600">India: +91 866-050-9308 / +91 9480172919</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C8102E]">
                    <MdEmail size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600 mt-1">contact@redlineoutsourcing.com</p>
                </div>
              </motion.div>

              {/* Office Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C8102E]">
                    <FaMapPin size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Office Location</h3>
                  <p className="text-sm text-gray-600 mt-1">8 the green #2342 Dover, DE 19901, United States</p>
                </div>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-[#C8102E]">
                    <FaLinkedin size={20} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">LinkedIn</h3>
                  <p className="text-sm text-gray-600 mt-1">Redline Outsourcing Solutions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="border-2 border-[#C8102E] rounded-lg p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">Send us a Message</h3>
            <p className="text-sm text-gray-600 mb-6">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#C8102E] text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#C8102E] text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#C8102E] text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#C8102E] text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your RCM needs..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-[#C8102E] text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#C8102E] text-white font-bold py-3 rounded-md hover:bg-[#a00c23] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-50 border border-green-200 text-green-700 rounded-md text-sm text-center"
                >
                  ✓ Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-50 border border-red-200 text-red-700 rounded-md text-sm text-center"
                >
                  ✗ Failed to send message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
