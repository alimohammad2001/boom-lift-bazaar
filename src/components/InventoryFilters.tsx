
import React, { useState } from 'react';
import { X, RotateCcw } from 'lucide-react';

const InventoryFilters = () => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="p-6 space-y-8">
        {/* Manufacturer */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Manufacturer</label>
          <div className="space-y-3">
            {['JLG', 'Genie', 'Skyjack', 'Haulotte', 'Terex', 'Manitou'].map((brand) => (
              <label key={brand} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{brand}</span>
                <span className="ml-auto text-xs text-gray-400">(12)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Year Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Year Range</label>
          <div className="space-y-3">
            {['2020-2024', '2015-2019', '2010-2014', '2005-2009', 'Before 2005'].map((range) => (
              <label key={range} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{range}</span>
                <span className="ml-auto text-xs text-gray-400">(8)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Location Status</label>
          <div className="space-y-3">
            {[
              { label: 'In US', color: 'text-blue-600' },
              { label: 'In Transit', color: 'text-yellow-600' },
              { label: 'In India', color: 'text-green-600' },
              { label: 'Sold', color: 'text-gray-500' }
            ].map((status) => (
              <label key={status.label} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className={`ml-3 text-sm font-medium ${status.color}`}>{status.label}</span>
                <span className="ml-auto text-xs text-gray-400">(15)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Lift Height */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Lift Height</label>
          <div className="space-y-3">
            {['Under 30 ft', '30-40 ft', '40-50 ft', '50-60 ft', '60-80 ft', 'Over 80 ft'].map((height) => (
              <label key={height} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{height}</span>
                <span className="ml-auto text-xs text-gray-400">(6)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Price Range (USD)</label>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min Price</label>
                <input
                  type="number"
                  placeholder="0"
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Max Price</label>
                <input
                  type="number"
                  placeholder="100,000"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Quick Price Filters */}
            <div className="flex flex-wrap gap-2">
              {['Under $20K', '$20K-$30K', '$30K-$40K', 'Over $40K'].map((range) => (
                <button
                  key={range}
                  className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Condition</label>
          <div className="space-y-3">
            {[
              { label: 'Excellent', color: 'text-green-600' },
              { label: 'Very Good', color: 'text-blue-600' },
              { label: 'Good', color: 'text-yellow-600' },
              { label: 'Fair', color: 'text-orange-600' }
            ].map((condition) => (
              <label key={condition.label} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className={`ml-3 text-sm font-medium ${condition.color}`}>{condition.label}</span>
                <span className="ml-auto text-xs text-gray-400">(9)</span>
              </label>
            ))}
          </div>
        </div>

        {/* Hours Range */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-4">Operating Hours</label>
          <div className="space-y-3">
            {['Under 500 hrs', '500-1000 hrs', '1000-1500 hrs', '1500-2000 hrs', 'Over 2000 hrs'].map((hours) => (
              <label key={hours} className="flex items-center group cursor-pointer">
                <input 
                  type="checkbox" 
                  className="rounded border-gray-300 text-primary focus:ring-primary focus:ring-offset-0 h-4 w-4" 
                />
                <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">{hours}</span>
                <span className="ml-auto text-xs text-gray-400">(4)</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-100 space-y-3">
        <button className="w-full bg-primary text-white py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
          Apply Filters
        </button>
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
          <RotateCcw size={16} />
          Reset All Filters
        </button>
      </div>
    </div>
  );
};

export default InventoryFilters;
