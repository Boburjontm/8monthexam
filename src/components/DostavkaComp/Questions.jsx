import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Questions = () => {
  const [count, setCount] = useState(1); // Initially, the first div is open

  const toggleDiv = (index) => {
    setCount((prevCount) => (prevCount === index ? 0 : index));
  };

  return (
    <div className="w-full bg-[#088269] pb-[120px]">
      <div className="max-w-[1310px] mx-auto px-4 lg:px-0 pt-[100px] flex items-start justify-between">
        <h3 className="text-white text-2xl mt-18 font-medium">
          Часто задаваемые вопросы
        </h3>
        <div className="w-full lg:w-[50%]">
          <div className="w-full">
            <hr />
            <div className="flex justify-between items-center py-[22px] cursor-pointer">
              <h3 className="text-white text-base">О компании</h3>
              <button
                className={
                  count === 1
                    ? "w-8 h-8 flex items-center justify-center border rounded-full bg-white rotate-45 duration-150"
                    : "border w-8 h-8 flex items-center justify-center rounded-full"
                }
                onClick={() => toggleDiv(1)}
              >
                <span
                  className={
                    count === 1
                      ? "bg-transparent font-light text-black text-2xl mb-2"
                      : "text-white bg-transparent font-light text-2xl mb-2"
                  }
                >
                  +
                </span>
              </button>
            </div>
            <div
              className={
                count === 1
                  ? "block text-white opacity-75 text-sm py-3 transition-all duration-2000 ease-in-out"
                  : "hidden"
              }
            >
              <p>
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </p>
              <NavLink to="/okompanii">
                <button className="group flex mt-4 hover:cursor-pointer items-center gap-2">
                  <p className="text-white group-hover:text-gray-900 leading-4 text-sm font-semibold">
                    Подробнее
                  </p>
                  <MdArrowOutward className="text-white group-hover:text-gray-900 text-lg" />
                </button>
              </NavLink>
            </div>
            <hr />
            {/* Repeat the above structure for other sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
