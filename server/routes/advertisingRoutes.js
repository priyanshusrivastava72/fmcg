import express from 'express';
import { requestAdvertisingSupport } from '../controllers/advertisingController.js';
import { validateAdvertising } from '../middleware/validationMiddleware.js';
import { uploadAdvertisingFiles } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/request', uploadAdvertisingFiles, validateAdvertising, requestAdvertisingSupport);

export default router;
