import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Venue = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    eventType: "",
    capacity: "",
    cost: "",
    location: "",
    contact: "",
    date: "",
    eventPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Validate file type and size
    if (file) {
      const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, eventPhoto: "Please upload JPEG, PNG, or WebP images only" });
        return;
      }

      if (file.size > maxSize) {
        setErrors({ ...errors, eventPhoto: "File size must be less than 5MB" });
        return;
      }

      setErrors({ ...errors, eventPhoto: "" });
    }

    setFormData({ ...formData, eventPhoto: file });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.eventType.trim()) newErrors.eventType = "Event type is required";

    if (!formData.capacity) {
      newErrors.capacity = "Capacity is required";
    } else if (parseInt(formData.capacity) <= 0) {
      newErrors.capacity = "Capacity must be greater than 0";
    }

    if (!formData.cost) {
      newErrors.cost = "Cost is required";
    } else if (parseFloat(formData.cost) < 0) {
      newErrors.cost = "Cost cannot be negative";
    }

    if (!formData.location.trim()) newErrors.location = "Location is required";

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact information is required";
    } else if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(formData.contact) &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid phone number or email";
    }

    if (!formData.date) newErrors.date = "Date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    const form = new FormData();
    form.append("eventType", formData.eventType);
    form.append("capacity", formData.capacity);
    form.append("cost", formData.cost);
    form.append("location", formData.location);
    form.append("contact", formData.contact);
    form.append("date", formData.date);
    if (formData.eventPhoto) {
      form.append("eventPhoto", formData.eventPhoto);
    }

    try {
      const res = await fetch('/api/venues', {
        method: 'POST',
        body: form
      });

      if (res.ok) {
        const data = await res.json();
        console.log("Venue added:", data);
        toast.success("Venue added successfully!");

        // Reset the form
        setFormData({
          eventType: "",
          capacity: "",
          cost: "",
          location: "",
          contact: "",
          date: "",
          eventPhoto: null,
        });

      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Error adding venue. Please try again.");
      }
    } catch (error) {
      console.error("Error adding venue:", error);
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">VENUE</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Event Type:</label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.eventType && (
              <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Capacity:</label>
            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.capacity && (
              <p className="text-red-500 text-sm mt-1">{errors.capacity}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Cost:</label>
            <input
              type="number"
              name="cost"
              value={formData.cost}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.cost && (
              <p className="text-red-500 text-sm mt-1">{errors.cost}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Contact:</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block font-medium">Event Photo:</label>
            <input
              type="file"
              name="eventPhoto"
              onChange={handleFileChange}
              accept="image/jpeg,image/png,image/webp"
              className="w-full px-3 py-2 border rounded-lg"
            />
            {errors.eventPhoto && (
              <p className="text-red-500 text-sm mt-1">{errors.eventPhoto}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-700 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Venue;