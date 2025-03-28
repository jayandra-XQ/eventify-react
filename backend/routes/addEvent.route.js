import express from 'express';
import { addEvent } from '../controllers/addEvent.controller.js';

const router = express.Router();

router.post('/addevent', addEvent)

export default router