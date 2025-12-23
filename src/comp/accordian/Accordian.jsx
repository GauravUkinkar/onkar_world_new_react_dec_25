import React, { useState } from "react";
import "./accordian.scss";
import { FaArrowUp, FaArrowDownLong } from "react-icons/fa6";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(index);
  };
  const accordionData = [
    {
      title: "What products do you trade?",
      content:
        "Onkar World specialises in a wide range of Indian and African produce, including but not limited to agricultural commodities, spices, textiles, and minerals.",
    },
    {
      title: "How do I place an order with Onkar World?",
      content:
        "Placing an order with Onkar World is simple. You can contact our sales team directly through our website, email, or phone. Our representatives will guide you through the process.",
    },
    {
      title: "What are your shipping options?",
      content:
        "Onkar World offers flexible shipping options to accommodate your needs. We work with reliable international shipping carriers to ensure timely and secure delivery of your products.",
    },
  ];

  return (
    <>
      <div className="accordion">
        {accordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className={`accordion-header title3 ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              <span className="icon-box">
                <span className="accordion-icon">
                  {activeIndex === index ? <FaArrowUp /> : <FaArrowDownLong />}
                </span>
              </span>
            </button>
            <div
              className="accordion-content"
              style={{ display: activeIndex === index ? "block" : "none" }}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordian;
