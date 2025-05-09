import { Phone, Users, UserCheck, Clock, MessageSquare, Heart } from "lucide-react";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="service-card">
      <div className="bg-redline/10 h-12 w-12 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-redline h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-blueline-dark mb-2">{title}</h3>
      <p className="text-blueline-light">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: "Claims Status and Policy Queries",
      description: "Quick and accurate resolution of customer queries about policy details and claim status."
    },
    {
      icon: Users,
      title: "Premium Reminder Calls and Renewals",
      description: "Timely communication for payment reminders and policy renewal opportunities."
    },
    {
      icon: UserCheck,
      title: "New Customer Onboarding Support",
      description: "Smooth welcome experience for new policyholders with clear guidance and information."
    },
    {
      icon: Clock,
      title: "Call Center Overflow and After-Hours Coverage",
      description: "Seamless support during peak periods and outside regular business hours."
    },
    {
      icon: MessageSquare,
      title: "Scripted Inbound/Outbound Calls",
      description: "Consistent, quality-controlled communication following approved messaging and protocols."
    },
    {
      icon: Heart,
      title: "Cross-Sell and Retention Communication",
      description: "Strategic conversations to grow customer relationships and improve retention rates."
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blueline-dark mb-4">
            Our Voice Support Services
          </h2>
          <p className="text-lg text-blueline-light max-w-2xl mx-auto">
            We help companies deliver exceptional customer experiences through our specialized voice support solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
