import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import PaymentPage from "../components/Cash/PaymentPage";
import Order from "../components/Cash/Order";
import Conditions from "../components/Uslugi/Conditions";
import Consultation from "../components/DostavkaComp/Consultation";

const Payment = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="w-full mx-auto">
        <div className="w-[1310px] m-auto">
          <div className="flex my-[20px] items-center gap-[8px]">
            <NavLink to="/">
              <p className="text-[#7A7687] text-[14px] font-normal hover:text-[#202020]">
                Главная
              </p>
            </NavLink>
            <IoIosArrowForward className="text-[#7A7687] text-[14px]" />
            <p className="text-[14px] font-normal text-[#202020]">Оплата</p>
          </div>
          <PaymentPage />
          <Order />
          <Conditions />
        </div>
        <div className="mb-[150px]">
          <Consultation />
        </div>
      </div>
    </>
  );
};

export default Payment;
