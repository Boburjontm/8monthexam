import React from "react";

const Fact = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1310px] m-auto">
        <div className="flex flex-wrap items-start justify-between">
          <div className="w-full md:w-auto">
            <h3 className="text-[#202020] mb-[2%] font-medium text-[6vw] md:text-[3vw] lg:text-[2.5vw] leading-tight">
              Цифры и факты
            </h3>
            <p className="text-[#7A7687] font-medium text-[4vw] md:text-[2vw] lg:text-[1vw] leading-relaxed">
              Мы работаем на результат и продаём
              <br /> только качественную продукцию
            </p>
          </div>
          <div className="w-full md:w-[60%] lg:w-[50%]">
            <div className="py-[2%] border-b-[0.5%] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[10vw] md:text-[5vw] lg:text-[3vw] leading-tight">
                7 лет
              </p>
              <p className="text-[#202020] ml-[10%] md:ml-[5%] lg:ml-[3%] font-medium text-[4vw] md:text-[2vw] lg:text-[1vw] leading-relaxed">
                на рынке
              </p>
            </div>
            <div className="py-[2%] border-b-[0.5%] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[10vw] md:text-[5vw] lg:text-[3vw] leading-tight">
                964+
              </p>
              <p className="text-[#202020] ml-[10%] md:ml-[5%] lg:ml-[3%] font-medium text-[4vw] md:text-[2vw] lg:text-[1vw] leading-relaxed">
                оригинальной продукции со всего мира
              </p>
            </div>
            <div className="py-[2%] border-b-[0.5%] border-b-[#D5D1E1] flex items-center">
              <p className="text-[#088269] font-medium text-[10vw] md:text-[5vw] lg:text-[3vw] leading-tight">
                23+
              </p>
              <p className="text-[#202020] ml-[10%] md:ml-[5%] lg:ml-[3%] font-medium text-[4vw] md:text-[2vw] lg:text-[1vw] leading-relaxed">
                международных сертификатов качества
              </p>
            </div>
            <div className="py-[2%] flex items-center">
              <p className="text-[#088269] font-medium text-[10vw] md:text-[5vw] lg:text-[3vw] leading-tight">
                2452+
              </p>
              <p className="text-[#202020] ml-[10%] md:ml-[5%] lg:ml-[3%] font-medium text-[4vw] md:text-[2vw] lg:text-[1vw] leading-relaxed">
                товаров всегда в наличии
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
