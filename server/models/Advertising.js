import mongoose from 'mongoose';
import validator from 'validator';

const advertisingSchema = new mongoose.Schema({
  agencyName: {
    type: String,
    required: [true, 'Please provide agency name'],
    trim: true,
  },
  contactPerson: {
    type: String,
    required: [true, 'Please provide contact person name'],
    trim: true,
  },
  mobile: {
    type: String,
    required: [true, 'Please provide mobile number'],
    validate: {
      validator: function(v) {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid 10-digit mobile number!`
    }
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  agencyTypes: {
    type: [String],
    required: [true, 'Please select at least one agency type']
  },
  otherAgencyType: {
    type: String,
    trim: true
  },
  experience: {
    type: String,
    required: [true, 'Please select years of experience']
  },
  cities: {
    type: [String],
    default: []
  },
  services: {
    type: [String],
    default: []
  },
  maxCampaign: {
    type: String,
    required: [true, 'Please select max campaign coverage']
  },
  creativeServices: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no'
  },
  brandsWorked: {
    type: String,
    trim: true
  },
  portfolioLink: {
    type: String,
    trim: true
  },
  pricingModel: {
    type: String,
    required: [true, 'Please select a pricing model']
  },
  whyPartner: {
    type: String,
    required: [true, 'Please describe why we should partner']
  },
  files: [{
    url: String,
    public_id: String
  }]
}, { timestamps: true });

const Advertising = mongoose.model('Advertising', advertisingSchema);

export default Advertising;
