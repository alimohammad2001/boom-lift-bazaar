
import React from 'react';
import Header from '../components/Header';
import InventoryContent from '../components/InventoryContent';
import Footer from '../components/Footer';

const Inventory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <InventoryContent />
      <Footer />
    </div>
  );
};

export default Inventory;
