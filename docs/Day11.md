# 📘 Day 11 – Forms & Controlled Components

## 🔹 1. Forms in React

- In HTML, inputs manage their own values.
- In React, we usually control inputs using **state**.

---

## 🔹 2. Controlled Components

- Input value is controlled by **React state**.
- `value` comes from state, `onChange` updates the state.

```jsx
const [name, setName] = useState("");

<input type="text" value={name} onChange={(e) => setName(e.target.value)} />;
```

---

## 🔹 3. Uncontrolled Components

- Input manages its own value (React does not control).
- Use **ref** to get value.

```jsx
const inputRef = useRef();

<input type="text" ref={inputRef} />
<button onClick={() => alert(inputRef.current.value)}>Submit</button>
```

---

## 🔹 4. Multiple Inputs

- Use one state object for multiple fields.

```jsx
const [formData, setFormData] = useState({ name: "", email: "" });

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

---

## 🔹 5. Form Submission

- Prevent page reload with `e.preventDefault()`.
- Access all state values.

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
};
```

---

## 🔹 6. Controlled vs Uncontrolled (Quick Table)

| Controlled          | Uncontrolled      |
| ------------------- | ----------------- |
| React manages value | DOM manages value |
| Uses `useState`     | Uses `ref`        |
| Easy validation     | Harder validation |
| Commonly used       | Rarely used       |
