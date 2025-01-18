import React from "react";
// import smallTattoo from "/Arts/01_Small_Tattoo.jpg";
// import largeTattoo from "/Arts/02_Large_Tattoo.jpg";
import Image from "next/image";
const Offers = () => {
  return (
    <div id="work">
      <h1 className="offerTitle container">
        Your Story, <br />
        <span className="offerspan">
          Inked the <span className="offerSpan2">TattooAdda</span> Way
        </span>
      </h1>
      <div className="offers container">
        <h2 className="offerHeader ">Limited-Time Offers</h2>
        <div className="offerLeft">
          <div className="offerCard">
            <Image
              src="/Arts/01_Small_Tattoo.jpg"
              alt="offer"
              className="smallTattoo"
            />
            <p className="offerCardPara">
              20+ flash tattoos for you, Choose any from this and get it in
            </p>
            <h2 className="offerCardHeader">Offer Price Rs 500/-</h2>
            <button className="offerBtn">See Designs</button>
          </div>
          <div className="offerCard offerCard2">
            <Image
              src="/Arts/02_Large_Tattoo.jpg"
              alt="offer"
              className="largeTattoo"
            />
            <p className="offerCardPara">
              200+ Big tattoos for you, Choose any from this and get it in
            </p>
            <h2 className="offerCardHeader">Offer Price Rs 14,XXX/-</h2>
            <button className="offerBtn">See Designs</button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Offers;
