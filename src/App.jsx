import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RevenueChallenge from './components/RevenueChallenge';
import RCMSolution from './components/RCMSolution';
import RevenueCycle from './components/RevenueCycle';
import WhoWeHelp from './components/WhoWeHelp';
import WhyChooseUs from './components/WhyChooseUs';
import EngagementModel from './components/EngagementModel';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <AnimatePresence>
      <div className="min-h-screen font-sans antialiased">
        <Navbar />
        <main>
          <Hero />
          <RevenueChallenge />
          <RCMSolution />
          <RevenueCycle />
          <WhoWeHelp />
          <WhyChooseUs />
          <EngagementModel />
          <CTASection />
          <Contact />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
}
