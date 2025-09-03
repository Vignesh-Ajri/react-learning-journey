# 📅 Day 17 – Navigation (Link, NavLink)

## 🔗 React Router Navigation

### 1. Link

- Navigates without reloading the page.
- Example: `<Link to="/about">About</Link>`

### 2. NavLink

- Same as `Link` but adds an **active style** when the route matches.
- Example: `<NavLink to="/contact">Contact</NavLink>`

---

## ⚠️ Common Issue

- Using **relative paths** (`"about"`, `"contact"`) may cause infinite nesting:

/day17/contact/about/contact

- Because each new navigation appends to the current path.

---

## ✅ Best Practice

- Use **absolute paths** (`/day17/...`) in NavLink to avoid nesting.
- Example:
- `/day17` → Home
- `/day17/about` → About
- `/day17/contact` → Contact

---

## 🗂️ Folder Setup

```
src/
├─ days/
│ └─ Day17-Navigation.jsx
└─ App.jsx

```

---

## 🚀 Summary

- `Link` → simple navigation.
- `NavLink` → adds **active state**.
- Always prefer **absolute paths** for stable routing.
