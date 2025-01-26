"use client";
import { useState } from "react";
import { FAQ_DATA } from "../../../utils/constant";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="container">
        <div className="faq-container " id="faq">
          <h1 className="faq-title offerTitles">
            Got Questions? We Have Answers!
          </h1>
          <div className="faq-list">
            {FAQ_DATA.map((item, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span
                    className={`faq-icon ${
                      openIndex === index ? "faq-icon-open" : ""
                    }`}
                  >
                    &#x25BC;
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
