import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardDetails from "./card-detail";
import BankTransfer from "./BankTransfer";
import PayPal from "./PayPal";
function PaymentSubmission() {
  const [activeComponent, setActiveComponent] = useState("card");

  const renderComponent = () => {
    switch (activeComponent) {
      case "card":
        return <CardDetails />;
      case "paypal":
        return <PayPal />;
      case "bank":
        return <BankTransfer />;
      default:
        return null;
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-gray-800">
              Complete Your <span className="text-pink-500">Payment</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Secure and easy payment options to ensure a smooth checkout
              experience.
            </p>
          </div>

          {/* Payment Section */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Payment Methods */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Choose Payment Method
              </h2>
              <div className="space-y-4">
                <div
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center cursor-pointer hover:border-pink-500 border border-transparent"
                  onClick={() => setActiveComponent("card")}
                >
                  <i className="fas fa-credit-card text-indigo-500 text-2xl mr-4"></i>
                  <span className="text-gray-600 font-medium">
                    Credit/Debit Card
                  </span>
                </div>
                <div
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center cursor-pointer hover:border-pink-500 border border-transparent"
                  onClick={() => setActiveComponent("paypal")}
                >
                  <i className="fab fa-paypal text-indigo-500 text-2xl mr-4"></i>
                  <span className="text-gray-600 font-medium">PayPal</span>
                </div>
                <div
                  className="bg-white p-4 rounded-lg shadow-lg flex items-center cursor-pointer hover:border-pink-500 border border-transparent"
                  onClick={() => setActiveComponent("bank")}
                >
                  <i className="fas fa-university text-indigo-500 text-2xl mr-4"></i>
                  <span className="text-gray-600 font-medium">
                    Bank Transfer
                  </span>
                </div>
              </div>
            </div>

            <div>{renderComponent()}</div>

            {/* Card Details Form
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Enter Card Details
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-600 font-medium"
                  >
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
                    <label
                      htmlFor="expiryDate"
                      className="block text-gray-600 font-medium"
                    >
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
                    <label
                      htmlFor="cvv"
                      className="block text-gray-600 font-medium"
                    >
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
                  <label
                    htmlFor="cardHolder"
                    className="block text-gray-600 font-medium"
                  >
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
            </div> */}
          </div>

          {/* Footer Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-500">
              Thank you for shopping with <strong>Book Store</strong>. Your
              payment is secure and protected.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PaymentSubmission;
