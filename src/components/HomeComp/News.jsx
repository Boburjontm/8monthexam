import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../../../public/assets/img/novosti/Rectangle.png";
import img2 from "../../../public/assets/img/novosti/Rectangle (1).png";
import img3 from "../../../public/assets/img/novosti/Rectangle (2).png";
import img4 from "../../../public/assets/img/novosti/Rectangle (3).png";

const News = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 9; // Maksimal oldinga surishlar soni
  const itemWidth = 330;

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
      <div className="w-full mx-auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] leading-[36px] text-[30px] mb-[25px] font-medium">
              Новости <br /> компании
            </h4>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img4}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img4}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
                <div className="w-[320px] h-[465px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[320px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={img1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#7A7687] text-[12px] leading-[16px] font-medium ml-[15px] mt-[15px]">
                    07.11.2022
                  </p>
                  <p className="text-[#202020] text-[18px] leading-[24px] font-semibold ml-[15px] mt-[5px]">
                    Название новости
                  </p>
                  <p className="text-[#7A7687] text-[16px] leading-[22px] font-medium ml-[15px] mt-[15px]">
                    Допускает внедрение поэтапного <br /> и развития общества.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1050px] mt-[40px] flex items-center justify-between pr-[65px]">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0 ? "hover:bg-slate-300" : "bg-gray-200"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount}
                  className={`w-[41px] h-[41px] flex hover:cursor-pointer items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-200"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
              <button className="w-[145px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
                Все новости
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
