
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MachineryExport</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for premium used construction equipment. 
              We source quality boom lifts from the US and deliver them to India 
              with complete transparency and professional service.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@machineryexport.com" className="flex items-center text-gray-300 hover:text-white">
                <Mail size={16} className="mr-2" />
                info@machineryexport.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#inventory" className="text-gray-300 hover:text-white transition-colors">Current Inventory</a></li>
              <li><a href="#sold" className="text-gray-300 hover:text-white transition-colors">Sold Units</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Boom Lifts</li>
              <li>Quality Inspection</li>
              <li>Shipping to India</li>
              <li>Documentation</li>
              <li>After-Sales Support</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 MachineryExport. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
