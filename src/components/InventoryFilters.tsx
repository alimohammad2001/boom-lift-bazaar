
import React, { useState } from 'react';
import { X, RotateCcw } from 'lucide-react';

const InventoryFilters = () => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200 bg-gray-900 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">Applied Filters</h3>
        <button className="bg-red-800 text-white px-3 py-1 rounded text-sm mt-2">
          Lifts
        </button>
      </div>
      
      <div className="p-4 space-y-6">
        {/* Save Search */}
        <div className="border-b border-gray-200 pb-4">
          <div className="flex items-center gap-2 text-sm">
            <button className="text-blue-600 hover:underline">Save This Search</button>
            <span className="text-gray-400">|</span>
            <button className="text-blue-600 hover:underline">Saved Searches</button>
          </div>
        </div>

        {/* Quick Search */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Search</h4>
          <input
            type="text"
            placeholder="Enter Keyword(s)"
            className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="w-full mt-2 bg-gray-800 text-white py-2 px-4 rounded text-sm hover:bg-gray-900 transition-colors">
            Search
          </button>
        </div>

        {/* Category */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Category - Applied
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Manufacturer */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Manufacturer
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Year */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Year
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Serial # */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Serial #
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Price */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Price
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Hours
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Horsepower */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Horsepower
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* ROPS */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            ROPS
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Drive */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Drive
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Condition */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Condition
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* State */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            State
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Country */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Country
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Certified */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Certified
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>

        {/* Search Results By Date */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center justify-between cursor-pointer">
            Search Results By Date
            <span className="text-gray-400">{'>'}</span>
          </h4>
        </div>
      </div>

      {/* Additional Filters */}
      <div className="p-4 border-t border-gray-200 bg-gray-900 text-white rounded-b-lg">
        <h4 className="font-semibold text-center">Additional Filters</h4>
      </div>
    </div>
  );
};

export default InventoryFilters;
