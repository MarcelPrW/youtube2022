import React from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
//import Contact from "../../"

const Home = () => {
  return (
    <div>
      <Banner />
      <FeaturedProducts type="featured" />
      {/* <Categories /> */}
      <FeaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
