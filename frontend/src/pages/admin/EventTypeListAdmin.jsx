import React, { useEffect, useState } from 'react'

const EventTypeListAdmin = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/add-event/eventlist');
        const data = await res.json();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-semibold mb-6 text-center">Event Type List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Event Name</th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-red-500">{error}</td>
              </tr>
            ) : events.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center">No events found.</td>
              </tr>
            ) : (
              events.map((event, index) => (
                <tr key={event._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{event.name}</td>
                  <td className="px-6 py-4">{event.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Debug section */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <p>Events count: {events.length}</p>
      </div>
    </div>
  );
};

export default EventTypeListAdmin;