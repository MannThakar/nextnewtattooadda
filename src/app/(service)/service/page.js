import React from "react";
import Image from "next/image";
import service2 from "../../../../public/assets/Service/02_Service.jpeg";

const Service = () => {
  return (
    <>
      <div className="service" id="service">
        <div className="container">
          <div className="serviceHeader">
            <h2 className="serviceTitle">
              <span className="asterisk">*</span>More to{" "}
              <span className="discover">discover</span>
            </h2>
          </div>
          <div className="serviceBody container ">
            <div className="serviceBodyLeft">
              <h2 className="serviceBodyLeftTitle">
                Get <span className="offer">Personalised Offer*</span> on the
                table
              </h2>
              <p className="serviceBodyLeftPara">
                Rewards come to those who make good choices. Thank you for
                visiting this page—now choose the offer that suits you perfectly
              </p>
              <button className="serviceBtn">Get offer now</button>
            </div>
            <div className="serviceBodyRight ">
              <Image src={service2} alt="service" className="serviceImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Service;
