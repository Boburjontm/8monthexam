import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import first from "/assets/first.png";
import three from "/assets/three.png";
import second from "/assets/second.png";

const Medicine = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 4;
  const itemWidth = 660;

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
      <div className="w-full max-w-[90%] xl:max-w-[85%] 2xl:max-w-[80%] mx-auto pl-[4%]">
        <div className="flex flex-col lg:flex-row mb-[10%] items-start justify-between">
          <div>
            <h4 className="text-[#202020] text-[5vw] lg:text-[2vw] mb-[2%] font-medium leading-tight">
              Опытные сотрудники из <br /> производственных компаний
            </h4>
            <p className="text-[#202020] text-[4vw] lg:text-[1vw] font-medium leading-relaxed">
              Наши сотрудники имеют огромный опыт работы в сложных условиях,
              <br />
              в том числе в разгар пандемии COVID–19. В этот период
              <br />
              мы осуществили поставки медицинских аппаратов в новейшие <br />{" "}
              клиники Минобороны в различных регионах страны.
            </p>
          </div>
          <div className="mt-[5%] lg:mt-0">
            <div className="flex items-center w-full overflow-x-hidden">
              <div
                className="flex items-center transition-transform duration-700"
                style={{ transform: `translateX(${translateX}px)` }}
              >
                <div className="flex items-center justify-between w-full max-w-full lg:w-[100%]">
                  <div className="w-[65%] lg:w-[60%] rounded-lg border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-auto w-full mb-[3%]"
                    />
                    <p className="text-[#202020] text-[3vw] lg:text-[1vw] ml-[3%] mb-[1%] font-medium leading-relaxed">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[2.5vw] lg:text-[0.9vw] ml-[3%] mb-[1%] font-normal leading-relaxed">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[30%] lg:w-[35%]">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                  </div>
                </div>
                {/* Repeat the above structure for other slides */}
                <div className="flex items-center justify-between w-full max-w-full lg:w-[100%]">
                  <div className="w-[65%] lg:w-[60%] rounded-lg border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-auto w-full mb-[3%]"
                    />
                    <p className="text-[#202020] text-[3vw] lg:text-[1vw] ml-[3%] mb-[1%] font-medium leading-relaxed">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[2.5vw] lg:text-[0.9vw] ml-[3%] mb-[1%] font-normal leading-relaxed">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[30%] lg:w-[35%]">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                  </div>
                </div>
                {/* Repeat the above structure for other slides */}
                <div className="flex items-center justify-between w-full max-w-full lg:w-[100%]">
                  <div className="w-[65%] lg:w-[60%] rounded-lg border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-auto w-full mb-[3%]"
                    />
                    <p className="text-[#202020] text-[3vw] lg:text-[1vw] ml-[3%] mb-[1%] font-medium leading-relaxed">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[2.5vw] lg:text-[0.9vw] ml-[3%] mb-[1%] font-normal leading-relaxed">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[30%] lg:w-[35%]">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                  </div>
                </div>
                {/* Repeat the above structure for other slides */}
                <div className="flex items-center justify-between w-full max-w-full lg:w-[100%]">
                  <div className="w-[65%] lg:w-[60%] rounded-lg border border-[#E5E2EE]">
                    <img
                      src={first}
                      alt="rasm"
                      className="h-auto w-full mb-[3%]"
                    />
                    <p className="text-[#202020] text-[3vw] lg:text-[1vw] ml-[3%] mb-[1%] font-medium leading-relaxed">
                      Константин
                      <br /> Константинопольский
                    </p>
                    <p className="text-[#7A7687] text-[2.5vw] lg:text-[0.9vw] ml-[3%] mb-[1%] font-normal leading-relaxed">
                      Основатель компании
                    </p>
                  </div>
                  <div className="w-[30%] lg:w-[35%]">
                    <img
                      src={three}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                    <img
                      src={second}
                      alt="rasm"
                      className="h-auto w-full mb-[2%]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-[4%] flex items-center justify-between pr-[4%]">
              <div className="flex items-center gap-[4%]">
                <button
                  onClick={handlePrev}
                  disabled={slideCount === 0}
                  className={`w-[10vw] h-[10vw] lg:w-[4%] lg:h-[4%] flex items-center justify-center rounded-full border border-[#D5D1E1] ${
                    slideCount > 0
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowLeft className="text-[#202020] text-[5vw] lg:text-[2vw]" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={slideCount === maxSlideCount}
                  className={`w-[10vw] h-[10vw] lg:w-[4%] lg:h-[4%] flex items-center justify-center rounded-full border border-[#D5D1E1] ${
                    slideCount < maxSlideCount
                      ? "hover:bg-slate-300"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  <GoArrowRight className="text-[#202020] text-[5vw] lg:text-[2vw]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Medicine;
