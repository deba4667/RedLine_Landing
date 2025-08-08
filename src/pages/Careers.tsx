import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Careers = () => {
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
            <h1 className="text-4xl font-bold text-blueline-dark mb-8">Careers at Redline</h1>
            
            <div className="space-y-8">
              <p className="text-blueline-light text-lg">
                At Redline Outsourcing, we're always looking for empathetic, motivated individuals who believe in
                the power of human connection.
              </p>

              <p className="text-blueline-light text-lg">
                Whether you're starting your career in customer support or bringing years of voice experience, we
                offer a professional environment where your growth matters.
              </p>

              <p className="text-blueline-light text-lg">
                Join us to make a difference one call at a time.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-blueline-dark mb-6">How to Apply</h2>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-redline" />
                  <a 
                    href="mailto:contact@redlineoutsourcing.com" 
                    className="text-blueline-dark hover:text-redline transition-colors"
                  >
                    contact@redlineoutsourcing.com
                  </a>
                </div>
                <p className="text-blueline-light mt-4">
                  Please email your resume to the address above to start your journey with Redline.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers; 