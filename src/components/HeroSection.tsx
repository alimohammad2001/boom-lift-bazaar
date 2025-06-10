
import React from 'react';
import { Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Premium Used <span className="text-primary">Boom Lifts</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-300 max-w-3xl mx-auto">
          Sourced from the US, delivered to India. Quality machinery for your construction needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by model, year, or manufacturer..."
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
