# Day 23 – Understanding `useReducer`

## 🔹 What is `useReducer`?

- `useReducer` is a **React Hook** used for managing **complex state logic**.
- It is similar to `useState`, but better when:

  - The state has **multiple sub-values**.
  - The next state depends on the **previous state**.
  - You want **clear separation of logic** (state vs actions).

---

## 🔹 Syntax

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- **`state`** → The current state value.
- **`dispatch`** → A function to send (dispatch) an action.
- **`reducer`** → A function `(state, action) => newState`.
- **`initialState`** → The starting value of state.

---

## 🔹 Reducer Function

The reducer is a **pure function**:

- Takes the current `state` and an `action`.
- Returns the **new state**.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}
```

---

## 🔹 Example: Counter with `useReducer`

```jsx
import { useReducer } from "react";

function Counter() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default Counter;
```

---

## 🔹 How it Works (Step by Step)

1. `useReducer` initializes state → `{ count: 0 }`.
2. When you click **Increment**, `dispatch({ type: "increment" })` is called.
3. React sends this action to the **reducer** function.
4. Reducer decides the **new state** → `{ count: state.count + 1 }`.
5. React updates the component with the new state.

---

## 🔹 When to Use `useReducer`?

- When state is **complex** (multiple values).
- When state transitions are **predictable** and can be grouped in actions.
- When you want **cleaner, more testable code**.

- For small states, `useState` is enough.
- For larger apps, `useReducer` or **Redux** is better.
