import React from "react";
import herobg from "/assets/podklyuch.png";

const ConnectHero = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-20">
        <h3 className="text-gray-800 font-medium mt-14 mb-8 text-4xl leading-10">
          Комплексное оснащение палаты
          <br /> реанимации и интенсивной терапии
        </h3>
        <img src={herobg} alt="hero_bg" className="w-full h-96 object-cover" />
        <div className="flex mt-10 items-start justify-between">
          <h3 className="text-gray-800 opacity-0 font-medium text-4xl leading-10">
            Глобал медикал трейд
          </h3>
          <div className="ml-4">
            <p className="text-gray-800 max-w-lg font-medium text-base">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи
              <br /> в Российской Федерации и соседних странах столкнулись с
              вызовом, требующим
              <br /> обновления приборов в различных направлениях, от установок
              компьютерной
              <br /> томографии до ультразвуковых сканеров и ЛОР комбайнов.
              Переход на полностью
              <br /> цифровую платформу при диагностике и лечении заболеваний
              также стал серьёзным испытанием для большинства больниц и частных
              клиник.
            </p>
            <p className="text-green-600 mt-3 hover:cursor-pointer hover:underline max-w-lg font-medium text-base">
              Скачать каталог "Стандарты оснащения отделений"
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectHero;
