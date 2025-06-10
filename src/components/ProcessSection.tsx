
import React from 'react';
import { Search, Ship, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Source & Inspect",
      description: "We carefully select and inspect each machine in the US, ensuring quality and authenticity.",
      color: "text-blue-500"
    },
    {
      icon: Ship,
      title: "Ship & Track",
      description: "Professional shipping with real-time tracking from US ports to Indian destinations.",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Deliver & Support",
      description: "Final delivery to your location with comprehensive documentation and support.",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From US yards to your construction site - a transparent, reliable process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className={`inline-flex p-4 rounded-2xl bg-gray-100 mb-6 ${step.color}`}>
                  <step.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-primary" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
