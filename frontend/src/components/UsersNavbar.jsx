import React from 'react';
import { Link } from 'react-router-dom';

const UsersNavbar = () => {
  return (
    <>
      {/* Eventify Name */}
      <div className="text-2xl font-semibold text-blue-500 min-h-10">
        EVENTIFY !!
      </div>
      <nav className="bg-[#676B98] relative z-50 shadow-md ">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">

          <div className="flex items-center space-x-4">
            <Link to="/Users/Userhomepage" className="text-[#123A85] hover:text-purple-600">Home</Link>
            <Link to="/Users/Userabout" className="text-[#123A85] hover:text-purple-600">About</Link>
            <Link to="/Users/UserBook" className="text-[#123A85] hover:text-purple-600">Book</Link>
            <Link to="/Users/UserBookinghistory" className="text-[#123A85] hover:text-purple-600">BookingHistory</Link>
            <Link to="/Users/contact" className="text-[#123A85] hover:text-purple-600">Contact</Link>
          </div>

          {/* Users Profile Dropdown */}
          <div className="relative group">
            <button className="text-[#123A85] hover:text-purple-600 focus:outline-none flex items-center">
              Hellow ! Ashik
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg origin-top-right transform scale-0 transition-transform duration-200 ease-out group-hover:scale-100">
              <div className="py-1">
                <Link to="/Users/Userprofile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</Link>
                <Link to="/Login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UsersNavbar;
