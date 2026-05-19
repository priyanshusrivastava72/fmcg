import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../utils/api';
import { toast } from 'react-toastify';
import { 
  X, 
  Users, 
  MapPin, 
  Target, 
  BarChart3, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  Upload, 
  Plus,
  Trash2,
  Loader2,
  FileText,
  Building,
  Briefcase
} from 'lucide-react';

const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-6 pb-2 border-b border-gray-100">
    <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <h3 className="text-lg md:text-xl font-black text-gray-900 tracking-tight">{title}</h3>
  </div>
);

const Label = ({ children, required }) => (
  <label className="block text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">
    {children} {required && <span className="text-red-500">*</span>}
  </label>
);

const Input = (props) => (
  <input 
    {...props}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none text-gray-900 font-bold placeholder:text-gray-300 bg-gray-50/50 hover:bg-white text-sm"
  />
);

const Select = ({ options, ...props }) => (
  <select 
    {...props}
    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all outline-none text-gray-900 font-bold bg-gray-50/50 hover:bg-white text-sm"
  >
    <option value="">Select Option</option>
    {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
  </select>
);

const SalesTeamAssistanceModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    mobile: '',
    whatsapp: '',
    email: '',
    gstNumber: '',
    businessType: '',
    state: '',
    district: '',
    fullAddress: '',
    pincode: '',
    coverageAreas: [],
    requirements: [],
    currentBrands: '',
    monthlySales: '',
    retailersConnected: '',
    existingAreas: '',
    interestedProducts: '',
    businessGoals: [],
    requirementsDescription: '',
    notes: '',
    agreeAccurate: false,
    agreeContact: false
  });

  const totalSteps = 5;

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

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...uploadedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const nextStep = () => {
    // Basic validation for required fields could go here
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };
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

      const response = await api.post('/sales/request', formDataPayload);
      if (response.data.success) {
        toast.success(response.data.message);
        setIsSuccess(true);
        // Reset form
        setFormData({
          fullName: '',
          businessName: '',
          mobile: '',
          whatsapp: '',
          email: '',
          gstNumber: '',
          businessType: '',
          state: '',
          district: '',
          fullAddress: '',
          pincode: '',
          coverageAreas: [],
          requirements: [],
          currentBrands: '',
          monthlySales: '',
          retailersConnected: '',
          existingAreas: '',
          interestedProducts: '',
          businessGoals: [],
          requirementsDescription: '',
          notes: '',
          agreeAccurate: false,
          agreeContact: false
        });
        setFiles([]);
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypeOptions = ['Retailer', 'Distributor', 'Super Stockist', 'Wholesaler', 'FMCG Dealer', 'Modern Trade Partner', 'Other'];
  const stateOptions = ['Andhra Pradesh', 'Assam', 'Bihar', 'Gujarat', 'Haryana', 'Karnataka', 'Kerala', 'Maharashtra', 'Punjab', 'Rajasthan', 'Tamil Nadu', 'Telangana', 'Uttar Pradesh', 'West Bengal', 'Others'];
  const coverageAreaOptions = ['Local Area', 'Single City', 'Multiple Cities', 'Entire District', 'Entire State'];
  const assistanceOptions = ['Sales Team Visit', 'Retail Expansion', 'Branding Support', 'Distribution Support', 'Product Launch', 'Market Survey'];
  const salesVolumeOptions = ['Below ₹50k', '₹50k - ₹2L', '₹2L - ₹5L', '₹5L - ₹10L', '₹10L+'];

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <SectionHeader icon={Building} title="Job Profile" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label required>Full Name</Label><Input placeholder="Your name" required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} /></div>
              <div><Label required>Business Name</Label><Input placeholder="Firm name" required value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} /></div>
              <div><Label required>Mobile</Label><Input type="tel" placeholder="10 digit number" required value={formData.mobile} onChange={e => { const clean = e.target.value.replace(/\D/g, '').slice(0, 10); setFormData({...formData, mobile: clean}); }} /></div>
              <div><Label required>Email</Label><Input type="email" placeholder="Official email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
              <div className="md:col-span-2"><Label required>Position Type</Label><Select options={businessTypeOptions} required value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})} /></div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <SectionHeader icon={MapPin} title="Location Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div><Label required>State</Label><Select options={stateOptions} required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} /></div>
              <div><Label required>City / District</Label><Input placeholder="Enter city" required value={formData.district} onChange={e => setFormData({...formData, district: e.target.value})} /></div>
              <div className="md:col-span-2"><Label required>Full Address</Label><textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 h-20 text-sm font-bold bg-gray-50/50 hover:bg-white transition-all outline-none" placeholder="Detailed address..." required value={formData.fullAddress} onChange={e => setFormData({...formData, fullAddress: e.target.value})} /></div>
              <div><Label required>Pincode</Label><Input placeholder="6 digits" maxLength={6} required value={formData.pincode} onChange={e => { const clean = e.target.value.replace(/\D/g, '').slice(0, 6); setFormData({...formData, pincode: clean}); }} /></div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <SectionHeader icon={Target} title="Sales Requirements" />
            <div>
              <Label required>Select Sales Requirements</Label>
              <div className="grid grid-cols-2 gap-3">
                {assistanceOptions.map(opt => (
                <label key={opt} className={`flex items-center p-3 rounded-xl border transition-all cursor-pointer ${formData.requirements.includes(opt) ? 'bg-green-50 border-green-200' : 'bg-gray-50/50 border-gray-100 hover:bg-white'}`}>
                  <input type="checkbox" className="hidden" checked={formData.requirements.includes(opt)} onChange={() => handleCheckboxChange('requirements', opt)} />
                  <div className={`w-4 h-4 rounded-md border flex items-center justify-center mr-2 ${formData.requirements.includes(opt) ? 'bg-green-600 border-green-600' : 'bg-white border-gray-300'}`}>
                    {formData.requirements.includes(opt) && <CheckCircle2 size={10} className="text-white" strokeWidth={4} />}
                  </div>
                  <span className="text-[10px] md:text-xs font-black text-gray-700 tracking-tight uppercase">{opt}</span>
                </label>
              ))}
            </div>
          </div>
            <div className="pt-4 border-t border-gray-100">
              <Label required>Current Monthly Sales</Label>
              <Select options={salesVolumeOptions} required value={formData.monthlySales} onChange={e => setFormData({...formData, monthlySales: e.target.value})} />
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <SectionHeader icon={TrendingUp} title="Goals & Documents" />
            <div className="space-y-4">
              <div><Label required>Products Interested In</Label><textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 h-24 text-sm font-bold bg-gray-50/50 outline-none" placeholder="Describe categories..." required value={formData.interestedProducts} onChange={e => setFormData({...formData, interestedProducts: e.target.value})} /></div>
              <div>
                <Label>Upload Shop Photos / Docs</Label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50 hover:bg-white transition-all group">
                  <input type="file" multiple className="absolute inset-0 opacity-0 cursor-pointer z-10" onChange={handleFileUpload} />
                  <Upload size={24} className="mx-auto mb-2 text-gray-400 group-hover:text-green-600 transition-colors" />
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Click to upload files</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-green-50 border border-green-100 rounded-lg">
                      <FileText size={14} className="text-green-600" />
                      <span className="text-[10px] font-bold text-green-700 truncate max-w-[100px]">{file.name}</span>
                      <button onClick={() => removeFile(i)} className="text-green-400 hover:text-red-500"><X size={14} /></button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
            <SectionHeader icon={MessageSquare} title="Final Review" />
            <div className="space-y-4">
              <div><Label required>Specific Business Requirements</Label><textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 h-32 text-sm font-bold bg-gray-50/50 outline-none" placeholder="Provide more details..." required value={formData.requirementsDescription} onChange={e => setFormData({...formData, requirementsDescription: e.target.value})} /></div>
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required className="mt-1" checked={formData.agreeAccurate} onChange={() => setFormData({...formData, agreeAccurate: !formData.agreeAccurate})} />
                  <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">I confirm all information is true and accurate.</span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input type="checkbox" required className="mt-1" checked={formData.agreeContact} onChange={() => setFormData({...formData, agreeContact: !formData.agreeContact})} />
                  <span className="text-xs font-bold text-gray-500 group-hover:text-gray-900 transition-colors">I agree to be contacted for sales assistance.</span>
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

          <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative w-full max-w-xl bg-white rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {isSuccess ? (
              <div className="p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="w-24 h-24 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-8"><CheckCircle2 size={48} /></motion.div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Request Received!</h2>
                <p className="text-gray-500 font-semibold text-lg">Our sales team will contact you soon.</p>
              </div>
            ) : (
              <>
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${(currentStep / totalSteps) * 100}%` }} className="h-full bg-green-600" />
                </div>

                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                  <div>
                    <h2 className="text-xl font-black text-gray-900 tracking-tighter leading-tight">Sales Assistance</h2>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Step {currentStep} of {totalSteps}</p>
                  </div>
                  <button onClick={onClose} className="w-10 h-10 rounded-xl bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all group"><X size={20} className="group-hover:rotate-90 transition-transform" /></button>
                </div>

                <div className="flex-grow overflow-y-auto px-6 py-8 scrollbar-hide">
                  <form id="sales-form" onSubmit={handleSubmit} className="h-full">
                    {renderStep()}
                  </form>
                </div>

                <div className="px-6 py-5 border-t border-gray-100 bg-gray-50/50 flex gap-4">
                  {currentStep > 1 && (
                    <button type="button" onClick={prevStep} className="flex-1 py-4 bg-white border border-gray-200 rounded-2xl font-black text-[10px] text-gray-500 uppercase tracking-widest hover:bg-gray-50 transition-all">Back</button>
                  )}
                  <button type="submit" form="sales-form" disabled={isSubmitting} className="flex-[2] py-4 bg-green-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-green-700 transition-all shadow-lg shadow-green-600/20 flex items-center justify-center gap-2">
                    {isSubmitting ? <Loader2 className="animate-spin" size={16} /> : (currentStep === totalSteps ? 'Request Support' : 'Next Step')}
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

export default SalesTeamAssistanceModal;
