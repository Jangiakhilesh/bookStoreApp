import React from "react";

const PayPal = () => {
  return (
    <div className="bg-white p-6 pt-6 mt-12 rounded-lg shadow-lg text-center">

     <h3 className="text-2xl font-bold text-gray-800 mb-6">Pay with PayPal</h3>
      <p className="text-gray-600">
        You will be redirected to PayPal to complete your purchase securely.
      </p>
      <button
        className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-6"
      >
        Proceed to PayPal
      </button>
    </div>
  );
};

export default PayPal;
