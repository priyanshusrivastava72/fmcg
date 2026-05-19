import Distributor from '../models/Distributor.js';
import asyncHandler from '../middleware/asyncHandler.js';
import sendEmail from '../utils/sendEmail.js';
import { distributorTemplate } from '../templates/emailTemplates.js';

export const applyForDistributor = asyncHandler(async (req, res, next) => {
  const { 
    fullName, 
    mobileNumber, 
    email, 
    state, 
    district, 
    city, 
    businessType, 
    investmentRange, 
    shopName, 
    pincode, 
    address 
  } = req.body;

  console.log('Distributor upload files:', req.files);
  let gstCertificate = {};
  let shopImage = {};
  let warehouseImage = {};

  if (req.files) {
    if (req.files.gstCertificate && req.files.gstCertificate[0]) {
      gstCertificate = { url: req.files.gstCertificate[0].path, public_id: req.files.gstCertificate[0].filename };
    }
    if (req.files.shopImage && req.files.shopImage[0]) {
      shopImage = { url: req.files.shopImage[0].path, public_id: req.files.shopImage[0].filename };
    }
    if (req.files.warehouseImage && req.files.warehouseImage[0]) {
      warehouseImage = { url: req.files.warehouseImage[0].path, public_id: req.files.warehouseImage[0].filename };
    }
  }

  const newDistributor = await Distributor.create({
    fullName,
    mobileNumber,
    email,
    state,
    district,
    city,
    businessType,
    investmentRange,
    shopName,
    pincode,
    address,
    gstCertificate,
    shopImage,
    warehouseImage
  });

  // Send Email Notification Asynchronously
  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    sendEmail({
      email: adminEmail,
      subject: `New Distributor Application - ${fullName}`,
      html: distributorTemplate(newDistributor)
    });
  }

  res.status(201).json({
    success: true,
    data: newDistributor,
    message: 'Application submitted successfully. We will contact you soon.'
  });
});

export const getAllDistributors = asyncHandler(async (req, res, next) => {
  const distributors = await Distributor.find().sort({ createdAt: -1 });
  
  res.status(200).json({
    success: true,
    count: distributors.length,
    data: distributors
  });
});


