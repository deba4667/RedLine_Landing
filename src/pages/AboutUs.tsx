import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
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
            <h1 className="text-4xl font-bold text-blueline-dark mb-8">About Us</h1>
            
            <div className="space-y-8">
              <p className="text-blueline-light text-lg">
                At Redline Outsourcing Solution, we're more than just a voice support provider.We're the human
                connection behind every customer conversation.
              </p>

              <p className="text-blueline-light text-lg">
                Founded with a mission to deliver empathetic, reliable, and industry focused support, Redline
                specializes in serving insurance, pension, and healthcare companies that value clarity, care, and trust.
              </p>

              <p className="text-blueline-light text-lg">
                Our team of trained voice agents understands that every call isn't just a task it's an opportunity to
                reassure, resolve, and retain.
              </p>

              <p className="text-blueline-light text-lg font-semibold">
                We operate with one belief at the core:
                Great support starts with people who care.
              </p>

              <p className="text-blueline-light text-lg">
                Backed by operational excellence, deep domain experience, and a commitment to integrity, Redline
                is built to scale with your business whether you're navigating complex claims, guiding
                beneficiaries, or offering plan support.
              </p>

              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-semibold text-blueline-dark mb-6">Our Promise</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-redline rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h3 className="font-semibold text-blueline-dark">Empathy First</h3>
                      <p className="text-blueline-light">Every client and customer is heard, understood, and respected.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-redline rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h3 className="font-semibold text-blueline-dark">Reliability Always</h3>
                      <p className="text-blueline-light">We deliver consistency, quality, and accountability with every interaction.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="h-2 w-2 bg-redline rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <div>
                      <h3 className="font-semibold text-blueline-dark">Excellence in Execution</h3>
                      <p className="text-blueline-light">Our process-driven operations ensure accuracy and agility at scale.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-blueline-light text-lg italic">
                Let's build something lasting one call at a time.
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs; 