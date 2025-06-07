import React from "react";

const CardDetails = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Enter Card Details</h3>
      <form className="space-y-6">
        <div>
          <label htmlFor="cardNumber" className="block text-gray-600 font-medium">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="1234 5678 9101 1121"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="expiryDate" className="block text-gray-600 font-medium">
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label htmlFor="cvv" className="block text-gray-600 font-medium">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="123"
            />
          </div>
        </div>
        <div>
          <label htmlFor="cardHolder" className="block text-gray-600 font-medium">
            Card Holder Name
          </label>
          <input
            type="text"
            id="cardHolder"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="John Doe"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 w-full"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default CardDetails;
