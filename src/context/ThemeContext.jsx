import { createContext, useMemo, useState } from "react";

export const ThemeContext = createContext(null);

const KEY = "theme"; // light | dark

function apply(theme) {
  const root = document.documentElement; // <html>
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
}

function getInitialTheme() {
  const saved = localStorage.getItem(KEY);
  if (saved === "dark" || saved === "light") return saved;

  // agar localStorage bo‘sh bo‘lsa, default = light
  return "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const initial = getInitialTheme();
    apply(initial); // ✅ birinchi renderdayoq html'ga qo‘yadi
    return initial;
  });

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      apply(next); // ✅ darhol html'ga qo‘yadi
      localStorage.setItem(KEY, next); // ✅ darhol storage'ga yozadi
      return next;
    });
  };

  const value = useMemo(() => ({ theme, toggleTheme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
