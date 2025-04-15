import Payment from "../models/payment.model.js";
import User from "../models/user.model.js";



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


//get user bookings
export const getUserPayments = async (req, res) => {
  try {
    const { userId } = req.params;
    const payments = await Payment.find({ userId });
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments' });
  }
};

export const getTotalBookings = async (req, res) => {
  try {
    const count = await Payment.countDocuments(); // or your booking model
    res.status(200).json({ totalBookings: count });
  } catch (err) {
    res.status(500).json({ message: "Failed to get booking count" });
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    await User.findByIdAndDelete(userId);
    await Payment.deleteMany({ userId });

    res.status(200).json({ message: "Account and associated data deleted." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete account" });
  }
};