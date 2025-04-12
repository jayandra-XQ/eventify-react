import express from 'express';
import multer from 'multer';
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url';
import { createVenue, getVenues } from '../controllers/venue.controller.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const router = express.Router();


// Setup storage path
const uploadPath = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
})


const upload = multer({ storage })

//Routes
router.post('/', upload.single('eventPhoto'), createVenue)
router.get('/', getVenues)

export default router
