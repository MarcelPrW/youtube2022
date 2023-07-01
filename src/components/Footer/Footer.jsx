import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Kategorie</h1>
          <Link className="link" to="/produkty/pontony">
            Pontony
          </Link>
          <Link className="link" to="/produkty/baseny">
            Baseny
          </Link>
          <Link className="link" to="/produkty/pilki">
            Piłki
          </Link>
          <Link className="link" to="/produkty/kola">
            Koła
          </Link>
          <Link className="link" to="/produkty/materace">
            Materace
          </Link>
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
