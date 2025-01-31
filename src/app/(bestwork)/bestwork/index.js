"use client";

import { BESTWORK_IMAGES } from "@/utils/constant";
import Image from "next/image";

const Bestwork = () => {
  return (
    <div id="artist" className="bestwork">
      <div className="container">
        <h2 className="offerTitles">
          Best Work <span className="offerSpan">Boldest Ink!</span>
        </h2>
        <div className="bestworkGrid">
          {BESTWORK_IMAGES?.map((profile, index) => (
            <Image
              key={index}
              src={profile}
              alt="artist"
              className="bestworkImg"
              width={300}
              height={300}
            />
          ))}
        </div>
        <div className="bestworkBtnDiv">
          <button className="bestworkBtn">See more</button>
        </div>
      </div>
    </div>
  );
};

export default Bestwork;
