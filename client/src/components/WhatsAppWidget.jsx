import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/919670111167?text=Hello%20Vardha%20Team!%20I%20am%20interested%20in%20partnering%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      className="hidden md:flex fixed bottom-10 right-10 z-40 bg-[#25D366] text-white w-16 h-16 rounded-full items-center justify-center shadow-lg shadow-green-900/30 hover:scale-110 hover:shadow-xl transition-all"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2} />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm">
        1
      </span>
    </motion.a>
  );
};

export default WhatsAppWidget;
