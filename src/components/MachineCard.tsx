
import React from 'react';
import { Calendar, Clock, ArrowUp, Phone, Mail } from 'lucide-react';

interface Machine {
  id: number;
  manufacturer: string;
  model: string;
  year: number;
  hours: number;
  liftHeight: string;
  price: number;
  status: 'In US' | 'In Transit' | 'In India';
  imageUrl: string;
  condition: string;
}

interface MachineCardProps {
  machine: Machine;
}

const MachineCard: React.FC<MachineCardProps> = ({ machine }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In US':
        return 'bg-blue-100 text-blue-800';
      case 'In Transit':
        return 'bg-yellow-100 text-yellow-800';
      case 'In India':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img
          src={machine.imageUrl}
          alt={`${machine.manufacturer} ${machine.model}`}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(machine.status)}`}>
            {machine.status}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white text-gray-800 px-2 py-1 rounded text-sm font-medium">
            {machine.condition}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {machine.manufacturer} {machine.model}
        </h3>
        
        {/* Specs */}
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{machine.year}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-2" />
            <span>{machine.hours.toLocaleString()} hrs</span>
          </div>
          <div className="flex items-center">
            <ArrowUp size={16} className="mr-2" />
            <span>{machine.liftHeight}</span>
          </div>
          <div className="text-2xl font-bold text-primary">
            {formatPrice(machine.price)}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-6">
          <button className="flex-1 bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
            Reserve
          </button>
          <button className="flex items-center justify-center bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors">
            <Phone size={18} />
          </button>
          <button className="flex items-center justify-center bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors">
            <Mail size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineCard;
