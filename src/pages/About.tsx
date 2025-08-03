import React from "react";
import MainContent from "../components/MainContent";
import { useTheme } from "../contexts/ThemeContext";
import Sidebar from "../components/Sidebar";

const About: React.FC = () => {
  const { theme } = useTheme();
  return (
    <MainContent>
      <div style={{ display: "flex", alignItems: "start" }}>
        {theme === "theme2" && <Sidebar />}
        <div style={{ flex: 1 }}>
          <h1>About</h1>
          <p>
            This demo app was created to show how you can implement distinctly styled themes (color, font, and even layout variations!) across the same React project with full persistence and accessibility.
          </p>
          <p>
            Switch between different themes using the dropdown in the header!
          </p>
        </div>
      </div>
    </MainContent>
  );
};

export default About;
