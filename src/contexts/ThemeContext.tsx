import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeOption, themeOptions } from "../styles/themes";

interface ThemeContextProps {
  theme: ThemeOption;
  setTheme: (theme: ThemeOption) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: themeOptions[0],
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeOption>(() => {
    const stored = localStorage.getItem("theme");
    return stored && themeOptions.includes(stored as ThemeOption)
      ? (stored as ThemeOption)
      : themeOptions[0];
  });

  const setTheme = (newTheme: ThemeOption) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    // Clean up previous theme
    document.body.classList.remove(...themeOptions.map(opt => `theme-${opt}`));
    document.body.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
