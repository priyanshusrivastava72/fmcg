import express from 'express';
import { applyForDistributor, getAllDistributors } from '../controllers/distributorController.js';
import { validateDistributor } from '../middleware/validationMiddleware.js';
import { uploadDistributorFiles } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/apply', uploadDistributorFiles, validateDistributor, applyForDistributor);
router.get('/all', getAllDistributors);

export default router;
