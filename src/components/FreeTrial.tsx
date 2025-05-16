import { Button } from "@/components/ui/button";

const FreeTrial = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="free-trial" className="section-padding bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16 max-w-2xl w-full mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blueline-dark mb-6">
          Try Redline <span className="text-redline block">for Free</span>
        </h2>
        <p className="text-xl text-blueline-light leading-relaxed mb-8">
          We offer a 3-day trial so you can test our team's professionalism, clarity, and reliability - before you commit. Let us prove our value.
        </p>
        <div className="bg-gray-50 p-6 rounded-xl mb-8 w-full">
          <p className="font-semibold text-blueline-dark text-lg mb-4 text-left">During your trial, you'll experience:</p>
          <ul className="space-y-4 text-left">
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-redline rounded-full flex-shrink-0"></span>
              <span className="text-blueline-light text-lg">Real call handling by our agents</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-redline rounded-full flex-shrink-0"></span>
              <span className="text-blueline-light text-lg">Our reporting and QA system</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-3 w-3 bg-redline rounded-full flex-shrink-0"></span>
              <span className="text-blueline-light text-lg">Direct feedback opportunities</span>
            </li>
          </ul>
        </div>
        <Button 
          size="lg" 
          className="w-full md:w-auto bg-redline hover:bg-redline-dark text-lg px-8 py-6 h-auto"
          onClick={scrollToContact}
        >
          Start Your Free Trial
        </Button>
      </div>
    </section>
  );
};

export default FreeTrial;
