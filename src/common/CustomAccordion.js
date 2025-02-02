"use client";
import { useState } from "react";

const CustomAccordion = ({ IndividualAccordionData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="accordion-container">
        {IndividualAccordionData.map((item, index) => (
          <div key={index} className="accordion-item">
            <button
              className="accordion-button"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span
                className={`accordion-arrow ${
                  activeIndex === index ? "active" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="accordion-content-inner">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomAccordion;
