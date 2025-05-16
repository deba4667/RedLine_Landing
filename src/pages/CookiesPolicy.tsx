import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
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
            <h1 className="text-4xl font-bold text-blueline-dark mb-8">Cookies Policy</h1>
            <p className="text-blueline-light mb-8">Last Updated: April 2025</p>

            <div className="space-y-8">
              <p className="text-blueline-light text-lg">
                Redline Outsourcing Solution uses cookies to improve user experience, analyze site traffic, and
                deliver better service.
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">1. What Are Cookies?</h2>
                  <p className="text-blueline-light">
                    Cookies are small data files stored on your device when you visit a website. They help websites
                    remember your preferences and activity.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">2. How We Use Cookies</h2>
                  <p className="text-blueline-light mb-4">We use cookies to:</p>
                  <ul className="list-disc list-inside space-y-2 text-blueline-light">
                    <li>Improve website performance</li>
                    <li>Understand how visitors interact with the site</li>
                    <li>Enable basic functionality like form submissions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">3. Types of Cookies We Use</h2>
                  <ul className="list-disc list-inside space-y-2 text-blueline-light">
                    <li>Essential Cookies – Enable core functionality such as security and form handling</li>
                    <li>Analytics Cookies – Help us analyze user behavior (e.g., via Google Analytics)</li>
                    <li>Performance Cookies – Improve site speed and responsiveness</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">4. Managing Cookies</h2>
                  <p className="text-blueline-light">
                    You can control cookies through your browser settings. Disabling some cookies may impact your
                    experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">5. Consent</h2>
                  <p className="text-blueline-light">
                    By using our website, you consent to our use of cookies as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">6. Contact</h2>
                  <p className="text-blueline-light">
                    If you have questions about our cookies or privacy practices, contact:
                    <a href="mailto:contact@redlineoutsourcing.com" className="text-redline hover:text-redline-dark ml-1">
                      contact@redlineoutsourcing.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy; 