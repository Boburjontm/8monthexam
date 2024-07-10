import React, { useState, useEffect, useContext } from "react";
import Logo from "/assets/Logo.svg";
import SelectLabel from "./SelectLabel";
import { IoSearchOutline } from "react-icons/io5";
import user from "/assets/login.svg";
import diagram from "/assets/comparison.svg";
import basket from "/assets/basket.svg";
import { GoHeart } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { ProductContext } from "../App";
import blogData from "../db/Blog.json";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const { product } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const weekday = today.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    if (searchTerm) {
      const results = blogData.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <>
      <div className="fixed container mx-auto bg-[#F8F7F3] z-50 top-0 w-full m-auto border-none ">
        <div className="w-full px-24 m-auto flex items-center justify-between ">
          <ul className="flex items-center my-[10px] gap-[20px]">
            <NavLink
              to="/aboutcomp"
              className="text-[#7A7687] text-[12px] font-medium hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#424F65]"
            >
              О компании
            </NavLink>
            <NavLink
              to="/delivery"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Доставка
            </NavLink>
            <NavLink
              to="/payment"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Оплата
            </NavLink>
            <NavLink
              to="/garantii"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Гарантии
            </NavLink>
            <NavLink
              to="/blog"
              className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]"
            >
              Блог
            </NavLink>
          </ul>
          <ul className="flex items-center my-[10px] gap-[45px]">
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              <a
                href="mailto: info@mail.ru"
                className="text-gray-600 hover:text-gray-800"
              >
                info@mail.ru
              </a>
            </li>
            <li className="text-[#7A7687] hover:scale-105 duration-100 text-[12px] font-medium hover:cursor-pointer hover:text-[#424F65]">
              <a
                href="https://www.google.com/maps/dir/GMT+International+Properties/%D0%9A%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D0%B0+%D1%8D%D1%81%D1%82%D0%B5%D1%82%D0%B8%D0%BA%D0%B8+%D0%B8+%D0%BA%D0%B0%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B0+%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8+GMTClinic,+%D0%9D%D0%BE%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B9+%D0%B1%D1%83%D0%BB.,+20+%D0%B0,+%D1%81%D1%82%D1%80.+9,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+121069/@55.7550014,37.5030499,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887c7505ad38d35:0xab3b475826a2627d!2m2!1d86.3811287!2d54.8329454!1m5!1m1!1s0x46b54a4aa2b7feb7:0xbb7d6188055700cd!2m2!1d37.58545!2d55.755029!5m1!1e1?entry=ttu"
                className="text-gray-600 hover:text-gray-800"
              >
                г. Москва, ул. Московская, д. 35
              </a>
            </li>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mb-[26px]" />
        <div className="w-full px-24 m-auto flex items-center justify-between ">
          <div className="flex items-center justify-center">
            <NavLink to="/">
              <img src={Logo} alt="logo" className="w-[96px] h-[41px]" />
            </NavLink>
            <div className="ml-[50px] flex items-center h-[39px] bg-[linear-gradient(to_right,_#F8F7F3_50%,_#D5D1E1_50%)] border border-[#D5D1E1] rounded-[50px]">
              <SelectLabel className="relative z-50 " />
              <input
                type="text"
                placeholder="Поиск"
                className="h-full outline-none text-[#7A7687] w-[420px] rounded-[50px] pl-[15px] bg-[#F8F7F3]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="group w-[43px] h-full flex items-center justify-center bg-[#D5D1E1]  rounded-tr-[50px] rounded-br-[50px]">
                <IoSearchOutline className="text-[#7A7687] text-[22px] group-hover:scale-110  hover:rotate-90 duration-300" />
              </button>
            </div>
            <div className="ml-[35px]">
              <p className="text-[#7A7687] text-[12px] font-medium">
                {weekday} с {today.getHours().toString().padStart(2, "0")}:
                {today.getMinutes().toString().padStart(2, "0")} - выходной
              </p>
              <p className="text-[12px] text-[#7A7687]">
                {day} {month} {year}
              </p>
            </div>
          </div>

          {/* ----------------- */}
          <ul className="flex items-center gap-[25px] justify-center">
            <NavLink to="/profile">
              <li className="group flex flex-col hover:cursor-pointer items-center justify-center">
                <img src={user} alt="img" className="w-[19px] h-[20px]" />
                <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                  Войти
                </p>
              </li>
            </NavLink>
            <NavLink
              to="/like"
              className="group flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <GoHeart className="text-[18px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Избранное
              </p>
            </NavLink>
            <li className="group flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center">
              <img src={diagram} alt="img" className="w-[19px] h-[20px]" />
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Сравнить
              </p>
            </li>
            <NavLink
              to="/basket"
              className="aaa group  relative flex flex-col hover:cursor-pointer items-center gap-[2px] justify-center"
            >
              <img src={basket} alt="img" className="w-[21px] h-[20px]" />
              <div className="absolute top-[-4px] right-[5px] bg-[#088269] flex items-center justify-center  border h-[15px] rounded-[50%] w-[15px]">
                <p className="text-[10px] text-white">{product.length}</p>
              </div>
              <p className="text-[#7A7687] text-[12px] group-hover:text-[#088269]">
                Корзина
              </p>
            </NavLink>
          </ul>
        </div>
        <hr className="text-[#E5E2EE] w-full h-[1px] mt-[26px]" />
        <div className="w-[1310px] m-auto flex items-center justify-between">
          <ul className="flex items-center gap-[25px]">
            <NavLink
              to="/catalog"
              className="group flex items-center hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] gap-[5px]"
            >
              <HiOutlineMenuAlt1 />
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] ">
                Каталог
              </p>
            </NavLink>
            <li className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] ">
              Производители
            </li>
            <NavLink
              to="/turnkey"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] "
            >
              Кабинеты под ключ
            </NavLink>
            <NavLink
              to="/reanimatsiya"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] "
            >
              Услуги
            </NavLink>
            <NavLink
              to="/aksii"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] "
            >
              Акции
            </NavLink>
            <NavLink
              to=""
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] "
            >
              Покупателям
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[#202020] hover:cursor-pointer hover:scale-105 duration-100 hover:text-[#088269] text-[14px] "
            >
              Контакты
            </NavLink>
          </ul>
          <div className="flex items-center gap-[17px]">
            <div className="flex items-center gap-[3px]">
              <a
                href="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
                className="text-[#202020] group-hover:text-[#088269] text-[14px] font-semibold"
              >
                Москва
              </a>
              <GrLocation className="text-[13px]" />
            </div>
            <div className="flex my-[10px] items-center gap-[10px]">
              <div className="w-[168px] h-[41px] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center">
                <a
                  href="tel:+74950000000"
                  className="text-bg-[#088269]text-[14px] font-semibold hover:text-green"
                >
                  +7(495)000-00-00
                </a>
              </div>
              <button className="w-[168px] h-[41px] bg-[#088269] hover:bg-[#07745E] rounded-[50px] border border-[#D5D1E1] flex items-center justify-center">
                <a
                  href="tel:+74950000000"
                  className="text-[#F8F7F3] text-[14px] font-semibold"
                >
                  Заказать звонок
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Search Results */}
      {searchTerm && (
        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 w-[50%] bg-white shadow-lg rounded-lg p-4">
          {searchResults.length > 0 ? (
            searchResults.map((result) => (
              <div key={result.id} className="p-2 border-b border-gray-200">
                <h3 className="text-lg font-semibold">{result.title}</h3>
                <p className="text-sm">{result.content}</p>
              </div>
            ))
          ) : (
            <p className="text-sm">No results found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
