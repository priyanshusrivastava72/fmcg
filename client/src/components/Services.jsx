import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Megaphone, Users, CheckCircle2, ArrowRight } from 'lucide-react';
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
  return (
    <section id="services" className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F3EF] text-[#007A4D] text-sm font-bold tracking-wide mb-6">
            <div className="w-4 h-[2px] bg-[#007A4D]"></div>
            OUR BUSINESS SERVICES
            <div className="w-4 h-[2px] bg-[#007A4D]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Services That <span className="text-[#007A4D]">Drive Your Growth</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide end-to-end support to help our partners grow their business faster and stronger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 flex flex-col h-full relative overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} ${service.iconColor} flex items-center justify-center flex-shrink-0`}>
                  <service.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#111827] mb-2">{service.title}</h3>
                  <div className="w-12 h-1 bg-[#007A4D] rounded-full opacity-20"></div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.desc}
              </p>

              <div className="space-y-3 mb-8 flex-grow">
                {service.checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#007A4D]" />
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="relative h-40 mt-auto">
                <button className={`absolute bottom-0 left-0 px-6 py-3 rounded-xl text-white font-bold flex items-center gap-2 hover:opacity-90 transition-opacity z-10 ${service.btnColor}`}>
                  {service.btnText}
                  <ArrowRight size={18} />
                </button>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="absolute bottom-0 right-0 w-48 h-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
