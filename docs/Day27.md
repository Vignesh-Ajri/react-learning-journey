# Day 27 – PropTypes in React

## 📌 What are PropTypes?

- **PropTypes** are a way to validate the types of props passed into a React component.
- They provide **runtime type checking** (not compile-time like TypeScript).
- Help catch bugs by warning in the console if props don’t match the expected type.

---

## ⚙️ Installation

If you don’t already have it in your project:

```bash
npm install prop-types
```

or

```bash
yarn add prop-types
```

Then import it where needed:

```jsx
import PropTypes from "prop-types";
```

---

## 🛠️ How to Use

1. Import PropTypes:

   ```jsx
   import PropTypes from "prop-types";
   ```

2. Define expected types for props:

   ```jsx
   ComponentName.propTypes = {
     propName: PropTypes.type,
   };
   ```

---

## 📖 Common PropTypes

| Type        | Example usage                                                       |
| ----------- | ------------------------------------------------------------------- |
| `string`    | `PropTypes.string`                                                  |
| `number`    | `PropTypes.number`                                                  |
| `bool`      | `PropTypes.bool`                                                    |
| `func`      | `PropTypes.func`                                                    |
| `array`     | `PropTypes.array`                                                   |
| `object`    | `PropTypes.object`                                                  |
| `node`      | Anything that can be rendered (string, JSX)                         |
| `element`   | A single React element                                              |
| `oneOf`     | `PropTypes.oneOf(["admin", "user", "guest"])`                       |
| `oneOfType` | `PropTypes.oneOfType([PropTypes.string, PropTypes.number])`         |
| `arrayOf`   | `PropTypes.arrayOf(PropTypes.string)`                               |
| `shape`     | `PropTypes.shape({ id: PropTypes.number, name: PropTypes.string })` |

---

## ✅ Example

```jsx
import PropTypes from "prop-types";

function UserCard({ name, age, isAdmin }) {
  return (
    <div>
      <h2>{name}</h2>
      {isAdmin && <p>Admin</p>}
    </div>
  );
}

// PropTypes validation
UserCard.propTypes = {
  name: PropTypes.string.isRequired, // must be string
  isAdmin: PropTypes.bool, // optional
};

// Default props
UserCard.defaultProps = {
  isAdmin: false,
};

export default UserCard;
```
