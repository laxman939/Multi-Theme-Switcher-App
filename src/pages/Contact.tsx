import React from "react";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../contexts/ThemeContext";

const Contact: React.FC = () => {
  const { theme } = useTheme();
  return (
    <MainContent>
      <div style={{ display: "flex", alignItems: "start" }}>
        {theme === "theme2" && <Sidebar />}
        <div style={{ flex: 1 }}>
          <h1>Contact</h1>
          <p>
            Want to share feedback? Contact us at <a href="mailto:info@example.com">info@example.com</a>.
          </p>
        </div>
      </div>
    </MainContent>
  );
};

export default Contact;
