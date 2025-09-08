import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="px-4 py-2 rounded-lg border mt-4">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}
