
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
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
    },
    {
      id: 7,
      manufacturer: 'JLG',
      model: '800S',
      year: 2019,
      hours: 980,
      liftHeight: '80 ft',
      price: 42000,
      status: 'In US' as const,
      imageUrl: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      condition: 'Excellent'
    },
    {
      id: 8,
      manufacturer: 'Genie',
      model: 'S-60',
      year: 2020,
      hours: 650,
      liftHeight: '60 ft',
      price: 39500,
      status: 'In Transit' as const,
      imageUrl: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop',
      condition: 'Excellent'
    },
    {
      id: 9,
      manufacturer: 'Skyjack',
      model: 'SJ46AJ',
      year: 2017,
      hours: 1420,
      liftHeight: '46 ft',
      price: 24800,
      status: 'In India' as const,
      imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop',
      condition: 'Good'
    }
  ];

  const filteredMachines = sampleMachines.filter(machine =>
    machine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    machine.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Equipment Inventory</h1>
              <p className="text-gray-600 mt-2">
                {filteredMachines.length} machines available for export
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search by manufacturer or model..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* View Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
              
              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Filter size={16} />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80">
              <InventoryFilters />
            </div>
          )}
          
          {/* Main Content */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMachines.map((machine) => (
                  <MachineCard key={machine.id} machine={machine} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredMachines.map((machine) => (
                  <div key={machine.id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center gap-6">
                      <img
                        src={machine.imageUrl}
                        alt={`${machine.manufacturer} ${machine.model}`}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {machine.manufacturer} {machine.model}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-600 mt-2">
                          <span>{machine.year}</span>
                          <span>{machine.hours.toLocaleString()} hrs</span>
                          <span>{machine.liftHeight}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            machine.status === 'In US' ? 'bg-blue-100 text-blue-800' :
                            machine.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {machine.status}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ${machine.price.toLocaleString()}
                        </div>
                        <button className="mt-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryContent;
