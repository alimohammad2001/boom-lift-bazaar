
import React, { useState } from 'react';
import { Calendar, Clock, ArrowUp, Phone, Mail, MapPin, Eye, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

interface MachineCardProps {
  machine: Machine;
}

const MachineCard: React.FC<MachineCardProps> = ({ machine }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Create image array with fallback
  const images = machine.images || [machine.imageUrl];
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In US':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'In Transit':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In India':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Sold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-all duration-300">
      {/* Image Gallery */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${machine.manufacturer} ${machine.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Premium Listing Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
            Premium Listing
          </span>
        </div>
        
        {/* Favorite Button */}
        <button className="absolute top-2 right-2 bg-white/90 text-gray-600 hover:text-red-500 p-1.5 rounded-full transition-colors">
          <Heart size={14} />
        </button>

        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={14} />
            </button>
            
            {/* Image Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
            {machine.year} {machine.manufacturer} {machine.model}
          </h3>
          <p className="text-sm text-gray-600">{machine.location}</p>
        </div>
        
        <div className="text-xl font-bold text-red-800 mb-3">
          USD {formatPrice(machine.price).replace('$', '')}
        </div>
        
        {/* Specs */}
        <div className="space-y-1 mb-4 text-sm text-gray-600">
          <div>Hours: {machine.hours.toLocaleString()}</div>
          <div>Location: {machine.location}</div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
              Apply for Financing
            </button>
            <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition-colors">
              <Phone size={14} />
            </button>
          </div>
          <button className="w-full bg-red-800 text-white py-2 px-3 rounded text-sm hover:bg-red-900 transition-colors flex items-center justify-center gap-2">
            <Eye size={14} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MachineCard;
