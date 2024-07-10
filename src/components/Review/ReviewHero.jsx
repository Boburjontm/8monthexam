import React, { useState } from "react";
import sheep from "/assets/sheep.png";
import star from "/assets/Star.png";
import Data from "../../db/Reviews.json";
import { GrFormNext } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { IoChevronBackOutline } from "react-icons/io5";

const ReviewHero = () => {
  const [sale, setSale] = useState(1);
  const [sale1, setSale1] = useState(1);

  const handlePrevious = () => {
    if (sale1 > 1) {
      setSale1(sale1 - 1);
      setSale(sale1 - 1);
    }
  };

  const handleNext = () => {
    if (sale1 < 3) {
      setSale1(sale1 + 1);
      setSale(sale1 + 1);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <div className="w-full md:w-[1310px] m-auto">
        <h3 className="text-gray-800 font-medium mt-12 mb-6 text-3xl leading-10">
          Отзывы
        </h3>
        <div className="flex flex-wrap mb-10 md:mb-6 items-center justify-between">
          {sale === 1 &&
            Data.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[650px] mb-4 md:mb-0 h-[288px] rounded-lg bg-white pt-5 px-6 border border-gray-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img src={sheep} alt="rasm" className="w-16 h-16" />
                    <div>
                      <p className="text-gray-800 font-semibold text-base leading-6">
                        ООО Название компании
                      </p>
                      <p className="text-gray-600 font-semibold text-base">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img src={star} alt="rasm" className="w-24 h-4 mt-2" />
                    </div>
                  </div>
                  <p className="text-gray-800 font-normal text-sm">
                    {item.date}
                  </p>
                </div>
                <p className="text-gray-600 w-[580px] mt-3 font-normal text-base leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          {sale === 2 &&
            Data.slice(6, 12).map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[650px] mb-4 md:mb-0 h-[288px] rounded-lg bg-white pt-5 px-6 border border-gray-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img src={sheep} alt="rasm" className="w-16 h-16" />
                    <div>
                      <p className="text-gray-800 font-semibold text-base leading-6">
                        ООО Название компании
                      </p>
                      <p className="text-gray-600 font-semibold text-base">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img src={star} alt="rasm" className="w-24 h-4 mt-2" />
                    </div>
                  </div>
                  <p className="text-gray-800 font-normal text-sm">
                    {item.date}
                  </p>
                </div>
                <p className="text-gray-600 w-[580px] mt-3 font-normal text-base leading-6">
                  {item.text}
                </p>
              </div>
            ))}
          {sale === 3 &&
            Data.slice(12, 17).map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[650px] mb-4 md:mb-0 h-[288px] rounded-lg bg-white pt-5 px-6 border border-gray-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <img src={sheep} alt="rasm" className="w-16 h-16" />
                    <div>
                      <p className="text-gray-800 font-semibold text-base leading-6">
                        ООО Название компании
                      </p>
                      <p className="text-gray-600 font-semibold text-base">
                        Михаил Булич Андреевич, Директор
                      </p>
                      <img src={star} alt="rasm" className="w-24 h-4 mt-2" />
                    </div>
                  </div>
                  <p className="text-gray-800 font-normal text-sm">
                    {item.date}
                  </p>
                </div>
                <p className="text-gray-600 w-[580px] mt-3 font-normal text-base leading-6">
                  {item.text}
                </p>
              </div>
            ))}
        </div>
        <div className="flex justify-center w-full items-center gap-4 cursor-pointer">
          <div className="flex items-center gap-2">
            <p
              className={`w-9 h-9 bg-white flex items-center justify-center border rounded-full hover:bg-green-600 hover:text-white cursor-pointer ${
                sale1 === 1 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handlePrevious}
            >
              <IoChevronBackOutline className="text-gray-800 text-xl" />
            </p>
            {[1, 2, 3].map((num) => (
              <p
                key={num}
                onClick={() => {
                  setSale1(num);
                  setSale(num);
                }}
                className={
                  sale1 === num
                    ? "w-9 h-9 flex items-center justify-center font-bold border rounded-full bg-green-600 text-white cursor-pointer"
                    : "w-9 h-9 hover:bg-gray-200 bg-white flex items-center justify-center border border-gray-300 rounded-full cursor-pointer"
                }
              >
                {num}
              </p>
            ))}
            <p className="w-9 h-9 flex items-center justify-center bg-white border rounded-full hover:bg-green-600 hover:text-white cursor-pointer">
              <BsThreeDots className="text-gray-800 text-xl" />
            </p>
            <p
              className={`w-9 h-9 flex items-center bg-white justify-center border rounded-full hover:bg-green-600 hover:text-white cursor-pointer ${
                sale1 === 3 ? "opacity-50 bg-white cursor-not-allowed" : ""
              }`}
              onClick={handleNext}
            >
              <GrFormNext className="text-gray-800 text-xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHero;
