import { useState, useMemo, useCallback, memo } from "react";

// Memoized child to demonstrate re-render behavior
const ChildButton = memo(function ChildButton({ onIncrement, label }) {
  return (
    <button
      className="px-4 py-2 rounded-xl border shadow-sm"
      onClick={onIncrement}
    >
      {label}
    </button>
  );
});

export default function DevToolsDemo() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  // Big list to make the profiler charts meaningful
  const numbers = useMemo(() => Array.from({ length: 10000 }, (_, i) => i), []);
  const filtered = useMemo(
    () => numbers.filter((n) => String(n).includes(query)),
    [numbers, query]
  );

  // Stable callback → prevents ChildButton from re-rendering unnecessarily
  const handleIncrement = useCallback(() => setCount((c) => c + 1), []);

  // NOTE for experiments:
  // 1) Replace `handleIncrement` in ChildButton with: `onIncrement={() => setCount(c => c + 1)}`
  //    Then watch ChildButton re-render on every parent render in the Profiler.
  // 2) Temporarily remove useMemo for `filtered` to see heavier renders.

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">React DevTools Demo</h2>

      <div className="flex items-center gap-3">
        <span className="text-lg">
          Count: <strong>{count}</strong>
        </span>
        <ChildButton onIncrement={handleIncrement} label="Increment" />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Filter numbers</label>
        <input
          className="w-full max-w-sm rounded-xl border px-3 py-2 outline-none"
          placeholder="Type to filter… e.g. 12"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="text-sm opacity-80">Showing {filtered.length} results</p>
      </div>

      <ul className="grid grid-cols-4 gap-2 max-h-48 overflow-auto border rounded-xl p-3">
        {filtered.slice(0, 60).map((n) => (
          <li key={n} className="text-sm px-2 py-1 rounded bg-gray-50">
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}
