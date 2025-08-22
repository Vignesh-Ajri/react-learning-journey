# Day 7 — Conditional Rendering (Show / Hide Elements)

**Goal:** Learn the different ways to render UI conditionally in React, understand the difference between _show/hide_ (CSS) and _mount/unmount_ (rendering), and practice common patterns you'll use every day.

---

## Why it matters

Conditional rendering lets your app show different UI for different states: loading vs loaded, authenticated vs guest, error messages, toggles, modals, etc. Mastering it makes your components clean, predictable and accessible.

---

## Key patterns

### 1. `if` inside component (full control)

Use when you want to return completely different subtrees.

```jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}
```

### 2. Ternary operator (inline choose)

Great for short conditional fragments inside JSX.

```jsx
<div>{isLoading ? <Spinner /> : <Content data={data} />}</div>
```

### 3. Logical `&&` (render when truthy)

Useful for rendering something only when a condition is true.

```jsx
{
  /* shows message only if errors.length > 0 */
}
{
  errors.length > 0 && <ErrorList errors={errors} />;
}
```

**Caution:** `0`, `''` (empty string) and `null` behave differently — `0` is falsy and will not render, so avoid `&&` when `0` is a valid value to display.

### 4. IIFE or short function inside JSX

When you need multiple statements to decide what to render.

```jsx
{
  (() => {
    if (!user) return <Login />;
    if (user.isAdmin) return <AdminPanel />;
    return <UserDashboard />;
  })();
}
```

### 5. Switch-based rendering

When there are many cases (e.g., router-like UI states).

```jsx
function Page({ page }) {
  switch (page) {
    case "home":
      return <Home />;
    case "about":
      return <About />;
    default:
      return <NotFound />;
  }
}
```

### 6. Conditional rendering with HOC or wrapper

Wrap components to add conditional checks (like authentication guards).

```jsx
function withAuth(Component) {
  return function Wrapped(props) {
    const { user } = useAuth();
    if (!user) return <RedirectToLogin />;
    return <Component {...props} />;
  };
}
```

---

## Show/hide vs mount/unmount

- **Show/hide (CSS)** — element remains in DOM; you control visibility with CSS (`display: none`, `visibility`, or class toggles). Useful for keeping state (e.g., inputs keep their content) and for animations.
- **Mount/unmount (rendering)** — removing the element from JSX means React unmounts it and cleans state/effects. Use this when you want a fresh component each time or to free resources.

**Example: Show/hide**

```jsx
function Box({ open }) {
  return (
    <div className={open ? "box visible" : "box hidden"}>
      I stay mounted — just hidden.
    </div>
  );
}
```

**Example: Mount/unmount**

```jsx
{
  open && <Modal />;
}
```

---

## Conditional class names and styles

Use conditionals to toggle class names or inline styles.

```jsx
<div className={`badge ${isActive ? "badge--active" : ""}`}>{label}</div>;

// or with utility helper
import clsx from "clsx";
<div className={clsx("badge", { "badge--active": isActive })}>{label}</div>;
```

**Tip:** In Tailwind, conditionally apply utility classes the same way.

---

## Accessibility notes

- If hiding visually but keeping element in DOM, ensure it's not focusable when hidden (`aria-hidden="true"` and manage `tabindex`).
- For modals and overlays, when mounted, trap focus and restore focus on close.
- Use ARIA attributes to communicate state: `aria-expanded`, `aria-pressed`, `role="alert"` for live error messages, etc.

---

## Common pitfalls & how to avoid them

- Rendering `0` with `&&`: `0 && <Thing />` renders `0`. Use `condition ? <Thing /> : null` if `0` is possible.
- Overusing IIFEs: prefer simple patterns before complex ones — overly nested IIFEs hurt readability.
- Forgetting keys when conditionally rendering lists — keys still matter.
- Expecting CSS `display: none` elements to be hidden from screen readers — use `aria-hidden` as needed.
