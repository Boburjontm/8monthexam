import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import litsenziya from "/assets/liysenziya.png";

const Certificate = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 4;
  const itemWidth = 220;

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - itemWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + itemWidth);
      setSlideCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className="w-full px-4 md:px-16 lg:px-20 xl:px-24 2xl:px-28 mx-auto">
        <div className="flex flex-col lg:flex-row my-36 items-start justify-between">
          <div className="w-full lg:w-auto mb-8 lg:mb-0">
            <h4 className="text-[#202020] text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-normal font-medium">
              Сертификаты <br /> на продукцию
            </h4>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex items-center overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="min-w-[210px] h-[280px] flex items-center justify-center mr-2.5 bg-white border border-[#E5E2EE] rounded-lg"
                  >
                    <img
                      src={litsenziya}
                      alt="rasm"
                      className="w-[178px] h-[248px]"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-end gap-2.5">
              <button
                onClick={handlePrev}
                disabled={slideCount === 0}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#D5D1E1] ${
                  slideCount > 0 ? "hover:bg-slate-300" : "bg-gray-300"
                }`}
              >
                <GoArrowLeft className="text-[#202020] text-xl" />
              </button>
              <button
                onClick={handleNext}
                disabled={slideCount === maxSlideCount}
                className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#D5D1E1] ${
                  slideCount < maxSlideCount
                    ? "hover:bg-slate-300"
                    : "bg-gray-300"
                }`}
              >
                <GoArrowRight className="text-[#202020] text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certificate;
