import express from 'express'
import { deleteUser, getPayment, getTotalBookings, getUserPayments, makePayment } from '../controllers/payment.controller.js'


const router = express.Router()

router.post("/", makePayment)
router.get("/history", getPayment);
router.get("/user/:userId", getUserPayments)
router.get("/count", getTotalBookings)
router.delete("/delete/:userId", deleteUser)

export default router