import React, { useState } from "react";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-[450px] min-h-[350px] border border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Event Type</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium">Event Name:</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              placeholder="Enter Event Name"
              className="w-full px-3 py-2 border rounded-lg bg-gray-100"
            />
          </div>

          <div>
            <label className="block font-medium">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg bg-gray-100"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white font-semibold py-2 rounded-lg hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
