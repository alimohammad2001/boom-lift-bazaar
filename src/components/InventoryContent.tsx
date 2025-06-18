
import React, { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import MachineCard from './MachineCard';
import InventoryFilters from './InventoryFilters';

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
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <span>HOME</span> <span className="mx-2">{'>'}</span> <span className="text-gray-900 font-medium">LIFTS FOR SALE</span>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Lifts For Sale</h1>
              <p className="text-gray-600">
                1 - 28 of {filteredMachines.length},082 Listings
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-900 transition-colors">
                HighLow/Average
              </button>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Enter Keywords"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition-colors">
                Search
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Sort Options */}
              <div className="flex bg-gray-100 rounded overflow-hidden">
                <button className="px-4 py-2 bg-white shadow-sm text-sm">Rent</button>
                <button className="px-4 py-2 text-gray-600 text-sm hover:bg-white transition-colors">All</button>
              </div>
              
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
              
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>
      </div>

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
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {filteredMachines.map((machine) => (
                  <MachineCard key={machine.id} machine={machine} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMachines.map((machine) => (
                  <div key={machine.id} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-6">
                      <img
                        src={machine.imageUrl}
                        alt={`${machine.manufacturer} ${machine.model}`}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {machine.year} {machine.manufacturer} {machine.model}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <span>{machine.hours.toLocaleString()} hrs</span>
                          <span>{machine.liftHeight}</span>
                          <span>{machine.location}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            machine.status === 'In US' ? 'bg-blue-100 text-blue-800' :
                            machine.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' :
                            machine.status === 'In India' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {machine.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-800 mb-3">
                          USD ${machine.price.toLocaleString()}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900 transition-colors text-sm">
                            View Details
                          </button>
                          <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:bg-red-800 hover:text-white transition-colors text-sm">
                            Apply for Financing
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {filteredMachines.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No machines found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
