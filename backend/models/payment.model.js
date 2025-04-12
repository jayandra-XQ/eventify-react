import mongoose from 'mongoose'

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    required: true,
  },
  expiry: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Confirmed",
  },
}, { timestamps: true })

const Payment = mongoose.model('Payment', paymentSchema)

export default Payment