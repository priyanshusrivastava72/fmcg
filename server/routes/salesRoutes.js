import express from 'express';
import { requestSalesAssistance } from '../controllers/salesController.js';
import { validateSales } from '../middleware/validationMiddleware.js';
import { uploadSalesFiles } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/request', uploadSalesFiles, validateSales, requestSalesAssistance);

export default router;
