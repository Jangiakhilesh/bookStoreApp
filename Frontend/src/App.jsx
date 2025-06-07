import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import About from "./components/about/about";
import Contact from "./components/about/contact/contact";
import PaymentSubmission from "./components/payment-submission";
import BookStoreList from "./components/myMap/see-store";
import UserLocationMap from "./components/userLocation";

function App() {
  const [authUser, setAuthUser] = useAuth();
  // console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/visit" element={<BookStoreList />} />
          <Route path="/user-location" element={<UserLocationMap />} />
          <Route path="/payment-submission" element={<PaymentSubmission />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
