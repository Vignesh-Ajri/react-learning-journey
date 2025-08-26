import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center border mt-5 p-5">
      <h1 className="text-2xl font-bold mb-4">Counter App</h1>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          -
        </button>

        <span className="text-xl">{count}</span>

        <button
          onClick={() => setCount(count + 1)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}
