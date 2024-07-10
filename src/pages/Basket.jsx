import React, { useState, useContext, useEffect } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { ProductContext } from "../App";
import Data from "../db/data.js";
import line from "/assets/line.svg";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Basket = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { product, setProduct } = useContext(ProductContext);
  const [counts, setCounts] = useState({});
  const [liked, setLiked] = useState([]);

  const increment = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const decrement = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: prevCounts[itemId] > 1 ? prevCounts[itemId] - 1 : 1,
    }));
  };

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const deleteItem = (itemId) => {
    setProduct((prevProduct) => prevProduct.filter((id) => id !== itemId));
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      delete newCounts[itemId];
      return newCounts;
    });
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    product.forEach((itemId) => {
      const item = Data.find((item) => item.id === itemId);
      if (item) {
        const quantity = counts[item.id] || 1;
        totalPrice += item.price * quantity;
      }
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto border">
      <div className="w-full max-w-[1310px] mx-auto flex items-center justify-between">
        <div className="flex my-5 items-center gap-2">
          <NavLink to="/">
            <p className="text-[#7A7687] text-sm font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-sm" />
          <p className="text-sm font-normal text-[#202020]">
            Корзина ({product.length})
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1310px] mx-auto flex items-start justify-between">
        <div className="w-full max-w-[980px] min-h-[500px] flex flex-col">
          {product.map((itemId) => {
            const item = Data.find((item) => item.id === itemId);
            if (item) {
              return (
                <div
                  key={item.id}
                  className="w-full max-w-[980px] border-2 rounded-lg border-[#E5E2EE] mb-2.5 flex items-start h-[237px]"
                >
                  <div className="relative w-[320px] h-[233px] rounded-tl-lg rounded-bl-lg mr-6 border-r-2 flex items-center justify-center bg-white">
                    <div className="absolute left-4 top-4 bg-[#E1EFE6] flex items-center justify-center w-20 h-7 border border-[#088269] rounded-full">
                      <p className="text-[#088269] text-sm font-semibold">
                        Новинка
                      </p>
                    </div>
                    <img
                      src={item.image}
                      alt="rasm"
                      className="w-[160px] h-[160px]"
                    />
                  </div>
                  <div className="flex items-start mt-5 justify-between">
                    <div className="flex flex-col">
                      <p className="text-[#202020] text-lg mb-2.5 w-[160px] font-semibold">
                        {item.title}
                      </p>
                      <p className="text-[#7A7687] mb-1.5 text-xs font-normal leading-[16.40px]">
                        Артикул: 213134
                      </p>
                      <p className="text-[#7A7687] mb-3.5 text-xs font-normal leading-[16.40px]">
                        В наличии
                      </p>
                    </div>
                    <div className="flex items-start ml-24 gap-24">
                      <div className="flex flex-col items-center gap-7">
                        <p className="text-[#202020] mb-3.5 text-lg leading-[24.60px] font-semibold">
                          {item.price} руб.
                        </p>
                        <div className="w-24 h-[41px] border border-[#D5D1E1] rounded-full flex items-center justify-center">
                          <button
                            onClick={() => decrement(item.id)}
                            className="increment"
                          >
                            <HiMinusSm className="text-[#088269]" />
                          </button>
                          <p className="font-semibold mx-2.5 text-center leading-[19px] text-[#088269] text-2xl w-5">
                            {counts[item.id] || 1}
                          </p>
                          <button
                            onClick={() => increment(item.id)}
                            className="increment"
                          >
                            <HiPlusSm className="text-[#088269]" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2.5">
                        <img
                          src={line}
                          alt="rasm"
                          className="w-6 h-6 hover:cursor-pointer"
                        />
                        <div
                          className={`w-9 h-9 hover:cursor-pointer rounded-md duration-75 flex items-center justify-center ${
                            liked.includes(item.id) ? "text-black" : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        >
                          {liked.includes(item.id) ? (
                            <GoHeartFill className="text-[26px] h-9 text-red-600" />
                          ) : (
                            <GoHeart className="text-[26px] hover:text-red-600 text-black" />
                          )}
                        </div>
                        <IoCloseOutline
                          onClick={() => deleteItem(item.id)}
                          className="hover:text-red-600 hover:rotate-90 text-[33px] hover:cursor-pointer duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="w-[320px] h-[237px] rounded-lg border px-5 border-[#E5E2EE]">
          <div className="flex items-center mt-3.5 justify-between">
            <p className="text-[#202020] text-sm font-semibold">Итого</p>
            <p className="text-[#202020] text-sm font-semibold">
              {getTotalPrice()} руб.
            </p>
          </div>
          <hr className="border my-3.5" />
          <div className="flex items-center mb-2 justify-between">
            <p className="text-[#202020] text-xs font-semibold">
              Товары ({product.length} шт)
            </p>
            <p className="text-[#202020] text-xs font-semibold">
              {getTotalPrice()} руб.
            </p>
          </div>
          <div className="flex items-center mb-5 justify-between">
            <p className="text-[#202020] text-xs font-semibold">Скидка</p>
            <p className="text-[#202020] text-xs font-semibold">0 руб.</p>
          </div>
          <button className="w-full h-[41px] rounded-full bg-[#088269] hover:scale-105 duration-200 text-[#F8F7F3] text-sm font-semibold">
            Оформить заказ
          </button>
          <button className="w-full h-[41px] mt-2.5 rounded-full border hover:scale-105 duration-200 border-[#D5D1E1] text-[#202020] text-sm font-semibold">
            Задать вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
