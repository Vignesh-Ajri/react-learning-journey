# 📘Day 02 – JSX & Components

## ReactJS Tutorial – Components

[Watch the ReactJS Tutorial – Components on YouTube](https://youtu.be/Y2hgEGPzTZY)

## What I Learned

- JSX allows writing HTML-like syntax inside JS.
- Can embed JS expressions in JSX using {}.
- Components are reusable functions that return JSX.
- Must wrap everything inside a single parent.

## JSX differences

- class -> className
- for -> htmlFor

### camelCase property naming convention

- onclick -> onClick
- tabindex -> tabIndex

## Types of Components

1. Functional Components

   - Written as functions.
   - Return JSX directly.
   - Modern React recommends using these.
   - Example: Header, Footer, WelcomeMessage.

2. Class Components
   - Written using ES6 classes.
   - Must include a render() method.
   - Used in older React before Hooks.
   - Example: OldStyleMessage.

## Export vs Export Default

### export default

- Only one per file.
- Import without { }.
- Can rename while importing.

### export (named)

- Many per file.
- Must use { } in import.
- Names must match exactly, unless you use "as".

### Example

```jsx
// exports
export default Welcome;
export function Header() {}
export function Footer() {}

// imports
import MyWelcome from "./file"; // default
import { Header, Footer } from "./file"; // named
```

## Reflections

- Building Header and Footer separately made me feel how powerful components are.
- Functional components feel simpler and modern.
- Class components are heavier but help to understand React history.
- Reusing components will make big apps much cleaner.
