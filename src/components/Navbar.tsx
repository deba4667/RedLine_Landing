import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToFreeTrial = () => {
    const element = document.getElementById('free-trial');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/9136287d-1cf9-42d2-aef8-ac3971f955ad.png" 
                alt="Redline Logo" 
                className="h-10 mr-2 mix-blend-multiply"
              />
              <div>
                <span className="text-redline font-bold text-2xl">Red</span>
                <span className="text-blueline-dark font-bold text-2xl">line</span>
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Services', 'Why Choose Us', 'Free Trial', 'Contact'].map((item, index) => (
              <motion.a 
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-blueline-dark hover:text-redline font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Button 
              variant="default" 
              className="bg-redline hover:bg-redline-dark"
              onClick={scrollToFreeTrial}
            >
              Get Started
            </Button>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute h-0.5 w-6 bg-blueline-dark transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-blueline-dark transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100 top-3'
                }`}
              />
              <span 
                className={`absolute h-0.5 w-6 bg-blueline-dark transform transition-all duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                }`}
              />
            </div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.nav 
                className="flex flex-col items-center space-y-6 py-6 bg-white rounded-lg mt-4 shadow-lg"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {['Services', 'Why Choose Us', 'Free Trial', 'Contact'].map((item, index) => (
                  <motion.a 
                    key={index}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-blueline-dark hover:text-redline font-medium transition-colors text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.toLowerCase().replace(/\s+/g, '-'));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="default" 
                    className="bg-redline hover:bg-redline-dark"
                    onClick={() => {
                      scrollToFreeTrial();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
