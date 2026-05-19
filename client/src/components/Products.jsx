import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutGrid, 
  Coffee, 
  Cookie, 
  Sparkles, 
  Home, 
  ArrowRight 
} from 'lucide-react';

import p10 from '../assets/Products/10.webp';
import p11 from '../assets/Products/11.webp';
import p13 from '../assets/Products/13.webp';
import p14 from '../assets/Products/14.webp';
import p15 from '../assets/Products/15.webp';
import p18 from '../assets/Products/18.webp';
import p19 from '../assets/Products/19.webp';
import p_rupa_det from '../assets/Products/Untitled design (7).webp';

const categories = [
  { id: 'all', name: 'All Products', icon: LayoutGrid },
  { id: 'snacks', name: 'Biscuits & Snacks', icon: Cookie },
  { id: 'home', name: 'Home Care', icon: Home },
  { id: 'beverages', name: 'Food & Beverages', icon: Coffee },
  { id: 'personal', name: 'Personal Care', icon: Sparkles },
];

const products = [
  { id: 10, name: "YES Packaged Drinking Water", category: "Food & Beverages", catId: 'beverages', img: p10 },
  { id: 11, name: "Mayos Instant Noodles", category: "Biscuits & Snacks", catId: 'snacks', img: p11 },
  { id: 13, name: "Dosti Instant Noodles", category: "Biscuits & Snacks", catId: 'snacks', img: p13 },
  { id: 14, name: "Rupa Beauty Soap", category: "Personal Care", catId: 'personal', img: p14 },
  { id: 15, name: "Wai Wai Instant Noodles", category: "Biscuits & Snacks", catId: 'snacks', img: p15 },
  { id: 18, name: "Chameli Matchsticks", category: "Home Care", catId: 'home', img: p18 },
  { id: 19, name: "123 1-Minute Noodle", category: "Biscuits & Snacks", catId: 'snacks', img: p19 },
  { id: 20, name: "Rupa Detergent Powder", category: "Home Care", catId: 'home', img: p_rupa_det },
];

const Products = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = activeTab === 'all' 
    ? products 
    : products.filter(p => p.catId === activeTab);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setShowAll(false);
  };

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 5);

  return (
    <section id="products" className="py-10 md:py-20 bg-gray-50/50">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[2px] w-8 bg-green-200"></div>
            <span className="bg-green-50 text-green-700 px-6 py-2 rounded-full text-[10px] font-black tracking-[0.2em] uppercase">
              Our Products
            </span>
            <div className="h-[2px] w-8 bg-green-200"></div>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tighter">
            Quality Products for <span className="text-green-600">Every Need</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-bold leading-relaxed">
            We offer a wide range of FMCG products from leading brands <br />
            to meet the daily needs of millions of customers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border-2 ${
                activeTab === cat.id 
                ? 'bg-white border-green-600 text-green-700 shadow-md scale-105' 
                : 'bg-white border-transparent text-gray-500 hover:border-gray-200 hover:text-gray-700'
              }`}
            >
              <cat.icon size={18} className={activeTab === cat.id ? 'text-green-600' : 'text-gray-400'} />
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-14"
        >
          <AnimatePresence mode='popLayout'>
            {displayProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] p-4 sm:p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col items-center text-center relative overflow-hidden"
              >
                {/* Framed Inner Image Container for Proportion Consistency */}
                <div className="h-40 md:h-48 w-full mb-4 md:mb-6 bg-gray-50/60 rounded-[24px] border border-gray-100/50 flex items-center justify-center p-4 md:p-5 relative overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="max-h-full max-w-full object-contain group-hover:scale-112 transition-transform duration-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <div className="space-y-1.5 w-full text-left px-2">
                  <h4 className="text-base font-black text-gray-900 line-clamp-1 leading-snug">{product.name}</h4>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{product.category}</p>
                  <div className="h-1 w-8 bg-green-100 group-hover:w-full group-hover:bg-green-600 transition-all duration-500 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {filteredProducts.length > 5 && !showAll && (
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-green-100 text-green-700 font-black text-sm tracking-wide hover:bg-green-50 hover:border-green-200 transition-all shadow-sm"
            >
              View All Products <ArrowRight size={18} />
            </motion.button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;

