import React from "react";
import Marque from "../CompanyAbout/Marque";

const Marquee = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto mt-[6.94vw] bg-[#E5E4ED] pb-[6.94vw]">
        <div className="w-full max-w-screen-lg mx-auto py-[6.94vw] flex flex-col lg:flex-row items-start gap-[31.25vw]">
          <h3 className="text-[#202020] text-[6.94vw] lg:text-[2.08vw] font-medium mb-4 lg:mb-0">
            Наши клиенты
          </h3>
          <p className="text-[#202020] text-[11.11vw] lg:text-[3.33vw] font-medium leading-tight lg:leading-[3.67vw]">
            БОЛЕЕ <span className="text-[#088269]">5000</span> <br /> УСПЕШНЫХ ПРОЕКТОВ
          </p>
        </div>
        <Marque />
      </div>
    </>
  );
};

export default Marquee;
