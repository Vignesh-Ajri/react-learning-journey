# Day 26 – Error Boundaries in React

## What are Error Boundaries?

- **Error Boundaries** are special React components that **catch JavaScript errors** anywhere in their child component tree, log them, and display a fallback UI instead of breaking the whole app.
- They act like a **“safety net”** for your React components.

---

## Why do we need Error Boundaries?

- Without them, an error in one component can crash the entire React app.
- They help improve **user experience** by showing a friendly fallback message instead of a blank screen.
- Useful when working with **third-party components**, **experimental features**, or **fragile UI parts** (like charts, maps, media players).

---

## How to Create an Error Boundary?

Error Boundaries must be **class components** (not functional components).

They rely on two lifecycle methods:

1. `static getDerivedStateFromError(error)`

   - Updates the state to render a fallback UI.

2. `componentDidCatch(error, errorInfo)`

   - Logs error details for debugging (e.g., send to monitoring service).

---

## Example Code

```jsx
import React from "react";

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log("Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Component that crashes
function BuggyComponent() {
  throw new Error("Crashed!");
}

// Usage
export default function App() {
  return (
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>
  );
}
```

---

## When to Use Error Boundaries?

**Good Use Cases**

- Wrapping around risky components like:

  - Charts or Graphs (heavy calculations, external libraries).
  - Media Players (video/audio).
  - Third-party Widgets (ads, external components).

- Root-level wrapping for the entire app.

  **Not for:**

- Event handlers (`onClick`, `onChange`, etc.)
- Asynchronous code (`setTimeout`, `fetch`, promises).
- Server-side rendering (SSR).
- Errors inside Error Boundary itself.

---

## Difference from `try/catch`

| Feature       | `try/catch`               | Error Boundary                      |
| ------------- | ------------------------- | ----------------------------------- |
| Scope         | Works for imperative code | Works for React rendering lifecycle |
| Usage         | Wrap code manually        | Wrap components declaratively       |
| UI Fallback   | No                        | Yes, can show friendly fallback UI  |
| Async Support | Yes (with `async/await`)  | No                                  |

---

## Best Practices

- Use a **global error boundary** at the root of the app to catch unexpected errors.
- Use **localized error boundaries** around fragile UI parts.
- Customize fallback UI to match your design (friendly message, retry button, error logs).
- Always log errors (e.g., send to a service like Sentry, LogRocket, Firebase Crashlytics).

---

## Summary

- Error Boundaries **catch UI crashes** and show fallback UI.
- Created using **class components** with `getDerivedStateFromError` + `componentDidCatch`.
- Should be used **strategically** in your app.
- Makes apps **more stable and user-friendly**.
