# Day 09 – Learning TailwindCSS (Modern Way)

## 📌 What is TailwindCSS?

TailwindCSS is a **utility-first CSS framework** that lets you build modern, responsive designs quickly using pre-defined classes directly in your HTML/JSX.  
Instead of writing custom CSS, you combine utility classes to style your components.

Example:

```html
<button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  Click Me
</button>
```

## ⚡ Advantages of TailwindCSS

- 🚀 **Fast Development** – No need to switch between CSS/JSX files.
- 🎨 **Responsive by default** – Utilities like `sm:`, `md:`, `lg:` make it easy.
- 🛠️ **Highly customizable** – Extendable with `tailwind.config.js`.
- 🔄 **Consistent design** – Shared design tokens (colors, spacing, typography).
- 🌙 **Dark mode support** – Easy toggling with `dark:` prefix.

---

## 📘 Official Documentation

👉 [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

### 🖥️ Example: Using Tailwind in React

```jsx
export default function Example() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
    </div>
  );
}
```
