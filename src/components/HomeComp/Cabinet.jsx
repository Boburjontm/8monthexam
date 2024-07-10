import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import logo1 from "../../../public/assets/img/kabinet/Comprehensive.png";
import logo2 from "../../../public/assets/img/kabinet/Photo.png";
import logo3 from "../../../public/assets/img/kabinet/Photot.png";

const Cabinet = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 6; // Maksimal oldinga surishlar soni
  const itemWidth = 440;

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
      <div className="w-full m-auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h3 className="mb-[43px] text-[30px] font-medium leading-[36px]">
              Комплексное оснащение кабинетов
            </h3>
            <div className="flex items-center w-[1310px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full filter grayscale h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={logo3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Экспресс лаборатория
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={logo2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Лазерная терапия
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={logo3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Операционный блок
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full filter grayscale rounded-tl-[10px] rounded-tr-[10px]"
                      src={logo1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Экспресс лаборатория
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Лазерная терапия
                  </p>
                </div>
                <div className="w-[430px] h-[579px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[517px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-full h-full rounded-tl-[10px] rounded-tr-[10px]"
                      src={logo1}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] leading-[23px] font-medium ml-[25px] mt-[20px]">
                    Операционный блок
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[1310px] mt-[40px]  flex items-center justify-between ">
              <div className="flex items-center gap-[10px]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0} // Boshlang'ich holatda back button ishlamaydi
                  className={`w-[41px] h-[41px] flex items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount > 0
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[22px] " />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount} // 3 marta bosilgandan keyin next button ishlamaydi
                  className={`w-[41px] h-[41px] flex  items-center justify-center rounded-[50%] border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[22px] " />
                </button>
              </div>
              <div className="flex items-center gap-[10px]">
                <button className="w-[241px] h-[41px] rounded-[50px] text-[#088269] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                  Бесплатная консультация
                </button>
                <button className="w-[241px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:scale-105 duration-200 hover:text-[#f8f7f3] hover:bg-[#088269]">
                  Рассчитать стоимость
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cabinet;
