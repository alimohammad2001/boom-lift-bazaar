
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ProcessSection from './ProcessSection';
import SearchFilters from './SearchFilters';
import FeaturedMachines from './FeaturedMachines';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProcessSection />
      <StatsSection />
      <SearchFilters />
      <FeaturedMachines />
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default HomePage;
