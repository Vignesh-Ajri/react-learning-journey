import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // uses AuthContext → auth.js → JSON Server
      navigate("/dashboard"); // redirect after successful login
    } catch (err) {
      setError(err.message || "Login failed, please try again");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block px-6 py-3 mb-6 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
      >
        ← Back To Home
      </Link>

      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-100 dark:placeholder:text-gray-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
