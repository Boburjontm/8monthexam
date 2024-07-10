import React from "react";

const DeliveryHero = () => {
  return (
    <>
      <div className="w-11/12 lg:w-10/12 mx-auto">
        <h2 className="text-[#202020] mt-10 mb-10 text-3xl lg:text-4xl font-medium leading-tight lg:leading-tight">
          Информация о доставке
        </h2>
        <div className="relative w-full h-96 border-2 mb-10 border-[#E5E2EE] rounded-lg">
          <iframe
            src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg w-full h-full"
          ></iframe>
          <button className="absolute right-5 bottom-5 w-40 h-10 rounded-full bg-[#088269] text-[#F8F7F3] text-base font-semibold hover:scale-105 transition duration-200 hover:bg-[#07745E]">
            Пункт выдачи
          </button>
        </div>
        <div className="w-full h-auto relative">
          <div className="absolute right-0">
            <p className="text-[#202020] font-medium text-sm lg:text-base leading-6 lg:leading-7">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliveryHero;
