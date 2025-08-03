import React from "react";
import ThemeDropdown from "./ThemeDropdown";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Header: React.FC = () => {
  const location = useLocation();
  return (
    <header className="header-bar">
      <div style={{ fontWeight: 600, fontSize: "1.7rem" }}>MultiThemeApp</div>
      <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={location.pathname === link.to ? "active" : ""}
          >
            {link.name}
          </Link>
        ))}
        <ThemeDropdown />
      </nav>
    </header>
  );
};

export default Header;
