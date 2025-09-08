import React from "react";
import { ThemeProvider, useTheme } from "./Day22Context/ThemeContext";
import ThemeToggle from "./Day22Context/ThemeToggle";

function ThemedDiv() {
  const { theme } = useTheme();

  return (
    <div
      className="p-6 rounded-xl mt-6 transition-all duration-300"
      style={{
        backgroundColor: theme === "light" ? "#f9fafb" : "#1f2937",
        color: theme === "light" ? "#111827" : "#f9fafb",
      }}
    >
      This div updates with the theme 🌗
    </div>
  );
}

export default function Day22() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-4 mb-2">
        Day22 – Theme Switcher (Context API)
      </h3>
      <ThemeProvider>
        <ThemeToggle />
        <ThemedDiv />
      </ThemeProvider>
    </div>
  );
}
