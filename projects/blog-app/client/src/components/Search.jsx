import { Search } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400 dark:text-gray-100 w-5 h-5" />
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-600 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
      </div>
    </div>
  );
}
