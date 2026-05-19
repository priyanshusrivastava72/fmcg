import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, PhoneCall } from 'lucide-react';

const MobileStickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-[0_-10px_35px_rgba(0,0,0,0.12)] px-4 py-3 md:hidden block flex items-center gap-3"
        >
          <button
            onClick={() => handleScrollTo('apply')}
            className="flex-1 bg-[#111827] text-white py-3.5 px-3 rounded-xl font-black text-[11px] tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
          >
            <FileText size={14} strokeWidth={2.5} />
            Become Distributor
          </button>
          <a
            href="https://wa.me/919670111167?text=Hello%20Vardha%20Team!%20I%20am%20interested%20in%20partnering%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-[#25D366] text-white py-3.5 px-3 rounded-xl font-black text-[11px] tracking-wider uppercase flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-green-900/20"
          >
            <PhoneCall size={14} strokeWidth={2.5} />
            WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileStickyCTA;
