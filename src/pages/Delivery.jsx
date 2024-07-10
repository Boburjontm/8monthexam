import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import DeliveryHero from "../components/DostavkaComp/DeliveryHero";
import Why from "../components/HomeComp/Why";
import Comfortable from "../components/DostavkaComp/Comfortable";
import Rules from "../components/DostavkaComp/Rules";
import Questions from "../components/DostavkaComp/Questions";
import Center from "../components/DostavkaComp/Center";
import Documentation from "../components/DostavkaComp/Documentation";
import Consultation from "../components/CompanyAbout/Consultation";
import Mail from "../components/HomeComp/Mail";

const Delivery = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="w-[1440px] m-auto">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">Доставка</p>
          </div>
          <DeliveryHero />
          <Comfortable />
          <Rules />
        </div>
        <Questions />
        <Center />
        <Documentation />
        <Consultation />
        <Mail />
      </div>
    </>
  );
};

export default Delivery;
