import { Badge } from "@/components/ui/badge";

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <img 
              src="/lovable-uploads/team.jpg" 
              alt="Professional team" 
              className="rounded-xl shadow-lg object-cover h-[400px] w-full"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-white text-redline border-redline">Professional Support</Badge>
              <Badge variant="outline" className="bg-white text-redline border-redline">24/7 Coverage</Badge>
              <Badge variant="outline" className="bg-white text-redline border-redline">Quality Assurance</Badge>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-6">Who We Help</h2>
            {/* <p className="text-lg text-blueline-light mb-6">
              We work with businesses who want to enhance client experience while reducing operational .
            </p> */}
            <p className="text-lg text-blueline-light mb-8">
              Redline delivers reliable voice support tailored to your industry, helping you focus on core business activities while ensuring excellent customer service.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-xl mb-3 text-blueline-dark">Our focus areas:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                  <span className="text-blueline-light">Professional voice support services</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                  <span className="text-blueline-light">24/7 customer service coverage</span>
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-redline rounded-full mr-2"></span>
                  <span className="text-blueline-light">Quality assurance and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
