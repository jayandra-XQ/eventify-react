import express from 'express'
import { deleteUser, getPayment, getUserPayments, makePayment } from '../controllers/payment.controller.js'


const router = express.Router()

router.post("/", makePayment)
router.get("/history", getPayment);
router.get("/user/:userId", getUserPayments)
router.delete("/delete/:userId", deleteUser)

export default router