import React, { useState } from "react";

const ProductSelect = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full mt-[60px]">
      <div className="flex items-center pl-[30px] gap-[20px] pt-[15px] border rounded-tl-[10px] rounded-tr-[10px] border-[#E5E2EE]">
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "description"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Стандарты оснащения
        </p>
        <p
          className={`text-[16px] font-semibold cursor-pointer pb-3 ${
            activeTab === "specs"
              ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
              : "text-[#7A7687]"
          }`}
          onClick={() => setActiveTab("specs")}
        >
          Список товаров
        </p>
      </div>

      <div className="bg-white pt-[20px] pl-[24px] rounded shadow">
        {activeTab === "description" && (
          <div className="h-[283px] flex items-start gap-[226px]">
            <div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">1.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Аппарат искусственной вентиляции лёгких
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">2.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Аппарат искусственной вентиляции легких транспортный
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">3.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Дыхательный мешок для ручной искусственной вентиляции легких
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">4.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Монитор пациента на 5 параметров
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">5.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Монитор пациента на 5 параметров
                </p>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">6.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Шприцевой насос
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">7.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Инфузионный насос
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">8.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Набор для интубации трахеи
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">9.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Дефибриллятор
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">10.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Матрац термостабилизирующий
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">11.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Автоматический анализатор газов крови
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">12.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Электрокардиограф
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">13.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Транспортируемый рентгеновский аппарат
                </p>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">14.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Портативный ультразвуковой диагностический аппарат
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">15.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Кровать трёхсекционная с ограждением
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">16.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Кровать-вес
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[5px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">17.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Электроэнцефалограф 8-канальный
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <div className="flex items-center mb-[5px] gap-[10px]">
                  <p className="text-[#7A7687] text-[12px] font-normal ">18.</p>
                  <p className="text-[#202020] text-[12px] font-medium ">
                    Пневмокомпрессорная профилактика тромбоэмболических
                    осложнений и лимфостаза
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="h-[283px] flex items-start gap-[226px]">
            <div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">1.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Аппарат искусственной вентиляции лёгких
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">2.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Аппарат искусственной вентиляции легких транспортный
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">3.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Дыхательный мешок для ручной искусственной вентиляции легких
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">4.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Монитор пациента на 5 параметров
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">5.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Монитор пациента на 5 параметров
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">10.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Матрац термостабилизирующий
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">11.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Автоматический анализатор газов крови
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">12.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Электрокардиограф
                </p>
              </div>
              <div className="flex items-center mb-[10px] gap-[10px]">
                <p className="text-[#7A7687] text-[12px] font-normal ">13.</p>
                <p className="text-[#202020] text-[12px] font-medium ">
                  Транспортируемый рентгеновский аппарат
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSelect;
