import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Kategorie</h1>
          <span>Pontony</span>
          <span>Baseny</span>
          <span>Piłki</span>
          <span>Koła</span>
          <span>Materace</span>
        </div>
        <div className="item">
          <h1>Linki</h1>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Pliki cookies</span>
        </div>
        <div className="item">
          <h1>O nas</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item">
          <h1>Kontakt</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wakacyjna torba </span>
          <span className="copyright">
            © Copyright 2023. Wszystkie prawa zastrzeżone
          </span>
        </div>
        <div className="right">
          {/* <img src="/img/payment.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
