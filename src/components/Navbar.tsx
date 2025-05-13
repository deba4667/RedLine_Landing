import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
          >
            <Link to="/try-redline">
              <Button variant="default" className="bg-redline hover:bg-redline-dark">
                Get Started
              </Button>
            </Link>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col space-y-1.5"
            onClick={toggleMobileMenu}
          >
            <span className={`block w-6 h-0.5 bg-blueline-dark transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-blueline-dark transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-blueline-dark transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4"
          >
            {['Services', 'Why Choose Us', 'Free Trial', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-blueline-dark hover:text-redline font-medium transition-colors"
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
              </a>
            ))}
            <Link 
              to="/try-redline"
              className="text-blueline-dark hover:text-redline font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
