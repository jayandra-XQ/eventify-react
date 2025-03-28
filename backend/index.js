import 'dotenv/config'
import express from 'express';
import { connectDB } from './lib/db.js';

import authRoutes from './routes/auth.route.js'
import addEventRoutes from './routes/addEvent.route.js'

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

app.use('/api/auth', authRoutes)
app.use('/api/add-event', addEventRoutes)

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectDB()
})