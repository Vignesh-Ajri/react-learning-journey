# 📘 Day 1 — Setup & Hello World

**Topic**: Project setup with React (via Vite) + Hello World component  
**Objective**: Establish the foundation by initializing the React project and creating your first component.

---

## 📚 Learning Resources

- **Vite + React setup**  
  [How to Install React in 2023 – Goodbye Create React App (Vite React Project)](https://youtu.be/agpZsCUllqc)

- **Tailwind CSS setup (optional for styling today or later)**  
  [How to Install Tailwind CSS in Vite React JS (2025)](https://youtu.be/qkbijl5EoHc?si)

---

## Setup Steps

### 1. Create React App with Vite

```bash
# Create a new vite project
npm create vite@latest my-app -- --template react
cd my-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173`

---

##

```Folder Strucure
react-learning-journey/
│── src/
│   ├── days/
│   │   ├── Day01-HelloWorld.jsx
│   │   ├── Day02-JSX-Components.jsx
│   │   ├── Day03-Props.jsx
│   │   ├── Day04-State.jsx
│   │   ├── Day05-Events.jsx
│   │   └── ...
│   ├── App.jsx   # import whichever Day component you want
│   └── main.jsx
│
│── package.json
│── README.md

```

##

## (Optional) Tailwind CSS Setup

### 1. Install Tailwind CSS

Install tailwindcss and @tailwindcss/vite via npm.

```bash
npm install tailwindcss @tailwindcss/vite
```

### 2. Configure Vite

Add the @tailwindcss/vite plugin to your Vite configuration.

Update `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 3. Add Tailwind to CSS

Add an @import to your CSS file that imports Tailwind CSS.

Replace the content in `src/index.css` with:

```css
@import "tailwindcss";
```

### 4. Test Tailwind (Optional)

Update `src/App.jsx` to test Tailwind:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello World, React Journey Begins 🚀
      </h1>
    </div>
  );
}

export default App;
```

---

## Create Your First Component

### 1. Create Directory Structure

```bash
mkdir src/days
```

### 2. Create Hello World Component

Create `src/days/Day01-HelloWorld.jsx`:

```jsx
export default function Day01HelloWorld() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">
        Hello World, React Journey Begins 🚀
      </h1>
      <p className="text-gray-600">
        Day 1: Successfully set up React with Vite!
      </p>
    </div>
  );
}
```

### 3. Import and Use in App.jsx

Update `src/App.jsx`:

```jsx
import Day01HelloWorld from "./days/Day01-HelloWorld";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Day01HelloWorld />
    </div>
  );
}

export default App;
```

---

## Verify Everything Works

1. Run `npm run dev`
2. Open `http://localhost:5173`
3. You should see your Hello World component with styling
4. Make a small change and verify hot reload works
