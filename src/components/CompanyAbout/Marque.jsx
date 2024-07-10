import React from "react";
import "../../css/styles.css";
import Marquee from "react-fast-marquee";
import logo1 from "../../../public/assets/img/klentlogo/image 221.png";
import logo2 from "../../../public/assets/img/klentlogo/image 222.png";
import logo3 from "../../../public/assets/img/klentlogo/image 223.png";
import logo4 from "../../../public/assets/img/klentlogo/image 224.png";

const Marque = () => {
  return (
    <>
      <Marquee direction="left" behavior="alternate" speed="150">
        <div className="flex items-center gap-2.5">
          <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 h-[70%] ml-2.5 border border-[#d1d1d2] bg-[#f2f0f7] rounded-lg">
            <div className="w-full h-7/10 flex items-center justify-center rounded-t-lg bg-white">
              <img className="w-2/3 h-auto" src={logo4} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-base font-medium ml-6 mt-5">
              НМИЦ онкологии им. Н.Н.
            </p>
          </div>
          <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 h-[70%] border border-[#d1d1d2] bg-[#f2f0f7] rounded-lg">
            <div className="w-full h-7/10 flex items-center justify-center rounded-t-lg bg-white">
              <img className="w-3/4 h-auto" src={logo1} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-base font-medium ml-6 mt-5">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 h-[70%] border border-[#d1d1d2] bg-[#f2f0f7] rounded-lg">
            <div className="w-full h-7/10 flex items-center justify-center rounded-t-lg bg-white">
              <img className="w-1/2 h-auto" src={logo2} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-base font-medium ml-6 mt-5">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 h-[70%] border border-[#d1d1d2] bg-[#f2f0f7] rounded-lg">
            <div className="w-full h-7/10 flex items-center justify-center rounded-t-lg bg-white">
              <img className="w-2/3 h-auto" src={logo3} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-base font-medium ml-6 mt-5">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
          <div className="w-4/5 sm:w-2/3 md:w-1/3 lg:w-1/4 h-[70%] border border-[#d1d1d2] bg-[#f2f0f7] rounded-lg">
            <div className="w-full h-7/10 flex items-center justify-center rounded-t-lg bg-white">
              <img className="w-3/4 h-auto" src={logo4} alt="rasm" />
            </div>
            <hr className="w-full border border-[#d1d1d2]" />
            <p className="text-[#202020] text-base font-medium ml-6 mt-5">
              НМИЦ онкологии им. Н.Н. <br /> Блохина
            </p>
          </div>
        </div>
      </Marquee>
    </>
  );
};

export default Marque;
