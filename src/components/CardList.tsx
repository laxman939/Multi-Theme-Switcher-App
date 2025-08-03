import React from "react";

interface CardListProps {
  items: Array<any>;
}

const CardList: React.FC<CardListProps> = ({ items }) => (
  <div className="card-list">
    {items.slice(0, 8).map((item) => (
      <div className="card" key={item.id}>
        <div>

        <img src={item.image} alt={item.title} />
        </div>
        <div>
        <div style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: 6 }}>
          {item.title}
        </div>
        <div style={{ color: "#666", fontSize: "0.96rem" }}>{item.price}$</div>
        </div>
      </div>
    ))}
  </div>
);

export default CardList;
