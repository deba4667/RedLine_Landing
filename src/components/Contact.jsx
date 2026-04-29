import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-REDLINE', href: 'tel:+18005557335463' },
  { icon: Mail, label: 'Email', value: 'info@redlinercm.com', href: 'mailto:info@redlinercm.com' },
  { icon: MapPin, label: 'Office', value: '123 Healthcare Blvd, Suite 400\nNew York, NY 10001', href: '#' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', specialty: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info + map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ x: 6, boxShadow: '0 8px 30px rgba(200,16,46,0.12)' }}
                    className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 group transition-all duration-300 hover:border-[#C8102E]/30"
                  >
                    <div className="w-11 h-11 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-colors duration-300">
                      <Icon size={20} className="text-[#C8102E] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-gray-800 font-medium text-sm whitespace-pre-line">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin size={32} className="text-[#C8102E] mx-auto mb-2" />
                <p className="text-gray-500 text-sm font-medium">New York, NY 10001</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #C8102E 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.div
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle size={56} className="text-green-500 mb-4" />
                </motion.div>
                <h3 className="text-2xl font-heading font-black text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Our team will reach out to you within 24 hours to schedule your free revenue cycle assessment.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', specialty: '', message: '' }); }}
                  className="mt-6 px-6 py-2.5 bg-[#C8102E] text-white rounded-lg text-sm font-semibold"
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-heading font-black text-gray-900 text-xl mb-6">
                  Request a Free Assessment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Dr. Jane Smith"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all duration-200 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@practice.com"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all duration-200 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all duration-200 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                        Specialty
                      </label>
                      <select
                        name="specialty"
                        value={form.specialty}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all duration-200"
                      >
                        <option value="">Select Specialty</option>
                        <option>Hospital</option>
                        <option>Physician Group</option>
                        <option>Urgent Care</option>
                        <option>Behavioral Health</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your current revenue cycle challenges..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20 transition-all duration-200 placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(200,16,46,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-[#C8102E] text-white py-4 rounded-xl font-bold text-base transition-all duration-300 hover:bg-[#9B0E24]"
                  >
                    <Send size={18} />
                    Send Message
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
