
import React from 'react';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold mb-8">
            🇺🇸 → 🇮🇳 Premium Equipment Import Service
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="block">US Boom Lifts</span>
            <span className="block text-primary">to India</span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Professional construction equipment sourcing with complete transparency. 
            From inspection in US yards to delivery at your construction site.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/inventory"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
            >
              Browse Current Inventory
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <button className="border-2 border-white/30 hover:border-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <Truck className="text-primary mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-slate-300">Machines Delivered</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <Shield className="text-primary mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">100%</h3>
            <p className="text-slate-300">Quality Guaranteed</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <Clock className="text-primary mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-slate-300">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
