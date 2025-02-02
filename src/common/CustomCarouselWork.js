"use client";
import React from "react";
import Image from "next/image";
import { BESTWORK_IMAGES } from "@/utils/constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
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
const CustomCarouselWork = () => {
  return (
    <div>
      <Carousel responsive={responsive} autoPlay loop>
        {BESTWORK_IMAGES?.map((profile, index) => (
          <Image
            key={index}
            src={profile}
            alt="artist"
            className="customCarouselWorkImg"
            width={400}
            height={400}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CustomCarouselWork;
