import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

// Custom hook (for cleaner imports)
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={
          theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
