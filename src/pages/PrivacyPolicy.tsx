import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-blueline-dark mb-8">Privacy Policy</h1>
            <p className="text-blueline-light mb-8">Last Updated: April 2025</p>

            <div className="prose prose-lg max-w-none">
              <p className="text-blueline-light mb-8">
                At Redline Outsourcing Solution, we value your privacy. This Privacy Policy outlines how we collect, 
                use, and protect the information you provide when you interact with our website or services.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">1. Information We Collect</h2>
              <p className="text-blueline-light mb-4">We may collect:</p>
              <ul className="list-disc pl-6 mb-8 text-blueline-light">
                <li>Personal information such as your name, email address, phone number, or resume when you submit inquiries or job applications.</li>
                <li>Technical data like IP address, browser type, and usage patterns for analytics and website performance.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">2. How We Use Your Information</h2>
              <p className="text-blueline-light mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-8 text-blueline-light">
                <li>Respond to your inquiries or service requests</li>
                <li>Process job applications</li>
                <li>Improve our website and service offerings</li>
                <li>Communicate updates, promotions, or opportunities (only with your consent)</li>
              </ul>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">3. Information Sharing</h2>
              <p className="text-blueline-light mb-8">
                We do not sell, rent, or share your personal information with third parties for marketing purposes. 
                We may share data with trusted service providers under confidentiality agreements, only as 
                necessary to deliver services.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">4. Data Security</h2>
              <p className="text-blueline-light mb-8">
                We use standard security measures to protect your personal data from unauthorized access, loss, or 
                misuse.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">5. Your Rights</h2>
              <p className="text-blueline-light mb-8">
                You may request to access, correct, or delete your personal data by contacting us at 
                <a href="mailto:redlineoutsourcing@gmail.com" className="text-redline hover:text-redline-dark ml-1">
                  redlineoutsourcing@gmail.com
                </a>.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">6. Cookies</h2>
              <p className="text-blueline-light mb-8">
                Our website may use cookies to enhance user experience. You can control cookie settings through 
                your browser.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">7. Changes to This Policy</h2>
              <p className="text-blueline-light mb-8">
                We may update this Privacy Policy occasionally. Changes will be posted on this page with a revised 
                date.
              </p>

              <h2 className="text-2xl font-semibold text-blueline-dark mb-4">8. Contact Us</h2>
              <p className="text-blueline-light mb-8">
                For any questions or concerns about this policy, contact us at:
                <a href="mailto:redlineoutsourcing@gmail.com" className="text-redline hover:text-redline-dark ml-1">
                  redlineoutsourcing@gmail.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 