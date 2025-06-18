
import React from 'react';

const InventoryFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Filters</h3>
      
      <div className="space-y-6">
        {/* Manufacturer */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Manufacturer</label>
          <div className="space-y-2">
            {['JLG', 'Genie', 'Skyjack', 'Haulotte', 'Terex'].map((brand) => (
              <label key={brand} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-600">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Year Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Year</label>
          <div className="space-y-2">
            {['2020+', '2015-2019', '2010-2014', '2005-2009'].map((range) => (
              <label key={range} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-600">{range}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Location Status</label>
          <div className="space-y-2">
            {['In US', 'In Transit', 'In India'].map((status) => (
              <label key={status} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-600">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Lift Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Lift Height</label>
          <div className="space-y-2">
            {['30-40 ft', '40-50 ft', '50-60 ft', '60+ ft'].map((height) => (
              <label key={height} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-600">{height}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
          <div className="space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="number"
                placeholder="Max"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Condition</label>
          <div className="space-y-2">
            {['Excellent', 'Very Good', 'Good', 'Fair'].map((condition) => (
              <label key={condition} className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                <span className="ml-2 text-sm text-gray-600">{condition}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t space-y-3">
          <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
            Apply Filters
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryFilters;
