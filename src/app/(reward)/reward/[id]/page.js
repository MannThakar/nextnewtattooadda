"use client";
import CustomAccordion from "@/common/CustomAccordion";
import CustomCarouselWork from "@/common/CustomCarouselWork";
import React, { useEffect, useState } from "react";
import { INDIVIDUAL_CAROUSEL_DATA } from "../../../../utils/constant";
import Reward from "../page";
import Link from "next/link";
import BackButton from "@/common/BackButton";

const IndividualReward = ({ params }) => {
  const { id } = params;
  const [price, setPrice] = useState(10000);
  const [months, setMonths] = useState(3);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Calculate 50% of price as down payment
    if (price < 10000 || price == "") {
      return;
    }
    const calculatedDownPayment = price * 0.6;
    setDownPayment(calculatedDownPayment);

    // Calculate monthly payment
    const remainingAmount = price - calculatedDownPayment;
    const monthly = remainingAmount / months;
    setMonthlyPayment(monthly);
  }, [price, months]);

  const handlePriceChange = (e) => {
    if (e.target.value == "") {
      setPrice(10000);
      return;
    }
    const value = parseInt(e.target.value);

    if (value < 10000) {
      setPrice(10000);
    } else {
      setPrice(value);
    }
  };
  const rewardData = INDIVIDUAL_CAROUSEL_DATA.find(
    (reward) => reward.id === parseInt(id)
  );

  return (
    <>
      <BackButton />
      <div className="container">
        <div className="reward" style={{ backgroundColor: rewardData?.color }}>
          <div className="rewardText">
            <h2 className="rewardTitle">{rewardData?.title}</h2>
            <h4 className="rewardSubTitle">{rewardData?.heading}</h4>
            <div className="rewardBtnDiv">
              <Link href={rewardData?.link}>
                <button className="rewardBtn">Claim Reward</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="rewardAccordion">
          <h2 className="rewardAccordionTitle">
            Ink Queries? Find Your Answers Here!
          </h2>
          <CustomAccordion IndividualAccordionData={rewardData?.accordion} />
        </div>
        {rewardData?.payLater && (
          <div className="payLaterBox">
            <h2 className="payLater ">Pay Later</h2>
            <div className="calculator-container">
              <div className="calculator-left">
                <h1>
                  Easy
                  <br />
                  way to
                  <br />
                  <span className="text-bold">
                    Calculate
                    <br />
                    your
                    <br />
                    EMI
                  </span>
                </h1>
              </div>

              <div className="calculator-right">
                <div className="input-group">
                  <label>Tattoo Price</label>
                  <div className="price-input">
                    <input
                      type="number"
                      value={price}
                      onBlur={handlePriceChange} // Call function when input loses focus
                      onChange={(e) => setPrice(e.target.value)} // Update state immediately
                      min="10000"
                    />
                    <span className="currency">₹</span>
                  </div>
                </div>

                <div className="input-group">
                  <label>EMI Tenure (Months)</label>
                  <div className="tenure-slider">
                    <input
                      type="range"
                      min="3"
                      max="12"
                      step="3"
                      value={months}
                      onChange={(e) => setMonths(e.target.value)}
                    />
                    <div className="tenure-marks">
                      <span>3</span>
                      <span>6</span>
                      <span>9</span>
                      <span>12</span>
                    </div>
                  </div>
                </div>

                <div className="input-group">
                  <label>Downpayment</label>
                  <div className="result">₹ {downPayment.toFixed(0)}</div>
                </div>

                <div className="input-group">
                  <label>Monthly Payment:</label>
                  <div className="result">₹ {monthlyPayment.toFixed(0)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="consultation-banner">
          <div className="banner-heading">
            Book a free consultation with our tattoo experts
          </div>

          <div className="expert-section">
            <div className="expert-title">Talk to the expert</div>
            <div className="booking-options">
              <a
                href="https://wa.link/2c1gtv"
                className="booking-link whatsapp"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rewardCarousel">
          <h2>You May Also Like</h2>
          <CustomCarouselWork />
        </div>
        <div>
          <Reward />
        </div>
      </div>
    </>
  );
};

export default IndividualReward;
