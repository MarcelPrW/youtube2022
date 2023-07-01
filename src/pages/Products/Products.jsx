import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
import urlBanner from "../../../img/baneryKategorii/PONTONY.png";

const Products = () => {
  const catId = useParams().category;

  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [inputPrice, setInputPrice] = useState(1000);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][title][$eqi]=${catId}`
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const handleConfirmButton = () => {
    setMaxPrice(inputPrice);
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filtruj po cenie</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setInputPrice(e.target.value)}
            />
            <span>{inputPrice}</span>
          </div>
          <button onClick={handleConfirmButton}>Zatwierdź</button>
        </div>
        <div className="filterItem">
          <h2>Sortuj</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Od najtańszych</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Od najdroższych</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg" url={urlBanner} alt="baner kategorii" />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
