# 📅 Day 20 — Custom Hooks: useFetch

## 🔹 What are Custom Hooks?

- **Custom Hooks** are normal JavaScript functions that use React’s built-in hooks (`useState`, `useEffect`, etc.).
- They allow us to **extract and reuse stateful logic** across different components.
- Must follow the **naming rule** → start with `use` (e.g., `useFetch`, `useAuth`, `useTheme`).
- They don’t render UI; instead, they **encapsulate logic** and return state, values, or functions.

---

## 🔹 Why Use Custom Hooks?

✅ Avoid **repeating logic** in multiple components.  
✅ Keep components **small and clean**.  
✅ Improve **reusability** and **readability**.  
✅ Helps maintain **separation of concerns** (logic vs. UI).

---

## 🔹 Example: `useFetch` Hook in One File

Here’s a reusable **`useFetch` hook** with an example component that consumes it:

```jsx
import React, { useState, useEffect } from "react";

// Custom Hook: useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Prevent state updates if component unmounts
    setLoading(true);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          setData(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) setError(err.message);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false; // cleanup
    };
  }, [url]);

  return { data, loading, error };
}

// 📌 Example Component using useFetch
export default function Day20() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <ul className="list-disc ml-6">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```
