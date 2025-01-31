"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reward = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="reward">
      <Carousel responsive={responsive} infinite autoPlay draggable swipeable>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <div key={index}>
              <div
                style={{
                  width: "300px",
                  height: "400px",
                  borderRadius: "10px",
                  backgroundColor: "gray",
                }}
              ></div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default Reward;
