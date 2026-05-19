import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Megaphone, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import AdvertisingSupportModal from './AdvertisingSupportModal';
import SalesTeamAssistanceModal from './SalesTeamAssistanceModal';
import truckImg from '../assets/Service/Untitled design (3).png';
import adImg from '../assets/Service/Untitled design (4).png';
import salesImg from '../assets/Service/Untitled design (5).png';

const services = [
  {
    id: 1,
    title: 'Distributor Partnership',
    desc: 'Become our distributor and get access to top FMCG brands with best margins, credit support and timely deliveries.',
    icon: Handshake,
    image: truckImg,
    checklist: [
      'Attractive Profit Margins',
      'Credit Facility Available',
      'Dedicated Relationship Manager',
      'Regular Product Supply'
    ],
    btnText: 'Apply Now',
    btnColor: 'bg-[#007A4D]',
    iconColor: 'text-[#007A4D]',
    iconBg: 'bg-[#E6F3EF]'
  },
  {
    id: 2,
    title: 'Advertising Support',
    desc: 'We support your business with impactful marketing and advertising campaigns to boost your sales.',
    icon: Megaphone,
    image: adImg,
    checklist: [
      'Promotional Materials',
      'Digital Marketing Support',
      'Festival & Seasonal Campaigns',
      'Brand Building Support'
    ],
    btnText: 'Get Marketing Help',
    btnColor: 'bg-[#E33E2B]',
    iconColor: 'text-[#E33E2B]',
    iconBg: 'bg-[#FDECEC]'
  },
  {
    id: 3,
    title: 'Sales Team Assistance',
    desc: 'Our experienced sales team helps you expand your market reach and grow your business faster.',
    icon: Users,
    image: salesImg,
    checklist: [
      'Market Expansion Support',
      'Sales Training & Guidance',
      'Beat Planning & Execution',
      'On-ground Assistance'
    ],
    btnText: 'Contact Sales Team',
    btnColor: 'bg-[#007A4D]',
    iconColor: 'text-[#007A4D]',
    iconBg: 'bg-[#E6F3EF]'
  },
];

const Services = () => {
  const [isAdModalOpen, setIsAdModalOpen] = useState(false);
  const [isSalesModalOpen, setIsSalesModalOpen] = useState(false);

  const handleButtonClick = (serviceId) => {
    if (serviceId === 1) {
      const element = document.getElementById('apply');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (serviceId === 2) {
      setIsAdModalOpen(true);
    } else if (serviceId === 3) {
      setIsSalesModalOpen(true);
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[11px] font-black text-green-700 tracking-[0.2em] uppercase">Value Added Services</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-[1.1]">
            Services That <span className="text-green-600">Drive Your Growth</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 font-bold leading-relaxed max-w-2xl mx-auto">
            We provide comprehensive end-to-end support to help our partners <br className="hidden md:block" />
            scale their distribution business faster and stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[48px] p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-2xl hover:border-green-500/20 transition-all duration-500"
            >
              {/* Card Background Glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 ${service.iconBg}`}></div>

              <div className="flex items-center gap-5 mb-8">
                <div className={`w-16 h-16 rounded-3xl ${service.iconBg} ${service.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500 shadow-lg shadow-black/5`}>
                  <service.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tight leading-tight">{service.title}</h3>
              </div>

              <p className="text-gray-600 font-bold mb-10 leading-relaxed text-base">
                {service.desc}
              </p>

              <div className="space-y-4 mb-12 flex-grow">
                {service.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group/item">
                    <div className={`w-5 h-5 rounded-full ${service.iconBg} flex items-center justify-center`}>
                      <CheckCircle2 size={12} className={service.iconColor} strokeWidth={3} />
                    </div>
                    <span className="text-gray-800 font-extrabold text-sm tracking-tight group-hover/item:text-green-700 transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-auto pt-10">
                <button 
                  onClick={() => handleButtonClick(service.id)}
                  className={`w-full py-5 rounded-2xl text-white font-black text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:opacity-90 transition-all z-10 shadow-xl shadow-black/10 ${service.btnColor}`}
                >
                  {service.btnText}
                  <ArrowRight size={20} strokeWidth={3} />
                </button>
                
                {/* Image integration - subtle and cleaner */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 group-hover:opacity-30 group-hover:scale-125 transition-all duration-700 pointer-events-none -z-10">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-contain grayscale"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AdvertisingSupportModal 
        isOpen={isAdModalOpen} 
        onClose={() => setIsAdModalOpen(false)} 
      />
      <SalesTeamAssistanceModal
        isOpen={isSalesModalOpen}
        onClose={() => setIsSalesModalOpen(false)}
      />
    </section>
  );
};

export default Services;
