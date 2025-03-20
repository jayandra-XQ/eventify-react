import React from "react";

const EventType = () => {
  const eventData = [
    {
      id: 1,
      name: "Birthday Party",
      description:
        "Fun and personalized birthday parties for all ages with unique activities and designs",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-center items-center mt-20"> 
        <div className="w-full max-w-6xl px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Event Type List</h1>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-400 text-left">
                <th className="border px-6 py-3 text-blue-900">ID</th>
                <th className="border px-6 py-3 text-blue-900">Event Name</th>
                <th className="border px-6 py-3 text-blue-900">Description</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map((event) => (
                <tr key={event.id} className="bg-white">
                  <td className="border px-6 py-3">{event.id}</td>
                  <td className="border px-6 py-3">{event.name}</td>
                  <td className="border px-6 py-3">{event.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventType;
