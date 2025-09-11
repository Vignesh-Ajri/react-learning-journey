# 🚀 Day 45: Performance Optimizations in React

React apps re-render components whenever state or props change. While this is usually fine, **unnecessary re-renders or expensive calculations** can slow down your app.

React provides tools like **`React.memo`**, **`useCallback`**, and **`useMemo`** to optimize performance.

---

## 🔹 1. `React.memo`

### General Form

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // component logic
});
```

### Example

```jsx
import React from "react";

const Child = React.memo(({ count }) => {
  console.log("Child rendered");
  return <h2>Count: {count}</h2>;
});

export default Child;
```

```jsx
import { useState } from "react";
import Child from "./Child";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child count={count} />
    </div>
  );
}
```

-- Here, `Child` only re-renders when `count` changes, not when `text` changes.

### When to Use

- For **pure components** that should only update when props change.
- Useful for **lists, UI widgets, or static data**.

### ⚠️ When _Not_ to Use

- If the component is small/lightweight → memoization overhead may be costlier than re-rendering.

---

## 🔹 2. `useCallback`

### General Form

```jsx
const memoizedFn = useCallback(() => {
  // function logic
}, [dependencies]);
```

### Example

```jsx
import { useState, useCallback } from "react";

const Button = React.memo(({ onClick, label }) => {
  console.log(`${label} Button rendered`);
  return <button onClick={onClick}>{label}</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}
```

👉 Without `useCallback`, the function `increment` would be recreated on every render, causing `Button` to re-render unnecessarily.

### When to Use

- When passing **functions as props** to memoized components.
- To prevent **unnecessary re-renders** in children.

### When _Not_ to Use

- Don’t wrap _every_ function in `useCallback` → it can increase complexity and memory usage unnecessarily.

---

## 🔹 3. `useMemo`

### General Form

```jsx
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(param);
}, [dependencies]);
```

### Example

```jsx
import { useState, useMemo } from "react";

function slowFunction(num) {
  console.log("Running slow function...");
  for (let i = 0; i < 1e9; i++) {} // simulate heavy work
  return num * 2;
}

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div
      style={{
        background: dark ? "#333" : "#fff",
        color: dark ? "#fff" : "#000",
      }}
    >
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((d) => !d)}>Toggle Theme</button>
      <h2>{doubleNumber}</h2>
    </div>
  );
}
```

👉 Without `useMemo`, the expensive calculation runs every time theme changes.

### When to Use

- To memoize **expensive calculations**.
- To avoid recalculating values unnecessarily on every render.

### When _Not_ to Use

- Don’t wrap **cheap calculations** in `useMemo` → adds complexity with little gain.

---

## 🔹 Difference Between Them

| Hook / Method   | Purpose                                                              | Example Use Case                                        |
| --------------- | -------------------------------------------------------------------- | ------------------------------------------------------- |
| **React.memo**  | Prevents unnecessary **component re-renders** if props don’t change. | Wrapping child components to avoid re-renders.          |
| **useCallback** | Prevents unnecessary **function recreations** on every render.       | Passing stable functions as props to memoized children. |
| **useMemo**     | Prevents unnecessary **value recalculations** (expensive functions). | Caching results of slow calculations.                   |

---

## 🔹 General Guidelines

- Use **`React.memo`** → For components that render the same props often.
- Use **`useCallback`** → For stable function references, especially with `React.memo`.
- Use **`useMemo`** → For expensive calculations that don’t need to re-run on every render.

⚠️ **Don’t over-optimize** → sometimes React’s default re-rendering is faster than memoization overhead.

---

## Final Takeaway

- `React.memo` = Stops **unnecessary component renders**.
- `useCallback` = Stops **unnecessary function recreations**.
- `useMemo` = Stops **unnecessary recalculations of values**.

Together, they help keep your app **fast and efficient**, especially when dealing with **expensive operations or large UIs**.
