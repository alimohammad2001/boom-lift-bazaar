
import React from 'react';
import { Users, Globe, Award, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Machines Exported",
      description: "Successfully delivered across India",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      number: "200+",
      label: "Happy Customers",
      description: "Satisfied construction companies",
      color: "bg-green-500"
    },
    {
      icon: Globe,
      number: "25+",
      label: "US Locations",
      description: "Sourcing from major US yards",
      color: "bg-purple-500"
    },
    {
      icon: Award,
      number: "98%",
      label: "Success Rate",
      description: "On-time delivery guarantee",
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full border border-gray-100">
                <div className={`inline-flex p-4 rounded-2xl ${stat.color} mb-6`}>
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
