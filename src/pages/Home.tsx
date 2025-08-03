import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../contexts/ThemeContext";
import MainContent from "../components/MainContent";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, []);

  // Sidebar is shown only for theme2 (dark)
  return (
    <MainContent>
      <div style={{ display: "flex", alignItems: "start" }}>
        {theme === "theme2" && <Sidebar />}
        <div style={{ flex: 1 }}>
          <h1>
            {theme === "theme3" ? "🎨 Multi-Theme Switcher" : "Multi-Theme Switcher"}
          </h1>
          <p style={{ marginBottom: "1rem" }}>
            This app demonstrates advanced theme switching across multiple layouts.
          </p>
    
          {loading ? (
            <p>Loading products...</p>
          ) : (
            <CardList items={products} />
          )}
        </div>
      </div>
    </MainContent>
  );
};

export default Home;
