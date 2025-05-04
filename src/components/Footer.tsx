
import { Phone, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blueline-dark text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <span className="text-redline font-bold text-2xl">Red</span>
              <span className="text-white font-bold text-2xl">line</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Human Connection. Global Reach. Professional voice support services tailored to the insurance industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-redline h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Phone className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-redline h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-redline h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">Careers</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-redline transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-redline transition-colors">Voice Support</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-redline transition-colors">Claims Status</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-redline transition-colors">Policy Support</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-redline transition-colors">After-Hours Coverage</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-redline transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Redline Outsourcing Solution. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-redline text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-redline text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-redline text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
