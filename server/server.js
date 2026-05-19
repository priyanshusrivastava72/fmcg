import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoSanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';

import connectDB from './config/db.js';
import distributorRoutes from './routes/distributorRoutes.js';
import salesRoutes from './routes/salesRoutes.js';
import advertisingRoutes from './routes/advertisingRoutes.js';
import errorHandler from './middleware/errorHandler.js';

// Handle uncaught exceptions globally
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// Load env variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// 1. GLOBAL MIDDLEWARES

// Set Security HTTP Headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  app.use(morgan('dev'));
}

// Rate Limiting (100 requests per 15 minutes globally, but stricter on forms)
const limiter = rateLimit({
  max: 100,
  windowMs: 15 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in 15 minutes!'
});
app.use('/api', limiter);

// Restrict CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// 2. MOUNT ROUTERS
app.use('/api/distributor', distributorRoutes);
app.use('/api/sales', salesRoutes);
app.use('/api/advertising', advertisingRoutes);

app.get('/', (req, res) => {
  res.send('FMCG API is running securely...');
});

// Handle undefined routes
app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

// 3. GLOBAL ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful Shutdown for unhandled rejections
process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Graceful Shutdown for SIGTERM (e.g. from Heroku/Vercel/Docker)
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});

