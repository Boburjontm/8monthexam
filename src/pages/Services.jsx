import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import ServicesCard from "../components/Uslugi/ServicesCard";
import Fact from "../components/Uslugi/Fact";
import Received from "../components/Received";
import Certificate from "../components/CompanyAbout/Certificate";
import Consultation from "../components/DostavkaComp/Consultation";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className="max-w-full mx-auto">
        <div className="max-w-screen-lg mx-auto px-4">
          <div className="flex my-5 items-center gap-2">
            <NavLink to="/">
              <p className="text-[#7A7687] text-sm md:text-base font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-sm md:text-base" />
            <p className="text-sm md:text-base font-normal text-[#202020]">
              Услуги
            </p>
          </div>
          <ServicesCard />
          <Fact />
          <Received />
        </div>
        <Certificate />
        <div className="mb-36">
          <Consultation />
        </div>
      </div>
    </>
  );
};

export default Services;
