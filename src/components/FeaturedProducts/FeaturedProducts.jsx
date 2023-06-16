import React from "react";

import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} produkty</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas qui
          excepturi exercitationem impedit nisi autem eius atque, nihil
          nesciunt, facere quos amet eos suscipit repellat corrupti incidunt
          vitae magnam inventore quam a ad ab hic recusandae? Veritatis ipsum
          atque dolores.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Coś poszło nie tak !"
          : loading
          ? "Ładowanie"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
