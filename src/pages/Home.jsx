import React, { useEffect } from "react";
import Why from "../components/HomeComp/Why";
import Mail from "../components/HomeComp/Mail";
import Location from "../components/HomeComp/Location";
import Marquee from "../components/HomeComp/Marquee";
import Brend from "../components/HomeComp/Brend";
import Information from "../components/HomeComp/Information";
import Carousel from "../components/HomeComp/Carousel";
import Сategory from "../components/HomeComp/Сategory";
import Products from "../components/HomeComp/Products";
import Cabinet from "../components/HomeComp/Cabinet";
import News from "../components/HomeComp/News";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="">
        <Carousel />
        <Сategory />
        <Cabinet />
        <Why />
        <Products />
        <Marquee />
        <Brend />
        <Information />
        <News />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Home;
