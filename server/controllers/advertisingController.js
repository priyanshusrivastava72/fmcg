import Advertising from '../models/Advertising.js';
import asyncHandler from '../middleware/asyncHandler.js';
import sendEmail from '../utils/sendEmail.js';
import { advertisingTemplate } from '../templates/emailTemplates.js';

export const requestAdvertisingSupport = asyncHandler(async (req, res, next) => {
  const {
    agencyName,
    contactPerson,
    mobile,
    email,
    agencyTypes,
    otherAgencyType,
    experience,
    cities,
    services,
    maxCampaign,
    creativeServices,
    brandsWorked,
    portfolioLink,
    pricingModel,
    whyPartner
  } = req.body;

  // Process uploaded files if they exist (multer array)
  let filesData = [];
  if (req.files && req.files.length > 0) {
    filesData = req.files.map(file => ({
      url: file.path,
      public_id: file.filename
    }));
  }

  const newAdvertisingRequest = await Advertising.create({
    agencyName,
    contactPerson,
    mobile,
    email,
    agencyTypes,
    otherAgencyType,
    experience,
    cities,
    services,
    maxCampaign,
    creativeServices,
    brandsWorked,
    portfolioLink,
    pricingModel,
    whyPartner,
    files: filesData
  });

  // Send Email Notification Asynchronously
  const adminEmail = process.env.ADMIN_EMAIL;
  if (adminEmail) {
    sendEmail({
      email: adminEmail,
      subject: `New Advertising Proposal - ${agencyName}`,
      html: advertisingTemplate(newAdvertisingRequest)
    });
  }

  res.status(201).json({
    success: true,
    data: newAdvertisingRequest,
    message: 'Proposal submitted successfully. We will review it and contact you soon.'
  });
});

