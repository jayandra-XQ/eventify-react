import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/add-event/addevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await res.json();
      if (res.ok) {
        toast.success(data.message);
        navigate('/eventlist')
      }

    } catch (error) {
      toast.error(error.message);
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-[450px] min-h-[350px] border border-gray-300">
        <h1 className="text-2xl font-bold mb-6 text-center">Add Event Type</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium">Event Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
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
