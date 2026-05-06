import express from 'express';
import { applyForDistributor } from '../controllers/distributorController.js';

const router = express.Router();

router.post('/apply', applyForDistributor);

export default router;
