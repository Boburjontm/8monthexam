import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import True from "/assets/confirmation.svg";

const Location = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = tarue;
    if (!email) newErrors.email = true;
    if (!question) newErrors.question = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsOpen(true);
    }
  };

  const handleOKButtonClick = () => {
    setName("");
    setPhone("");
    setEmail("");
    setQuestion("");
    setIsOpen(false);
  };

  return (
    <>
      <div className="w-[1440px] m-auto mt-[150px]">
        <div className="w-[1310px] m-auto flex items-center justify-between">
          <div className="w-[650px] h-[612px] rounded-[10px] border border-[#E5E2EE]">
            <iframe
              src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
              width="100%"
              height="600"
              frameBorder="0"
              allowFullScreen
              className="rounded-[10px] w-full h-full"
            ></iframe>
          </div>
          <div className="w-[650px] h-[612px] relative rounded-[10px] px-[40px] pt-[35px] bg-[#FFFFFF] border border-[#E5E2EE]">
            <h3 className="text-[#202020] text-[30px] font-medium mb-[20px]">
              Остались вопросы?
            </h3>
            <p className="text-[#7A7687] text-[16px] font-medium leading-[22.4px] mb-[35px]">
              Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или
              оставьте свои координаты и наш менеджер <br /> перезвонит вам
              через 10 минут
            </p>
            <input
              type="text"
              placeholder="Ваше имя"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Ваш телефон"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш email"
              className={`w-full h-[31px] mb-[25px] pb-[11px] border-b text-[#7A7687] text-[14px] outline-none ${
                errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full ">
              <textarea
                id="email"
                placeholder="Ваш вопрос"
                className={`w-full h-[116px] border-b text-[#7A7687] text-[14px] outline-none resize-none leading-tight ${
                  errors.question
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <p
              className={`absolute bottom-[95px] left-[210px] text-[#7A7687] text-center text-[14px] ${
                errors.question ? "text-red-500" : "border-b-[#E5E2EE] hidden"
              }`}
            >
              Все поля должны быть заполнены!
            </p>
            <div className="flex mt-[40px] items-center justify-between pr-[20px]">
              <button
                onClick={handleOpenModal}
                className="w-[134px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
              >
                Отправить
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
          </div>
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

export default Location;
