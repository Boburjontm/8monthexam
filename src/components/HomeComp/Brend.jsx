import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import brandimg from "../../../public/assets/img/brand/brand1.png";
import brandimg2 from "../../../public/assets/img/brand/brand2.png";
import brandimg3 from "../../../public/assets/img/brand/brand3.png";

const Brend = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0); // slideCount holati
  const maxSlideCount = 6; // Maksimal oldinga surishlar soni
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
      <div className="w-full container mx -auto pl-[65px]">
        <div className="flex my-[150px] items-start justify-between">
          <div>
            <h4 className="text-[#202020] text-[30px] mb-[25px] font-medium">
              Бренды
            </h4>
            <p className="text-[#202020] text-[16px] opacity-50 mb-[25px] font-medium">
              Эксклюзивные поставщики
            </p>
          </div>
          {/* --------------- */}
          <div>
            <div className="flex items-center w-[1050px] overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-500"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src={brandimg}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src={brandimg2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src={brandimg3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src={brandimg}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src={brandimg2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src={brandimg3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[217px] h-[102px]"
                      src={brandimg}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[166px] h-[111px]"
                      src={brandimg2}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
                  </p>
                </div>
                <div className="w-[320px] h-[280px] mr-[10px] border border-[#d1d1d2] bg-[#f2f0f7] rounded-[10px]">
                  <div className="w-full h-[196px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                    <img
                      className="w-[197px] h-[60px]"
                      src={brandimg3}
                      alt="rasm"
                    />
                  </div>
                  <hr className="w-full border border-[#d1d1d2]" />
                  <p className="text-[#202020] text-[16px] font-medium ml-[25px] mt-[20px]">
                    НМИЦ онкологии им. Н.Н. <br /> Блохина
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
              <button className="w-[155px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
                Сертификаты
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brend;
