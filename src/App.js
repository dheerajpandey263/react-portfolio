import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import {
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./index.css"; // Using Tailwind directives here

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <Router basename="/react-portfolio">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="flex flex-col md:flex-row justify-between items-center gap-3 py-6 px-4 bg-gray-200 text-gray-600 text-sm">
          {/* Left: Copyright */}
          <p>
            © {new Date().getFullYear()} Dheeraj Pandey. All rights reserved.
          </p>

          {/* Right: Social Links */}
          <div className="flex gap-4 text-gray-600 justify-end w-full md:w-auto">
            <a
              href="mailto:dheerajpandey263@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dheeraj-pandey-827b451b1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/your_instagram_handle/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/your_facebook_handle/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-800"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
