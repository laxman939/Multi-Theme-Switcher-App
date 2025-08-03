import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem 1rem 3rem" }}>
      {children}
    </div>
  );
};

export default MainContent;
