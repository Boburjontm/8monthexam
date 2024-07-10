import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import True from "/assets/confirmation.svg";

const Complexes = () => {
  const [phone, setPhone] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    const newErrors = {};
    if (!phone) newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsOpen(true);
    }
  };

  const handleOKButtonClick = () => {
    setPhone("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-[1310px] m-auto mb-[150px] mt-[150px] h-[177px] bg-white rounded-[10px] border border-[#E5E2EE] flex items-center justify-between pl-[40px] pr-[90px] relative">
        <h3 className="text-[#202020] font-medium text-[30px] leading-[36px]">
          Закажите у нас комплеское
          <br /> оснащение
        </h3>
        <div className="relative">
          <input
            type="number"
            placeholder="Ваш телефон"
            className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
              errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
            }`}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="flex items-center gap-[30px]">
            <button
              onClick={handleOpenModal}
              className="w-[123px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
            >
              Заказать
            </button>
            <p className="text-[#7A7687] text-[12px] leading-[16.40px]">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных
              <br />
              данных на условиях
              <span className="text-[#088269] hover:underline hover:cursor-pointer">
                Политики конфиденциальности.
              </span>
            </p>
          </div>
          <p
            className={`absolute bottom-[43px] left-[0px] text-red-600 text-center text-[14px] ${
              errors.phone ? "block" : "hidden"
            }`}
          >
            Сначала заполните поле!
          </p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-[500px] h-[303px] rounded-[10px] bg-white px-[25px]">
            <div className="flex mt-[20px] items-center justify-between">
              <p className="text-[#202020] text-[18px] font-semibold">
                Запрос отправлен
              </p>
              <IoClose
                onClick={handleOKButtonClick}
                className="text-[22px] hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
              />
            </div>
            <p className="text-[#7A7687] text-[16px] mt-[10px] font-medium opacity-80">
              Наши менеджеры скоро с Вами свяжутся.
            </p>
            <img
              src={True}
              alt="rasm"
              className="w-[63px] h-[63px] m-auto my-[35px]"
            />
            <button
              onClick={handleOKButtonClick}
              className="w-full h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
            >
              OK
            </button>
            <p className="text-[#7A7687] text-center text-[12px] mt-[10px] font-medium opacity-80">
              Проверьте свою электронную почту через 1 день
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Complexes;
