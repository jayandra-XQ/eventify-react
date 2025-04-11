import express from 'express';
import { addEvent, eventList } from '../controllers/addEvent.controller.js';

const router = express.Router();

router.post('/addevent', addEvent)
router.get('/eventlist', eventList)

export default router