
import React from 'react';
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
      condition: 'Excellent'
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
      condition: 'Very Good'
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
      condition: 'Good'
    },
    {
      id: 4,
      manufacturer: 'JLG',
      model: '450AJ',
      year: 2020,
      hours: 750,
      liftHeight: '45 ft',
      price: 38500,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1587824679811-c21dabb3e9e9?w=800&h=600&fit=crop',
      condition: 'Excellent'
    },
    {
      id: 5,
      manufacturer: 'Genie',
      model: 'Z-34/22N',
      year: 2016,
      hours: 1890,
      liftHeight: '40 ft',
      price: 22500,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop',
      condition: 'Good'
    },
    {
      id: 6,
      manufacturer: 'Haulotte',
      model: 'HA16SPX',
      year: 2018,
      hours: 1100,
      liftHeight: '52 ft',
      price: 29800,
      status: 'In Transit' as const,
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      condition: 'Very Good'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleMachines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View All Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMachines;
