import React from "react";

const Center = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto my-[10%] px-4 lg:px-0">
      <div className="w-full max-w-[1310px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-2.5">
          <p className="text-[#202020] text-2xl lg:text-3xl font-medium leading-relaxed mb-4 lg:mb-0">
            Вы сможете забрать оборудование
            <br />
            <span className="text-[#088269]">самостоятельно</span> из нашего
            офиса
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-2.5">
            <div className="w-full max-w-xs h-36 rounded-lg border p-6 bg-white border-[#E5E2EE]">
              <p className="text-[#202020] text-lg font-semibold mb-3.5">
                Контакты
              </p>
              <p className="text-[#7A7687] text-base font-medium mb-0.5">
                +7 (000) 000-00-00
              </p>
              <p className="text-[#7A7687] text-base font-medium">
                info@mail.ru
              </p>
            </div>
            <div className="w-full max-w-xs h-36 rounded-lg border p-6 bg-white border-[#E5E2EE]">
              <p className="text-[#202020] text-lg font-semibold mb-3.5">
                Режим работы
              </p>
              <p className="text-[#7A7687] text-base font-medium mb-0.5">
                пн-пт: 09:00-19:00
              </p>
              <p className="text-[#7A7687] text-base font-medium">
                сб-вс: выходной
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full h-96 border-2 border-[#E5E2EE] rounded-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
          <button className="absolute right-5 bottom-5 w-40 h-10 rounded-full bg-[#088269] text-white text-base font-semibold hover:scale-105 transition-transform duration-200 hover:bg-[#07745E]">
            Пункт выдачи
          </button>
          <div className="absolute left-5 top-5 w-44 h-6 flex items-center justify-center rounded-full bg-white border border-[#E5E2EE]">
            <p className="text-[#202020] text-xs font-medium">
              г. Москва, ул. Московская, д. 35
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
