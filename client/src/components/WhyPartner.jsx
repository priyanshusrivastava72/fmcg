import React from 'react';
import { motion } from 'framer-motion';
import {
  Award, Network, Megaphone, Truck, Headset,
  ShieldCheck, Package, TrendingUp, IndianRupee, Users, ArrowRight, Star
} from 'lucide-react';
import warehouseImg from '../assets/warehouse_handshake.png';

const features = [
  {
    icon: Award,
    title: '30+ Years of Experience',
    desc: 'Three decades of excellence in FMCG distribution with deep market understanding and trusted relationships.',
  },
  {
    icon: Network,
    title: 'Strong Distribution Network',
    desc: 'Pan India presence with robust supply chain and a wide network of distributors and retailers.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Advertising Support',
    desc: 'We provide marketing materials, digital support, and promotions to help you grow faster.',
  },
  {
    icon: Truck,
    title: 'Timely Delivery & Best Quality',
    desc: 'Efficient logistics and quality assurance to ensure you get the best products, always on time.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    desc: 'Our expert team is always ready to assist you at every step of your business journey.',
  },
];

const statsBar = [
  { icon: ShieldCheck, value: '100%', title: 'Genuine Products', desc: 'Original products from trusted brands' },
  { icon: Package,    value: '5000+', title: 'Happy Partners',   desc: 'Growing together across India' },
  { icon: TrendingUp, value: 'High',  title: 'Profit Margins',  desc: 'Better margins and sustainable growth' },
  { icon: Headset,    value: '24/7',  title: 'Partner Support', desc: 'Always here to help you succeed' },
  { icon: IndianRupee,value: 'Reliable', title: 'Payments',     desc: 'Transparent & timely transactions' },
];

const WhyPartner = () => {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#007A4D] text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-6 h-px bg-[#007A4D]"></div>
            <Star size={13} className="fill-[#007A4D]" />
            WHY PARTNER WITH US
            <div className="w-6 h-px bg-[#007A4D]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            The Right Partner for{' '}
            <span className="text-[#007A4D]">Long-Term Success</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            We go beyond distribution – we build partnerships that grow together.
            Here's what makes us the preferred choice of thousands of partners.
          </p>
        </motion.div>

        {/* Main Content: Left Features + Right Image */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left: Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((f, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EAF5EE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#007A4D] transition-colors duration-300">
                  <f.icon size={20} className="text-[#007A4D] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="border-b border-gray-100 pb-5 flex-1">
                  <h4 className="text-base font-bold text-gray-900 mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Image with Quote Overlay */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src={warehouseImg}
              alt="FMCG Distribution Partnership"
              className="w-full h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d22]/90 via-[#003d22]/30 to-transparent" />

            {/* Quote Card */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-[#005a31]/80 backdrop-blur-sm border border-white/10 rounded-xl p-5 flex items-start gap-3">
                <span className="text-white text-5xl font-black leading-none mt-[-6px] opacity-60">"</span>
                <p className="text-white text-sm font-semibold leading-relaxed">
                  Our success is built on trust, commitment, and the success of our partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Dark Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#004d2c] rounded-2xl px-8 py-7"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {statsBar.map((s, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <s.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-lg leading-tight">{s.value}</p>
                  <p className="text-white font-bold text-sm">{s.title}</p>
                  <p className="text-green-300 text-xs mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#EAF5EE] flex items-center justify-center flex-shrink-0">
              <Users size={26} className="text-[#007A4D]" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-gray-900">
                Ready to <span className="text-[#007A4D]">Grow Your Business?</span>
              </h4>
              <p className="text-gray-500 text-sm">
                Join thousands of successful partners and start your journey with us today.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a
              href="#apply"
              className="flex items-center gap-2 bg-[#007A4D] hover:bg-[#005a37] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
            >
              Become a Distributor <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border-2 border-[#007A4D] text-[#007A4D] hover:bg-[#EAF5EE] px-6 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
            >
              Contact Sales Team <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyPartner;
