
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyChooseUs from "@/components/WhyChooseUs";
import FreeTrial from "@/components/FreeTrial";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";

const Index = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      }
    }),
  };

  const sections = [
    <WhoWeHelp key="whowehelp" />, 
    <ServicesSection key="services" />, 
    <WhyChooseUs key="whychooseus" />, 
    <FreeTrial key="freetrial" />, 
    <ContactSection key="contact" />
  ];

  return (
    <>
      <Loader />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        {sections.map((section, i) => (
          <motion.div
            key={i}
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={i}
          >
            {section}
          </motion.div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Index;
