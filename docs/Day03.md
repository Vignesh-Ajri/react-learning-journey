# Day 03 – Props in React

## ReactJS Tutorial – Props

[Watch the ReactJS Tutorial – Props on YouTube](https://youtu.be/m7OWXtbiXX8)

## 🔹 What are Props?

- Props = short for properties.
- Props are used to pass data from **parent → child component**.
- They make components **dynamic and reusable**.
- Props are **read-only** – child cannot modify them (unidirectional data flow).

---

## 🔹 Using Props in Functional Components

### Example 1 – Destructuring Props

```jsx
function FunctionalComponent({ name }) {
  return <p>Hello, {name}!</p>;
}
```

**Usage:**

```jsx
<FunctionalComponent name="Vignesh" />
```

### Example 2 – Default Props via Destructuring

```jsx
function FunctionalComponent({ name = "Guest" }) {
  return <p>Hello, {name}!</p>;
}
```

**Usage:**

```jsx
<FunctionalComponent /> // Output: Hello, Guest!
```

### Example 3 – Accessing via props object

```jsx
const PropsComponent = (props) => {
  return <p>Hello, {props.name}!</p>;
};
```

**Usage:**

```jsx
<PropsComponent name="Anna" />
```

---

## 🔹 Using Props in Class Components

```jsx
class ClassComponent extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}
```

**Usage:**

```jsx
<ClassComponent name="Joe" />
```

---

## 🔹 Default Props in Class Components

You can also set default props using the `defaultProps` property on a class.

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

Welcome.defaultProps = {
  name: "Guest",
};
```

**Usage:**

```jsx
<Welcome /> // Output: Hello, Guest
```

---

## 🔹 Children as Props

- Every component has a special prop called **children**.
- It represents the **content inside the opening and closing tags** of a component.

### Example – Card Component with Children

```jsx
function Card({ title, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
}
```

**Usage:**

```jsx
<Card title="Children Example">
  <p>This paragraph is passed as children!</p>
  <button>Click Me</button>
</Card>
```

✅ **Output:**

- Title: _Children Example_
- Inside content: Paragraph + Button

---

## 🔹 Key Points about Props

- Props make components **reusable**.
- Data flows **parent → child** (unidirectional).
- Props are **immutable** (cannot be changed inside child).
- We can pass **strings, numbers, objects, arrays, functions, JSX, or components** as props.
- **Children prop** allows wrapping content between component tags.
- Default props can be defined for **both functional and class components**.

---

## 🔹 Summary

- **Props = data passed into a component.**
- Can be used in both **functional** and **class** components.
- **Default props** provide fallback values when none are passed.
- **Children prop** allows composition (wrapping other elements/components).
- Props keep components **flexible, reusable, and dynamic**.
