import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ConnectHero from "../components/PodklyuchComp/ConnectHero";
import ProductSelect from "../components/Reanimation/ProductSelect";
import Complexes from "../components/Complexes";
import Questions from "../components/DostavkaComp/Questions";
import Consultation from "../components/DostavkaComp/Consultation";

const Reanimation = () => {
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
            <NavLink to="/podklyuch">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Кабинет под ключ
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Реанимация
            </p>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">
              Палата реанимации и интенсивной терапии
            </p>
          </div>
          <ConnectHero />
          <ProductSelect />
          <Complexes />
        </div>
        <Questions />
        <div className="mb-[150px]">
          <Consultation />
        </div>
      </div>
    </>
  );
};

export default Reanimation;
