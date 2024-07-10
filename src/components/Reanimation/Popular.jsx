import React, { useState, useContext } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Data from "../../db/data.js";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../App.jsx";

const Popular = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 6;
  const itemWidth = "calc((100% - 30px) / 3)"; // Adjusted for responsiveness

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - parseInt(itemWidth) - 10); // Adjusted for margin
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + parseInt(itemWidth) + 10); // Adjusted for margin
      setSlideCount((prev) => prev - 1);
    }
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scrollTo(0, 0); // Adjusted for scrolling to top
  };

  const { setShop } = useContext(ShopContext);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-20">
      <div className="flex my-16 items-start justify-between">
        <div>
          <h4 className="text-gray-800 text-2xl mb-5 font-medium">Бренды</h4>
          <p className="text-gray-800 text-base opacity-50 mb-5 font-medium">
            Эксклюзивные поставщики
          </p>
        </div>
        <div className="w-full">
          <div className="flex items-center w-full overflow-x-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {Data.slice(0, 9)
                .reverse()
                .map((item) => (
                  <div
                    key={item.id}
                    className="w-full md:w-[calc((100% - 30px) / 3)] mr-4 mb-4 md:mb-0 h-[280px] border border-gray-300 bg-gray-100 rounded-lg"
                  >
                    <div className="w-full h-[196px] flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-white">
                      <NavLink to="/stranitsa">
                        <img
                          onClick={() => handleCardClick(item.id)}
                          className="w-48 h-48 md:w-56 md:h-56"
                          src={item.image}
                          alt="rasm"
                        />
                      </NavLink>
                    </div>
                    <hr className="w-full border border-gray-300" />
                    <p className="text-gray-800 w-[184px] text-base font-medium ml-4 mt-4">
                      {item.name}
                    </p>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full mt-10 flex items-center justify-between pr-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={handlePrev}
                disabled={slideCount === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                  slideCount > 0
                    ? "hover:bg-gray-200 cursor-pointer"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
              >
                <GoArrowLeft className="text-gray-800 text-2xl" />
              </button>
              <button
                onClick={handleNext}
                disabled={slideCount === maxSlideCount}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                  slideCount < maxSlideCount
                    ? "hover:bg-gray-200 cursor-pointer"
                    : "bg-gray-200 cursor-not-allowed"
                }`}
              >
                <GoArrowRight className="text-gray-800 text-2xl" />
              </button>
            </div>
            <NavLink to="/katalog">
              <button className="w-48 h-10 rounded-full bg-green-600 text-white text-base font-semibold hover:scale-105 duration-200 hover:bg-green-700">
                Все категории
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
