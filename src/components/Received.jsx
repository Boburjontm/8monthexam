import React from "react";
import download from "/assets/download.png";

const Received = () => {
  return (
    <>
      <div className="w-full px-8 m-auto flex items-start justify-between">
        <h3 className="text-[#202020]  font-medium text-[30px] leading-[36px]">
          Вы сможете <span className="text-[#088269]">оставить заявку</span> на
          услуги <br />и скачать бланк для заполнения
        </h3>
        <div className="flex items-center gap-[10px]">
          <div className="w-[320px] h-[74px] rounded-[10px] bg-white flex items-center justify-between px-[24px] gap-[44px] border border-[#E5E2EE]">
            <p className="text-[#202020]  font-semibold text-[18px] ">
              Бланк для заполнения
            </p>
            <img
              src={download}
              alt="rasm"
              className="w-[30px] h-[30px] hover:cursor-pointer"
            />
          </div>
          <div className="w-[320px] h-[74px] rounded-[10px] bg-white flex items-center justify-between px-[24px] gap-[44px] border border-[#E5E2EE]">
            <p className="text-[#202020]  font-semibold text-[18px] ">
              Заполненная форма
            </p>
            <img
              src={download}
              alt="rasm"
              className="w-[30px] h-[30px] hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-[26px]">
        <button className="right-[20px] bottom-[20px] w-[250px] h-[41px] rounded-[50px] bg-[#088269] text-[#F8F7F3] text-[16px] font-semibold hover:scale-105 duration-200 hover:bg-[#07745E]">
          Проверить статус доставки
        </button>
      </div>
    </>
  );
};

export default Received;
