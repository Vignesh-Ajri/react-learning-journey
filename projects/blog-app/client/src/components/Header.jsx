import { Plus } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LogoutButton from "./Logout";

export default function Header({ openModal }) {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-40 dark:bg-gray-800 border-b dark:border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Blog
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
              Share your stories with the world
            </p>
          </div>
          <div className="flex flex-row gap-6">
            <ThemeToggle />
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5" />
              New Post
            </button>
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  );
}
