import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../utils/api';
import { 
  X, 
  Building2, 
  MapPin, 
  Megaphone, 
  BarChart3, 
  Briefcase, 
  IndianRupee, 
  MessageSquare, 
  CheckCircle2, 
  Upload, 
  Globe,
  Plus,
  Trash2,
  Loader2,
  FileText
} from 'lucide-react';

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100">
    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <h3 className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
  </div>
);

const Label = ({ children, required }) => (
  <label className="block text-sm font-bold text-gray-700 mb-2">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const Input = (props) => (
  <input 
    {...props}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none text-gray-900 font-medium placeholder:text-gray-400 bg-gray-50/50 hover:bg-white"
  />
);

const Select = ({ options, ...props }) => (
  <select 
    {...props}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none text-gray-900 font-medium bg-gray-50/50 hover:bg-white"
  >
    <option value="">Select Option</option>
    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
  </select>
);

const AdvertisingSupportModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    agencyName: '',
    contactPerson: '',
    mobile: '',
    whatsapp: '',
    email: '',
    website: '',
    agencyTypes: [],
    otherAgencyType: '',
    experience: '',
    cities: [],
    states: [],
    services: [],
    maxCampaign: '',
    hoardingsCount: '',
    panIndia: 'no',
    creativeServices: 'no',
    brandsWorked: '',
    portfolioLink: '',
    pricingModel: '',
    minBudget: '',
    whyPartner: '',
    notes: '',
    agreeAccurate: false,
    agreeContact: false
  });

  const [cityInput, setCityInput] = useState('');
  const [files, setFiles] = useState([]);

  const totalSteps = 5;

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen && !isSuccess) return null;

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => {
      const current = prev[field];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const addCity = () => {
    if (cityInput.trim() && !formData.cities.includes(cityInput.trim())) {
      setFormData(prev => ({ ...prev, cities: [...prev.cities, cityInput.trim()] }));
      setCityInput('');
    }
  };

  const removeCity = (cityToRemove) => {
    setFormData(prev => ({ ...prev, cities: prev.cities.filter(c => c !== cityToRemove) }));
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const formDataPayload = new FormData();
      
      Object.keys(formData).forEach(key => {
        if (Array.isArray(formData[key])) {
          formData[key].forEach(val => formDataPayload.append(key, val));
        } else {
          formDataPayload.append(key, formData[key]);
        }
      });

      files.forEach(file => {
        formDataPayload.append('files', file);
      });

      const response = await api.post('/advertising/request', formDataPayload);
      
      if (response.data.success) {
        setIsSuccess(true);
        // Reset form
        setFormData({
          agencyName: '', contactPerson: '', mobile: '', whatsapp: '', email: '', website: '',
          agencyTypes: [], otherAgencyType: '', experience: '', cities: [], states: [],
          services: [], maxCampaign: '', hoardingsCount: '', panIndia: 'no',
          creativeServices: 'no', brandsWorked: '', portfolioLink: '',
          pricingModel: '', minBudget: '', whyPartner: '', notes: '',
          agreeAccurate: false, agreeContact: false
        });
        setFiles([]);
        
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      // We can use a toast or standard alert here if toast is available
      // but the component isn't importing toast. I'll just close or do nothing to keep it clean.
      alert(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const agencyTypeOptions = [
    'Outdoor Advertising', 'Hoardings & Billboard', 'Wall Painting', 
    'Poster & Banner Printing', 'Auto Branding', 'Retail Branding', 
    'Digital Marketing', 'Influencer Marketing', 'Event Promotion', 
    'LED Advertising', 'Other'
  ];

  const serviceOptions = [
    'Hoarding Installation', 'Wall Painting', 'Flex Printing', 
    'Vehicle Branding', 'LED Advertising', 'Event Promotion', 
    'Social Media Ads', 'Retail Branding', 'Pamphlet Distribution', 
    'Product Launch Promotion'
  ];

  const experienceOptions = ['< 1 Year', '1-3 Years', '3-5 Years', '5-10 Years', '10+ Years'];
  const stateOptions = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <SectionHeader icon={Building2} title="Agency Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label required>Agency Name</Label>
                <Input placeholder="Enter your agency name" required value={formData.agencyName} onChange={e => setFormData({...formData, agencyName: e.target.value})} />
              </div>
              <div>
                <Label required>Contact Person Name</Label>
                <Input placeholder="Full name" required value={formData.contactPerson} onChange={e => setFormData({...formData, contactPerson: e.target.value})} />
              </div>
              <div>
                <Label required>Mobile Number</Label>
                <Input type="tel" placeholder="Primary contact" required value={formData.mobile} onChange={e => { const clean = e.target.value.replace(/\D/g, '').slice(0, 10); setFormData({...formData, mobile: clean}); }} />
              </div>
              <div>
                <Label required>Official Email</Label>
                <Input type="email" placeholder="agency@company.com" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <SectionHeader icon={MapPin} title="Business Details" />
            <div className="space-y-6">
              <div>
                <Label required>Agency Type (Select all that apply)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {agencyTypeOptions.map(type => (
                    <label key={type} className="flex items-center gap-3 group cursor-pointer">
                      <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${formData.agencyTypes.includes(type) ? 'bg-green-600 border-green-600' : 'border-gray-200 group-hover:border-green-500'}`}>
                        {formData.agencyTypes.includes(type) && <CheckCircle2 size={12} className="text-white" strokeWidth={3} />}
                      </div>
                      <input type="checkbox" className="hidden" checked={formData.agencyTypes.includes(type)} onChange={() => handleCheckboxChange('agencyTypes', type)} />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              {formData.agencyTypes.includes('Other') && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="overflow-hidden">
                  <Label required>Please Specify Agency Type</Label>
                  <Input placeholder="Specify type..." required value={formData.otherAgencyType} onChange={e => setFormData({...formData, otherAgencyType: e.target.value})} />
                </motion.div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label required>Years of Experience</Label>
                  <Select options={experienceOptions} required value={formData.experience} onChange={e => setFormData({...formData, experience: e.target.value})} />
                </div>
                <div>
                  <Label>Cities Covered</Label>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Add city" 
                      value={cityInput} 
                      onChange={e => setCityInput(e.target.value)} 
                      onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addCity())} 
                    />
                    <button 
                      type="button" 
                      onClick={addCity} 
                      className="px-4 bg-green-600 hover:bg-green-700 text-white rounded-xl flex items-center justify-center transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  {formData.cities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3 max-h-24 overflow-y-auto p-1.5 bg-gray-50 rounded-xl border border-gray-100">
                      {formData.cities.map(city => (
                        <div 
                          key={city} 
                          className="bg-green-50 text-green-700 font-bold text-xs px-2.5 py-1 rounded-lg border border-green-100 flex items-center gap-1.5"
                        >
                          <span>{city}</span>
                          <button 
                            type="button" 
                            onClick={() => removeCity(city)}
                            className="text-green-500 hover:text-red-500 transition-colors flex items-center justify-center"
                          >
                            <X size={10} strokeWidth={3} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <SectionHeader icon={Megaphone} title="Services & Capabilities" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceOptions.map(service => (
                <label key={service} className="flex items-center p-3 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-white cursor-pointer group">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-colors ${formData.services.includes(service) ? 'bg-green-600 text-white' : 'bg-white text-gray-300'}`}>
                    <Megaphone size={14} />
                  </div>
                  <span className="flex-grow text-xs font-black text-gray-700 tracking-tight">{service}</span>
                  <input type="checkbox" className="hidden" checked={formData.services.includes(service)} onChange={() => handleCheckboxChange('services', service)} />
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
              <div>
                <Label required>Max Campaign Coverage</Label>
                <Select options={['City Level', 'State Level', 'National', 'PAN India']} required value={formData.maxCampaign} onChange={e => setFormData({...formData, maxCampaign: e.target.value})} />
              </div>
              <div>
                <Label>Creative Services?</Label>
                <div className="flex gap-4 pt-2">
                  <label className="flex items-center gap-2 text-sm font-bold"><input type="radio" checked={formData.creativeServices === 'yes'} onChange={() => setFormData({...formData, creativeServices: 'yes'})} /> Yes</label>
                  <label className="flex items-center gap-2 text-sm font-bold"><input type="radio" checked={formData.creativeServices === 'no'} onChange={() => setFormData({...formData, creativeServices: 'no'})} /> No</label>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <SectionHeader icon={Briefcase} title="Portfolio & Pricing" />
            <div className="space-y-6">
              <div>
                <Label>Brands Worked With</Label>
                <textarea placeholder="List major brands..." className="w-full px-4 py-3 rounded-xl border border-gray-200 h-24 text-sm font-medium bg-gray-50/50" value={formData.brandsWorked} onChange={e => setFormData({...formData, brandsWorked: e.target.value})} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Portfolio Upload</Label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-4 text-center bg-gray-50 hover:bg-white transition-all group">
                    <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={handleFileUpload} />
                    <Upload size={20} className="mx-auto mb-2 text-gray-400 group-hover:text-green-600 transition-colors" />
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Click to upload files</p>
                  </div>
                  {files.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {files.map((file, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-green-50 border border-green-100 rounded-lg">
                          <FileText size={14} className="text-green-600" />
                          <span className="text-[10px] font-bold text-green-700 truncate max-w-[100px]">{file.name}</span>
                          <button type="button" onClick={() => removeFile(i)} className="text-green-400 hover:text-red-500 transition-colors">
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Label required>Pricing Model</Label>
                  <Select options={['Retainer', 'Commission', 'Fixed Fee', 'Hybrid']} required value={formData.pricingModel} onChange={e => setFormData({...formData, pricingModel: e.target.value})} />
                </div>
              </div>
              <div>
                <Label>External Link</Label>
                <Input type="url" placeholder="https://..." value={formData.portfolioLink} onChange={e => setFormData({...formData, portfolioLink: e.target.value})} />
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
            <SectionHeader icon={MessageSquare} title="Final Review" />
            <div className="space-y-6">
              <div>
                <Label required>Why Partner With Us?</Label>
                <textarea placeholder="Your unique value proposition..." className="w-full px-4 py-3 rounded-xl border border-gray-200 h-32 text-sm font-medium bg-gray-50/50" required value={formData.whyPartner} onChange={e => setFormData({...formData, whyPartner: e.target.value})} />
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1" checked={formData.agreeAccurate} onChange={() => setFormData({...formData, agreeAccurate: !formData.agreeAccurate})} />
                  <span className="text-xs font-bold text-gray-600">I confirm the information provided is accurate.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1" checked={formData.agreeContact} onChange={() => setFormData({...formData, agreeContact: !formData.agreeContact})} />
                  <span className="text-xs font-bold text-gray-600">I agree to be contacted for this proposal.</span>
                </label>
              </div>
            </div>
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <AnimatePresence>
      {(isOpen || isSuccess) && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={!isSubmitting ? onClose : undefined} className="absolute inset-0 bg-gray-900/40 backdrop-blur-md" />

          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {isSuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-8"><CheckCircle2 size={48} /></motion.div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Proposal Submitted!</h2>
                <p className="text-gray-500 font-semibold text-lg max-w-md mx-auto">We will contact you within 2-3 business days.</p>
              </div>
            ) : (
              <>
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(currentStep / totalSteps) * 100}%` }} className="h-full bg-green-600" />
                </div>

                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                  <div>
                    <h2 className="text-xl font-black text-gray-900 tracking-tighter">Agency Proposal</h2>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step {currentStep} of {totalSteps}</p>
                  </div>
                  <button onClick={onClose} className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all"><X size={20} /></button>
                </div>

                <div className="flex-grow overflow-y-auto px-6 py-8 scrollbar-hide">
                  <form id="adv-form" onSubmit={handleSubmit} className="h-full">
                    {renderStep()}
                  </form>
                </div>

                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex gap-4">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="flex-1 py-4 bg-white border border-gray-200 rounded-2xl font-black text-xs text-gray-500 uppercase tracking-widest hover:bg-gray-50 transition-all">Back</button>
                  )}
                  <button type="submit" form="adv-form" disabled={isSubmitting} className="flex-[2] py-4 bg-green-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2">
                    {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : (currentStep === totalSteps ? 'Submit Proposal' : 'Continue')}
                    {currentStep < totalSteps && !isSubmitting && <Plus size={16} className="rotate-45" />}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdvertisingSupportModal;
