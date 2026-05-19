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
import Founder from '../components/Founder';
import Testimonials from '../components/Testimonials';
import ScrollToTop from '../components/ScrollToTop';
import MobileStickyCTA from '../components/MobileStickyCTA';
import WhatsAppWidget from '../components/WhatsAppWidget';

const Home = () => {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <Navbar />
      <Hero />
      <TrustStats />
      <Brands />
      <Founder />
      <Products />
      <Services />
      <Testimonials />
      <Process />
      <WhyPartner />
      <LeadForm />
      <CTA />
      <Footer />
      <ScrollToTop />
      <MobileStickyCTA />
      <WhatsAppWidget />
    </div>
  );
};

export default Home;
