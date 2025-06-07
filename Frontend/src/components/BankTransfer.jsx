import React from "react";

const BankTransfer = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Bank Transfer</h3>
      <p className="text-gray-600">
        Transfer the payment to the following bank account:
      </p>
      <div className="mt-4 text-left">
        <p className="text-gray-800">
          <strong>Bank Name:</strong> BOB Bank
        </p>
        <p className="text-gray-800">
          <strong>Account Number:</strong> 123456789
        </p>
        <p className="text-gray-800">
          <strong>IFSC Code:</strong> XYZB12345
        </p>
      </div>
      <button
        className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 mt-6"
      >
        Confirm Transfer
      </button>
    </div>
  );
};

export default BankTransfer;
