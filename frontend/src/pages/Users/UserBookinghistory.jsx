import React from "react";

const UserBookinghistory = () => {
  return (
    <div className="p-6 w-full flex flex-col items-center h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center w-full">
        History
      </h1>

      <div className="overflow-x-auto overflow-y-auto rounded-lg shadow w-full flex-grow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Person Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Card Number
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Expire
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">1</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Ishwar</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">8787 2643 556</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">09/2025</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Payment Success
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Rahul</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">4567 1234 789</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">12/2026</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Pending
                </span>
              </td>
            </tr>
           
            {/* More rows can be added dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBookinghistory;
