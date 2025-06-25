import { useTheme } from "../hooks/useTheme";
import "./themeToggle.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-btn" onClick={toggleTheme} style={{ margin: "1rem" }}>
      {theme === "light" ? "🌙 dark mode" : "☀️ light mode"}
    </button>
  );
};

export default ThemeToggle;
