import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate()
  const [paymentDone, setPaymentDone] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePayment = async () => {
    // Basic validation
    if (!formData.name || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      setError("All fields are required");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      // Call your API endpoint
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      // Payment successful
      setPaymentDone(true);
      setFormData({
        name: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
      });
      setTimeout(() => {
        setPaymentDone(false);
        navigate('/bookinghistory');
      }, 3000);
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Details</h2>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        {/* Person Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Person Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="1234 5678 9101 1121"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        {/* Expiry & CVV */}
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">Expiry</label>
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            />
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-6">
          <button
            className={`w-full p-3 rounded-md text-lg font-semibold shadow-md ${isProcessing
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            onClick={handlePayment}
            disabled={isProcessing}
          >
            {isProcessing ? "Processing..." : "Pay"}
          </button>
        </div>
      </div>

      {/* Payment Success Popup */}
      {paymentDone && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-green-500 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Payment Successful!</h3>
            <p className="text-gray-600 mt-2">Your payment has been processed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;