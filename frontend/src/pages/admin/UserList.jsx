import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/auth/all');
      const data = await res.json();
      setUsers(data.users || []);
    } catch (err) {
      console.error('Failed to fetch users:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/auth/delete/${userId}`, {
        method: 'DELETE',
        credentials: 'include', // optional if using cookies with JWT
      });

      const data = await res.json();
      if (res.ok) {
        alert("User deleted successfully");
        // remove from local state
        setUsers(prev => prev.filter(user => user._id !== userId));
      } else {
        alert(data.message || "Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      alert("An error occurred while deleting the user");
    }
  };

  return (
    <div className="min-h-screen w-full p-6">
      <div className="w-full mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 inline-block">User List</h1>
      </div>

      <div className="w-full overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">ID</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">First Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Last Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Gender</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.firstName || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.lastName || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.gender || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default UserList;
