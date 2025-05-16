import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY); // Replace with your EmailJS public key

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });
  const [errors, setErrors] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    consent: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      consent: ''
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      isValid = false;
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent = 'Please agree to receive communications';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
    // Clear error when user starts typing
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          company: formData.company,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_name: 'Redline Team',
          reply_to: formData.email
        }
      );

      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        consent: false
      });
      setErrors({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        consent: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again or contact us directly.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-blueline-light max-w-2xl mx-auto">
            Ready to enhance your customer experience? Get in touch with our team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-semibold text-blueline-dark mb-6">
                Redline Outsourcing Solution
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">Phone/WhatsApp</p>
                    <p className="font-medium text-blueline-dark">+1 978-705-9590</p>
                    <p className="font-medium text-blueline-dark">+91 866-050-9308</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">Email</p>
                    <p className="font-medium text-blueline-dark">contact@redlineoutsourcing.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Linkedin className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">LinkedIn</p>
                    <p className="font-medium text-blueline-dark">Redline Outsourcing Solution</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white rounded-lg border border-gray-100">
                <h4 className="font-semibold text-blueline-dark mb-2">Our Office Hours</h4>
                <p className="text-blueline-light mb-4">
                  We're available 24/7 to support your business needs across US and UK timezones.
                </p>
                <p className="text-sm text-blueline-dark">
                  <span className="font-medium">US Support:</span> 9AM-9PM EST
                </p>
                <p className="text-sm text-blueline-dark">
                  <span className="font-medium">UK Support:</span> 9AM-9PM GMT
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blueline-dark mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-redline focus:border-redline outline-none transition`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blueline-dark mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-redline focus:border-redline outline-none transition`}
                    placeholder="Your company"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blueline-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-redline focus:border-redline outline-none transition`}
                    placeholder="Your email"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blueline-dark mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-redline focus:border-redline outline-none transition`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blueline-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-redline focus:border-redline outline-none transition`}
                  placeholder="How can we help you?"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className={`h-4 w-4 text-redline focus:ring-redline border-gray-300 rounded ${errors.consent ? 'border-red-500' : ''}`}
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-blueline-light">
                  I agree to receive communications from Redline Outsourcing Solution.
                </label>
                {errors.consent && <p className="mt-1 text-sm text-red-500">{errors.consent}</p>}
              </div>
              
              <Button 
                type="submit"
                size="lg" 
                className="w-full bg-redline hover:bg-redline-dark"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
