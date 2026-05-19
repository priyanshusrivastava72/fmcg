import SalesAssistance from '../models/SalesAssistance.js';
import asyncHandler from '../middleware/asyncHandler.js';
import sendEmail from '../utils/sendEmail.js';
import { salesTemplate } from '../templates/emailTemplates.js';

export const requestSalesAssistance = asyncHandler(async (req, res, next) => {
  const {
    fullName,
    businessName,
    mobile,
    email,
    businessType,
    state,
    district,
    fullAddress,
    pincode,
    requirements,
    monthlySales,
    interestedProducts,
    requirementsDescription
  } = req.body;

  // Process uploaded files if they exist (multer array)
  let filesData = [];
  if (req.files && req.files.length > 0) {
    filesData = req.files.map(file => ({
      url: file.path,
      public_id: file.filename
    }));
  }

  const newSalesRequest = await SalesAssistance.create({
    fullName,
    businessName,
    mobile,
    email,
    businessType,
    state,
    district,
    fullAddress,
    pincode,
    requirements,
    monthlySales,
    interestedProducts,
    requirementsDescription,
    files: filesData
  });

  // Send Email Notification Asynchronously
  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    sendEmail({
      email: adminEmail,
      subject: `New Sales Support Request - ${businessName}`,
      html: salesTemplate(newSalesRequest)
    });
  }

  res.status(201).json({
    success: true,
    data: newSalesRequest,
    message: 'Sales assistance request submitted successfully. Our team will contact you soon.'
  });
});

