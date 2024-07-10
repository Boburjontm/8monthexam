import React from "react";
import bg from "/assets/bga.png";
import bgb from "/assets/bgb.png";
import { NavLink } from "react-router-dom";

const Cabinet = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between mb-2.5">
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bg}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bgb}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-wrap justify-between mb-2.5">
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bgb}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bg}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-wrap justify-between mb-2.5">
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bg}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bgb}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
      </div>
      <div className="flex flex-wrap justify-between mb-2.5">
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bgb}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
        <NavLink to="/reanimatsiya" className="w-full md:w-[48%] mb-2.5">
          <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
            <img
              src={bg}
              alt="rasm"
              className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
            />
            <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
              Реанимация
            </p>
          </div>
        </NavLink>
      </div>
      <NavLink to="/reanimatsiya" className="w-full mb-2.5">
        <div className="w-full h-0 pb-[56.25%] bg-white rounded-lg border border-[#E5E2EE] relative">
          <img
            src={bg}
            alt="rasm"
            className="absolute inset-0 w-full h-[85%] rounded-t-lg object-cover"
          />
          <p className="text-[#202020] text-base mt-2.5 ml-6 font-medium leading-[22.4px] absolute bottom-4">
            Реанимация
          </p>
        </div>
      </NavLink>
    </div>
  );
};

export default Cabinet;
