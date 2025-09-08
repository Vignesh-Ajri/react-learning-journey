# 🌗 React Context API – Notes

## 🔄 Flow

1. **Create Context** → `createContext()`
2. **Wrap with Provider** → shares state globally
3. **Consume Context** → use `useContext()` in any component

---

## 🏗 General Form

```jsx
import { createContext, useState, useContext } from "react";

// 1. Create context
const MyContext = createContext();

// 2. Custom hook (optional)
export function useMyContext() {
  return useContext(MyContext);
}

// 3. Provider component
export function MyProvider({ children }) {
  const [value, setValue] = useState("default");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

// 4. Consumer usage
function Child() {
  const { value, setValue } = useMyContext();
  return <button onClick={() => setValue("new")}>Current: {value}</button>;
}
```
