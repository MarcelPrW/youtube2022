import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][title][$in][0]=${catId}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
    // ${subCats.map(
    //   (item) => `&filters[sub_categories][id][$eq]=${item}`
    // )}&filters[price][$lte]=${maxPrice}&sort=price:${sort}`
    // sort[0]=title
  );

  return (
    <div className="list">
      {loading
        ? "ładowanie"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
