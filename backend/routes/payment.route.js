import express from 'express'
import { getPayment, makePayment } from '../controllers/payment.controller.js'


const router = express.Router()

router.post("/", makePayment)
router.get("/history", getPayment);

export default router