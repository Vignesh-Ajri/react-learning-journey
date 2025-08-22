import { useState } from "react";

export default function InteractiveDay07() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(["Sample error"]);
  const [user, setUser] = useState(null);
  const [showHide, setShowHide] = useState(false);
  const [mount, setMount] = useState(false);
  const [badgeActive, setBadgeActive] = useState(false);
  const [toggleOpen, setToggleOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const [evenOnly, setEvenOnly] = useState(false);

  const items = [1, 2, 3, 4, 5, 6];
  const filteredItems = evenOnly ? items.filter((n) => n % 2 === 0) : items;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-50 rounded-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Interactive Day 07
      </h1>

      {/* Greeting */}
      <div className="p-3 bg-white rounded shadow">
        <p>{isLoggedIn ? "Welcome back!" : "Please sign up."}</p>
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="px-3 py-1 bg-indigo-500 text-white rounded mt-2"
        >
          Toggle Login
        </button>
      </div>

      {/* Loading */}
      <div className="p-3 bg-white rounded shadow">
        <p>{isLoading ? "Loading..." : "Data loaded!"}</p>
        <button
          onClick={() => setIsLoading(!isLoading)}
          className="px-3 py-1 bg-green-500 text-white rounded mt-2"
        >
          Toggle Loading
        </button>
      </div>

      {/* Errors */}
      <div className="p-3 bg-white rounded shadow">
        {errors.length > 0 ? (
          <ul className="list-disc list-inside text-red-600">
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        ) : (
          <p>No errors</p>
        )}
        <button
          onClick={() => setErrors(errors.length ? [] : ["Sample error"])}
          className="px-3 py-1 bg-red-500 text-white rounded mt-2"
        >
          Toggle Errors
        </button>
      </div>

      {/* User Dashboard */}
      <div className="p-3 bg-white rounded shadow">
        <p>
          {!user
            ? "Please log in"
            : user.isAdmin
            ? "Welcome Admin"
            : "Welcome User"}
        </p>
        <button
          onClick={() =>
            setUser(
              !user
                ? { isAdmin: false }
                : user.isAdmin
                ? null
                : { isAdmin: true }
            )
          }
          className="px-3 py-1 bg-blue-500 text-white rounded mt-2"
        >
          Toggle User
        </button>
      </div>

      {/* Show/Hide & Mount/Unmount */}
      <div className="p-3 bg-white rounded shadow">
        <button
          onClick={() => setShowHide(!showHide)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Toggle Show/Hide
        </button>
        <div
          className={`${showHide ? "block" : "hidden"} p-2 mt-2 border rounded`}
        >
          I stay mounted — just hidden
        </div>

        <button
          onClick={() => setMount(!mount)}
          className="px-3 py-1 bg-yellow-500 text-white rounded mt-2"
        >
          Toggle Mount/Unmount
        </button>
        {mount && (
          <div className="p-2 mt-2 border rounded bg-gray-100">
            I am mounted/unmounted
          </div>
        )}
      </div>

      {/* Badge */}
      <div className="p-3 bg-white rounded shadow">
        <span
          className={`px-3 py-1 rounded text-sm font-medium ${
            badgeActive
              ? "bg-green-200 text-green-800"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Badge
        </span>
        <button
          onClick={() => setBadgeActive(!badgeActive)}
          className="px-3 py-1 bg-gray-500 text-white rounded ml-2"
        >
          Toggle Badge
        </button>
      </div>

      {/* Toggle Example */}
      <div className="p-3 bg-white rounded shadow">
        <button
          onClick={() => setToggleOpen(!toggleOpen)}
          className="px-3 py-1 bg-indigo-500 text-white rounded"
        >
          {toggleOpen ? "Hide" : "Show"} Details
        </button>
        {toggleOpen && (
          <div className="p-2 mt-2 border rounded bg-indigo-50">
            Mount/Unmount Content
          </div>
        )}
        <div
          className={`${
            toggleOpen ? "block" : "hidden"
          } p-2 mt-2 border rounded bg-gray-50`}
        >
          Show/Hide Content
        </div>
      </div>

      {/* FAQ */}
      <div className="p-3 bg-white rounded shadow">
        <h3
          onClick={() => setFaqOpen(!faqOpen)}
          className="cursor-pointer font-medium text-indigo-600"
        >
          What is React?
        </h3>
        {faqOpen && (
          <p className="mt-1 text-gray-700">
            React is a JS library for building UIs.
          </p>
        )}
      </div>

      {/* Like Button */}
      <div className="p-3 bg-white rounded shadow">
        <button
          onClick={() => setLiked(!liked)}
          className={`px-3 py-1 rounded ${
            liked ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {liked ? "Liked 👍" : "Like"}
        </button>
      </div>

      {/* Tabs */}
      <div className="p-3 bg-white rounded shadow">
        <div className="flex gap-2 mb-2">
          {["tab1", "tab2", "tab3"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-3 py-1 rounded ${
                activeTab === t
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="p-2 border rounded bg-gray-50">
          Content of {activeTab.toUpperCase()}
        </div>
      </div>

      {/* Even Items List */}
      <div className="p-3 bg-white rounded shadow">
        <label className="flex items-center gap-2 mb-2">
          <input
            type="checkbox"
            checked={evenOnly}
            onChange={(e) => setEvenOnly(e.target.checked)}
            className="w-4 h-4"
          />
          Show only even items
        </label>
        <ul className="list-disc list-inside">
          {filteredItems.map((n, i) => (
            <li key={i}>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
