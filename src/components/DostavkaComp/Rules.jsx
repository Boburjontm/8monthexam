import React from "react";

const Rules = () => {
  return (
    <div className="w-full max-w-[1310px] mx-auto my-[10%] px-4 lg:px-0 flex flex-col lg:flex-row items-start justify-between">
      <div className="mb-8 lg:mb-0">
        <h3 className="text-[#202020] mb-6 text-2xl lg:text-3xl font-medium leading-snug">
          Правила получения
          <br /> товара в пункте выдачи
        </h3>
        <p className="text-[#202020] text-base lg:text-lg font-medium leading-relaxed">
          Учитывая стремительное развитие мировых медицинских
          <br /> технологий, врачи в Российской Федерации и соседних странах
          <br /> столкнулись с вызовом, требующим обновления приборов.
        </p>
      </div>
      <div className="w-full lg:w-[50%]">
        <div className="border-b border-t py-6 border-[#D5D1E1]">
          <p className="text-[#202020] mb-4 text-lg font-semibold leading-snug">
            Подготовить документы
          </p>
          <p className="text-[#7A7687] text-base font-medium leading-relaxed">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы.
          </p>
        </div>
        <div className="border-b py-6 border-[#D5D1E1]">
          <p className="text-[#202020] mb-4 text-lg font-semibold leading-snug">
            Проверка упаковки
          </p>
          <p className="text-[#7A7687] text-base font-medium leading-relaxed">
            При получении необходимо внимательно осмотреть упаковку груза на
            наличие механических повреждений и нарушений целостности упаковки.
          </p>
        </div>
        <div className="py-6">
          <p className="text-[#202020] mb-4 text-lg font-semibold leading-snug">
            Проверка товара
          </p>
          <p className="text-[#7A7687] text-base font-medium leading-relaxed">
            Вскрыть каждую упаковку и проверьте товар по количеству согласно
            накладной поставщика и на наличие повреждений товара внутри тары.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
