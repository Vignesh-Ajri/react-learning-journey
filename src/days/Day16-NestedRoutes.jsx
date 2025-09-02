import { Routes, Route, Link, Outlet, Navigate } from "react-router-dom";

function Profile() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        👤 Profile Page
      </h2>

      <p className="text-gray-600 mb-4">
        Welcome to your profile! From here, you can explore your settings.
      </p>

      <nav className="flex gap-3 mb-4">
        <Link
          to="settings"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          ⚙️ Go to Settings
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

function Settings() {
  return (
    <div className="bg-gray-50 rounded-md p-5 border-l-4 border-blue-500 shadow-sm">
      <h3 className="text-xl font-medium text-gray-700 mb-2">⚙️ Settings</h3>
      <p className="text-gray-600 mb-4">
        This page is loaded via a nested route inside Profile.
      </p>

      <Link
        to="/day16/profile"
        className="inline-block bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition"
      >
        🔙 Back to Profile
      </Link>
    </div>
  );
}

export default function Day16() {
  return (
    <div className="max-w-3xl mx-auto p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        📱 Nested Routes Demo (Day 16)
      </h1>

      <nav className="flex justify-center gap-4 mb-8">
        <Link
          to="/day16/profile"
          className="px-5 py-2 bg-gray-800 text-white font-medium rounded-lg shadow hover:bg-gray-900 transition"
        >
          👤 Profile
        </Link>
      </nav>

      <div className="bg-white p-2 rounded-2xl shadow-lg">
        <Routes>
          {/* Redirect /day16 to /day16/profile */}
          <Route path="/" element={<Navigate to="profile" replace />} />

          <Route path="profile" element={<Profile />}>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
