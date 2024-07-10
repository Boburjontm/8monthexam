import React from "react";
import { FaVk, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="contact flex container mx-auto justify-betweena items-center my-10  ">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-2">ООО Глобал Медикал Трейд</h1>
          <div className="mb-4">
            <p className="font-bold">Юридический адрес:</p>
            <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Фактический адрес:</p>
            <p>Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Режим работы:</p>
            <p>Пн-Пт с 09:00-19:00</p>
            <p>Сб-Вс - выходной</p>
          </div>
          <div className="mb-4 items-center">
            <p className="font-bold">Звоните. Звонки по России бесплатны:</p>
            <div className="phones flex gap-4">
              <div className="flex items-center ">
                <AiFillPhone className="mr-2" /> 8-800-000-00-00
              </div>
              <div className="flex items-center">+7-000-000-00-00</div>
              <div className="flex items-center">+7-495-000-00-00</div>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold">Пишите:</p>
            <div className="flex items-center">
              <FiMail className="mr-2" /> info@mail.ru
            </div>
          </div>
          <div className="massengers flex justify-between items-center">
            <div className="mb-4">
              <p className="font-bold">Реквизиты:</p>
              <p>ИНН 9717039181</p>
              <p>ОГРН 1167746796986</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Мы в соцсетях:</p>
              <div className="flex space-x-4 text-3xl">
                <a href="#" className="text-[#088269] hover:text-blue-500">
                  <FaVk />
                </a>
                <a href="#" className="text-[#088269] hover:text-blue-500">
                  <FaTelegram />
                </a>
                <a href="#" className="text-[#088269] hover:text-green-500">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
        <h1 className="text-2xl font-bold mb-2">Бесплатная консультация</h1>
        <p className="mb-4">
          Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
        </p>

        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ваш телефон"
              className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Ваш вопрос"
              className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none py-2"
            />
          </div>
          <div className="flex justify-center"></div>
        </form>

        <div className="btnp flex gap-4">
          <button
            type="submit"
            className=" flex items-center bg-[#088269] text-white px-4 mt-2 py-[4px] rounded hover:bg-[#088269] border-x-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Отправить
          </button>
          <p className="text-gray-600 text-sm mt-4">
            Нажимая «Отправить», я соглашаюсь с обработкой персональных данных
            на условиях{" "}
            <a href="#" className="text-green-500 underline">
              Политики конфиденциальности
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );

};

export default Contacts;
