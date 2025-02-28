import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0C6085] py-6 ">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Quote */}
        <div className="text-center mb-4">
          <p className="text-white">"Your event, your way - we make it happen!"</p>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mb-4">
          <Link to="/privacy" className="text-gray-700 hover:text-purple-600">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-700 hover:text-purple-600">Terms Of Service</Link>
          <Link to="/faq" className="text-gray-700 hover:text-purple-600">FAQ</Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mb-4">
          <Link to="#" className="text-gray-700 hover:text-purple-600"><i className="fab fa-facebook-f"></i></Link>
          <Link to="#" className="text-gray-700 hover:text-purple-600"><i className="fab fa-twitter"></i></Link>
          <Link to="#" className="text-gray-700 hover:text-purple-600"><i className="fab fa-instagram"></i></Link>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white">&copy; Copyright Eventify</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;