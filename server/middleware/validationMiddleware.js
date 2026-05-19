import { body, validationResult } from 'express-validator';
import AppError from '../utils/AppError.js';

export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return next(new AppError(`Validation failed: ${errorMessages.join('. ')}`, 400));
  }
  next();
};

export const validateDistributor = [
  body('fullName').notEmpty().withMessage('Full name is required').trim(),
  body('mobileNumber')
    .notEmpty().withMessage('Mobile number is required')
    .matches(/^\d{10}$/).withMessage('Must be a valid 10-digit mobile number'),
  body('email').optional({ checkFalsy: true }).isEmail().withMessage('Must be a valid email'),
  body('state').notEmpty().withMessage('State is required'),
  body('district').notEmpty().withMessage('District is required'),
  body('city').notEmpty().withMessage('City is required'),
  body('businessType').notEmpty().withMessage('Business type is required'),
  body('investmentRange').notEmpty().withMessage('Investment range is required'),
  body('pincode')
    .notEmpty().withMessage('Pincode is required')
    .matches(/^\d{6}$/).withMessage('Must be a valid 6-digit pincode'),
  body('address').notEmpty().withMessage('Address is required'),
  validateRequest
];

export const validateSales = [
  body('fullName').notEmpty().withMessage('Full name is required').trim(),
  body('businessName').notEmpty().withMessage('Business name is required').trim(),
  body('mobile')
    .notEmpty().withMessage('Mobile number is required')
    .matches(/^\d{10}$/).withMessage('Must be a valid 10-digit mobile number'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('businessType').notEmpty().withMessage('Business type is required'),
  body('state').notEmpty().withMessage('State is required'),
  body('district').notEmpty().withMessage('District is required'),
  body('fullAddress').notEmpty().withMessage('Full address is required'),
  body('pincode')
    .notEmpty().withMessage('Pincode is required')
    .matches(/^\d{6}$/).withMessage('Must be a valid 6-digit pincode'),
  body('requirements').custom((value, { req }) => {
    if (!value) throw new Error('At least one requirement must be selected');
    let arr = Array.isArray(value) ? value : [value];
    req.body.requirements = arr;
    if (arr.length < 1) throw new Error('At least one requirement must be selected');
    return true;
  }),
  body('monthlySales').notEmpty().withMessage('Monthly sales is required'),
  body('interestedProducts').notEmpty().withMessage('Interested products description is required'),
  body('requirementsDescription').notEmpty().withMessage('Specific requirements description is required'),
  validateRequest
];

export const validateAdvertising = [
  body('agencyName').notEmpty().withMessage('Agency name is required').trim(),
  body('contactPerson').notEmpty().withMessage('Contact person is required').trim(),
  body('mobile')
    .notEmpty().withMessage('Mobile number is required')
    .matches(/^\d{10}$/).withMessage('Must be a valid 10-digit mobile number'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('agencyTypes').custom((value, { req }) => {
    if (!value) throw new Error('At least one agency type must be selected');
    let arr = Array.isArray(value) ? value : [value];
    req.body.agencyTypes = arr;
    if (arr.length < 1) throw new Error('At least one agency type must be selected');
    return true;
  }),
  body('experience').notEmpty().withMessage('Experience is required'),
  body('maxCampaign').notEmpty().withMessage('Max campaign coverage is required'),
  body('pricingModel').notEmpty().withMessage('Pricing model is required'),
  body('whyPartner').notEmpty().withMessage('Why partner description is required'),
  validateRequest
];
