import React, { useState } from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";

const SelectLabel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Все категории");

  const categories = [
    "Реанимация",
    "Хирургия",
    "Офтальмология",
    "Лабораторная диагностика",
    "Акушерство",
    "Гинекология",
    "Гистология",
    "Косметология",
    "Оториноларингология",
    "Рентгенология и томография",
    "Стерилизация",
    "Физиотерапия и реабилитация",
    "Функциональная диагностика",
    "Эндоскопия",
    "Новинки",
    "Распродажи",
    "Кабинеты под ключ",
  ];

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center w-[146px] h-[37px] justify-between rounded-full shadow-sm px-[15px] py-2 bg-[#EFEFEF] text-[14px] font-semibold text-[#7A7687] hover:bg-gray-200 focus:outline-none"
        >
          <span className="flex items-center overflow-x-hidden w-[100px] whitespace-nowrap text-ellipsis">
            {selectedCategory}
          </span>
          <TbTriangleInvertedFilled
            className={`text-[#7A7687] text-[9px] transition-transform duration-600 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right z-50 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleSelect(category)}
                className="block px-4 py-[6px] text-[14px] text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectLabel;
