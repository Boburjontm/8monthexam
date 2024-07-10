import React, { useEffect } from "react";
import Why from "../components/HomeComp/Why";
import Brend from "../components/HomeComp/Brend";
import Questions from "../components/DostavkaComp/Questions";
import Location from "../components/HomeComp/Location";
import Mail from "../components/HomeComp/Mail";
import Products from "../components/HomeComp/Products";
import AksiyaComp from "../Aksiya/AksiyaComp";
import News from "../components/HomeComp/News";
import Cabinet from "../components/HomeComp/Cabinet";

const Price = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-full container mx-auto">
        <AksiyaComp />
        <Cabinet />
        <Why />
        <Products />
        <Brend />
        <News />
        <Questions />
        <Location />
        <Mail />
      </div>
    </>
  );
};

export default Price;
