
import React from 'react';

interface InventoryHeaderProps {
  totalCount: number;
}

const InventoryHeader: React.FC<InventoryHeaderProps> = ({ totalCount }) => {
  return (
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
              1 - 28 of {totalCount},082 Listings
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-red-800 text-white px-4 py-2 rounded text-sm hover:bg-red-900 transition-colors">
              HighLow/Average
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
