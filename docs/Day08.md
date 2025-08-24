# Day 08 — Styling in React (Inline & CSS Modules)

## 🔹 What I Learned

- React supports different ways to style components.
- Today, I learned **Inline Styling** and **CSS Modules**.

---

## 1. Inline Styling

- Use the `style` prop with a JS object.
- Properties must be in **camelCase**.
- Good for quick or dynamic styles, but no `:hover` or media queries.

```jsx
<button style={{ backgroundColor: "tomato", color: "white" }}>
  Inline Styled Button
</button>
```

---

## 2. CSS Modules

- Create file `Something.module.css`.
- Import it: `import styles from "./Something.module.css"`.
- Styles are **scoped locally** → no conflicts.
- Supports pseudo-classes and media queries.

```css
/* Button.module.css */
.btn {
  background-color: #6c5ce7;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
}
```

```jsx
<button className={styles.btn}>CSS Module Styled Button</button>
```
