import React from 'react'

const EventTypeListAdmin = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Event Type List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                Event Name
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">1</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Birthday Party</div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">
                  Fun and personalized birthday parties for all ages with unique activities and designs
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default EventTypeListAdmin