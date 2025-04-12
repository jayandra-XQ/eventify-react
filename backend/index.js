import 'dotenv/config'
import express from 'express';
import { connectDB } from './lib/db.js';
import path from 'path'
import { fileURLToPath } from 'url';

import authRoutes from './routes/auth.route.js'
import addEventRoutes from './routes/addEvent.route.js'
import venueRoutes from './routes/venue.route.js'
import paymentRoutes from './routes/payment.route.js'

const app = express();

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5001;

app.use('/api/auth', authRoutes)
app.use('/api/add-event', addEventRoutes)
app.use('/api/venues', venueRoutes)
app.use('/api/payments', paymentRoutes)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectDB()
})