import React from "react";
import partnerimg from "/assets/partner.png";

const Partner = () => {
  return (
    <>
      <div className="w-full bg-[#088269] my-36">
        <div className="max-w-6xl py-20 mx-auto flex flex-col md:flex-row items-start justify-between">
          <div className="w-full md:w-1/2 h-auto mb-8 md:mb-0">
            <img src={partnerimg} alt="rasm" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[#F8F7F3] text-xl md:text-3xl font-medium leading-tight md:leading-9">
              Наши партнёры
            </p>
            <p className="text-[#F8F7F3] mt-6 text-sm md:text-base font-normal leading-relaxed">
              Нашими партнёрами являются наиболее серьёзные игроки на мировом
              рынке профильного оборудования. Это позволяет нам наладить
              долгосрочное <br /> и успешное сотрудничество, добиться лучших
              цен для государственных <br /> учреждений здравоохранения,
              медицинских центров, лабораторий, а также ветеринарных клиник
              и кабинетов. Купить нужную вам технику по оптимальным ценам,
              выбрать подходящую модель устройства в рамках бюджета в нашей <br />
              компании окажется намного проще. Мы поддерживаем скидки и особые <br />
              предложения для наших партнёров, предлагаем оформление аппаратов
              в лизинг и готовы предоставить системы в рассрочку на выгодных
              условиях.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
