// src/days/Day15.jsx
import { Routes, Route, Link } from "react-router-dom";

export default function Day15() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        📅 Day 15 – React Router Basics
      </h1>

      <nav className="flex gap-4 mb-8 p-3 border rounded-lg bg-white shadow-sm">
        {/* use absolute links to avoid confusion; routes below are relative */}
        <Link
          to="/day15"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          Home
        </Link>

        <Link
          to="/day15/about"
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
        >
          About
        </Link>
      </nav>

      <div className="p-6 w-full max-w-xl text-center border rounded-lg bg-white shadow">
        <Routes>
          {/* index route -> matches /day15 */}
          <Route
            index
            element={<h2 className="text-xl font-semibold">🏠 Day15 Home Page</h2>}
          />

          {/* nested route -> matches /day15/about */}
          <Route
            path="about"
            element={<h2 className="text-xl font-semibold">ℹ️ Day15 About Page</h2>}
          />

          {/* catch-all for anything under /day15/* */}
          <Route
            path="*"
            element={
              <h2 className="text-xl font-semibold text-red-500">
                🚫 404 — Page not found
              </h2>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
