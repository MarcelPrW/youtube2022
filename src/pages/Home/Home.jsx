import React from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts type="nowe" />
      {/* <Categories /> */}
      <FeaturedProducts type="popularne" />
      <Contact />
    </div>
  );
};

export default Home;
