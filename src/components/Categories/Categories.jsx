import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  const data = [
    { name: "Pontony", link: "pontony" },
    { name: "Dmuchane koła", link: "kola" },
    { name: "Gry logiczne", link: "gry-logiczne" },
  ];
  return (
    <div className="categories">
      {/* <Link className="link" to="/products/pontony">
        Pontony
      </Link>
      <br />
      <Link className="link" to="/products/kola">
        Dmuchane koła
      </Link>
      <br />
      <Link className="link" to="/products/gry-logiczne">
        Gry logiczne
      </Link> */}
      {/* ZROBIC PRODUKTY W LINKU A NIE PRODUCTS */}
      {data.map((item) => (
        <Link className="link" to={`/products/${item.link}`}>
          {item.name}
          <br />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
