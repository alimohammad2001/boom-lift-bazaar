import React, { useState } from 'react';
import InventoryHeader from './InventoryHeader';
import InventoryControls from './InventoryControls';
import InventoryFilters from './InventoryFilters';
import MachineGrid from './MachineGrid';
import EmptyState from './EmptyState';

const InventoryContent = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true);

  const sampleMachines = [
    {
      id: 1,
      manufacturer: 'Caterpillar',
      model: 'GP50M',
      year: 2017,
      hours: 1240,
      liftHeight: '50 ft',
      price: 30000,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
      ],
      condition: 'Excellent',
      location: 'Pocatello, Idaho'
    },
    {
      id: 2,
      manufacturer: 'CMC',
      model: '921HD+ ARBOR PRO',
      year: 2020,
      hours: 1410,
      liftHeight: '92 ft',
      price: 112000,
      status: 'In Transit' as const,
      imageUrl: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587824679811-c21dabb3e9e9?w=800&h=600&fit=crop'
      ],
      condition: 'Very Good',
      location: 'Haslet, Texas'
    },
    {
      id: 3,
      manufacturer: 'JLG',
      model: 'X700AJ',
      year: 2015,
      hours: 750,
      liftHeight: '70 ft',
      price: 89500,
      status: 'In India' as const,
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      condition: 'Good',
      location: 'Hagerstown, Maryland'
    },
    {
      id: 4,
      manufacturer: 'LoadMac',
      model: '865',
      year: 2024,
      hours: 3,
      liftHeight: '86 ft',
      price: 89900,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1587824679811-c21dabb3e9e9?w=800&h=600&fit=crop',
      condition: 'New',
      location: 'Grabil, Indiana'
    },
    {
      id: 5,
      manufacturer: 'Magni',
      model: 'RTH6.35VC',
      year: 2022,
      hours: 890,
      liftHeight: '63 ft',
      price: 35000,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop',
      condition: 'Excellent',
      location: 'Oklahoma City, OK'
    },
    {
      id: 6,
      manufacturer: 'Merlo Roto',
      model: '50.35S PLUS',
      year: 2023,
      hours: 1200,
      liftHeight: '50 ft',
      price: 48000,
      status: 'In Transit' as const,
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      condition: 'Very Good',
      location: 'Phoenix, Arizona'
    },
    {
      id: 7,
      manufacturer: 'UHI',
      model: 'UT1625',
      year: 2025,
      hours: 120,
      liftHeight: '16 ft',
      price: 28500,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      condition: 'New',
      location: 'Denver, Colorado'
    },
    {
      id: 8,
      manufacturer: 'Case',
      model: '586H',
      year: 2016,
      hours: 2450,
      liftHeight: '58 ft',
      price: 45000,
      status: 'Sold' as const,
      imageUrl: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      condition: 'Good',
      location: 'Rough Terrain Forklifts'
    }
  ];

  const filteredMachines = sampleMachines.filter(machine =>
    machine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <InventoryHeader totalCount={filteredMachines.length} />
      <InventoryControls 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 shrink-0">
              <InventoryFilters />
            </div>
          )}
          
          {/* Main Content */}
          <div className="flex-1">
            {filteredMachines.length === 0 ? (
              <EmptyState />
            ) : (
              <MachineGrid machines={filteredMachines} viewMode={viewMode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
