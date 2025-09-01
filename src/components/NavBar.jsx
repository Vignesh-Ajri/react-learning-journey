import { useState } from "react";
import { Link } from "react-router-dom";

export default function ResponsiveNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: "/day01", label: "Day 01 - Hello World" },
    { to: "/day02", label: "Day 02 - JSX & Components" },
    { to: "/day03", label: "Day 03 - Props" },
    { to: "/day04", label: "Day 04 - State" },
    { to: "/day05", label: "Day 05 - Events" },
    { to: "/day06", label: "Day 06 - Lists & Keys" },
    { to: "/day07", label: "Day 07 - Conditional Rendering" },
    { to: "/day08", label: "Day 08 - Styling in React" },
    { to: "/day09", label: "Day 09 - Tailwind CSS" },
    { to: "/day10", label: "Day 10 - UseEffect Hook" },
    { to: "/day11", label: "Day 11 - Forms & Controlled Components" },
    { to: "/day12", label: "Day 12 - Lifting State Up" },
    { to: "/day13", label: "Day 13 - React Developer Tools" },
    { to: "/day14", label: "Day 14 - Simple ToDo App" },
    { to: "/day15", label: "Day 15 - React Router Basics" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex flex-wrap gap-6 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-3">
            <span className="text-gray-700 font-medium">Learning Days</span>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded hover:bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMenuOpen && (
            <div className="pb-4">
              <ul className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="block px-3 py-2 rounded text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors text-sm text-center border border-gray-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
