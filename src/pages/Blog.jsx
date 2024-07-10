import React, { useEffect } from "react";
import Blog_hero from "../components/Blog/Blog_hero";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Mail from "../components/HomeComp/Mail";

const Blog = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-[1310px] m-auto">
        <div className="flex my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <p className="text-[14px] font-normal text-[#202020]">Блог</p>
        </div>
        <Blog_hero />
      </div>
      <Mail />
    </>
  );
};

export default Blog;
