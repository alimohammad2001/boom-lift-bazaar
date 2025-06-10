
import React from 'react';
import { Search, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary rounded-lg rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary opacity-20 rounded-lg rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium">
                🚀 Premium Equipment Sourced from USA
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Quality
                <span className="block text-primary">Boom Lifts</span>
                <span className="block text-2xl md:text-3xl font-normal text-slate-300">
                  Delivered to India
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-lg">
                Professional construction equipment with complete transparency. 
                From sourcing in the US to delivery at your doorstep in India.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-slate-400">Units Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24</div>
                <div className="text-sm text-slate-400">Available Now</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-slate-400">Years Experience</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Browse Inventory
                <Search className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="border border-slate-600 hover:border-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                <Play className="mr-2" size={20} />
                Watch Process
              </button>
            </div>
          </div>

          {/* Right Column - Search Card */}
          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Find Your Machine</h3>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search by model, manufacturer..."
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <select className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm">
                    <option value="">All Brands</option>
                    <option value="jlg">JLG</option>
                    <option value="genie">Genie</option>
                    <option value="skyjack">Skyjack</option>
                  </select>
                  
                  <select className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm">
                    <option value="">Location</option>
                    <option value="us">In US</option>
                    <option value="transit">In Transit</option>
                    <option value="india">In India</option>
                  </select>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors">
                  Search Machines
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
