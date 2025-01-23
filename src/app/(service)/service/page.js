import React from "react";
import Image from "next/image";

const Service = () => {
  return (
    <>
      <div className="service" id="service">
        <div className="container">
          <div className="serviceBody ">
            <div className="serviceBodyLeft">
              <div className="textBox">
                <h2 className="serviceBodyLeftTitle">
                  Get <span className="offer">Personalised Offer*</span> on the
                  table
                </h2>
                <p className="serviceBodyLeftPara">
                  Rewards come to those who make good choices. Thank you for
                  visiting this page—now choose the offer that suits you
                  perfectly
                </p>
                <button className="serviceBtn">Get offer now</button>
              </div>
            </div>
            <div className="serviceBodyRight ">
              <Image
                src="/Service/02_Service.jpeg"
                alt="service"
                className="serviceImg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
