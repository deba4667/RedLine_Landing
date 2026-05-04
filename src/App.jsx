import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Pages
import TermsOfService from './pages/TermsOfService';
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Careers from './pages/Careers';
import AboutUs from './pages/AboutUs';

function Home() {
  return (
    <main>
      <Hero />
      <RCMSolution />
      <WhoWeHelp />
      <WhyChooseUs />
      <RevenueCycle />
      <RevenueChallenge />
      <EngagementModel />
      <CTASection />
      <Contact />
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <div className="min-h-screen font-sans antialiased">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiesPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </Router>
  );
}
