# Day 05 – React Events & Event Handling

## React Events & Event Handling Tutorial

[React Events Explained](https://youtu.be/Znqv84xi8Vs)

### Learning Goals

- Understand how **events** work in React.
- Learn the difference between HTML vs React event handling.
- Explore **important events** (`onClick`, `onChange`, `onSubmit`, etc.).
- Practice event binding techniques in **Class Components**.
- Implement a **Dark/Light Toggle Button** using both Functional and Class approaches.

---

## Key Points about React Events

1. **Event Naming**

   - In **HTML** → lowercase (`onclick`, `onchange`).
   - In **React** → camelCase (`onClick`, `onChange`).

2. **Event Handler Syntax**

   - In **HTML** → `onclick="handleClick()"` (string).
   - In **React** → `onClick={handleClick}` (function reference, not string).

3. **Synthetic Events**

   - React wraps browser events into a **SyntheticEvent** object.
   - Works consistently across all browsers.

---

## Important Events in React

- **onClick** → Triggered when an element is clicked.
- **onChange** → Triggered when input value changes (text, checkbox, radio, etc.).
- **onSubmit** → Triggered when a form is submitted.
- **onMouseEnter / onMouseLeave** → Mouse hover events.
- **onKeyDown / onKeyUp / onKeyPress** → Keyboard events.
- **onFocus / onBlur** → Focus & unfocus on input fields.

---

## Event Binding in Class Components

React Class components need proper **binding** so that `this` works correctly.

### Techniques

1. **Binding in Constructor**

   - Bind once in the constructor.
   - Efficient and widely used in older React.

2. **Class Property with Arrow Function**

   - Define the handler as an arrow function.
   - Automatically binds `this`.
   - Preferred in modern Class Components.

3. **Inline Arrow Function in JSX**

   - Define function directly in JSX (e.g., `onClick={() => this.handleClick()}`).
   - Works fine, but not optimal (creates a new function each render).

### Caution

- Never call a function directly in JSX like `onClick={this.handleClick()}` → it runs immediately when component renders, not when clicked.

---

## Example Project: Dark/Light Toggle

- Implemented both in **Functional Component** (using `useState`) and **Class Component** (using all event binding methods).
- Functional → clean and modern approach.
- Class → useful for learning legacy patterns and binding techniques.

---

## With this, you now understand:

- How events differ in React vs HTML.
- Commonly used event handlers.
- Binding techniques in Class Components.
- Cautions to avoid mistakes.
