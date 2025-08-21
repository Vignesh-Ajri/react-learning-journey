# Day 6: Lists & Keys in React

## 📌 What I Learned
- How to render a list of items in React using `.map()`.
- Why **keys** are important for list rendering.
- Difference in using lists in **functional vs class components**.

---

## 🔑 Keys in React
- **Keys** help React identify which items have changed, been added, or removed.
- They should be **unique and stable** (like `id` from a database).
- Avoid using array index as a key if items can change (add/remove/reorder).

---

## 📝 Functional Component Example

```jsx
import React from "react";

export default function TodoListFunctional() {
  const todos = [
    { id: 1, task: "Learn React basics" },
    { id: 2, task: "Practice components" },
    { id: 3, task: "Understand props & state" },
    { id: 4, task: "Learn lists & keys" },
  ];

  return (
    <div>
      <h2>📋 Todo List (Functional)</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
