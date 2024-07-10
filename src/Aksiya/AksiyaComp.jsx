import React, { useState, useContext } from "react";
import Data from "../db/data";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../App";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const AksiyaComp = () => {
  const { shop, setShop, addToCart } = useContext(ShopContext);
  const [priceRange, setPriceRange] = useState([0, 500000]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Function to handle price range change
  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    // Reset current page when price range changes
    setCurrentPage(1);
  };

  // Filtered and paginated products
  const filteredProducts = Data.filter((product) => {
    const price = parseInt(product.price.replace(/\s|руб.|,/g, ""));
    return price >= priceRange[0] && price <= priceRange[1];
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
            <p className="text-[14px] font-normal text-[#202020]">Акции</p>
          </div>
        </div>
        <div className="w-[1310px] m-auto flex items-start justify-between">
          <div className="w-[320px] h-[595px] pl-[20px] pr-[14px] border border-[#E5E2EE]">
            <p className="text-[#202020] text-[16px] my-[15px] leading-[22.4px]">
              Группы товаров
            </p>
            <hr className="mb-[8px]" />
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Мониторы
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269]" />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Лампы
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269]" />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Кровати
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269]" />
            </div>
            <div className="group flex items-center hover:scale-105 duration-200 my-[12px] hover:cursor-pointer justify-between">
              <p className="text-[#202020] group-hover:text-[#088269] text-3 font-medium leading-[19px]">
                Рентгены
              </p>
              <IoIosArrowForward className="group-hover:text-[#088269]" />
            </div>
            <Box className="mb-4  mt-10 mx-6">
              <h2 className="text-lg font-medium mb-2">Фильтр по цене</h2>
              <Slider className=""
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={0}
                max={500000}
                step={10000}
                marks={[
                  { value: 0, label: "0 руб." },
                  { value: 500000, label: "500 000 руб." },
                ]}
              />
              <p>
                Диапазон цен: {priceRange[0]} руб. - {priceRange[1]} руб.
              </p>
            </Box>
          </div>
          <div className="w-[880px]">
            <div className="grid grid-cols-3 gap-6">
              {paginatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg overflow-hidden border border-[#E5E2EE] bg-[#f5f5f6]"
                >
                  <div className="w-full h-[220px] flex items-center justify-center bg-white">
                    <NavLink to="/stranitsa">
                      <img
                        onClick={() => {
                          setShop([item.id]);
                        }}
                        src={item.image}
                        alt="rasm"
                        className="w-[100%] h-[100%] object-cover hover:cursor-pointer"
                      />
                    </NavLink>
                  </div>
                  <hr className="mx-4 my-2" />
                  <div className="px-4 py-2">
                    <p className="text-[#202020] font-medium text-[16px] leading-[22.4px]">
                      {item.title}
                    </p>
                    <p className="text-[#202020] font-medium text-[16px] leading-[22.4px]">
                      {item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination controls */}
            <div className="flex justify-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-3 py-1 mx-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-gray-300"
                      : "bg-gray-200 hover:bg-gray-400"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AksiyaComp;
