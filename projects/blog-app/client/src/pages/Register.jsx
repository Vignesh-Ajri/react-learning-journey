import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form); // calls context → service → JSON server
      navigate("/dashboard"); // after successful register
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Link
        to="/"
        className="inline-block px-6 py-3 mt-6 mb-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
      >
        ← Back To Home
      </Link>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
          Create Account
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
