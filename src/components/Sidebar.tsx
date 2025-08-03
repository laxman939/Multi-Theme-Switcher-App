import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <nav>
        {links.map(link => (
          <Link
            key={link.to}
            to={link.to}
            style={{
              color: location.pathname === link.to ? "#fec601" : "#fff",
              textDecoration: "none",
              fontWeight: location.pathname === link.to ? 600 : 400,
              marginBottom: 20,
              display: "block",
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
