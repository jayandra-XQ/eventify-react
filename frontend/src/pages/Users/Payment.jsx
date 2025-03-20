import React, { useState } from "react";

const Payment = () => {
  const [paymentDone, setPaymentDone] = useState(false); // State for success message

  const handlePayment = () => {
    setPaymentDone(true); // Show success message
    setTimeout(() => setPaymentDone(false), 1000); // Hide after 3 seconds
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Details</h2>

        {/* Person Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Person Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full p-3 border border-gray-300 rounded-md mt-1"
          />
        </div>

        {/* Card Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Card Number</label>
          <input
            type="text"
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
              placeholder="MM/YY"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            />
          </div>

          <div className="w-1/2">
            <label className="block text-gray-700 font-medium">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full p-3 border border-gray-300 rounded-md mt-1"
            />
          </div>
        </div>

        {/* Pay Button */}
        <div className="mt-6">
          <button
            className="w-full bg-blue-600 text-white p-3 rounded-md text-lg font-semibold shadow-md hover:bg-blue-700"
            onClick={handlePayment}
          >
            Pay
          </button>
        </div>
      </div>

      {/* Payment Success Popup */}
      {paymentDone && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center">
            <h3 className="text-green-600 font-semibold text-xl">Payment Successful!</h3>
            <p className="text-gray-700 mt-2">Your payment has been completed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
