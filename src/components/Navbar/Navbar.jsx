import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LogoImg from "../../../img/logo.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import Categories from "../Categories/Categories";
import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(false);
  const [arrow, setArrow] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div
            className="item"
            onClick={() => {
              return setArrow(!arrow), setCategory(!category);
            }}
          >
            <span>Kategorie</span>
            <ArrowDropDownIcon
              className={arrow ? "arrowIcon" : "arrowIconDown"}
            />
          </div>
          {category && <Categories />}
        </div>
        {/* Logo here */}
        <div className="center">
          <Link className="link" to="/">
            <img src={LogoImg} alt="" />
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              O nas
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Kontakt
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
