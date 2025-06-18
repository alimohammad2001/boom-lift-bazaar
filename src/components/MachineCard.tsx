
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
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${machine.manufacturer} ${machine.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Image Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={16} />
            </button>
            
            {/* Image Dots */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(machine.status)}`}>
            {machine.status}
          </span>
        </div>
        
        {/* Condition Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-sm font-medium">
            {machine.condition}
          </span>
        </div>

        {/* Favorite Button */}
        <button className="absolute top-3 right-12 bg-white/90 text-gray-600 hover:text-red-500 p-2 rounded-full transition-colors">
          <Heart size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
            {machine.year} {machine.manufacturer} {machine.model}
          </h3>
          <div className="text-2xl font-bold text-primary">
            {formatPrice(machine.price)}
          </div>
        </div>
        
        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <Clock size={14} className="mr-2 text-gray-400" />
            <span>{machine.hours.toLocaleString()} hrs</span>
          </div>
          <div className="flex items-center text-gray-600">
            <ArrowUp size={14} className="mr-2 text-gray-400" />
            <span>{machine.liftHeight}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={14} className="mr-2 text-gray-400" />
            <span>{machine.year}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={14} className="mr-2 text-gray-400" />
            <span>{machine.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/machine/${machine.id}`}
            className="flex-1 bg-primary text-white py-2.5 px-4 rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
          >
            View Details
          </Link>
          <button className="bg-green-500 text-white px-4 py-2.5 rounded-lg hover:bg-green-600 transition-colors">
            <Mail size={16} />
          </button>
          <button className="bg-blue-500 text-white px-4 py-2.5 rounded-lg hover:bg-blue-600 transition-colors">
            <Phone size={16} />
          </button>
        </div>
        
        <button className="w-full mt-3 border-2 border-primary text-primary py-2.5 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors font-medium">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default MachineCard;
