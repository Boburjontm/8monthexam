import React, { useState } from "react";

const Productselect = () => {
  const [activeTab, setActiveTab] = useState("specs");

  return (
    <div className="w-full mt-[5%]">
      <div className="flex flex-wrap items-center gap-[2%] border-b-[0.5px]">
        {["description", "specs", "services", "wholesale", "reviews"].map((tab) => (
          <p
            key={tab}
            className={`text-[4vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-semibold cursor-pointer pb-[1%] ${
              activeTab === tab
                ? "text-[#202020] border-b-[2px] border-b-[#07745E]"
                : "text-[#7A7687]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "description" && "Описание оборудования"}
            {tab === "specs" && "Характеристики и документы"}
            {tab === "services" && "Услуги и сервис"}
            {tab === "wholesale" && "Оптовым покупателям"}
            {tab === "reviews" && "Отзывы 4"}
          </p>
        ))}
      </div>

      <div className="bg-white pt-[2%] pl-[2%] rounded shadow">
        {activeTab === "description" && (
          <div className="h-auto ">
            <div className="flex flex-wrap items-start gap-[5%]">
              <div>
                <p className="text-[#202020] font-semibold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] mb-[2%]">
                  Описание оборудования
                </p>
                <p className="text-[#7A7687] text-[3vw] sm:text-[2vw] md:text-[1vw] leading-relaxed">
                  Вес оборудования . . . . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Детектор . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Время сканирования . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    PAN стандарт - 12 сек
                  </span>
                  <br />
                  Размер фокусного пятна . . . .
                  <span className="text-[#202020] font-medium"> 0.6</span>
                  <br />
                  Динамический диапазон . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    16 бит (65 536 градации серого)
                  </span>
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="h-auto ">
            <div className="flex flex-wrap items-start gap-[5%]">
              <div>
                <p className="text-[#202020] font-semibold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] mb-[2%]">
                  Технические характеристики
                </p>
                <p className="text-[#7A7687] text-[3vw] sm:text-[2vw] md:text-[1vw] leading-relaxed">
                  Вес оборудования . . . . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Детектор . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Время сканирования . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    PAN стандарт - 12 сек
                  </span>
                  <br />
                  Размер фокусного пятна . . . .
                  <span className="text-[#202020] font-medium"> 0.6</span>
                  <br />
                  Динамический диапазон . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    16 бит (65 536 градации серого)
                  </span>
                  <br />
                  <br />
                </p>
              </div>
              <div>
                <p className="text-white font-semibold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] mb-[2%]">
                  Технические характеристики
                </p>
                <p className="text-[#7A7687] text-[3vw] sm:text-[2vw] md:text-[1vw] leading-relaxed">
                  Рабочее напряжение . . . . . . .
                  <span className="text-[#202020] font-medium"> 90 кг </span>
                  <br />
                  Максимальный ток . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    CsI - на основе аморфного кремния
                  </span>
                  <br />
                  Гарантия . . . . . . . . . . . . . . . . . . .
                  <span className="text-[#202020] font-medium">
                    {" "}
                    PAN стандарт - 12 сек
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="h-auto">
            <p className="text-[#3D3D3D] font-bold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]">
              Услуги и сервис:
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] mb-[5%] font-normal">
              Подробное описание услуг и сервисов, которые предоставляет
              компания. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] mb-[5%] font-normal">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              mollitia reprehenderit <br /> doloribus ipsa quos aut incidunt
              molestiae possimus ea! Temporibus pariatur repellendus corporis
              officiis illum totam reiciendis quisquam. <br /> Numquam,
              voluptatum!
            </p>
          </div>
        )}

        {activeTab === "wholesale" && (
          <div className="h-auto">
            <p className="text-[#3D3D3D] font-bold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw]">
              Оптовым покупателям:
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] font-normal">
              Информация для оптовых покупателей, условия и преимущества. <br />
              <br />
            </p>
            <p className="text-[#3D3D3D] font-bold mb-[5%] text-[3vw] sm:text-[2vw] md:text-[1vw]">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <p className="text-[#3D3D3D] font-bold text-[3vw] sm:text-[2vw] md:text-[1vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Veritatis, inventore. Labore, a, ut ea ipsam eos <br />
              esse impedit deleniti optio minima alias tenetur amet nostrum
              vitae laboriosam laborum modi laudantium <br /> ad ex eius
              repellendus, repudiandae possimus dolores ullam? Sequi, pariatur?
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="h-auto">
            <p className="text-[#3D3D3D] font-bold text-[4vw] sm:text-[2.5vw] md:text-[1.5vw] mb-[2%]">Отзывы:</p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] font-normal">
              Мнения и отзывы покупателей о продукте. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] font-normal">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              eligendi culpa architecto. <br />
              <br />
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              officiis voluptatum? Perspiciatis laudantium explicabo quo? <br />
              <br />
            </p>
            <p className="text-[#727272] text-[3vw] sm:text-[2vw] md:text-[1vw] font-normal">
              Мнения и отзывы покупателей о продукте sit amet consectetur
              adipisicing . <br />
              <br />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Productselect;
