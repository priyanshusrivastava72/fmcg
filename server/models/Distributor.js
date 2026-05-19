import mongoose from 'mongoose';
import validator from 'validator';

const distributorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
    trim: true,
  },
  mobileNumber: {
    type: String,
    required: [true, 'Please provide your mobile number'],
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  state: {
    type: String,
    required: [true, 'Please provide your state']
  },
  district: {
    type: String,
    required: [true, 'Please provide your district']
  },
  city: {
    type: String,
    required: [true, 'Please provide your city']
  },
  businessType: {
    type: String,
    required: [true, 'Please select your business type'],
    enum: ['Wholesaler', 'Retailer', 'Distributor', 'New Business']
  },
  investmentRange: {
    type: String,
    required: [true, 'Please select your investment range'],
  },
  shopName: {
    type: String,
    trim: true
  },
  pincode: {
    type: String,
    required: [true, 'Please provide your pincode']
  },
  address: {
    type: String,
    required: [true, 'Please provide your full address']
  },
  gstCertificate: {
    url: String,
    public_id: String
  },
  shopImage: {
    url: String,
    public_id: String
  },
  warehouseImage: {
    url: String,
    public_id: String
  }
}, { timestamps: true });

const Distributor = mongoose.model('Distributor', distributorSchema);

export default Distributor;

