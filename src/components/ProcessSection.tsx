
import React from 'react';
import { Search, FileCheck, Ship, MapPin, CheckCircle2 } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Search,
      title: "Source & Inspect",
      description: "We locate and thoroughly inspect machines across US yards, ensuring quality meets Indian standards.",
      step: "01"
    },
    {
      icon: FileCheck,
      title: "Documentation",
      description: "Complete paperwork, certifications, and export documentation handled professionally.",
      step: "02"
    },
    {
      icon: Ship,
      title: "Secure Shipping",
      description: "Professional containerization and shipping with real-time tracking from US to Indian ports.",
      step: "03"
    },
    {
      icon: MapPin,
      title: "Customs Clearance",
      description: "Expert handling of customs procedures and clearance at Indian ports.",
      step: "04"
    },
    {
      icon: CheckCircle2,
      title: "Final Delivery",
      description: "Door-to-door delivery to your construction site with complete handover documentation.",
      step: "05"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, step-by-step journey from US yards to your construction site
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 text-center">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  
                  <div className="mt-4 mb-6">
                    <div className="inline-flex p-4 rounded-2xl bg-gray-50">
                      <step.icon className="text-primary" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
