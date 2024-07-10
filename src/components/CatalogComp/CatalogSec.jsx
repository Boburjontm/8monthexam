import React, { useState, useContext } from "react";
import Data from "../../db/data.js";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../../App.jsx";

const CatalogSec = () => {
  const { shop, setShop, addToCart } = useContext(ShopContext);
  return (
    <>
      <div className="w-full m-auto">
        <div className="w-full px-24 mx-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-medium hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">Каталог</p>
          </div>
        </div>
        <div className="w-[1310px] m-auto  flex items-start justify-between">
          <div className="w-[320px] h-[595px] pl-[20px] pr-[14px] border border-[#E5E2EE]">
            <p className="text-[#202020] text-[16px] my-[15px] leading-[22.4px]">
              Направления
            </p>
            <hr className="mb-[8px]" />
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Реанимация
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Хирургия
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Офтальмология
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Лабораторная диагностика
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Акушерство и Гинекология
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Гистология
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Косметология
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Оториноларингология
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Рентгенология и томография
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Стерилизация
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Физиотерапия и реабилитация
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Функциональная диагностика
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Эндоскопия
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Новинки
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                Распродажи
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <NavLink to="/productpage">
                <p className="text-[#202020] group-hover:text-[#088269] text-[14px] font-medium leading-[19px]">
                  Кабинеты под ключ
                </p>
              </NavLink>
              <IoIosArrowForward className="group-hover:text-[#088269] " />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-[10px]">
              <div className="w-[650px] flex flex-wrap gap-[10px] items-start">
                {Data.slice(6, 10).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-[320px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                    >
                      <div className="w-full  h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                        <NavLink to="/productpage ">
                          <img
                            onClick={() => {
                              setShop([item.id]);
                            }}
                            src={item.image}
                            alt="rasm"
                            className="w-[176px]  h-[175px]  hover:cursor-pointer"
                          />
                        </NavLink>
                        <hr />
                      </div>
                      <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
              {Data.slice(4, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] h-[618px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[534px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/productpage">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[488px] rotate-90 h-[210px] scale-150 "
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center mt-[10px] gap-[10px]">
              {Data.slice(4, 5).map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-[320px] h-[618px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                  >
                    <div className="w-full mt-[1px] h-[534px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                      <NavLink to="/productpage">
                        <img
                          onClick={() => {
                            setShop([item.id]);
                          }}
                          src={item.image}
                          alt="rasm"
                          className="w-[488px] rotate-90 h-[210px] scale-150 "
                        />
                      </NavLink>
                    </div>
                    <hr />
                    <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                      {item.title}
                    </p>
                  </div>
                );
              })}
              <div className="w-[650px] flex flex-wrap gap-[10px] items-start">
                {Data.slice(6, 10).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-[320px] h-[304px] rounded-[10px] border border-[#E5E2EE] bg-[#f5f5f6]"
                    >
                      <div className="w-full  h-[220px] flex items-center justify-center rounded-tl-[10px] rounded-tr-[10px] bg-white">
                        <NavLink to="/productpage">
                          <img
                            onClick={() => {
                              setShop([item.id]);
                            }}
                            src={item.image}
                            alt="rasm"
                            className="w-[176px]  h-[175px]  "
                          />
                        </NavLink>
                        <hr />
                      </div>
                      <p className="text-[#202020] w-[248px] ml-[25px] mt-[15px] font-medium text-[16px] leading-[22.4px]">
                        {item.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogSec;
