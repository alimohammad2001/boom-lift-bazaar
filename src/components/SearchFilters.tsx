
import React from 'react';
import { Filter } from 'lucide-react';

const SearchFilters = () => {
  return (
    <section id="inventory" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Current Inventory</h2>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Filter size={16} />
            <span>24 machines available</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Manufacturer</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Brands</option>
                <option>JLG</option>
                <option>Genie</option>
                <option>Skyjack</option>
                <option>Haulotte</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any Year</option>
                <option>2020+</option>
                <option>2015-2019</option>
                <option>2010-2014</option>
                <option>2005-2009</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Locations</option>
                <option>In US</option>
                <option>In Transit</option>
                <option>In India</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Lift Height</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any Height</option>
                <option>30-40 ft</option>
                <option>40-50 ft</option>
                <option>50-60 ft</option>
                <option>60+ ft</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Any Price</option>
                <option>$10k - $20k</option>
                <option>$20k - $30k</option>
                <option>$30k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
