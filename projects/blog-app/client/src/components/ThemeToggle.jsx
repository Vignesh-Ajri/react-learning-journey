import { useTheme } from "../context/ThemeContext";
import {
  Sun,
  Moon
} from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
    >
      {theme === "dark" ? <Sun size={16} /> :  <Moon size={16} /> }
    </button>
  );
}
