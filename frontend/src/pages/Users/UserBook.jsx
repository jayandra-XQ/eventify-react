import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserBook = () => {
  const navigate = useNavigate();
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(true);
  const defaultImage = "https://via.placeholder.com/150"; // Fallback image URL

  // Fetch venues from API
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch('/api/venues');
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched venue data:", data); // Debug: check what's coming from API
          setVenues(data);
        } else {
          console.error("Failed to fetch venues");
          toast.error("Failed to load venues. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching venues:", error);
        toast.error("Error connecting to server. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchVenues();
  }, []);

  // Function to handle navigation with selected venue data
  const handleBookAndPay = (venue) => {
    navigate("/payment", { state: { venue } });
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Function to determine the correct image path
  const getImagePath = (venue) => {
    if (!venue.eventPhoto) {
      return defaultImage;
    }

    // Option 1: If eventPhoto is a full URL
    if (typeof venue.eventPhoto === 'string' &&
      (venue.eventPhoto.startsWith('http://') || venue.eventPhoto.startsWith('https://'))) {
      return venue.eventPhoto;
    }

    // Option 2: If eventPhoto is a filename (common in multer uploads)
    if (typeof venue.eventPhoto === 'string') {
      // Adjust this path to match your server's file serving setup
      return `/uploads/${venue.eventPhoto}`;
    }

    // Option 3: If eventPhoto is an object with filename (from multer)
    if (typeof venue.eventPhoto === 'object' && venue.eventPhoto.filename) {
      return `/uploads/${venue.eventPhoto.filename}`;
    }

    // Option 4: If eventPhoto is an object with path
    if (typeof venue.eventPhoto === 'object' && venue.eventPhoto.path) {
      const filename = venue.eventPhoto.path.split('/').pop();
      return `/uploads/${filename}`;
    }

    // Fallback
    return defaultImage;
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <header className="text-center text-3xl font-bold py-4 bg-gray-100 shadow-md">
          Venue List
        </header>
        <div className="flex justify-center items-center flex-grow">
          <p className="text-xl">Loading venues...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="text-center text-3xl font-bold py-4 bg-gray-100 shadow-md">
        Venue List
      </header>

      <div className="flex-grow overflow-auto p-4">
        <div className="w-11/12 mx-auto">
          {venues.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600">No venues available at the moment.</p>
            </div>
          ) : (
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
                {venues.map((venue, index) => (
                  <tr key={venue._id || venue.id} className="bg-gray-300 border-b border-gray-400 text-lg">
                    <td className="px-4 py-2 text-center">{index + 1}</td>
                    <td className="px-4 py-2 flex justify-center">
                      <img
                        src={getImagePath(venue)}
                        alt={venue.eventType || "Venue"}
                        className="w-32 h-24 object-cover rounded-md"
                        onError={(e) => {
                          console.log("Image failed to load:", e.target.src); // Debug
                          e.target.src = defaultImage;
                        }}
                      />
                    </td>
                    <td className="px-4 py-2 text-center">{venue.location}</td>
                    <td className="px-4 py-2 text-center">{venue.capacity}</td>
                    <td className="px-4 py-2 text-center">₹{Number(venue.cost).toLocaleString()}</td>
                    <td className="px-4 py-2 text-center">{formatDate(venue.date)}</td>
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
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBook;