import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { themeOptions } from "../styles/themes";

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useTheme();
  return (
    <span className="theme-dropdown">
      <select
        value={theme}
        onChange={e => setTheme(e.target.value as any)}
        aria-label="Change theme"
      >
        {themeOptions.map(opt => (
          <option key={opt} value={opt}>
            {opt.replace("theme", "Theme ")}
          </option>
        ))}
      </select>
    </span>
  );
};

export default ThemeDropdown;
