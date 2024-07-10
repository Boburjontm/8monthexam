import React from "react";

const Attention = () => {
  return (
    <>
      <div className="w-[90%] max-w-[1310px] h-auto m-auto mt-[15%] bg-[#088269] p-[4%] rounded-[10px] flex flex-wrap items-start justify-between">
        <p className="text-[#F8F7F3] text-[8vw] md:text-[5vw] lg:text-[2vw] font-medium mb-[2%]">
          Внимание!
        </p>
        <div>
          <p className="text-[#F8F7F3] text-[4vw] md:text-[2.5vw] lg:text-[1vw] mb-[5%] font-medium leading-[1.4]">
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней
            <br /> со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ,
            при условии
            <br /> предоставления документов, перечисленных в договоре.
          </p>
          <p className="text-[#F8F7F3] text-[4vw] md:text-[2.5vw] lg:text-[1vw] mb-[5%] font-medium leading-[1.4]">
            Оформление гарантийного случая осуществляется согласно
            <br /> Гражданскому кодексу РФ, при условии предоставления
            документов,
            <br /> перечисленных в договоре и при наличии заявления с указанием
            <br /> причины возврата, оформленного надлежащим образом.
          </p>
        </div>
      </div>
    </>
  );
};

export default Attention;
