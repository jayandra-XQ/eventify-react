import React, { useEffect, useState } from 'react';
import teammember100 from '../../assets/team-member2.png';  // ✅ Ensure correct relative path

const Profile = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBookings, setTotalBookings] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const usersRes = await fetch('/api/auth/count');
        const usersData = await usersRes.json();
        setTotalUsers(usersData.totalUsers || 0);

        const bookingsRes = await fetch('/api/payments/count');
        const bookingsData = await bookingsRes.json();
        setTotalBookings(bookingsData.totalBookings || 0);
      } catch (error) {
        console.error("Failed to fetch admin stats:", error);
      }
    };

    fetchCounts();
  }, []);


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

        {/* Booking & Events */}
        <div className="flex justify-around items-center text-xl font-semibold mb-8">
          <div className="text-center">
            <span className="text-red-600 font-bold text-2xl">{totalUsers}</span>
            <span className="text-blue-900 ml-2">Total users</span>
            <div className="border-t-4 border-yellow-300 w-24 mx-auto mt-2"></div>
          </div>

          <div className="text-center">
            <span className="text-red-600 font-bold text-2xl">{totalBookings}</span>
            <span className="text-blue-900 ml-2">Total bookings</span>
            <div className="border-t-4 border-yellow-300 w-24 mx-auto mt-2"></div>
          </div>
        </div>

        {/* Delete Account Button */}
        <button onClick={handleDelete} className="bg-red-600 text-white px-8 py-4 text-lg rounded-md shadow-lg hover:bg-red-700 transition duration-300">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Profile;
