
import React from 'react';
import { Calendar, Clock, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import MachineCard from './MachineCard';

const FeaturedMachines = () => {
  const sampleMachines = [
    {
      id: 1,
      manufacturer: 'JLG',
      model: '600SJ',
      year: 2018,
      hours: 1250,
      liftHeight: '60 ft',
      price: 28500,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      condition: 'Excellent',
      location: 'California, US'
    },
    {
      id: 2,
      manufacturer: 'Genie',
      model: 'S-45',
      year: 2019,
      hours: 890,
      liftHeight: '45 ft',
      price: 32000,
      status: 'In Transit' as const,
      imageUrl: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      condition: 'Very Good',
      location: 'Texas, US'
    },
    {
      id: 3,
      manufacturer: 'Skyjack',
      model: 'SJ66T',
      year: 2017,
      hours: 1560,
      liftHeight: '66 ft',
      price: 26800,
      status: 'In India' as const,
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      condition: 'Good',
      location: 'Mumbai, India'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Equipment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our hand-picked selection of premium aerial work platforms, ready for immediate shipping from US to India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleMachines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/inventory" 
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Equipment
            <ArrowUp className="ml-2 rotate-45" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMachines;
