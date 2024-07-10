import React, { useState, useContext } from "react";
import Data from "../../db/data.js";
import {
  GoArrowLeft,
  GoArrowRight,
  GoHeart,
  GoHeartFill,
} from "react-icons/go";
import line from "/assets/line.svg";
import { NavLink } from "react-router-dom";
import { ProductContext, ShopContext } from "../../App";

const Products = () => {
  const [translateX, setTranslateX] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const maxSlideCount = 7; // Maximum number of slides forward
  const itemWidth = 330; // Width of each item card
  const [liked, setLiked] = useState([]);
  const { shop, setShop, addToCart } = useContext(ShopContext); // Added addToCart function from context
  const { product, setProduct } = useContext(ProductContext); // Added product state and setProduct function from context

  const handleNext = () => {
    if (slideCount < maxSlideCount) {
      setTranslateX((prev) => prev - itemWidth);
      setSlideCount((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (slideCount > 0) {
      setTranslateX((prev) => prev + itemWidth);
      setSlideCount((prev) => prev - 1);
    }
  };

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      setProduct(product.filter((id) => id !== item.id));
    }
  };

  const handleCardClick = (itemId) => {
    setShop([itemId]);
    window.scroll(0, 0); // Scroll to top of the page
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  my-24 items-start justify-between">
          <div>
            <h4 className="text-gray-800 text-3xl mb-10 font-medium">
              Каталог товаров
            </h4>
            <p className="text-gray-800 text-base hover:text-green-600 hover:cursor-pointer hover:scale-105 duration-200 opacity-50 mb-6 font-medium">
              Хиты продаж
            </p>
            <p className="text-gray-800 text-base hover:text-green-600 hover:cursor-pointer hover:scale-105 duration-200 opacity-50 mb-6 font-medium">
              Новинки
            </p>
            <p className="text-gray-800 text-base hover:text-green-600 hover:cursor-pointer hover:scale-105 duration-200 opacity-50 font-medium">
              Акции
            </p>
          </div>
          <div className="flex items-center w-full overflow-x-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(${translateX}px)` }}
            >
              {Data.map((item) => (
                <div
                  key={item.id}
                  className="w-96 mr-4 mb-4 h-96 rounded-lg border border-gray-300 bg-gray-100"
                >
                  <div className="relative w-full mt-1 h-64 flex items-center justify-center rounded-tl-lg rounded-tr-lg bg-white">
                    <div className="absolute top-4 left-4 flex items-center justify-between w-72">
                      <div className="bg-green-200 flex items-center justify-center w-20 h-7 border border-green-600 rounded-full">
                        <p className="text-green-600 text-sm font-semibold">
                          Новинка
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src={line}
                          alt="Расм"
                          className="w-6 h-6 cursor-pointer"
                        />
                        <div
                          className={`w-9 h-9 cursor-pointer bg-white rounded-sm duration-75 flex items-center justify-center ${
                            liked.includes(item.id) ? "text-black" : ""
                          }`}
                          onClick={() => toggleLike(item.id)}
                        >
                          {liked.includes(item.id) ? (
                            <GoHeartFill className="text-2xl h-9 text-red-600" />
                          ) : (
                            <GoHeart className="text-2xl hover:text-red-600 text-black" />
                          )}
                        </div>
                      </div>
                    </div>
                    <NavLink to="/productpage">
                      <img
                        onClick={() => {
                          handleCardClick(item.id);
                        }}
                        src={item.image}
                        alt="Расм"
                        className="w-48 h-48"
                      />
                    </NavLink>
                  </div>
                  <hr />
                  <p className="text-gray-800 w-48 ml-4 mt-5 mb-2 font-medium text-base leading-6">
                    {item.title}
                  </p>
                  <p className="text-gray-500 ml-4 mb-1 text-sm font-normal leading-5">
                    Артикул: 213134
                  </p>
                  <p className="text-gray-500 ml-4 mb-6 text-sm font-normal leading-5">
                    В наличии
                  </p>
                  <p className="text-gray-800 mb-4 ml-4 text-xl leading-6 font-semibold">
                    {item.price} руб.
                  </p>
                  <button
                    onClick={() => handleProductClick(item)}
                    className="w-72 h-10 rounded-full border border-gray-300 ml-4 text-base font-semibold text-green-600 hover:bg-green-600 hover:text-white duration-200"
                  >
                    Добавить в корзину
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full mt-10 flex items-center justify-between pr-16">
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              disabled={slideCount === 0}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                slideCount > 0
                  ? "hover:bg-gray-300"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              <GoArrowLeft className="text-gray-800 text-xl" />
            </button>
            <button
              onClick={handleNext}
              disabled={slideCount === maxSlideCount}
              className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 ${
                slideCount < maxSlideCount
                  ? "hover:bg-gray-300"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              <GoArrowRight className="text-gray-800 text-xl" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-60 h-10 rounded-full border border-green-600 text-green-600 hover:border-green-600 hover:bg-green-600 hover:text-white text-base font-semibold duration-200">
              Бесплатная консультация
            </button>
            <button className="w-36 h-10 rounded-full bg-green-600 text-white border border-green-600 hover:border-green-600 hover:bg-green-600 hover:text-white text-base font-semibold duration-200">
              Все товары
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
