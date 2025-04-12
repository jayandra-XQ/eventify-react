import Payment from "../models/payment.model.js";



export const makePayment = async (req, res) => {
  try {
    const { name, cardNumber, expiry, cvv } = req.body;

    const newPayment = new Payment({
      name,
      cardNumber,
      expiry,
      cvv,
    });

    await newPayment.save();

    res.status(200).json({ message: "Payment successful", payment: newPayment });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({ message: "Payment failed", error });
  }
}

//getpayment history
export const getPayment = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 }); // sort latest first
    res.json(payments);
  } catch (error) {
    console.error("Get payment history error:", error);
    res.status(500).json({ message: "Failed to fetch payment history", error });
  }
};