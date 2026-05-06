import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tighter mb-4 inline-block">
              Naturals<span className="text-red-500">FMCG</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Delivering excellence and quality products across the nation for over 30 years. Your trusted partner in FMCG distribution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-green-400 transition-colors">Our Products</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Distributor Support</a></li>
              <li><a href="#apply" className="hover:text-green-400 transition-colors">Apply Now</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Distributor Agreement</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Return Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-green-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">123 Business Avenue, Tech Park, Mumbai, 400001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-green-500 shrink-0" />
                <span>+91 1800-123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-green-500 shrink-0" />
                <span>partner@naturalsfmcg.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Naturals FMCG Ltd. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Growth.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
