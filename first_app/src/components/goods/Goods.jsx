import React, { useEffect, useState } from "react";
import Good from "../good/Good";

export default function Goods() {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((data) => data.json())
      .then((data) => setGoods(data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {goods.map((good) => (
        <Good
          key={good.id}
          title={good.title}
          price={good.price}
          stock={Math.floor(Math.random() * 10)}
        />
      ))}
    </div>
  );
}
