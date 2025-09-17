import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Landing({ isAuthenticated, logout }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Welcome to <span className="text-purple-600">BlogApp</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300">
            A simple blogging platform to share your ideas, stories, and knowledge
            with the world.
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
