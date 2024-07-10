import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Data from "../../db/Blog.json";
import { BsThreeDots } from "react-icons/bs";
import { GrFormNext } from "react-icons/gr";
import { IoChevronBackOutline } from "react-icons/io5";

const Blog_hero = () => {
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const handlePrevious = () => {
    if (sale1 > 1) {
      setSale1(sale1 - 1);
      setSale(sale1 - 1);
    }
  };

  const handleNext = () => {
    if (sale1 < 3) {
      setSale1(sale1 + 1);
      setSale(sale1 + 1);
    }
  };

  return (
    <>
      <div className="w-full max-w-[100%] md:max-w-[90%] lg:max-w-[80%] mx-auto px-4">
        <h3 className="text-[#202020] font-medium mt-[5%] mb-[2.5%] text-[6vw] md:text-[3vw] leading-[1.1em]">
          Блог
        </h3>
        <div className="flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="w-full md:w-[25%] border border-[#E5E2EE] p-4">
            <p className="text-[#202020] text-[4vw] md:text-[1.6vw] font-medium mb-4 leading-[1.4em]">
              Направления
            </p>
            <hr className="mb-4" />
            {[
              "Реанимация",
              "Хирургия",
              "Офтальмология",
              "Лабораторная диагностика",
              "Акушерство и Гинекология",
              "Гистология",
              "Косметология",
              "Оториноларингология",
              "Рентгенология и томография",
              "Стерилизация",
              "Физиотерапия и реабилитация",
              "Функциональная диагностика",
              "Эндоскопия",
              "Новинки",
              "Распродажи",
              "Кабинеты под ключ",
            ].map((direction, index) => (
              <div
                key={index}
                className="group flex items-center hover:scale-105 duration-200 my-3 hover:cursor-pointer justify-between"
              >
                <NavLink to={`/${direction.toLowerCase().replace(/ /g, "")}`}>
                  <p className="text-[#202020] group-hover:text-[#088269] text-[3.5vw] md:text-[1.4vw] font-medium leading-[1.4em]">
                    {direction}
                  </p>
                </NavLink>
                <IoIosArrowForward className="group-hover:text-[#088269]" />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-4 w-full md:w-[70%]">
            {sale === 1 &&
              Data.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col md:flex-row justify-between rounded-[10px] border bg-white border-[#E5E2EE]"
                >
                  <img
                    src={item.image}
                    alt="rasm"
                    className="rounded-tl-[10px] border rounded-bl-[10px] w-full md:w-[50%] h-[20vh] md:h-[30vh]"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <p className="text-[#202020] font-medium text-[4.5vw] md:text-[1.8vw] ">
                        {item.name}
                      </p>
                      <p className="text-[#7A7687] font-normal mb-4 text-[3vw] md:text-[1.2vw] ">
                        {item.date}
                      </p>
                      <p className="text-[#7A7687] w-full md:w-[60%] font-normal mb-4 text-[4vw] md:text-[1.6vw] leading-[1.4em]">
                        {item.text}
                      </p>
                    </div>
                    <button className="w-[50%] md:w-[30%] h-[8vh] md:h-[5vh] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269] text-[#088269] rounded-[50px] hover:text-white text-[3vw] md:text-[1.4vw] font-semibold">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            {sale === 2 &&
              Data.slice(4, 8)
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full flex flex-col md:flex-row justify-between rounded-[10px] border bg-white border-[#E5E2EE]"
                  >
                    <img
                      src={item.image}
                      alt="rasm"
                      className="rounded-tl-[10px] border rounded-bl-[10px] w-full md:w-[50%] h-[20vh] md:h-[30vh]"
                    />
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <p className="text-[#202020] font-medium text-[4.5vw] md:text-[1.8vw] ">
                          {item.name}
                        </p>
                        <p className="text-[#7A7687] font-normal mb-4 text-[3vw] md:text-[1.2vw] ">
                          {item.date}
                        </p>
                        <p className="text-[#7A7687] w-full md:w-[60%] font-normal mb-4 text-[4vw] md:text-[1.6vw] leading-[1.4em]">
                          {item.text}
                        </p>
                      </div>
                      <button className="w-[50%] md:w-[30%] h-[8vh] md:h-[5vh] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269] text-[#088269] rounded-[50px] hover:text-white text-[3vw] md:text-[1.4vw] font-semibold">
                        Подробнее
                      </button>
                    </div>
                  </div>
                ))}
            {sale === 3 &&
              Data.slice(8, 12).map((item) => (
                <div
                  key={item.id}
                  className="w-full flex flex-col md:flex-row justify-between rounded-[10px] border bg-white border-[#E5E2EE]"
                >
                  <img
                    src={item.image}
                    alt="rasm"
                    className="rounded-tl-[10px] border rounded-bl-[10px] w-full md:w-[50%] h-[20vh] md:h-[30vh]"
                  />
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <p className="text-[#202020] font-medium text-[4.5vw] md:text-[1.8vw] ">
                        {item.name}
                      </p>
                      <p className="text-[#7A7687] font-normal mb-4 text-[3vw] md:text-[1.2vw] ">
                        {item.date}
                      </p>
                      <p className="text-[#7A7687] w-full md:w-[60%] font-normal mb-4 text-[4vw] md:text-[1.6vw] leading-[1.4em]">
                        {item.text}
                      </p>
                    </div>
                    <button className="w-[50%] md:w-[30%] h-[8vh] md:h-[5vh] border border-[#D5D1E1] duration-200 hover:scale-105 hover:bg-[#088269] text-[#088269] rounded-[50px] hover:text-white text-[3vw] md:text-[1.4vw] font-semibold">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-center mt-[5%] w-full items-center gap-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <p
              className={`w-[8vw] md:w-[3vw] h-[8vw] md:h-[3vw] bg-white flex items-center justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 1 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
            >
              <IoChevronBackOutline />
            </p>
            {[1, 2, 3].map((num) => (
              <p
                key={num}
                onClick={() => {
                  setSale1(num);
                  setSale(num);
                }}
                className={`w-[8vw] md:w-[3vw] h-[8vw] md:h-[3vw] text-[4vw] md:text-[1.5vw] ${
                  sale1 === num ? "bg-[#088269] text-white" : "bg-white text-black"
                } border rounded-[8px] hover:bg-[#088269] hover:text-white flex items-center justify-center cursor-pointer`}
              >
                {num}
              </p>
            ))}
            <p
              className={`w-[8vw] md:w-[3vw] h-[8vw] md:h-[3vw] bg-white flex items-center justify-center border rounded-[8px] hover:bg-[#088269] hover:text-white cursor-pointer ${
                sale1 === 3 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
            >
              <GrFormNext />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog_hero;
