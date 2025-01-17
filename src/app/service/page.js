import React from "react";
import Image from "next/image";
import service2 from "../../../public/assets/Service/02_Service.jpeg";

const Service = () => {
  return (
    <div className="service">
      <div className="container">
        <div className="serviceHeader">
          <h2 className="serviceTitle">
            More to <span className="discover">discover</span>
          </h2>
        </div>
        <div className="serviceBody">
          <div className="serviceBodyLeft">
            <h2 className="serviceBodyLeftTitle">
              Get <span className="offer">Personalised Offer*</span> on the
              table
            </h2>
          </div>
          <div className="serviceBodyRight">
            <Image src={service2} alt="service" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
