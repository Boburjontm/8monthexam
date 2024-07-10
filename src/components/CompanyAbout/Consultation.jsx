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
      <div className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%] mx-auto mt-[10%]">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="mb-8 lg:mb-0">
            <h4 className="text-[#202020] mb-6 text-2xl lg:text-3xl font-semibold">
              Вам нужна консультация?
            </h4>
            <p className="text-[#202020] font-medium text-base lg:text-lg">
              Задайте их по номеру телефона{" "}
              <span className="text-[#088269] hover:underline cursor-pointer">
                +7 (495) 000-00-00
              </span>{" "}
              или оставьте свои координаты и наш менеджер перезвонит вам через
              10 минут
            </p>
          </div>
          <div className="w-full lg:w-[60%] p-6 bg-white rounded-lg shadow-lg border border-[#E5E2EE]">
            <input
              type="text"
              placeholder="Ваше имя"
              className={`w-full h-8 mb-6 border-b text-[#7A7687] text-base outline-none ${
                errors.name ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Ваш телефон"
              className={`w-full h-8 mb-6 border-b text-[#7A7687] text-base outline-none ${
                errors.phone ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ваш email"
              className={`w-full h-8 mb-6 border-b text-[#7A7687] text-base outline-none ${
                errors.email ? "border-red-500 border" : "border-b-[#E5E2EE]"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <textarea
                id="question"
                placeholder="Ваш вопрос"
                className={`w-full h-32 border-b text-[#7A7687] text-base outline-none resize-none leading-tight ${
                  errors.question
                    ? "border-red-500 border"
                    : "border-b-[#E5E2EE]"
                }`}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <p
              className={`absolute bottom-[5%] left-1/2 transform -translate-x-1/2 text-[#7A7687] text-center text-base ${
                errors.question ? "text-red-500" : "hidden"
              }`}
            >
              Все поля должны быть заполнены!
            </p>
            <div className="flex mt-10 items-center justify-between">
              <button
                onClick={handleOpenModal}
                className="w-[30%] h-12 rounded-full bg-[#088269] text-white text-base font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]"
              >
                Отправить
              </button>
              <p className="text-[#7A7687] text-sm lg:text-base">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{" "}
                <span className="text-[#088269] hover:underline cursor-pointer">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#202020] text-lg font-semibold">
                Запрос отправлен
              </p>
              <IoClose
                onClick={handleOKButtonClick}
                className="text-2xl cursor-pointer hover:scale-125 hover:text-red-500 transform transition-transform duration-300"
              />
            </div>
            <p className="text-[#7A7687] text-base mb-6">
              Наши менеджеры скоро с Вами свяжутся.
            </p>
            <img
              src={True}
              alt="confirmation"
              className="w-16 h-16 mx-auto mb-6"
            />
            <button
              onClick={handleOKButtonClick}
              className="w-full h-12 rounded-full bg-[#088269] text-white text-base font-semibold hover:scale-105 transition-transform duration-200 hover:bg-[#07745E]"
            >
              OK
            </button>
            <p className="text-[#7A7687] text-center text-sm mt-6">
              Проверьте свою электронную почту через 1 день
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Consultation;
