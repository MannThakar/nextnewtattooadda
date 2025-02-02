import React from "react";

const CarouselCard = ({ title, header, color, image, subHeading }) => {
  return (
    <div
      className="carouselCard"
      style={{
        backgroundColor: color,
        backgroundImage: `url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h4 className="carouselCardTitle">{title}</h4>
      <h3 className="carouselCardHeader">{header}</h3>
      {subHeading && <h3 className="carouselCardSubHeader">{subHeading}</h3>}
    </div>
  );
};

export default CarouselCard;
