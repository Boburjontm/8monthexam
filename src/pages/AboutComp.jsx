import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import AboutHeroPage from "../components/CompanyAbout/AboutHeroPage";
import Fact from "../components/Uslugi/Fact";
import Partner from "../components/CompanyAbout/Partner";
import Medicine from "../components/CompanyAbout/Medicine";
import Marquee from "../components/HomeComp/Marquee";
import Why from "../components/HomeComp/Why";
import Brend from "../components/HomeComp/Brend";
import Location from "../components/HomeComp/Location";
import Certificate from "../components/CompanyAbout/Certificate";
import Consultation from "../components/DostavkaComp/Consultation";

const AboutComp = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-full mx-auto ">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">О компании</p>
          </div>
          <AboutHeroPage />
          <Fact />
        </div>
        <Partner />
        <Medicine />
        <Marquee />
        <Why />
        <Brend />
        <Certificate />
        <div className="mb-[150px]">
          <Consultation />
        </div>
      </div>
    </>
  );
};

export default AboutComp;
