import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Logo from "/assets/Flogo.svg";
import wk from "/assets/Frame.svg";
import card from "/assets/Card.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-[1440px] m-auto bg-[#088269]">
        <div className="w-[1310px] pt-[40px] m-auto">
          <div className="w-full  flex items-start justify-between">
            <div className="w-[210px]">
              <h4 className="text-[#F8F7F3] text-[14px] font-semibold">
                Покупателям
              </h4>
              <hr className="w-full text-[#F8F7F3] my-[15px]" />
              <div className="flex items-start justify-between">
                <div>
                  <NavLink to="/aboutcomp">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      О компании
                    </p>
                  </NavLink>
                  <NavLink to="/certificat">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Сертификаты
                    </p>
                  </NavLink>
                  <NavLink to="/vakansii">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Вакансии
                    </p>
                  </NavLink>
                  <NavLink to="/garantii">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Гарантии
                    </p>
                  </NavLink>
                  <NavLink to="/payment">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Услуги
                    </p>
                  </NavLink>

                  <NavLink to="/aksii">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Акции
                    </p>
                  </NavLink>
                  <NavLink to="/delivery">
                    <p className="text-[#F8F7F3] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Доставка
                    </p>
                  </NavLink>
                </div>
                <div>
                  <NavLink to="/payment">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Оплата
                    </p>
                  </NavLink>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Возврат
                  </p>
                  <NavLink to="faq">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      FAQ
                    </p>
                  </NavLink>

                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Лизинг
                  </p>
                  <NavLink to="/review">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Отзывы
                    </p>
                  </NavLink>
                  <NavLink to="/blog">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                      Блог
                    </p>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="w-[650px]">
              <h4 className="text-[#F8F7F3] text-[14px] font-semibold">
                Каталог
              </h4>
              <hr className="w-full text-[#F8F7F3] my-[15px]" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Реанимация
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Хирургия
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Офтальмология
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Лабораторная диагностика
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Акушерство и Гинекология
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Гистология
                  </p>
                  <p className="text-[#F8F7F3] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Косметология
                  </p>
                </div>
                <div>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Орториноларингология
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Рентгенология и томография
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Стрерилизация
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Физиотерапия и реабилитация
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Функциональная диагностика
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Эндоскопия
                  </p>
                </div>
                <div>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Новинки
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Распродажи
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Кабинеты под ключ
                  </p>
                  <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Скачать каталог
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[210px]">
              <h4 className="text-[#F8F7F3] text-[14px] font-semibold">
                Контакты
              </h4>
              <hr className="w-full text-[#F8F7F3] my-[15px]" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#F8F7F3] mb-[5px] text-[14px] font-semibold">
                    Адрес:
                  </p>
                  <p className="text-[#F8F7F3] mb-[25px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    г. Москва, ул. Московская, д. 35
                  </p>
                  <div className="flex items-center mb-[25px] gap-[8px]">
                    <p className="text-[#F8F7F3] mb-[8px] text-[14px] hover:cursor-pointer font-semibold">
                      Карта проезда
                    </p>
                    <MdArrowOutward className="text-white  mb-[2px]" />
                  </div>
                  <p className="text-[#F8F7F3] mb-[8px] leading-[18px] text-[14px] hover:cursor-pointer font-normal">
                    График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                    выходной
                  </p>
                  <p className="text-[#F8F7F3] mb-[px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    +7 000-000-00-00
                  </p>
                  <p className="text-[#F8F7F3] mb-[px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    +7 495-000-00-00
                  </p>
                  <p className="text-[#F8F7F3] mb-[5px]  text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    +8 800-000-00-00
                  </p>
                  <p className="text-[#F8F7F3] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    info@mail.ru
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full text-[#E5E2EE] mt-[60px] pb-[15px]" />
          <div className="w-full  flex items-start justify-between">
            <div className="w-[210px]">
              <NavLink to="/">
                <img
                  src={Logo}
                  alt="rasm"
                  className="hover:cursor-pointer hover:scale-105 duration-200 mb-[10px]"
                />
              </NavLink>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#F8F7F3] mb-[8px] text-[13px] hover:cursor-pointer font-normal">
                    ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[650px] relative">
              <div className="flex items-start">
                <div>
                  <p className="text-[#F8F7F3] mb-[10px] text-[14px] hover:cursor-pointer font-semibold">
                    Мы в соцсетях
                  </p>
                  <img src={wk} alt="rasm" className="w-[92px] h-[24px]" />
                </div>
                <div className="ml-[150px]">
                  <p className="text-[#F8F7F3] mb-[5px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Партнерская программа
                  </p>
                  <p className="text-[#F8F7F3] mb-[5px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Оптовые продажи
                  </p>
                  <p className="text-[#F8F7F3] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Реквизиты
                  </p>
                </div>
                <div className="absolute right-[-75px]">
                  <p className="text-[#F8F7F3] mb-[5px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Политика конфиденциальности
                  </p>
                  <p className="text-[#F8F7F3] mb-[5px] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Условия соглашения
                  </p>
                  <p className="text-[#F8F7F3] text-[14px] hover:cursor-pointer hover:text-black hover:scale-105 duration-200 font-normal">
                    Карта сайта
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[210px]">
              <p className="text-[#F8F7F3] mb-[10px] text-[14px] hover:cursor-pointer font-semibold">
                Способы оплаты
              </p>
              <img
                src={card}
                alt="rasm"
                className="w-[210px] hover:cursor-pointer h-[30px]"
              />
            </div>
          </div>
          <div className="w-full mt-[60px] pb-[20px] flex items-end justify-between">
            <p className="text-[#F8F7F3] text-[12px] leading-[17px] font-normal">
              © 2022 Медоборудование <br /> Все права защищены
            </p>
            <p className="text-[12px] text-[#F8F7F3] font-normal opacity-60">
              Информация на данном сайте носит справочный характер и не является
              публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
