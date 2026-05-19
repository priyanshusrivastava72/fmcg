import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const test = async () => {
  try {
    // create dummy files
    const gstPath = path.join(__dirname, 'gst.pdf');
    const shopPath = path.join(__dirname, 'shop.jpg');
    const warePath = path.join(__dirname, 'warehouse.jpg');
    fs.writeFileSync(gstPath, 'dummy pdf');
    fs.writeFileSync(shopPath, 'dummy image');
    fs.writeFileSync(warePath, 'dummy image');

    const form = new FormData();
    form.append('fullName', 'Test User');
    form.append('mobileNumber', '1234567890');
    form.append('email', 'test@example.com');
    form.append('state', 'Karnataka');
    form.append('district', 'Bangalore');
    form.append('city', 'Bangalore');
    form.append('businessType', 'Retailer');
    form.append('investmentRange', '1-5 Lakhs');
    form.append('shopName', 'Test Shop');
    form.append('pincode', '560001');
    form.append('address', 'Some address');
    form.append('gstCertificate', fs.createReadStream(gstPath));
    form.append('shopImage', fs.createReadStream(shopPath));
    form.append('warehouseImage', fs.createReadStream(warePath));

    const response = await axios.post('http://localhost:5000/api/distributor/apply', form, {
      headers: form.getHeaders()
    });
    console.log('Response:', response.data);
  } catch (err) {
    console.error('Error:', err.response?.data || err.message);
  }
};

test();
