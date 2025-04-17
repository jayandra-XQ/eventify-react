import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import { signoutSuccess } from '../redux/user/userSlice'

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { currentUser } = useSelector(state => state.user)


  const handleSubmit = async () => {
    try {
      const res = await fetch('/api/auth/signout', {
        method: 'POST'
      });
      const data = await res.json()
      if (!res.ok) {
        console.log(data.message)
      } else {
        dispatch(signoutSuccess())
        navigate('/')
      }

    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <>
      {/* Eventify Name */}
      <div className="text-2xl font-semibold text-blue-500 min-h-10">
        EVENTIFY !!
      </div>
      <nav className="bg-[#676B98] relative z-50 shadow-md ">
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">

          <div className="flex items-center space-x-4">
            <Link to="/" className="text-[#123A85] hover:text-purple-600">Home</Link>
            <Link to="/aboutPage" className="text-[#123A85] hover:text-purple-600">About</Link>
            <Link to="/category" className="text-[#123A85] hover:text-purple-600">Category</Link>



            {/* Conditional Links Based on Role */}
            {currentUser ? (
              currentUser.isAdmin ? (
                <>
                  <Link
                    to="/userlist"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    User List
                  </Link>
                  <Link
                    to="/bookinghistory"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    Booking History
                  </Link>
                  <Link
                    to="/venue"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    Venue
                  </Link>

                  {/* Dropdown for Event Type */}
                  <div className="relative group">
                    <button className="text-[#123A85] hover:text-purple-600 focus:outline-none flex items-center">
                      Event Type
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg origin-top-left transform scale-0 transition-transform duration-200 ease-out group-hover:scale-100">
                      <div className="py-1">
                        <Link
                          to="/addevent"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Add Event
                        </Link>
                        <Link
                          to="/eventlist"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Event List
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/book"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    Book
                  </Link>
                  <Link
                    to="/bookinghistory"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    Booking History
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[#123A85] hover:text-purple-600"
                  >
                    Contact
                  </Link>
                </>
              )
            ) : null}

          </div>

          {/* Right Side: User Dropdown or "Let's Connect" */}
          {currentUser ? (
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 focus:outline-none flex items-center">
                {currentUser.email}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg origin-top-right transform scale-0 transition-transform duration-200 ease-out group-hover:scale-100">
                <div className="py-1">
                  {currentUser.isAdmin ? (
                    <Link
                      to="/adminprofile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Admin Profile
                    </Link>
                  ) : (
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      User Profile
                    </Link>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 focus:outline-none flex items-center">
                Let's Connect
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg origin-top-right transform scale-0 transition-transform duration-200 ease-out group-hover:scale-100">
                <div className="py-1">
                  <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>

  );
};

export default Navbar;