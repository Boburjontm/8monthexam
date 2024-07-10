import React, { useState, useEffect, useContext } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import line from "/assets/line.svg";
import Data from "../db/data.js";
import { ShopContext, ProductContext } from "../App.jsx";
import ProductSelect from "../components/Reanimation/ProductSelect.jsx";
import Products from "../components/HomeComp/Products.jsx";
import Kabinet from "../components/HomeComp/Cabinet.jsx";
import Brend from "../components/HomeComp/Brend.jsx";
import Mail from "../components/HomeComp/Mail.jsx";
import LineMin from "../components/StranitsaComp/LineMin.jsx";
import Popular from "../components/Reanimation/Popular.jsx";
import Cabinet from "../components/HomeComp/Cabinet.jsx";

const ProductPage = () => {
  const { shop } = useContext(ShopContext);
  const { product, setProduct } = useContext(ProductContext);
  const [liked, setLiked] = useState([]);
  const [counts, setCounts] = useState({});
  const [selectedDiv, setSelectedDiv] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedDiv(1);
  }, []);

  const toggleLike = (itemId) => {
    setLiked((prevLiked) =>
      prevLiked.includes(itemId)
        ? prevLiked.filter((id) => id !== itemId)
        : [...prevLiked, itemId]
    );
  };

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

  const handleProductClick = (item) => {
    if (!product.includes(item.id)) {
      setProduct([...product, item.id]);
    } else {
      setProduct(product.filter((id) => id !== item.id));
    }
  };

  const selectedItem = Data.find((item) => item.id === shop[0]);

  return (
    <div className="w-full border m-auto mt-[230px] mb-[60px]">
      <div className="w-full px-8 m-auto">
        <div className="flex my-[20px] items-center gap-[8px]">
          <NavLink to="/">
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Главная
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <NavLink to="/katalog">
            <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
              Каталог
            </p>
          </NavLink>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
            Лабораторное оборудование
          </p>
          <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
          <p className="text-[14px] font-normal text-[#202020]">
            Анализатор мочи MINDRAY UA-66
          </p>
        </div>
      </div>
      {selectedItem && (
        <div className="w-[1310px] m-auto flex items-center justify-between h-[522px]">
          <div className="w-[760px] relative mt-[1px] h-[509px] flex items-center justify-center rounded-[10px] border bg-white">
            <div className="absolute top-[15px] left-[15px] flex items-center justify-between w-[710px]">
              <div className="bg-[#E1EFE6] flex items-center justify-center w-[79px] h-[27px] border border-[#088269] rounded-[60px]">
                <p className="text-[#088269] text-[14px] font-semibold">
                  Новинка
                </p>
              </div>
              <div className="flex items-center gap-[10px]">
                <img
                  src={line}
                  alt="line"
                  className="w-[24px] h-[24px] hover:cursor-pointer"
                />
                <div
                  className={`w-[35px] h-[35px] hover:cursor-pointer bg-white rounded-[4px] duration-75 flex items-center justify-center ${
                    liked.includes(selectedItem.id) ? "text-black" : ""
                  }`}
                  onClick={() => toggleLike(selectedItem.id)}
                >
                  {liked.includes(selectedItem.id) ? (
                    <GoHeartFill className="text-[26px] h-[35px] text-red-600" />
                  ) : (
                    <GoHeart className="text-[26px] hover:text-red-600 text-black" />
                  )}
                </div>
              </div>
            </div>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-[413px] h-[413px]"
            />
            <div className="absolute bottom-[25px] left-[25px] flex items-center gap-[5px]">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-[50px] h-[50px] border hover:cursor-pointer border-[#D5D1E1] rounded-[10px] flex items-center justify-center ${
                    selectedDiv === num ? "border-[#088269]" : ""
                  }`}
                  onClick={() => setSelectedDiv(num)}
                >
                  <img
                    src={selectedItem.image}
                    alt="thumbnail"
                    className="w-[40px] h-[34px]"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-[30px]">
            <p className="text-[#202020] w-[470px] mb-[10px] font-medium text-[30px] leading-[36px]">
              {selectedItem.title}
            </p>
            <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
              Категория: Лабораторное оборудование
            </p>
            <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
              Производитель: Lorem
            </p>
            <p className="text-[#7A7687] mb-[5px] text-[12px] font-normal leading-[16.40px]">
              Артикул: 213134
            </p>
            <p className="text-[#7A7687] mb-[15px] text-[12px] font-normal leading-[16.40px]">
              В наличии
            </p>
            <p className="text-[#202020] mb-[15px] text-[18px] leading-[24.60px] font-semibold">
              {selectedItem.price} руб.
            </p>
            <div className="flex items-center gap-[10px]">
              <div className="w-[96px] h-[41px] border border-[#D5D1E1] rounded-[50px] flex items-center justify-center">
                <button
                  onClick={() => decrement(selectedItem.id)}
                  className="increment"
                >
                  <HiMinusSm className="text-[#088269]" />
                </button>
                <p className="font-semibold ml-[10px] mr-[10px] text-center leading-[19px] text-[#088269] text-[20px] w-[20px]">
                  {counts[selectedItem.id] || 1}
                </p>
                <button
                  onClick={() => increment(selectedItem.id)}
                  className="increment"
                >
                  <HiPlusSm className="text-[#088269]" />
                </button>
              </div>
              <button className="w-[162px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[14px] font-semibold text-[#088269] hover:bg-[#088269] hover:text-[#f5f5f6] duration-200">
                Задать вопрос
              </button>
              <button
                onClick={() => handleProductClick(selectedItem)}
                className="w-[214px] h-[41px] rounded-[50px] border border-[#D5D1E1] text-[14px] font-semibold text-white bg-[#088269] hover:text-[#f5f5f6] duration-200"
              >
                Добавить в корзину
              </button>
            </div>
            <hr className="mt-[25px] mb-[13px] bg-[#E5E2EE] border" />
            <p className="text-[#202020] text-[16px] font-medium mb-[15px]">
              О товаре
            </p>
            <p className="w-[441px] text-[#202020] opacity-80 leading-[16.40px] font-medium text-[12px]">
              Но синтетическое тестирование, в своём классическом представлении,
              <br /> допускает внедрение поэтапного и последовательного развития
              <br /> общества. В рамках спецификации современных стандартов,
              сторонники <br /> тоталитаризма в науке будут функционально
              разнесены.
            </p>
          </div>
        </div>
      )}
      <div className="w-[1310px] m-auto">
        <ProductSelect />
        <LineMin />
      </div>
      <Products />
      <Cabinet />
      <Popular />
      <Brend />
      <Mail />
    </div>
  );
};

export default ProductPage;
