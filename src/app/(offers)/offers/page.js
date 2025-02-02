import React from "react";

import Image from "next/image";
import Link from "next/link";
const Offers = () => {
  return (
    <div id="work">
      <div className="container offerTattoo">
        <h2 className="offerTitles">
          Get Your Dream Tattoo at
          <span className="offerSpan"> Dream Prices</span>
        </h2>
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
              </p>
              <h2>Offer Price Rs 499/-</h2>
              <Link href="https://wa.link/2c1gtv">
                <button className="smallTattooRightBtn">Get offer now</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="smallTattoo largeTattoo">
          <Image
            src="/Arts/02_Large_Tattoo.jpg"
            alt="Offers"
            width={500}
            height={500}
            className="smallTattooImg"
          />
          <div className="smallTattooRight">
            <div className="smallTattooRightText">
              <h4>
                200+ Big tattoos for you, Choose any from this and get it in
              </h4>
              <p>
                Change up your look, play with your style, and experiment
                confidently with Inkbox, the ultimate self-expression accessory!
              </p>
              <h2>Offer Price Rs 10,XXX/-</h2>
              <Link href="https://wa.link/2c1gtv">
                <button className="smallTattooRightBtn">Get offer now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
