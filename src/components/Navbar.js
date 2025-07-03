import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-white text-xl font-bold">Dheeraj</h1>
          </div>
          <div className="flex space-x-4 items-center">
            <Link
              to="/"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-blue-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
