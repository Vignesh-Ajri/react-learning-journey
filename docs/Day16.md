# Day 16 – Nested Routes in React Router

## Overview

Today we learned how to implement **nested routes** in React Router v6.  
Nested routes allow a **parent route** to render its child routes inside an `<Outlet />` component.

In this demo, we created:

- `/day16/profile` → Profile page (parent)
- `/day16/profile/settings` → Settings page (nested inside Profile)

```
## File Structure

src/
├─ App.jsx
├─ Day16.jsx
└─ index.jsx

```
---
- **App.jsx** → Top-level router with `/day16/*` route
- **Day16.jsx** → Handles nested routes, default redirect, and layout
- **Profile.jsx / Settings.jsx** → Components inside Day16.jsx

---

## Key Code Snippets

### 1. App.jsx

```jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Day16 from "./Day16";

function App() {
  return (
    <Router>
      <Routes>
        {/* Single entry point */}
        <Route path="/day16/*" element={<Day16 />} />

        {/* Optional redirect root */}
        <Route path="/" element={<Navigate to="/day16/profile" />} />

        {/* Catch-all 404 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center min-h-screen">
              <h1 className="text-3xl font-bold text-gray-700">
                404 | Page Not Found
              </h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
```

---

### 2. Day16.jsx (nested routes with default redirect)

```jsx
<Routes>
  {/* Default redirect to Profile */}
  <Route path="/" element={<Navigate to="profile" replace />} />

  <Route path="profile" element={<Profile />}>
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

- `/day16` → redirected to `/day16/profile`
- `/day16/profile/settings` → rendered inside `<Outlet />` of Profile

---

### 3. Links inside components

- **Absolute path** for top-level navigation:

```jsx
<Link to="/day16/profile">Profile</Link>
```

- **Relative path** for nested navigation:

```jsx
<Link to="settings">Settings</Link> // inside Profile
```

- Back button inside Settings:

```jsx
<Link to="/day16/profile">Back to Profile</Link>
```

---

## Important Notes / Best Practices

1. **`*` wildcard** in `/day16/*` allows nested routes inside the Day16 component.
2. **Use `<Outlet />`** in parent route to render child routes.
3. **Absolute vs Relative paths**:

   - Absolute: `/day16/profile` → always points to top-level route
   - Relative: `settings` → relative to parent route (`/day16/profile`)

4. **Default route** inside nested routes:

   ```jsx
   <Route path="/" element={<Navigate to="profile" replace />} />
   ```

   ensures Profile page shows automatically.

5. Avoid recursion: **never use `to="profile"` inside Profile**; always use absolute path if linking to parent route.
6. Styling: Use **TailwindCSS** for clean, responsive, and interactive layout.

---

## Summary

- Nested routes allow modular and scalable route organization.
- Parent routes manage layout; child routes handle specific content.
- React Router v6 makes nested routing easy with `<Outlet />` and relative paths.
- Proper use of absolute vs relative paths prevents infinite URL nesting.

---

### ✅ Next Steps / Practice

1. Add more nested pages under Profile (e.g., `/profile/security`).
2. Implement breadcrumbs dynamically showing current path.
3. Experiment with **animated transitions** when switching between nested routes.
4. Combine nested routes with **stateful UI** for a real dashboard experience.
