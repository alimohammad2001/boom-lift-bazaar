
import React from 'react';
import { Search } from 'lucide-react';

const EmptyState: React.FC = () => {
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 mb-4">
        <Search size={48} className="mx-auto" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No machines found</h3>
      <p className="text-gray-600">Try adjusting your search terms or filters</p>
    </div>
  );
};

export default EmptyState;
