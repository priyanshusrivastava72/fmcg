import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ClipboardCheck, Box, TrendingUp } from 'lucide-react';

const steps = [
  { 
    id: '01', 
    title: 'Apply Online', 
    desc: 'Fill out the application form with your basic details and business information.',
    icon: FileText
  },
  { 
    id: '02', 
    title: 'Verification', 
    desc: 'Our team will verify your details and get in touch for further process.',
    icon: ClipboardCheck
  },
  { 
    id: '03', 
    title: 'Product Allocation', 
    desc: 'Get access to our wide range of products and best offers.',
    icon: Box
  },
  { 
    id: '04', 
    title: 'Start Selling', 
    desc: 'Start your business and grow with our continuous support and guidance.',
    icon: TrendingUp
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3FBF8] rounded-[48px] p-12 md:p-20 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#007A4D] text-sm font-bold tracking-wide mb-6 shadow-sm">
              <div className="w-4 h-[2px] bg-[#007A4D]"></div>
              HOW IT WORKS
              <div className="w-4 h-[2px] bg-[#007A4D]"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
              Simple Steps to <span className="text-[#007A4D]">Start Your Business</span>
            </h2>
          </div>

          <div className="relative z-10">
            {/* Connecting Dots Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] border-t-2 border-dotted border-gray-300 -translate-y-12"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 md:left-auto md:-right-4 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#E33E2B] font-bold text-sm z-20">
                    {step.id}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 border-4 border-[#E6F3EF]">
                    <step.icon size={36} className="text-[#007A4D]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#111827] mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
