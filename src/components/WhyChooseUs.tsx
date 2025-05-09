import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expertly Trained Call Handlers",
      description: "Our team is specifically trained to handle calls with expertise and knowledge."
    },
    {
      title: "Professional, Accent-Neutral Support Staff",
      description: "Clear communication that puts your customers at ease and represents your brand professionally."
    },
    {
      title: "Compliant Communication",
      description: "All conversations follow industry regulations and compliance standards."
    },
    {
      title: "US/UK Timezone Coverage",
      description: "Support available when your customers need it, aligned with your business hours regardless of location."
    },
    {
      title: "Reports, Call Logs, and QA Monitoring",
      description: "Complete transparency with detailed reporting and quality assurance to maintain high standards."
    },
    {
      title: "Affordable Plans Starting at $8/hr",
      description: "Cost-effective solutions with plans starting at just $8/hr or $1,200/month per agent."
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-blueline-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Companies Choose Redline
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our unique approach to voice support delivers measurable results for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-blueline-light/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-redline h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <h3 className="text-xl font-semibold">{reason.title}</h3>
              </div>
              <p className="text-gray-300 pl-9">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
