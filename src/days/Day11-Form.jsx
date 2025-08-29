import { useState } from "react";

export default function Day11Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-6 text-center text-gray-900">
        Day 11 - Simple Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div className="flex items-center gap-4">
          <label className="w-20 text-sm text-gray-800">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-4">
          <label className="w-20 text-sm text-gray-800">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
