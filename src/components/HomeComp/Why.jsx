import React from "react";
import light from "/assets/light.png";
import snow from "/assets/snow.png";
import line from "/assets/sistema.png";
import seven from "/assets/seven.png";

const Why = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-[4%] sm:px-[6%] lg:px-[8%]">
        <h3 className="text-[6vw] md:text-[4vw] lg:text-[2vw] text-gray-800 font-medium mb-[10%] mt-[24%] text-center">
          Почему выбирают нас?
        </h3>
        <div className="flex flex-wrap justify-between">
          <div className="w-[45%] md:w-[30%] lg:w-[18%] h-[45vw] md:h-[30vw] lg:h-[18vw] rounded-lg border border-gray-300 flex flex-col items-center justify-center gap-[10%] mb-[5%]">
            <img
              src={light}
              alt="Расм"
              className="w-[14vw] h-[28vw] md:w-[10vw] md:h-[20vw] lg:w-[5vw] lg:h-[10vw]"
            />
            <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] text-gray-800 font-medium text-center">
              Быстрая доставка
            </p>
          </div>
          <div className="w-[45%] md:w-[30%] lg:w-[18%] h-[45vw] md:h-[30vw] lg:h-[18vw] rounded-lg border border-gray-300 flex flex-col items-center justify-center gap-[6%] mb-[5%]">
            <img
              src={snow}
              alt="Расм"
              className="w-[16vw] h-[18vw] md:w-[12vw] md:h-[14vw] lg:w-[6vw] lg:h-[7vw]"
            />
            <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] text-center leading-5 text-gray-800 font-medium">
              Весь товар <br /> сертифицирован
            </p>
          </div>
          <div className="w-[45%] md:w-[30%] lg:w-[18%] h-[45vw] md:h-[30vw] lg:h-[18vw] rounded-lg border border-gray-300 flex flex-col items-center justify-center gap-[10%] mb-[5%]">
            <img
              src={line}
              alt="Расм"
              className="w-[16vw] h-[14vw] md:w-[12vw] md:h-[10vw] lg:w-[6vw] lg:h-[5vw]"
            />
            <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] text-center leading-5 text-gray-800 font-medium">
              Гибкая система <br /> скидок
            </p>
          </div>
          <div className="w-[45%] md:w-[30%] lg:w-[18%] h-[45vw] md:h-[30vw] lg:h-[18vw] rounded-lg border border-gray-300 flex flex-col items-center justify-center gap-[12%] mb-[5%]">
            <img
              src={seven}
              alt="Расм"
              className="w-[8vw] h-[14vw] md:w-[6vw] md:h-[10vw] lg:w-[3vw] lg:h-[5vw]"
            />
            <p className="text-[4vw] md:text-[2.5vw] lg:text-[1vw] text-center leading-5 text-gray-800 font-medium">
              Лет на рынке
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
