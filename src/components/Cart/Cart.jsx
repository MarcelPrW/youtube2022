import React, { useState } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import { Alert } from "@mui/material";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(false);

  const resetCartFunction = () => {
    dispatch(resetCart());
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="cart">
      {alert ? (
        <Alert severity="success" className="removeFromCartAlert" icon={false}>
          Usunięto z koszyka
        </Alert>
      ) : null}
      <h1>
        {products.length == 0
          ? "Brak produktów w koszyku"
          : "Produkty w twoim koszyku"}
      </h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img
            src={import.meta.env.VITE_REACT_APP_UPLOAD_URL + item.img}
            alt=""
          />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x {item.price} zł
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => (
              dispatch(removeItem(item.id)),
              setAlert(true),
              setTimeout(() => {
                setAlert(false);
              }, 2000)
            )}
          />
        </div>
      ))}
      <div className="total">
        <span>Łącznie</span>
        <span>{totalPrice()} zł</span>
      </div>
      <button onClick={handlePayment}>Przejdź do podsumowania</button>
      <span className="reset" onClick={resetCartFunction}>
        Zresetuj koszyk
      </span>
    </div>
  );
};

export default Cart;
