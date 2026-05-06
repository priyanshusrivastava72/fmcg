import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import distributorRoutes from './routes/distributorRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fmcg-distributor';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/distributor', distributorRoutes);

app.get('/', (req, res) => {
  res.send('FMCG API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
