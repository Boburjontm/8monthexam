import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ReviewHero from "../components/Review/ReviewHero";
import Consultation from "../components/DostavkaComp/Consultation";

const Reviews = () => {
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
            <p className="text-[14px] font-normal text-[#202020]">Отзывы</p>
          </div>
          <ReviewHero />
          <div className="mb-[150px]">
            <Consultation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
