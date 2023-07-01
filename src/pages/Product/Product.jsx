import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Alert } from "@mui/material";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const handleAddToCartButton = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        price: data.attributes.price,
        img: data.attributes.img.data.attributes.url,
        quantity,
      }),

      setAlert(true),
      setTimeout(() => {
        setAlert(false);
      }, 2000)
    );
  };
  return (
    <div className="product">
      {loading ? (
        "ładowanie"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">{data?.attributes?.price} zł</span>
            {console.log(data?.attributes?.price)}
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={handleAddToCartButton}>
              <AddShoppingCartIcon /> Dodaj do koszyka
            </button>
            {alert ? (
              <Alert severity="success" className="addToCartAlert" icon={false}>
                Dodano do koszyka!
              </Alert>
            ) : null}

            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> Dodaj do listy życzeń
              </div>
              <div className="item">
                <BalanceIcon /> Dodaj do porównania
              </div>
            </div>

            <hr />
            <div className="info">
              <div>
                Długi opis o produkcie Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Dolorem ea praesentium quos ullam eum corporis
                doloremque blanditiis! Animi placeat at nesciunt atque ratione.
                Molestiae, deserunt. Perferendis libero necessitatibus rerum
                aspernatur, temporibus sequi. Quo sequi esse suscipit, ab at
                magni non deserunt tempora? Unde, neque ullam totam at fugit
                odit excepturi, voluptas, dicta ipsa eos molestias. Ipsam
                incidunt repellat architecto enim quae quos dicta blanditiis
                libero cumque facere! Aut quasi eveniet omnis reprehenderit illo
                asperiores maiores inventore provident nihil, hic, ea doloremque
                sequi fugit aspernatur illum facere neque eaque! Doloribus quis
                ipsa magni magnam laudantium eos minus explicabo nemo. Provident
                eligendi necessitatibus, dolorum nulla molestiae fugiat
                delectus, hic totam minus distinctio, voluptas id facilis iusto
                eaque magnam accusantium quia dolore exercitationem iste. Facere
                nesciunt nobis autem voluptatem sit officiis, voluptas placeat
                eius iure exercitationem eum maiores, quibusdam cupiditate,
                beatae architecto unde. Veritatis, explicabo delectus. Ipsam
                atque quia veniam, illum vero rem!
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
