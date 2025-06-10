
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">MachineryExport</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#inventory" className="text-gray-700 hover:text-primary transition-colors">Inventory</a>
            <a href="#sold" className="text-gray-700 hover:text-primary transition-colors">Sold Units</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Currency Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button className="px-3 py-1 text-sm font-medium bg-primary text-white rounded-md">USD</button>
              <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary">INR</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#inventory" className="text-gray-700 hover:text-primary transition-colors">Inventory</a>
              <a href="#sold" className="text-gray-700 hover:text-primary transition-colors">Sold Units</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <div className="flex bg-gray-100 rounded-lg p-1 w-fit">
                <button className="px-3 py-1 text-sm font-medium bg-primary text-white rounded-md">USD</button>
                <button className="px-3 py-1 text-sm font-medium text-gray-700 hover:text-primary">INR</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
