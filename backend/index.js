import 'dotenv/config'
import express from 'express';
import { connectDB } from './lib/db.js';

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
  connectDB()
})