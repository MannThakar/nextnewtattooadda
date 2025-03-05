import SpotlightCard from "@/blocks/Components/SpotlightCard/SpotlightCard";
import { WHY_US_DATA } from "@/utils/constant";
import React from "react";

const WhyUs = () => {
  return (
    <div className="container">
      <h2 className="offerTitles">Why Us?</h2>
      <div className="whyUs">
        {WHY_US_DATA.map((item, index) => (
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(255, 255, 255, 0.15)"
            key={index}
          >
            <div className="icons">{item.icons}</div>
            <h4 className="spolightCardTitle">{item.title}</h4>
            <p className="spotlightCardText">{item.description}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
