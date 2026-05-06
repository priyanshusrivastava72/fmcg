import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Products from '../components/Products';
import Services from '../components/Services';
import Process from '../components/Process';
import WhyPartner from '../components/WhyPartner';
import TrustStats from '../components/TrustStats';
import LeadForm from '../components/LeadForm';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustStats />
      <Brands />
      <Products />
      <Services />
      <Process />
      <WhyPartner />
      <LeadForm />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
