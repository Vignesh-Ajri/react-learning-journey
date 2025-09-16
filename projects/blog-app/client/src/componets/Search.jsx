import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  // Dummy search results for demo
  const results = query
    ? [
        {
          id: 1,
          date: "August 5, 2023",
          title: "Release of Tailwind Next.js Starter Blog v2.0",
        },
      ]
    : [];

  return (
    <div className="bg-gray-300 min-h-screen flex items-start justify-center p-4 pt-20">
      <div className="w-full max-w-xl bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800">
        {/* Search Input */}
        <div className="flex items-center space-x-4 p-4 border-b border-gray-200 dark:border-gray-800">
          <svg
            className="w-5 h-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Type a command or search…"
            className="flex-grow bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none h-8"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            spellCheck="false"
            role="combobox"
            aria-expanded={results.length > 0}
            aria-controls="search-results"
            aria-activedescendant={results.length > 0 ? "result-0" : undefined}
          />
          <kbd className="inline-block rounded border border-gray-400 px-2 py-0.5 text-xs font-medium text-gray-400 dark:text-gray-500 select-none">
            ESC
          </kbd>
        </div>

        {/* Search Results */}
        {results.length > 0 && (
          <div
            id="search-results"
            role="listbox"
            className="max-h-64 overflow-auto"
          >
            <div className="px-4 pt-4 pb-2 text-xs font-semibold uppercase text-purple-600 dark:text-purple-400">
              Content
            </div>
            {results.map((item, idx) => (
              <div
                key={item.id}
                id={`result-${idx}`}
                role="option"
                aria-selected={idx === 0}
                className="cursor-pointer px-4 py-3 bg-purple-600 text-white flex justify-between hover:bg-purple-700"
              >
                <div>
                  <div className="text-xs text-purple-300">{item.date}</div>
                  <div>{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
