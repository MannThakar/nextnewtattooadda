import React from "react";

import Image from "next/image";
const Offers = () => {
  return (
    <div id="work">
      <div className="container">
        <div className="smallTattoo">
          <Image
            src="/Arts/01_Small_Tattoo.jpg"
            alt="Offers"
            width={500}
            height={500}
            className="smallTattooImg"
          />
          <div className="smallTattooRight">
            <div className="smallTattooRightText">
              <h4>
                20+ flash tattoos for you, Choose any from this and get it in
              </h4>
              <p>
                Change up your look, play with your style, and experiment
                confidently with Inkbox, the ultimate self-expression accessory!
                Simply Prime, Place, and Peel, and in 24 hours your next
                expression will be fully developed and ready to make a bold
                statement
              </p>
              <h2>Offer Price Rs 499/-</h2>
              <button className="smallTattooRightBtn">Get offer now</button>
            </div>
          </div>
        </div>
        <div>
          <div className="smallTattooRight">
            <div className="smallTattooRightText">
              <h4>
                20+ flash tattoos for you, Choose any from this and get it in
              </h4>
              <p>
                Change up your look, play with your style, and experiment
                confidently with Inkbox, the ultimate self-expression accessory!
                Simply Prime, Place, and Peel, and in 24 hours your next
                expression will be fully developed and ready to make a bold
                statement
              </p>
              <h2>Offer Price Rs 499/-</h2>
              <button className="smallTattooRightBtn">Get offer now</button>
            </div>
          </div>
          <Image
            src="/Arts/02_Large_Tattoo.jpg"
            alt="Offers"
            width={500}
            height={500}
            className="bigTattooImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
