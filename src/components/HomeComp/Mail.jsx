import React from "react";
import mail from "/assets/mail.png";

const Mail = () => {
  return (
    <>
      <div className="w-full max-w-screen-xl mt-[10vw] mx-auto bg-[#E5E4ED] h-auto py-[5vw]">
        <div className="w-full max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center lg:items-start">
          <img src={mail} alt="rasm" className="w-[30%] lg:w-[20%] mb-[5vw] lg:mb-0" />
          <div className="ml-0 lg:ml-[5%] w-full lg:w-[70%] text-center lg:text-left">
            <h4 className="text-[#202020] text-[6vw] lg:text-[2vw] font-medium mb-[2vw] lg:mb-[1vw]">
              Подпишитесь и будьте в курсе!
            </h4>
            <p className="text-[#7A7687] mb-[5vw] lg:mb-[3vw] text-[4vw] lg:text-[1.5vw] font-normal">
              Акции, скидки, распродажи ждут!
            </p>
            <div className="flex flex-col lg:flex-row h-auto border border-[#D5D1E1] items-center bg-white rounded-full">
              <input
                type="email"
                placeholder="Введите email"
                className="pl-[5%] py-[3%] h-full text-[4vw] lg:text-[1.5vw] rounded-full text-[#7A7687] outline-none w-full lg:w-[70%]"
              />
              <button className="w-full lg:w-[30%] h-full py-[3%] lg:py-0 rounded-full bg-[#088269] text-[#F8F7F3] text-[4vw] lg:text-[1.5vw] mt-[2vw] lg:mt-0">
                Подписаться
              </button>
            </div>
            <div className="flex mt-[5vw] lg:mt-[2vw] items-center gap-[5%]">
              <input
                type="checkbox"
                className="w-[10%] lg:w-[2%] h-[10%] lg:h-[2%] rounded-[3px] hover:cursor-pointer"
              />
              <p className="text-[#202020] text-[3vw] lg:text-[1vw] font-medium">
                Я даю согласие на обработку своих персональных данных.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mail;
