import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <BrowserRouter>
        <main>
          {/* Navbar */}
          <Navbar />
          {/* Routes */}
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
