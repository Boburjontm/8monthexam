import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Complexes from "../components/Complexes";
import Questions from "../components/DostavkaComp/Questions";
import Location from "../components/HomeComp/Location";
import Cabinet from "../components/AboutComp copy/Cabinet";
import Why from "../components/HomeComp/Why";
import Mail from "../components/HomeComp/Mail";

const Turnkey = () => {
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
              <p className="text-[14px] font-normal text-[#202020]">
                Кабинет под ключ
              </p>
            </NavLink>
          </div>
          <Cabinet />
          <Why />
          <Complexes />
        </div>
        <Questions />
        <div className="mb-[150px]">
          <Location />
        </div>
        <Mail />
      </div>
    </>
  );
};

export default Turnkey;
