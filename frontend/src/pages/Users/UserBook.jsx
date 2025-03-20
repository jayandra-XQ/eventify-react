import React from "react";
import { useNavigate } from "react-router-dom";
import coprate from "../../assets/coprate.avif";
import wedding from "../../assets/wedding.avif"; 

const UserBook = () => {
  const navigate = useNavigate(); // Initialize navigation function

  const defaultImage = "https://via.placeholder.com/150"; // Fallback image URL

  const venues = [
    {
      id: 1,
      image: wedding,
      location: "Mumbai",
      capacity: 500,
      cost: 500000,
      date: "2025-05-21",
      eventType: "Wedding Ceremony",
    },
    {
      id: 2,
      image: coprate,
      location: "Delhi",
      capacity: 300,
      cost: 350000,
      date: "2025-06-15",
      eventType: "Corporate Event",
    },
  ];

  // Function to handle navigation with selected venue data
  const handleBookAndPay = (venue) => {
    navigate("/Users/payment", { state: { venue } }); // Pass venue data via state
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-center text-3xl font-bold py-4 bg-gray-100 shadow-md">
        Venue List
      </header>

      <div className="flex-grow overflow-auto p-4">
        <div className="w-11/12 mx-auto">
          <table className="w-full border border-gray-300 shadow-lg">
            <thead>
              <tr className="bg-[#C49A6C] text-[#22205F] text-lg">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Capacity</th>
                <th className="px-4 py-2">Cost</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Event Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((venue) => (
                <tr key={venue.id} className="bg-gray-300 border-b border-gray-400 text-lg">
                  <td className="px-4 py-2 text-center">{venue.id}</td>
                  <td className="px-4 py-2 flex justify-center">
                    <img
                      src={venue.image || defaultImage}
                      alt="Venue"
                      className="w-32 h-24 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 text-center">{venue.location}</td>
                  <td className="px-4 py-2 text-center">{venue.capacity}</td>
                  <td className="px-4 py-2 text-center">₹{venue.cost.toLocaleString()}</td>
                  <td className="px-4 py-2 text-center">{venue.date}</td>
                  <td className="px-4 py-2 text-center">{venue.eventType}</td>
                  <td className="px-4 py-2 text-center">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
                      onClick={() => handleBookAndPay(venue)}
                    >
                      Book & Pay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserBook;
