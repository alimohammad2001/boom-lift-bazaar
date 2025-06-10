
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedMachines from './FeaturedMachines';
import SearchFilters from './SearchFilters';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SearchFilters />
      <FeaturedMachines />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default HomePage;
