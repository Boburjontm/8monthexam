import React from "react";
import light from "/assets/a.png";
import snow from "/assets/Groupa.png";
import line from "/assets/sistema.png";
import seven from "/assets/vvv.png";

const Services = () => {
  return (
    <>
      <div className="w-full container mx-auto">
        <h3 className="text-[30px] text-[#202020] font-medium mb-[40px] mt-[150px]">
          Перечень гарантийных услуг
        </h3>
        <div className=" flex items-center justify-between">
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[30px]">
            <img src={light} alt="rasm" className="w-[68px] h-[79px]" />
            <p className="text-[16px] text-[#202020] leading-[22.4px] text-center font-medium">
              Установка, настройка
              <br /> и пуско-наладка
              <br /> медтехники
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[37px]">
            <img src={snow} alt="rasm" className="w-[65px] h-[62px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Сервисное обслуживание
              <br /> медицинской техники
              <br /> любой комплектации
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[31px]">
            <img src={seven} alt="rasm" className="w-[50px] h-[67px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Гарантийное и<br /> постгарантийное
              <br /> обслуживание
            </p>
          </div>
          <div className="w-[320px] h-[320px] rounded-[10px] border border-[#E5E2EE] flex flex-col items-center justify-center gap-[40px]">
            <img src={line} alt="rasm" className="w-[62px] h-[55px]" />
            <p className="text-[16px] text-center leading-[22.4px] text-[#202020] font-medium">
              Диагностика и проведение
              <br /> профилактических работ
            </p>
          </div>
        </div>
        <div className="flex justify-end mt-[50px]">
          <button className="right-[20px] bottom-[20px] w-[249px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[#088269] text-[16px] font-semibold hover:scale-105 mr-[10px] duration-200 hover:text-white hover:bg-[#07745E]">
            Гарантийный случай
          </button>
          <button className="right-[20px] bottom-[20px] w-[163px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
            Замена товара
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
