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
    e.preventDefault(); // prevent page reload
    console.log("Form Submitted:", formData);
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="p-4 max-w-sm mx-auto border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Day 11 - Form</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded p-2 w-full"
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
