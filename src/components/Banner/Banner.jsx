import React from "react";
import "./Banner.scss";
import BannerImg from "../../../img/banner.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImg} alt="Baner" />
    </div>
  );
};

export default Banner;
