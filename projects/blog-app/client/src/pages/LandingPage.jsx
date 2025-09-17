import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../context/AuthContext";

import { useState } from "react";

const Header = ({ isAuthenticated = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Filter nav items based on auth status
  const navItems = isAuthenticated
    ? [{ href: "/dashboard", label: "Dashboard" }]
    : [
        { href: "/login", label: "Login" },
        { href: "/register", label: "Register" },
      ];

  const renderNavLink = (item) => {
    return (
      <Link to={item.href} onClick={() => setIsMenuOpen(false)}>
        <span className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-100 transition-colors duration-300 font-medium relative group">
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <header className="p-2 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-purple-800/30 transition-colors duration-300">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div
          className="text-2xl font-bold text-gray-900 dark:text-white"
          title="BlogApp"
        >
          BlogApp
        </div>
        <div className="flex items-center space-x-6">
          <ThemeToggle />
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>{renderNavLink(item)}</li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          BlogApp
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleMenu}
            className="flex flex-col space-y-1.5 p-2 focus:outline-nonecursor-pointer text-2xl text-black dark:text-white"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          <div
            className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-purple-700/50 transition-all duration-300 transform ${
              isMenuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="py-2">
              {navItems.map((item) =>
                item.isLogout ? (
                  <li key={item.label} className="block px-4 py-3">
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                        navigate("/");
                      }}
                      className="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-200 hover:bg-gray-50 dark:hover:bg-purple-900/30 transition-all duration-200 w-full text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-200 hover:bg-gray-50 dark:hover:bg-purple-900/30 transition-all duration-200 border-b border-gray-100 dark:border-purple-700/30"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default function Landing() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <Header isAuthenticated />
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome to <span className="text-purple-600">BlogApp</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            A simple blogging platform to share your ideas, stories, and
            knowledge with the world.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                >
                  Go to Dashboard
                </Link>
                <Link
                  to="/blog/new"
                  className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition"
                >
                  Create Blog
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
