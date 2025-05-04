
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-blueline-light max-w-2xl mx-auto">
            Ready to enhance your customer experience? Get in touch with our team today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-gray-50 p-8 rounded-xl h-full">
              <h3 className="text-xl font-semibold text-blueline-dark mb-6">
                Redline Outsourcing Solution
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">Phone/WhatsApp</p>
                    <p className="font-medium text-blueline-dark">+91 8660509308</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">Email</p>
                    <p className="font-medium text-blueline-dark">contact@redlineoutsourcing.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
                    <Linkedin className="text-redline h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-blueline-light">LinkedIn</p>
                    <p className="font-medium text-blueline-dark">Redline Outsourcing Solution</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-white rounded-lg border border-gray-100">
                <h4 className="font-semibold text-blueline-dark mb-2">Our Office Hours</h4>
                <p className="text-blueline-light mb-4">
                  We're available 24/7 to support your business needs across US and UK timezones.
                </p>
                <p className="text-sm text-blueline-dark">
                  <span className="font-medium">US Support:</span> 9AM-9PM EST
                </p>
                <p className="text-sm text-blueline-dark">
                  <span className="font-medium">UK Support:</span> 9AM-9PM GMT
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blueline-dark mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-redline focus:border-redline outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-blueline-dark mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-redline focus:border-redline outline-none transition"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blueline-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-redline focus:border-redline outline-none transition"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blueline-dark mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-redline focus:border-redline outline-none transition"
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blueline-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-redline focus:border-redline outline-none transition"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="consent"
                  className="h-4 w-4 text-redline focus:ring-redline border-gray-300 rounded"
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-blueline-light">
                  I agree to receive communications from Redline Outsourcing Solution.
                </label>
              </div>
              
              <Button size="lg" className="w-full bg-redline hover:bg-redline-dark">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
