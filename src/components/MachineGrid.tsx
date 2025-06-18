
import React from 'react';
import MachineCard from './MachineCard';

interface Machine {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  hours: number;
  liftHeight: string;
  price: number;
  status: 'In US' | 'In Transit' | 'In India' | 'Sold';
  imageUrl: string;
  images?: string[];
  condition: string;
  location: string;
}

interface MachineGridProps {
  machines: Machine[];
  viewMode: 'grid' | 'list';
}

const MachineGrid: React.FC<MachineGridProps> = ({ machines, viewMode }) => {
  if (viewMode === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
        {machines.map((machine) => (
          <MachineCard key={machine.id} machine={machine} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {machines.map((machine) => (
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
  );
};

export default MachineGrid;
