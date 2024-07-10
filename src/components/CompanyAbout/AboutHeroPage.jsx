import React from "react";
import herobg from "/assets/hero_bg.png";

const AboutHeroPage = () => {
  return (
    <>
      <div className="w-full max-w-[90%] lg:max-w-[85%] xl:max-w-[80%] m-auto mt-[2%] mb-[10%]">
        <img src={herobg} alt="hero_bg" className="w-full h-[50vh]" />
        <div className="flex flex-col lg:flex-row mt-[5%] items-start justify-between">
          <h3 className="text-[#202020] font-medium text-[8vw] lg:text-[4vw] leading-tight">
            Глобал медикал трейд
          </h3>
          <div className="mt-[4%] lg:mt-0">
            <p className="text-[#202020] w-full lg:w-[70%] font-medium text-[4vw] lg:text-[1.5vw] leading-relaxed">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись
              с вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров
              и ЛОР комбайнов. Переход на полностью цифровую платформу
              при диагностике и лечении заболеваний также стал серьёзным
              испытанием для большинства больниц и частных клиник.
            </p>
            <p className="text-[#202020] mt-[4%] w-full lg:w-[70%] font-medium text-[4vw] lg:text-[1.5vw] leading-relaxed">
              Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать
              специалистам всю необходимую помощь в деле поставок медицинского
              оборудования. Наш каталог включает передовое оборудование
              от лучших производителей России, Европы, Азии и США.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeroPage;
