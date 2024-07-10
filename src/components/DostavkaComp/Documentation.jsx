import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Documentation = () => {
  const [count, setCount] = useState(3); // Initial state with the third div opened

  const toggleDiv = (index) => {
    setCount((prevCount) => (prevCount === index ? 0 : index));
  };

  return (
    <>
      <div className="w-full bg-[#E5E4ED] pb-24 mb-36">
        <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col lg:flex-row pt-24 items-start justify-between">
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <h3 className="text-[#202020] text-2xl lg:text-3xl font-medium leading-tight lg:leading-normal mb-6">
              Документы, необходимые
              <br /> для получения груза
            </h3>
            <p className="text-[#202020] text-base lg:text-lg font-medium leading-6">
              По копиям доверенностей и доверенностям с незаполненными
              <br />
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="w-full">
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div
                className="flex justify-between items-center py-5 cursor-pointer"
                onClick={() => toggleDiv(1)}
              >
                <h3 className="text-[#202020] text-lg font-semibold">
                  Юридические лица
                </h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center border ${
                    count === 1 ? "bg-[#088269] rotate-45" : "border-[#D5D1E1]"
                  } rounded-full transition-transform duration-150`}
                >
                  <span
                    className={`text-2xl mb-1 ${
                      count === 1 ? "text-white" : "text-black"
                    }`}
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  count === 1 ? "block" : "hidden"
                }`}
              >
                <p className="text-[#202020] opacity-80 text-sm leading-5 mb-4">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
                <NavLink to="/okompanii">
                  <button className="group flex items-center gap-2 hover:cursor-pointer">
                    <p className="text-[#202020] opacity-80 group-hover:text-gray-900 leading-5 text-sm font-semibold">
                      Подробнее
                    </p>
                    <MdArrowOutward className="text-[#202020] opacity-80 group-hover:text-gray-900 text-lg" />
                  </button>
                </NavLink>
              </div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div
                className="flex justify-between items-center py-5 cursor-pointer"
                onClick={() => toggleDiv(2)}
              >
                <h3 className="text-[#202020] text-lg font-semibold">
                  Индивидуальные предприниматели
                </h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center border ${
                    count === 2 ? "bg-[#088269] rotate-45" : "border-[#D5D1E1]"
                  } rounded-full transition-transform duration-150`}
                >
                  <span
                    className={`text-2xl mb-1 ${
                      count === 2 ? "text-white" : "text-black"
                    }`}
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  count === 2 ? "block" : "hidden"
                }`}
              >
                <p className="text-[#202020] opacity-80 text-sm leading-5 mb-4">
                  Но синтетическое тестирование, в своём классическом
                  представлении, допускает внедрение поэтапного и
                  последовательного развития общества. В рамках спецификации
                  современных стандартов, сторонники тоталитаризма в науке будут
                  функционально разнесены.
                </p>
              </div>
              <hr className="bg-[#D5D1E1] border-[#D5D1E1]" />
              <div
                className="flex justify-between items-center py-5 cursor-pointer"
                onClick={() => toggleDiv(3)}
              >
                <h3 className="text-[#202020] text-lg font-semibold">
                  Физические лица
                </h3>
                <button
                  className={`w-8 h-8 flex items-center justify-center border ${
                    count === 3 ? "bg-[#088269] rotate-45" : "border-[#D5D1E1]"
                  } rounded-full transition-transform duration-150`}
                >
                  <span
                    className={`text-2xl mb-1 ${
                      count === 3 ? "text-white" : "text-black"
                    }`}
                  >
                    +
                  </span>
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in-out ${
                  count === 3 ? "block" : "hidden"
                }`}
              >
                <p className="text-[#202020] opacity-80 text-sm leading-5 mb-4">
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

export default Documentation;
