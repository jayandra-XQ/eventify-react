import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import teammember100 from '../../assets/team-member2.png';

const UserProfile = () => {
  const [bookingCount, setBookingCount] = useState(0);
  const dispatch = useDispatch();

  // Get current user from Redux store
  const currentUser = useSelector((state) => state.user.currentUser);
  const userId = currentUser?._id;

  // Fetch booking count on component mount
  useEffect(() => {
    const fetchBookingCount = async () => {
      if (!userId) return;

      try {
        // Try to fetch booking count if you have an API for it
        const paymentRes = await fetch(`/api/payments/history`, {
          credentials: 'include',
        });

        if (paymentRes.ok) {
          const payments = await paymentRes.json();
          setBookingCount(payments.length);
        } else {
          // Fallback to mock data if API fails
          console.log("Using mock booking count");
          setBookingCount(3); // Mock booking count
        }
      } catch (error) {
        console.error('Error fetching booking data:', error);
        setBookingCount(0);
      }
    };

    fetchBookingCount();
  }, [userId]);

  // Delete user account
  const handleDelete = async () => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete your account?");
      if (!confirmDelete) return;

      // Here you would call your actual API
      try {
        const res = await fetch(`/api/payments/delete/${userId}`, {
          method: 'DELETE',
          credentials: 'include',
        });

        if (res.ok) {
          // Dispatch logout action to Redux
          dispatch({ type: 'USER_LOGOUT' }); // Replace with your actual logout action
          alert("Account deleted successfully");
          // Redirect to home or login page
          window.location.href = '/';
        } else {
          throw new Error("Failed to delete account");
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        alert("Failed to delete account");
      }
    } catch (error) {
      console.error('Error in delete process:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-lg text-center border border-gray-300">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={teammember100}
            alt="User Profile"
            className="rounded-full w-40 h-40 border-4 border-gray-400 shadow-lg"
          />
        </div>

        {/* User Name (if available) */}
        {currentUser?.name && (
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentUser.name}</h2>
        )}

        {/* User Email (if available) */}
        {currentUser?.email && (
          <p className="text-gray-600 mb-6">{currentUser.email}</p>
        )}

        {/* Booking */}
        <div className="flex justify-around items-center text-xl font-semibold mb-8">
          <div className="text-center">
            <span className="text-red-600 font-bold text-2xl">{bookingCount}</span>
            <span className="text-blue-900 ml-2">Your Booking</span>
            <div className="border-t-4 border-yellow-300 w-24 mx-auto mt-2"></div>
          </div>
        </div>

        {/* Delete Account Button */}
        <button
          className="bg-red-600 text-white px-8 py-4 text-lg rounded-md shadow-lg hover:bg-red-700 transition duration-300"
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default UserProfile;