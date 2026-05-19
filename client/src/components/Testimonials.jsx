import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, Store, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Retailer, Jaipur",
    text: "Since partnering with Vardha Distributors, my shop's inventory turnover has increased by 40%. Their 24-hour dispatch is a game-changer for my business.",
    rating: 5,
    metric: "+40% Sales Growth",
    initials: "RK",
    avatarBg: "bg-green-100 text-green-700"
  },
  {
    name: "Sanjay Gupta",
    role: "Wholesaler, Lucknow",
    text: "The credit facility and dedicated relationship manager have helped me expand my operations significantly. They truly treat you like a partner, not just a customer.",
    rating: 5,
    metric: "Dedicated Support",
    initials: "SG",
    avatarBg: "bg-blue-100 text-blue-700"
  },
  {
    name: "Anita Sharma",
    role: "Supermart Owner, Indore",
    text: "Getting all top FMCG brands in one place saves me so much time. Their product range is extensive and the margins are the best in the market.",
    rating: 5,
    metric: "100% Genuine Products",
    initials: "AS",
    avatarBg: "bg-purple-100 text-purple-700"
  }
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-xs font-bold tracking-widest uppercase mb-6"
          >
            <Users size={14} />
            PARTNER SUCCESS STORIES
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-6">
            What Our <span className="text-green-600">Partners Say</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg font-bold">
            Don't just take our word for it. Hear from the retailers and distributors who are growing their business with us.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:border-transparent transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-green-100 group-hover:text-green-200 transition-colors">
                <Quote size={48} strokeWidth={3} />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-800 font-bold leading-relaxed mb-8 relative z-10 italic">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-3">
                  {/* Real Initials Avatar Badge */}
                  <div className={`w-11 h-11 rounded-full ${t.avatarBg} flex items-center justify-center font-black text-sm border-2 border-white shadow flex-shrink-0`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 leading-tight">{t.name}</h4>
                    <p className="text-xs font-black text-gray-500 flex items-center gap-1">{t.role}</p>
                  </div>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider border border-green-100">
                  {t.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          {[
            { icon: Store, value: "5,000+", label: "Active Retailers" },
            { icon: Users, value: "500+", label: "Distributors" },
            { icon: TrendingUp, value: "25%", label: "Avg. Partner Growth" },
            { icon: Star, value: "4.8/5", label: "Partner Satisfaction" }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-green-50 text-green-600 mb-2">
                <item.icon size={24} />
              </div>
              <h4 className="text-3xl font-black text-gray-900 tracking-tighter">{item.value}</h4>
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
