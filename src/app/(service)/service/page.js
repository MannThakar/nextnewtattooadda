import React from "react";
import Image from "next/image";
import Link from "next/link";

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
                <Link href="https://api.whatsapp.com/send?phone=919016844441&text=Hi%20Team%20Tattoo%20Adda%F0%9F%A4%A9%2C%0AI%20am%20reserving%20a%20Special%20On-Table%20Offer%20from%20the%20Tattoo%20Adda%20website.%20Please%20update%20me%20about%20it">
                  <button className="serviceBtn">Get offer now</button>
                </Link>
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
