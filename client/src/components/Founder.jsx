import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, History, Heart } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Journey Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
               <div className="bg-gradient-to-br from-green-600 to-green-900 p-12 text-white">
                  <div className="mb-8">
                    <History size={48} className="opacity-50 mb-4" />
                    <h3 className="text-4xl font-black tracking-tighter leading-none mb-2">30 Years</h3>
                    <p className="text-green-100 font-bold uppercase tracking-widest text-xs">Of Distribution Excellence</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Award size={20} />
                      </div>
                      <p className="text-sm font-medium leading-relaxed italic text-green-50">
                        "Starting with a single truck and a handful of retail partners in 1994, our journey has been defined by one thing: Unwavering Trust."
                      </p>
                    </div>
                  </div>
               </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-xs font-bold tracking-widest uppercase mb-6">
                <Target size={14} />
                OUR CORE VALUES
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6 leading-tight">
                Built on Integrity, Driven <br />
                by <span className="text-green-600">Relationships</span>
              </h2>
              <p className="text-lg text-gray-700 font-bold leading-relaxed">
                At Vardha, we don't just move boxes. We bridge the gap between global brands and local communities. For three decades, we've focused on creating a supply chain that is reliable, transparent, and profitable for every stakeholder.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Target, title: "Our Mission", text: "To empower every small retailer with access to world-class FMCG products at the best prices." },
                { icon: Heart, title: "Our Promise", text: "Honesty in pricing, transparency in business, and commitment to your growth." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-4">
                    <item.icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600 font-bold leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
