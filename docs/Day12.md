# 📘 Day 12: Lifting State Up

## 🔹 What is Lifting State Up?

- **Problem:** Sometimes, multiple components need to share and update the same state.
- If each keeps its own state → data becomes inconsistent.
- **Solution:** Move (lift) the state to the _closest common parent_ and pass it down via **props**.
- Child components send data _up_ to parent using **callback functions**.

---

## 🔹 Key Steps

1. **Parent component** holds the state (via `useState`).
2. **Pass state** down to child via props.
3. **Pass callback function** from parent → child to update parent state.
4. Child calls that callback when an event happens → parent updates → state flows down again.

📊 **Flow:**  
`Parent State → props → Child Component`  
`Child → callback → Parent updates state → UI refresh`

---

## 🔹 Example (Simple)

```jsx
function Child({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

export default function Parent() {
  const [text, setText] = useState("");
  return <Child value={text} onChange={setText} />;
}
```
