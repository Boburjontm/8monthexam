import { useEffect, useState, useRef } from "react";
import Big from "/assets/big.svg";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const [translateX, setTranslateX] = useState(0);
  const [transition, setTransition] = useState("transform 1s ease-in-out");
  const slideCount = 4;
  const slideWidth = 100 / slideCount;
  const isTransitioning = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev + slideWidth);
      isTransitioning.current = true;
    }, 4000);

    return () => clearInterval(interval);
  }, [slideWidth]);

  useEffect(() => {
    if (translateX >= 100) {
      setTimeout(() => {
        setTransition("none");
        setTranslateX(0);
        setTimeout(() => {
          setTransition("transform 1s ease-in-out");
        }, 50);
        isTransitioning.current = false;
      }, 1000);
    }
  }, [translateX]);

  const handleDotClick = (index) => {
    setTransition("transform 1s ease-in-out");
    setTranslateX(index * slideWidth);
    isTransitioning.current = true;
  };

  return (
    <>
      <div className="w-full max-w-[1440px] mx-auto mt-[230px] relative z-10">
        <div className="bg-[#E5E4ED] w-full max-w-[1310px] h-[346px] mt-[30px] rounded-[15px] mx-auto relative overflow-hidden">
          <div className="w-full">
            <div
              className="flex transition-transform"
              style={{
                width: `${slideCount * 100}%`,
                transform: `translateX(-${translateX}%)`,
                transition: transition,
              }}
            >
              {[...Array(slideCount)].map((_, index) => (
                <div key={index} className="flex w-full">
                  <div className="px-[5%] w-[90%] md:w-[69%]">
                    <h1 className="text-[48px] mt-[32px] leading-[52px] text-[#202020] font-medium">
                      Заголовок баннера
                      <br /> в пару строк
                    </h1>
                    <p className="mt-[25px] mb-[65px] text-[#7A7687] text-[16px]">
                      Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                      elit, sed do eiusmod tempor
                    </p>
                    <div className="flex items-center gap-[10px]">
                      <button className="w-[35%] md:w-[170px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] border border-[#D5D1E1] text-[16px] font-semibold hover:text-[#f8f7f3] hover:bg-[#088269]">
                        Запросить цену
                      </button>
                      <NavLink to="/katalog">
                        <button className="w-[28%] md:w-[126px] h-[41px] rounded-[50px] text-[#088269] border border-[#D5D1E1] hover:border-[#088269] text-[16px] font-semibold hover:text-[#f8f7f3] hover:bg-[#088269]">
                          В каталог
                        </button>
                      </NavLink>
                    </div>
                  </div>
                  <div className="flex items-end w-full h-full">
                    <img
                      src={Big}
                      alt="img"
                      className="h-[346px] md:absolute md:top-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute mx-auto top-[360px] left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[...Array(slideCount)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`cursor-pointer w-2 h-2 rounded-full ${
                translateX === index * slideWidth
                  ? "bg-gray-700 w-[38px]"
                  : "bg-[#7A7687]"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
