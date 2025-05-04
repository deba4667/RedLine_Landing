
import { Button } from "@/components/ui/button";

const FreeTrial = () => {
  return (
    <section id="trial" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-4">
                Try Redline <span className="text-redline">for Free</span>
              </h2>
              <p className="text-lg text-blueline-light mb-6">
                We offer a 3-day trial so you can test our team's professionalism, clarity, and reliability - before you commit. Let us prove our value.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold text-blueline-dark">During your trial, you'll experience:</p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                    <span className="text-blueline-light">Real call handling by our agents</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                    <span className="text-blueline-light">Our reporting and QA system</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                    <span className="text-blueline-light">Direct feedback opportunities</span>
                  </li>
                </ul>
              </div>
              <Button size="lg" className="w-full md:w-auto bg-redline hover:bg-redline-dark">
                Start Your Free Trial
              </Button>
            </div>
            
            <div className="md:w-1/2 md:pl-12">
              <div className="bg-redline/10 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blueline-dark mb-3">
                  Affordable Plans
                </h3>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-redline">$8<span className="text-lg text-blueline-light font-normal">/hour</span></p>
                  <p className="text-sm text-blueline-light">Pay only for the time you need</p>
                </div>
                <div className="mb-6">
                  <p className="text-3xl font-bold text-redline">$1,200<span className="text-lg text-blueline-light font-normal">/month</span></p>
                  <p className="text-sm text-blueline-light">Per dedicated agent</p>
                </div>
                <p className="text-blueline-dark italic">
                  "The ROI on Redline's services has been exceptional. They've helped us maintain customer satisfaction while reducing our operational costs." 
                </p>
                <p className="text-right text-sm font-medium text-blueline-dark mt-2">
                  — Insurance Industry Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrial;
