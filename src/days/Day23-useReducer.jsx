import { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  function counterReducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        throw new Error("Unknown action");
    }
  }

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Counter with reducer</h1>
      <h1 className="text-2xl font-bold">Counter: {state.count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          - Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          + Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
