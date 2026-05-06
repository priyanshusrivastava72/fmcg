import Distributor from '../models/Distributor.js';

export const applyForDistributor = async (req, res) => {
  try {
    const { name, phone, email, location, businessType, investmentRange, message } = req.body;

    if (!name || !phone || !location || !businessType || !investmentRange) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const newDistributor = await Distributor.create({
      name,
      phone,
      email,
      location,
      businessType,
      investmentRange,
      message
    });

    res.status(201).json({
      success: true,
      data: newDistributor,
      message: 'Application submitted successfully. We will contact you soon.'
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    console.error('Error in applyForDistributor:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
