import React from "react";
import light from "/assets/subtract.png";
import snow from "/assets/Groupa.png";
import line from "/assets/Symbol.png";
import seven from "/assets/vvv.png";

const Comfortable = () => {
  return (
    <div className="w-full max-w-[1310px] mx-auto px-4 lg:px-0 my-[10%]">
      <h3 className="text-2xl lg:text-3xl text-[#202020] font-medium mb-10 lg:mb-16">
        С нами выгодно и удобно
      </h3>
      <div className="flex flex-wrap justify-between gap-6 lg:gap-0">
        <div className="w-full lg:w-[23%] h-80 rounded-lg border border-[#E5E2EE] flex flex-col items-center justify-center gap-8">
          <img
            src={light}
            alt="Доставка по всей России"
            className="w-14 h-18"
          />
          <p className="text-base lg:text-lg text-[#202020] font-medium text-center">
            Доставка по <br /> всей России
          </p>
        </div>
        <div className="w-full lg:w-[23%] h-80 rounded-lg border border-[#E5E2EE] flex flex-col items-center justify-center gap-9">
          <img
            src={snow}
            alt="Собственный склад с продукцией"
            className="w-16 h-16"
          />
          <p className="text-base lg:text-lg text-[#202020] font-medium text-center">
            Собственный склад <br />с продукцией
          </p>
        </div>
        <div className="w-full lg:w-[23%] h-80 rounded-lg border border-[#E5E2EE] flex flex-col items-center justify-center gap-8">
          <img
            src={line}
            alt="Весь товар сертифицирован"
            className="w-16 h-18"
          />
          <p className="text-base lg:text-lg text-[#202020] font-medium text-center">
            Весь товар <br /> сертифицирован
          </p>
        </div>
        <div className="w-full lg:w-[23%] h-80 rounded-lg border border-[#E5E2EE] flex flex-col items-center justify-center gap-8">
          <img
            src={seven}
            alt="Безопасные способы оплаты"
            className="w-12 h-16"
          />
          <p className="text-base lg:text-lg text-[#202020] font-medium text-center">
            Безопасные <br /> способы оплаты
          </p>
        </div>
      </div>
      <div className="flex justify-end mt-12">
        <button className="w-64 h-10 lg:h-12 rounded-full bg-[#088269] text-[#F8F7F3] text-lg font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
          Проверить статус доставки
        </button>
      </div>
    </div>
  );
};

export default Comfortable;
