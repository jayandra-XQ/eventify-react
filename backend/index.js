import 'dotenv/config'
import express from 'express';
import { connectDB } from './lib/db.js';

import authRoutes from './routes/auth.route.js'

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectDB()
})