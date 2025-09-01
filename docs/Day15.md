# 📅 Day 15 – React Router Basics

## 🎯 Goal

Learn the **basics of React Router** by creating a simple multi-page app with **Home** and **About** pages.

---

## 🧑‍🏫 What is React Router?

- React Router is a **client-side routing library**.
- It allows you to build **Single Page Applications (SPA)** with multiple pages without full page reloads.
- Instead of refreshing the page, React Router **switches components** based on the current URL.

---

## ⚡ Key Concepts

- **`<BrowserRouter>`**
  Wraps your entire app. Provides routing functionality.

- **`<Routes>`**
  Container for all route definitions.

- **`<Route>`**
  Maps a `path` (like `/about`) to a `component`.

- **`<Link>`**
  Used for navigation (instead of `<a>`). Prevents full page reloads.

---

## 🛠 Setup

1. Install React Router:

   ```bash
   npm install react-router-dom
   ```

2. Create a new file for Day15 demo:

   ```
   src/days/Day15.jsx
   ```

---

## 📄 Example Code (Single File)

```jsx
// src/days/Day15.jsx
import { Routes, Route, Link } from "react-router-dom";

export default function Day15() {
  return (
    <div>
      <h1>📅 Day 15 – React Router Basics</h1>

      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/day15" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/day15/about">About</Link>
      </nav>

      <Routes>
        <Route path="/day15" element={<h2>🏠 Day15 Home Page</h2>} />
        <Route path="/day15/about" element={<h2>ℹ️ Day15 About Page</h2>} />
      </Routes>
    </div>
  );
}
```

Then in your **main App.jsx**:

```jsx
import Day15 from "./days/Day15";

<Route path="/day15/*" element={<Day15 />} />;
```

---

## ✅ How It Works

- Navigate to `/day15` → Shows **Day15 Home Page**
- Navigate to `/day15/about` → Shows **Day15 About Page**
- Navigation uses `<Link>` so there’s **no page reload**.

---

## 📌 Key Takeaways

- React Router lets you handle navigation **inside React itself**.
- `<Link>` is preferred over `<a>` for SPA navigation.
