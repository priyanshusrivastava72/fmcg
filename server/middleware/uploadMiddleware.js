import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary.js';
import AppError from '../utils/AppError.js';

// Configure Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    // Extract file extension and base name
    const ext = file.mimetype.split('/')[1];
    
    // Determine folder based on route or file type
    let folder = 'fmcg_uploads/general';
    if (req.originalUrl.includes('distributor')) folder = 'fmcg_uploads/distributors';
    if (req.originalUrl.includes('advertising')) folder = 'fmcg_uploads/advertising';

    const isPdf = file.mimetype === 'application/pdf';

    if (isPdf) {
      // Clean filename and ensure it ends with .pdf
      const safeName = file.originalname.replace(/[^a-zA-Z0-9.]/g, '_');
      return {
        folder: folder,
        resource_type: 'raw',
        public_id: `${Date.now()}_${safeName}`
      };
    } else {
      const ext = file.mimetype.split('/')[1];
      return {
        folder: folder,
        resource_type: 'auto',
        format: ext,
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
      };
    }
  },
});

// File Filter for strict validation
const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    'image/jpeg', 
    'image/png', 
    'image/webp', 
    'application/pdf'
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new AppError('Invalid file type! Only JPG, PNG, WEBP, and PDF are allowed.', 400), false);
  }
};

// Initialize Multer
const upload = multer({ 
  storage, 
  fileFilter,
  limits: {
    fileSize: 20 * 1024 * 1024, // 20MB Limit per file
  }
});

// Middleware Exports
// For Distributor (Specific named fields)
export const uploadDistributorFiles = upload.fields([
  { name: 'gstCertificate', maxCount: 1 },
  { name: 'shopImage', maxCount: 1 },
  { name: 'warehouseImage', maxCount: 1 }
]);

// For Advertising (Array of files under a single 'files' field)
export const uploadAdvertisingFiles = upload.array('files', 5); // Max 5 files allowed

// For Sales (Array of files under a single 'files' field)
export const uploadSalesFiles = upload.array('files', 5); // Max 5 files allowed
