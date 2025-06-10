
import React from 'react';
import { TrendingUp, Shield, Clock, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Machines Delivered",
      description: "Successfully exported to India"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Quality Guaranteed",
      description: "Thoroughly inspected equipment"
    },
    {
      icon: Clock,
      number: "15+",
      label: "Years Experience",
      description: "In construction equipment"
    },
    {
      icon: Award,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Happy customers across India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex p-4 rounded-2xl bg-slate-100 group-hover:bg-primary/10 transition-colors duration-300 mb-4">
                <stat.icon className="text-primary" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
