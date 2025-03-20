import React from 'react';

const UserList = () => {
  return (
    <div className="min-h-screen w-full p-6">
      {/* Centered Heading */}
      <div className="w-full mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800 inline-block">User List</h1>
      </div>

      {/* Full-width Table Container */}
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
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">mukesh</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">yadav</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">mukesh1234@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Male</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;