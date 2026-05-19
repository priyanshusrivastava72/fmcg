import mongoose from 'mongoose';
import validator from 'validator';

const salesAssistanceSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true,
  },
  businessName: {
    type: String,
    required: [true, 'Please provide your business name'],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, 'Please provide your mobile number'],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit mobile number!`
    }
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  businessType: {
    type: String,
    required: [true, 'Please select your business type'],
    enum: ['Retailer', 'Distributor', 'Super Stockist', 'Wholesaler', 'FMCG Dealer', 'Modern Trade Partner', 'Other']
  },
  state: {
    type: String,
    required: [true, 'Please select your state']
  },
  district: {
    type: String,
    required: [true, 'Please provide your city/district']
  },
  fullAddress: {
    type: String,
    required: [true, 'Please provide your full address']
  },
  pincode: {
    type: String,
    required: [true, 'Please provide your pincode'],
    validate: {
      validator: function(v) {
        return /^\d{6}$/.test(v);
      },
      message: props => `${props.value} is not a valid 6-digit pincode!`
    }
  },
  requirements: {
    type: [String],
    required: [true, 'Please select at least one sales requirement']
  },
  monthlySales: {
    type: String,
    required: [true, 'Please select your current monthly sales']
  },
  interestedProducts: {
    type: String,
    required: [true, 'Please describe your products of interest']
  },
  requirementsDescription: {
    type: String,
    required: [true, 'Please provide your specific business requirements']
  },
  notes: {
    type: String,
    trim: true
  },
  files: [{
    url: String,
    public_id: String
  }]
}, { timestamps: true });

const SalesAssistance = mongoose.model('SalesAssistance', salesAssistanceSchema);

export default SalesAssistance;
