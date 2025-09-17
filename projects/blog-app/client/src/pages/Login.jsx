import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://localhost:3001/users?email=${email}&password=${password}`
      );
      const data = await res.json();
      if (data.length > 0) {
        localStorage.setItem("user", JSON.stringify(data[0]));
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch {
      setError("Login failed, please try again");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-600">
      <Link
        to="/"
        className="inline-block px-6 py-3 mt-6 mb-3 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 font-medium rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
      >
        ← Back To Home
      </Link>
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
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-100"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-gray-100"
          required
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg"
        >
          Login
        </button>
        <p
          onClick={() => navigate("/register")}
          className="text-sm mt-4 text-blue-600 dark:text-blue-400 cursor-pointer text-center"
        >
          Don’t have an account? Register
        </p>
      </form>
    </div>
  );
}
