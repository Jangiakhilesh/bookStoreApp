import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
function Contact() {

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-pink-50 to-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Get in <span className="text-pink-500">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reach out to us using the details below, or simply fill out the form and we’ll get back to you as soon as possible.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-pink-500 text-xl mr-4"></i>
                <span className="text-gray-600">+91 8476973224</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-pink-500 text-xl mr-4"></i>
                <span className="text-gray-600">info@bookstore.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-pink-500 text-xl mr-4"></i>
                <span className="text-gray-600">72b Haldwani</span>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            We’re here to help you with all your queries and concerns. Thank you for choosing <strong>Book Store</strong>.
          </p>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Contact;
