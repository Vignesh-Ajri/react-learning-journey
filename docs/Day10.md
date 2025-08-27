# **React `useEffect` Hook - Simple Notes**

---

## **1️⃣ What is `useEffect`?**

- `useEffect` is a **React Hook** for running **side effects** in functional components.
- Side effects: things **outside the component**, like:

  - Fetching data from APIs
  - Updating the DOM
  - Subscribing to events
  - Timers (setTimeout / setInterval)

---

## **2️⃣ Syntax**

```jsx
useEffect(() => {
  // code to run (side effect)
}, [dependencies]);
```

- **dependencies**: array that controls when the effect runs.

---

## **3️⃣ Dependency Array**

| Array          | Runs When?                                              |
| -------------- | ------------------------------------------------------- |
| `[]`           | Only once after first render (like `componentDidMount`) |
| `[var1, var2]` | When `var1` or `var2` changes                           |
| Not provided   | After **every render**                                  |

---

## **4️⃣ Cleanup Function**

- Return a function to **cleanup** before the component unmounts or before re-running the effect.

```jsx
useEffect(() => {
  const interval = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(interval); // cleanup
}, []);
```

---

## **5️⃣ Common Use Cases**

### **a) Fetch Data**

```jsx
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);
```

### **b) Event Listeners**

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);
```

### **c) Timer**

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tick"), 1000);
  return () => clearInterval(timer);
}, []);
```

### **d) Update Document Title**

```jsx
useEffect(() => {
  document.title = `Clicked ${count} times`;
}, [count]);
```

---

## **6️⃣ Rules / Best Practices**

1. Always import `useEffect` from React.
2. Do **not** call it inside loops, conditions, or nested functions.
3. Use dependency array wisely to avoid unnecessary re-renders.
4. Always cleanup subscriptions/timers to avoid memory leaks.
