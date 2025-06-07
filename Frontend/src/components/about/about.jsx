import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Course from "../Course";
import Footer from "../Footer";
function About() {

  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 min-h-screen py-20 px-6 mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-gray-800">
                Welcome to <span className="text-pink-500">Book Store</span>
              </h1>
              <p className="text-lg text-gray-600 mt-4">
                Your one-stop destination for everything books. A place where
                stories come alive.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341698.jpg"
                  alt="Bookshelf"
                  className="rounded-xl shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                  Inspiring Minds
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  At <strong>Book Store</strong>, we believe in the
                  transformative power of books. Our goal is to provide a
                  curated selection of literary treasures that inspire, educate,
                  and entertain. Whether you're a fan of timeless classics or
                  modern bestsellers, we have something for everyone.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                Our mission is simple yet profound: to foster a love for reading
                in every individual. We aim to create a space where stories come
                alive, where imagination thrives, and where people connect
                through the shared love of literature.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-pink-500">
                  Wide Variety
                </h3>
                <p className="text-gray-600 mt-2">
                  Books across all genres and categories.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-pink-500">
                  Expert Curators
                </h3>
                <p className="text-gray-600 mt-2">
                  Personalized recommendations for every reader.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-pink-500">
                  Community Events
                </h3>
                <p className="text-gray-600 mt-2">
                  Author signings, book clubs, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-pink-500">
                  Cozy Ambiance
                </h3>
                <p className="text-gray-600 mt-2">
                  A relaxing space for all book lovers.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500">
                Thank you for choosing <strong>Book Store</strong>. We can't
                wait to help you find your next favorite read.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
