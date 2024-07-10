import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import True from "/assets/confirmation.svg";

const Consultation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState({});

  const handleOpenModal = () => {
    const newErrors = {};
    if (!name) newErrors.name = true;
    if (!phone) newErrors.phone = true;
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
      <div className="w-full max-w-[1440px] mx-auto mt-[10%] px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[48%] h-[60vh] rounded-lg border border-[#E5E2EE] mb-6 lg:mb-0">
            <iframe
              src="https://yandex.com/map-widget/v1/?ll=69.2401%2C41.2995&z=12"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              className="rounded-lg w-full h-full"
            ></iframe>
          </div>
          <div className="w-full lg:w-[48%] h-[60vh] relative rounded-lg px-6 pt-6 bg-white border border-[#E5E2EE]">
            <h3 className="text-[#202020] text-2xl lg:text-3xl font-medium mb-5">
              Вам нужна консультация?
            </h3>
            <p className="text-[#7A7687] text-base lg:text-lg font-medium leading-relaxed mb-9">
              Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или
              оставьте свои координаты и наш менеджер <br /> перезвонит вам
              через 10 минут
            </p>
            <input
              type="text"
              placeholder="Ваше имя"
              className={`w-full h-8 mb-6 pb-2 border-b text-[#7A7687] text-sm outline-none ${
                errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Ваш телефон"
              className={`w-full h-8 mb-6 pb-2 border-b text-[#7A7687] text-sm outline-none ${
                errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш email"
              className={`w-full h-8 mb-6 pb-2 border-b text-[#7A7687] text-sm outline-none ${
                errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full ">
              <textarea
                id="email"
                placeholder="Ваш вопрос"
                className={`w-full h-28 border-b text-[#7A7687] text-sm outline-none resize-none leading-tight ${
                  errors.question
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <p
              className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 text-[#7A7687] text-center text-sm ${
                errors.question ? "text-red-500" : "border-b-[#E5E2EE] hidden"
              }`}
            >
              Все поля должны быть заполнены!
            </p>
            <div className="flex mt-10 items-center justify-between pr-5">
              <button
                onClick={handleOpenModal}
                className="w-32 h-10 rounded-full bg-[#088269] text-[#F8F7F3] text-lg font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
              >
                Отправить
              </button>
              <p className="text-[#7A7687] text-xs leading-5">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div className="w-full max-w-lg h-auto rounded-lg bg-white px-6 py-8">
            <div className="flex items-center justify-between">
              <p className="text-[#202020] text-lg font-semibold">
                Запрос отправлен
              </p>
              <IoClose
                onClick={handleOKButtonClick}
                className="text-2xl hover:cursor-pointer hover:scale-125 hover:text-red-500 hover:rotate-90 duration-300"
              />
            </div>
            <p className="text-[#7A7687] text-base mt-2 font-medium opacity-80">
              Наши менеджеры скоро с Вами свяжутся.
            </p>
            <img src={True} alt="rasm" className="w-16 h-16 mx-auto my-8" />
            <button
              onClick={handleOKButtonClick}
              className="w-full h-10 rounded-full bg-[#088269] text-[#F8F7F3] text-lg font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
            >
              OK
            </button>
            <p className="text-[#7A7687] text-center text-xs mt-3 font-medium opacity-80">
              Проверьте свою электронную почту через 1 день
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Consultation;
