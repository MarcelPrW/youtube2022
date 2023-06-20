import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  const data = [
    { name: "Pontony", link: "pontony" },
    // { name: "Gry logiczne", link: "gry-logiczne" },
    { name: "Baseny", link: "baseny" },
    { name: "Piłki", link: "pilki" },
    { name: "Koła", link: "kola" },
    // Zamiast materace -> pontony?
    { name: "Materace", link: "materace" },
    { name: "Nauka pływania", link: "nauka-plywania" },
  ];

  return (
    <div className="categories">
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
