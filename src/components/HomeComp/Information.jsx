import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Information = () => {
  const [count, setCount] = useState(1); // Boshlang'ich holatda birinchi div ochilgan

  const toggleDiv = (index) => {
    setCount((prevCount) => (prevCount === index ? 0 : index));
  };
  return (
    <>
      <div className="w-full container  mx-auto bg-[#088269] pb-[120px]">
        <div className="w-full px-24 m-auto flex pt-[100px] items-start justify-between">
          <h3 className="text-[#F8F7F3] text-[30px] mt-[18px] font-medium">
            Информация о компании
          </h3>
          <div className="w-[650px] ">
            <div className="w-full">
              <hr />
              <div className="flex bordeer border-black justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#F8F7F3] text-[18px]">О компании</h3>
                <button
                  className={
                    count === 1
                      ? "w-[32px] h-[32px] flex items-center justify-center border  rounded-full bg-white rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(1)}
                >
                  <span
                    className={
                      count === 1
                        ? "bg-transparent font-light text-[30px] text-black  mb-[6px]"
                        : "text-white bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 1
                    ? "block text-white  opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
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
                  <button className="group flex mt-[40px] hover:cursor-pointer items-center  gap-[8px]">
                    <p className="text-white group-hover:text-gray-900 leading-[19px] text-[14px]  font-semibold">
                      Подробнее
                    </p>
                    <MdArrowOutward className="text-white group-hover:text-gray-900 text-[18px]" />
                  </button>
                </NavLink>
                <button className="flex items-center justify-center gap-[5px]"></button>
              </div>
              <hr />
              <div className="flex justify-between items-center py-[22px] cursor-pointer">
                <h3 className="text-[#F8F7F3] text-[18px]">Подробнее</h3>
                <button
                  className={
                    count === 2
                      ? "w-[32px] h-[32px] flex items-center justify-center border  rounded-full bg-white rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(2)}
                >
                  <span
                    className={
                      count === 2
                        ? "bg-transparent font-light text-[30px] text-[#088269]  mb-[6px]"
                        : "text-white bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 2
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2 cursor-pointer">
                <h3 className="text-[#F8F7F3] text-[18px] py-3">
                  Преимущества сотрудников
                </h3>
                <button
                  className={
                    count === 3
                      ? "w-[32px] h-[32px] flex items-center justify-center border  rounded-full bg-white rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(3)}
                >
                  <span
                    className={
                      count === 3
                        ? "bg-transparent font-light text-[30px] text-[#088269]  mb-[6px]"
                        : "text-white bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 3
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2 cursor-pointer">
                <h3 className="text-[#F8F7F3] text-[18px] py-3">
                  Достижения компании
                </h3>
                <button
                  className={
                    count === 4
                      ? "w-[32px] h-[32px] flex items-center justify-center border  rounded-full bg-white rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(4)}
                >
                  <span
                    className={
                      count === 4
                        ? "bg-transparent font-light text-[30px] text-[#088269]  mb-[6px]"
                        : "text-white bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 4
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
              <hr />
              <div className="flex justify-between items-center py-2 cursor-pointer">
                <h3 className="text-[#F8F7F3] text-[18px] py-3">
                  Карьерный рост
                </h3>
                <button
                  className={
                    count === 5
                      ? "w-[32px] h-[32px] flex items-center justify-center border  rounded-full bg-white rotate-45 duration-150"
                      : " border w-[32px] h-[32px] flex items-center justify-center  rounded-[50px]"
                  }
                  onClick={() => toggleDiv(5)}
                >
                  <span
                    className={
                      count === 5
                        ? "bg-transparent font-light text-[30px] text-[#088269]  mb-[6px]"
                        : "text-white bg-transparent font-light text-[30px] mb-[6px]"
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={
                  count === 5
                    ? "block text-white opacity-75 text-[14px] py-3 transition-all duration-2000 ease-in-out max-h-screen"
                    : "hidden max-h-0 overflow-hidden"
                }
              >
                <p>
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
