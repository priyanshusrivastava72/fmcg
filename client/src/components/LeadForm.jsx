import React, { useState } from 'react';
import { motion } from 'framer-motion';
import api from '../utils/api';
import { toast } from 'react-toastify';
import {
  ShieldCheck, Handshake, IndianRupee, Headset, Truck,
  Package, TrendingUp, ArrowRight, Lock, ClipboardList
} from 'lucide-react';
import productsImg from '../assets/fmcg_products_cart.png';

const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',
  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh',
  'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab',
  'Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura','Uttar Pradesh',
  'Uttarakhand','West Bengal','Delhi','Jammu & Kashmir','Ladakh',
];

const leftFeatures = [
  { icon: Package,    title: 'Top Brands',         desc: 'Access to leading FMCG brands under one roof.' },
  { icon: TrendingUp, title: 'High Profit Margins', desc: 'Attractive margins and better return on investment.' },
  { icon: Headset,    title: 'Complete Support',    desc: 'Marketing, sales and operational support at every step.' },
  { icon: Truck,      title: 'Timely Delivery',     desc: 'Reliable supply chain and on-time product delivery.' },
];

const bottomBar = [
  { icon: ShieldCheck, title: '100% Genuine Products',       desc: 'Original products from trusted brands' },
  { icon: Handshake,   title: 'Strong & Long-Term Partnership', desc: 'We grow together, you succeed' },
  { icon: IndianRupee, title: 'Better Margins',               desc: 'Higher returns and great business potential' },
  { icon: Headset,     title: 'Fast Support',                 desc: 'Quick response and dedicated assistance' },
  { icon: Truck,       title: 'Pan India Delivery',           desc: 'Reach across India with reliable delivery' },
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', state: '', district: '',
    city: '', businessType: '', investmentRange: '',
    shopName: '', pincode: '', hearAbout: '', message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        location: `${formData.city}, ${formData.district}, ${formData.state} - ${formData.pincode}`,
        businessType: formData.businessType,
        investmentRange: formData.investmentRange,
        message: `Shop: ${formData.shopName}. Heard about us: ${formData.hearAbout}.`
      };
      const response = await api.post('/distributor/apply', payload);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          name: '', phone: '', email: '', state: '', district: '',
          city: '', businessType: '', investmentRange: '',
          shopName: '', pincode: '', hearAbout: '', message: ''
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = "w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-400/30 focus:border-red-400 outline-none transition-all bg-white text-sm text-gray-700 placeholder-gray-400";
  const selectCls = `${inputCls} appearance-none cursor-pointer`;
  const labelCls = "block text-xs font-semibold text-gray-700 mb-1.5";

  return (
    <section id="apply" className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 text-[#E33E2B] text-xs font-bold tracking-widest uppercase mb-4">
            <div className="w-6 h-px bg-[#E33E2B]"></div>
            <ShieldCheck size={13} />
            BECOME OUR PARTNER
            <div className="w-6 h-px bg-[#E33E2B]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
            Start Your <span className="text-[#E33E2B]">Distributorship</span> Today
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Fill in the form and our team will get in touch with you to start your journey with us.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden grid lg:grid-cols-2"
        >
          {/* Left Panel */}
          <div className="p-8 md:p-10 bg-white relative flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-1">
                Your Journey to Success
              </h3>
              <h3 className="text-2xl font-extrabold text-[#E33E2B] mb-4">Starts Here!</h3>
              <div className="w-10 h-1 bg-[#E33E2B] rounded mb-5"></div>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Join our strong network of distributors and get access to top brands, best margins and complete business support.
              </p>

              <div className="space-y-5">
                {leftFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF0EF] flex items-center justify-center flex-shrink-0">
                      <f.icon size={18} className="text-[#E33E2B]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{f.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Image */}
            <div className="mt-8 flex justify-center">
              <img
                src={productsImg}
                alt="FMCG Products"
                className="w-full max-w-sm h-56 object-contain"
              />
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="p-8 md:p-10 bg-gray-50/50 border-l border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FFF0EF] flex items-center justify-center">
                <ClipboardList size={20} className="text-[#E33E2B]" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Distributor Application Form</h4>
                <p className="text-xs text-gray-500">Please provide accurate details to help us serve you better.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Full Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your full name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Mobile Number *</label>
                  <input type="tel" name="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} placeholder="Enter your mobile number" className={inputCls} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>State *</label>
                  <select name="state" required value={formData.state} onChange={handleChange} className={selectCls}>
                    <option value="">Select your state</option>
                    {indianStates.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>District *</label>
                  <input type="text" name="district" required value={formData.district} onChange={handleChange} placeholder="Select your district" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>City / Town *</label>
                  <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="Enter your city or town" className={inputCls} />
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Business Type *</label>
                  <select name="businessType" required value={formData.businessType} onChange={handleChange} className={selectCls}>
                    <option value="">Select business type</option>
                    <option value="Wholesaler">Wholesaler</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Distributor">Existing Distributor</option>
                    <option value="New Business">New Business</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Investment Range *</label>
                  <select name="investmentRange" required value={formData.investmentRange} onChange={handleChange} className={selectCls}>
                    <option value="">Select investment range</option>
                    <option value="1-5 Lakhs">1 Lakh - 5 Lakhs</option>
                    <option value="5-10 Lakhs">5 Lakhs - 10 Lakhs</option>
                    <option value="10-25 Lakhs">10 Lakhs - 25 Lakhs</option>
                    <option value="25+ Lakhs">25+ Lakhs</option>
                  </select>
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Existing Business / Shop Name</label>
                  <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} placeholder="Enter shop or business name" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Pincode *</label>
                  <input type="text" name="pincode" required pattern="[0-9]{6}" value={formData.pincode} onChange={handleChange} placeholder="Enter pincode" className={inputCls} />
                </div>
              </div>

              {/* Row 6 – full width */}
              <div>
                <label className={labelCls}>How did you hear about us?</label>
                <select name="hearAbout" value={formData.hearAbout} onChange={handleChange} className={selectCls}>
                  <option value="">Select an option</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Friend / Referral">Friend / Referral</option>
                  <option value="Sales Representative">Sales Representative</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center gap-2 py-4 bg-[#E33E2B] hover:bg-[#c43323] text-white font-bold rounded-xl shadow-lg transition-all text-sm tracking-wide ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Processing...' : <>Submit Application <ArrowRight size={16} /></>}
              </motion.button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <Lock size={11} />
                Your information is safe with us. We respect your privacy.
              </div>
            </form>
          </div>
        </motion.div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {bottomBar.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FFF0EF] flex items-center justify-center flex-shrink-0">
                  <item.icon size={18} className="text-[#E33E2B]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900 leading-tight">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default LeadForm;
