import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Store, Map, Package, ShieldCheck } from 'lucide-react';
import cert1 from '../assets/Certifications/1.webp';
import cert2 from '../assets/Certifications/2.webp';
import cert3 from '../assets/Certifications/3.webp';
import cert4 from '../assets/Certifications/4.webp';
import cert5 from '../assets/Certifications/msme.webp';

const stats = [
  {
    id: 1,
    value: '30+',
    title: 'Years of Experience',
    desc: 'Three decades of excellence in FMCG distribution',
    icon: Award,
  },
  {
    id: 2,
    value: '500+',
    title: 'Distributors Pan India',
    desc: 'Strong network of distributors in every major state',
    icon: Users,
  },
  {
    id: 3,
    value: '1000+',
    title: 'Retailers Served',
    desc: 'Empowering thousands of retailers every day',
    icon: Store,
  },
  {
    id: 4,
    value: '6+',
    title: 'States Covered',
    desc: 'Extensive reach across the length and breadth of India',
    icon: Map,
  },
  {
    id: 5,
    value: '20,000+',
    title: 'Orders Delivered',
    desc: 'Reliable and timely delivery you can count on',
    icon: Package,
  },
  {
    id: 6,
    value: '100%',
    title: 'Commitment to Quality',
    desc: 'Genuine products, best prices, and trusted service',
    icon: ShieldCheck,
  },
];

const certifications = [
  { name: 'FSSAI', label: 'Certified', image: cert1 },
  { name: 'GMP', label: 'Certified', image: cert2 },
  { name: 'ISO 9001:2015', label: 'Certified', image: cert3 },
  { name: 'HACCP', label: 'Certified', image: cert4 },
  { name: 'MSME', label: 'Registered', image: cert5 },
];

const TrustStats = () => {
  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-[#EAF5EE] text-[#007A4D] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
            <ShieldCheck size={14} />
            OUR TRUST, OUR STRENGTH
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Built on <span className="text-[#007A4D]">Trust.</span> Driven by{' '}
            <span className="text-[#E33E2B]">Excellence.</span>
          </h2>
          <p className="text-gray-700 font-bold max-w-2xl mx-auto text-base leading-relaxed">
            For over three decades, we have been committed to delivering quality FMCG products
            and building long-term relationships across India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] flex items-center justify-center mb-5 group-hover:bg-[#007A4D] transition-colors duration-300">
                <stat.icon size={28} className="text-[#007A4D] group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-4xl font-extrabold text-[#007A4D] mb-1 tracking-tight">{stat.value}</div>
              <div className="text-base font-bold text-gray-900 mb-3">{stat.title}</div>
              <p className="text-gray-600 font-bold text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-[#F7FAF8] rounded-2xl px-8 py-8 border border-gray-100"
        >
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#007A4D]/30"></div>
            <p className="text-center text-lg font-bold text-gray-800 whitespace-nowrap">
              Certified. Compliant. Committed.
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#007A4D]/30"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                  <img 
                    src={cert.image} 
                    alt={cert.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-gray-900">{cert.name}</p>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">{cert.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustStats;
