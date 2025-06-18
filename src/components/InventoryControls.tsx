
import React from 'react';
import { Search, Grid, List } from 'lucide-react';

interface InventoryControlsProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

const InventoryControls: React.FC<InventoryControlsProps> = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
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
  );
};

export default InventoryControls;
