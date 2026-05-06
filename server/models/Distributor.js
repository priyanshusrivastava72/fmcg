import mongoose from 'mongoose';
import validator from 'validator';

const distributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
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
  location: {
    type: String,
    required: [true, 'Please provide your location']
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
  message: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const Distributor = mongoose.model('Distributor', distributorSchema);

export default Distributor;
