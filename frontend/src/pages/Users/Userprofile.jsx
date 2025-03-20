import React from 'react';
import teammember100 from '../../assets/team-member2.png';  // ✅ Ensure correct relative path

const UserProfile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-lg text-center border border-gray-300">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={teammember100} // ✅ Use the imported image variable
            alt="User Profile"
            className="rounded-full w-40 h-40 border-4 border-gray-400 shadow-lg"
          />
        </div>

        {/* Booking & Events */}
        <div className="flex justify-around items-center text-xl font-semibold mb-8">
          <div className="text-center">
            <span className="text-red-600 font-bold text-2xl">0</span> 
            <span className="text-blue-900 ml-2">Your Booking</span>
            <div className="border-t-4 border-yellow-300 w-24 mx-auto mt-2"></div>
          </div>

          <div className="text-center">
            <span className="text-red-600 font-bold text-2xl">0</span> 
            <span className="text-blue-900 ml-2">Your Events</span>
            <div className="border-t-4 border-yellow-300 w-24 mx-auto mt-2"></div>
          </div>
        </div>

        {/* Delete Account Button */}
        <button className="bg-red-600 text-white px-8 py-4 text-lg rounded-md shadow-lg hover:bg-red-700 transition duration-300">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
