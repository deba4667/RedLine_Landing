import { Badge } from "@/components/ui/badge";

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-12">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" 
              alt="Professional team" 
              className="rounded-xl shadow-lg object-cover h-[400px] w-full"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Badge variant="outline" className="bg-white text-redline border-redline">Companies</Badge>
              <Badge variant="outline" className="bg-white text-redline border-redline">Brokers</Badge>
              <Badge variant="outline" className="bg-white text-redline border-redline">Policy Administrators</Badge>
              <Badge variant="outline" className="bg-white text-redline border-redline">US and UK Markets</Badge>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-6">Who We Help</h2>
            <p className="text-lg text-blueline-light mb-6">
              We work with Companies, Brokers, and Administrators in the US and UK who want to
              enhance client experience while reducing operational burden.
            </p>
            <p className="text-lg text-blueline-light mb-8">
              Redline delivers reliable, human-first voice support tailored to your industry, helping you focus on core business activities while ensuring excellent customer service.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-semibold text-xl mb-3 text-blueline-dark">Our focus areas:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-redline/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-2 w-2 bg-redline rounded-full"></span>
                  </span>
                  <span className="text-blueline-light">Customer satisfaction and retention</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-redline/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-2 w-2 bg-redline rounded-full"></span>
                  </span>
                  <span className="text-blueline-light">Operational efficiency and cost reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-redline/10 flex items-center justify-center mr-3 mt-0.5">
                    <span className="h-2 w-2 bg-redline rounded-full"></span>
                  </span>
                  <span className="text-blueline-light">Scalability during peak periods and business hours</span>
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
