import React from "react";
import Data from "../../db/Services.json";

const ServicesCard = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1310px] m-auto mb-[10%]">
        <h3 className="text-[#202020] mb-[5%] text-[10vw] md:text-[6vw] lg:text-[3vw] font-medium leading-tight">
          Услуги
        </h3>
        <div className="flex flex-wrap justify-between gap-[5%]">
          <div className="w-full md:w-[48%]">
            {Data.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="w-full mb-[2%] rounded-[2%] border border-[#E5E2EE] p-[2%] flex justify-between"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[#202020] w-[80%] mt-[2%] mb-[3%] text-[6vw] md:text-[4vw] lg:text-[2vw] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#7A7687] mb-[1%] text-[4vw] md:text-[2vw] lg:text-[1vw] font-normal">
                      Описание услуги
                    </p>
                    <p className="text-[#7A7687] text-[5vw] md:text-[3vw] lg:text-[1.5vw] leading-relaxed font-medium">
                      Также как постоянное информационно-
                      <br />
                      пропагандистское обеспечение нашей <br /> деятельности
                      требует определения и<br /> уточнения распределения
                      внутренних
                      <br /> резервов и ресурсов.
                    </p>
                  </div>
                  <button className="w-[30%] mb-[5%] h-[5vw] md:h-[3vw] lg:h-[2vw] hover:bg-[#088269] hover:text-white duration-200 hover:scale-105 rounded-full border border-[#D5D1E1] text-[#088269] text-[4vw] md:text-[2vw] lg:text-[1vw] font-semibold">
                    Заказать
                  </button>
                </div>
                <img
                  src={item.image}
                  alt="rasm"
                  className="h-full w-[35%] object-cover rounded-tr-[2%] rounded-br-[2%]"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-[48%]">
            {Data.slice(4, 8).map((item) => (
              <div
                key={item.id}
                className="w-full mb-[2%] rounded-[2%] border border-[#E5E2EE] p-[2%] flex justify-between"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-[#202020] w-[80%] mt-[2%] mb-[3%] text-[6vw] md:text-[4vw] lg:text-[2vw] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[#7A7687] mb-[1%] text-[4vw] md:text-[2vw] lg:text-[1vw] font-normal">
                      Описание услуги
                    </p>
                    <p className="text-[#7A7687] text-[5vw] md:text-[3vw] lg:text-[1.5vw] leading-relaxed font-medium">
                      Также как постоянное информационно-
                      <br />
                      пропагандистское обеспечение нашей <br /> деятельности
                      требует определения и<br /> уточнения распределения
                      внутренних
                      <br /> резервов и ресурсов.
                    </p>
                  </div>
                  <button className="w-[30%] mb-[5%] h-[5vw] md:h-[3vw] lg:h-[2vw] hover:bg-[#088269] hover:text-white duration-200 hover:scale-105 rounded-full border border-[#D5D1E1] text-[#088269] text-[4vw] md:text-[2vw] lg:text-[1vw] font-semibold">
                    Заказать
                  </button>
                </div>
                <img
                  src={item.image}
                  alt="rasm"
                  className="h-full w-[35%] object-cover rounded-tr-[2%] rounded-br-[2%]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
