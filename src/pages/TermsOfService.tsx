import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
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
            <h1 className="text-4xl font-bold text-blueline-dark mb-8">Terms of Service</h1>
            <p className="text-blueline-light mb-8">Last Updated: April 2025</p>

            <div className="space-y-8">
              <p className="text-blueline-light text-lg">
                Welcome to Redline Outsourcing Solution. By using our website and services, you agree to the
                following terms and conditions:
              </p>

              <div className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">1. Acceptance of Terms</h2>
                  <p className="text-blueline-light">
                    By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy
                    Policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">2. Services Provided</h2>
                  <p className="text-blueline-light">
                    Redline offers professional voice support services, including customer care and administrative
                    solutions for industries like insurance, healthcare, and pensions.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">3. Use of Website</h2>
                  <p className="text-blueline-light mb-4">You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 text-blueline-light">
                    <li>Use the site only for lawful purposes</li>
                    <li>Not attempt to gain unauthorized access to our systems</li>
                    <li>Not use our content for commercial purposes without permission</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">4. Intellectual Property</h2>
                  <p className="text-blueline-light">
                    All content on this website, including logos, graphics, and text, is the property of Redline Outsourcing
                    and may not be reproduced without prior written consent.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">5. Limitation of Liability</h2>
                  <p className="text-blueline-light mb-4">We strive to provide accurate and secure services, but we are not liable for:</p>
                  <ul className="list-disc list-inside space-y-2 text-blueline-light">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Any service interruptions or loss of data from website use</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">6. Modifications</h2>
                  <p className="text-blueline-light">
                    Redline may modify these terms at any time. Continued use of the site after changes implies your
                    agreement to the new terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">7. Governing Law</h2>
                  <p className="text-blueline-light">
                    These terms are governed by the laws of India.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-blueline-dark mb-4">8. Contact</h2>
                  <p className="text-blueline-light">
                    For questions, reach out to:
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

export default TermsOfService; 