import { Routes, Route, NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🏠 Welcome Home</h1>
      <p className="text-lg text-gray-700 mb-6">
        Your gateway to amazing experiences and discoveries.
      </p>
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
        Explore Now →
      </button>
    </div>
  );
}

function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-600 mb-4">ℹ️ About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        We're passionate about creating meaningful connections and innovative
        solutions.
      </p>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-600 mb-4">
        📞 Get In Touch
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        We'd love to hear from you. Send us a message!
      </p>
    </div>
  );
}

export default function Day17() {
  return (
    <div>
      <h2 className="text-xl font-bold p-2">📅 Day 17 - Navigation</h2>

      {/* Navbar for Day17 only */}
      <nav className="bg-gray-800 text-white p-4 flex gap-6">
        <NavLink
          to="/day17"
          end
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/day17/about"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/day17/contact"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-bold" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>

      {/* Subroutes inside Day17 */}
      <Routes>
        <Route in path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
