import React, { useState } from 'react';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  { question: "Преимущества сотрудников", answer: "Ответ на вопрос о преимуществах сотрудников." },
  { question: "Достижения компании", answer: "Ответ на вопрос о достижениях компании." },
  { question: "Возврат товара или заказа", answer: "Ответ на вопрос о возврате товара или заказа." },
  { question: "Стоимость доставки", answer: "Ответ на вопрос о стоимости доставки." },
  { question: "Стать поставщиком", answer: "Ответ на вопрос о том, как стать поставщиком." },
  { question: "Возможен ли возврат денежных средств?", answer: "Ответ на вопрос о возврате денежных средств." },
  { question: "Правила расторжения договора?", answer: "Ответ на вопрос о правилах расторжения договора." },
  { question: "Почему не отправляем по платежному поручению?", answer: "Ответ на вопрос о платежном поручении." },
  { question: "Как можно купить товар за наличный расчет?", answer: "Ответ на вопрос о покупке товара за наличный расчет." },
  { question: "Как сравнить товары на сайте?", answer: "Ответ на вопрос о сравнении товаров на сайте." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl flex gap-24 justify-between">
      <div className="text">
        <h1 className="text-2xl font-bold mb-4">Часто задаваемые вопросы</h1>
        <div className="flex mb-6">
          <input
            type="text"
            placeholder="Поиск по вопросам"
            className="w-full border-b border-gray-300 focus:border-green-500 focus:outline-none py-2 px-4"
          />
          <FiSearch className="text-gray-500 ml-2" />
        </div>
      </div>
      <div className="pagination">
        <div>
          <p className="font-bold">О компании</p>
          <p>
            На синтетическое тестирование, в своем классическом представлении,
            допускает внедрение постмодернизма.
          </p>
          <a href="#" className="text-grey-500 underline">
            Подробнее ->
          </a>
        </div>
        <div className="grid  gap-6">
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center border-b border-gray-300 py-2 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </button>
                {activeIndex === index && (
                  <div className="pt-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button className="border border-gray-300 px-3 py-1 mx-1 rounded">
            1
          </button>
          <button className="border border-gray-300 px-3 py-1 mx-1 rounded">
            2
          </button>
          <button className="border border-gray-300 px-3 py-1 mx-1 rounded">
            3
          </button>
          <button className="border border-gray-300 px-3 py-1 mx-1 rounded">
            4
          </button>
          <button className="border border-gray-300 px-3 py-1 mx-1 rounded">
            5
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
