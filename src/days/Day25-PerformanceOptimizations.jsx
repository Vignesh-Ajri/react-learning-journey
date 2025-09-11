import { useState, useMemo, useCallback } from "react";
import React from "react";

// 🔹 Simulate heavy calculation
function slowFunction(num) {
  console.log("Calling slow function...");
  for (let i = 0; i < 1e9; i++) {} // fake expensive work
  return num * 2;
}

// 🔹 Child Component (memoized)
const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return (
    <div className="mt-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl shadow">
      <h2 className="text-xl font-semibold">Expensive Value: {value}</h2>
    </div>
  );
});

// 🔹 Main Component
export default function Day25PerformanceOptimizations() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Prevent recalculation unless number changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  // Stable function reference
  const toggleTheme = useCallback(() => {
    setDark((d) => !d);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center transition-colors duration-300 ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">🚀 Performance Demo</h1>

      {/* 📌 Instructions */}
      <div className="max-w-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow p-6 mb-6 text-left">
        <h2 className="text-xl font-semibold mb-2">📖 How to Use</h2>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>
            Type a number → triggers an <b>expensive calculation</b>.
          </li>
          <li>
            Toggle theme → only theme changes, <b>no recalculation</b>.
          </li>
          <li>
            Check console logs:
            <ul className="list-disc list-inside ml-5">
              <li>
                <code>Calling slow function...</code> → runs only when number
                changes (<b>useMemo</b>).
              </li>
              <li>
                <code>Child rendered</code> → only when prop changes (
                <b>React.memo</b>).
              </li>
            </ul>
          </li>
        </ul>
        <p className="mt-3 text-sm italic text-gray-500 dark:text-gray-400">
          👉 Try interacting and watch the console to see the optimizations in
          action.
        </p>
      </div>

      {/* Input + Button */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        className="p-2 border rounded-md mb-4 text-black"
      />

      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg shadow"
      >
        Toggle Theme
      </button>

      <Child value={doubleNumber} />
    </div>
  );
}
