
import React, { useState } from 'react';
import { Search, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';
import MachineCard from './MachineCard';
import InventoryFilters from './InventoryFilters';

const InventoryContent = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

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
      images: [
        'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop'
      ],
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
      images: [
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587824679811-c21dabb3e9e9?w=800&h=600&fit=crop'
      ],
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
      condition: 'Excellent',
      location: 'Florida, US'
    },
    {
      id: 5,
      manufacturer: 'Genie',
      model: 'Z-34/22N',
      year: 2016,
      hours: 1890,
      liftHeight: '40 ft',
      price: 22500,
      status: 'Sold' as const,
      imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop',
      condition: 'Good',
      location: 'Delhi, India'
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
      condition: 'Very Good',
      location: 'New York, US'
    }
  ];

  const filteredMachines = sampleMachines.filter(machine =>
    machine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Equipment Inventory</h1>
              <p className="text-lg text-gray-600">
                {filteredMachines.length} premium machines available • US to India import specialists
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 lg:min-w-96">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search manufacturer, model..."
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Controls */}
              <div className="flex gap-2">
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      viewMode === 'grid' ? 'bg-white shadow-sm text-primary' : 'text-gray-600'
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-3 py-2 rounded-md transition-colors ${
                      viewMode === 'list' ? 'bg-white shadow-sm text-primary' : 'text-gray-600'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
                
                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                    showFilters ? 'bg-primary text-white border-primary' : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <SlidersHorizontal size={16} />
                  <span className="hidden sm:inline">Filters</span>
                </button>
              </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
                        <div className="text-2xl font-bold text-primary mb-3">
                          ${machine.price.toLocaleString()}
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                            View Details
                          </button>
                          <button className="border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
                            Reserve
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
