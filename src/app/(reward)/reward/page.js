"use client";
import CarouselCard from "@/common/CarouselCard";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CAROUSEL_DATA } from "../../../utils/constant";

const Reward = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <div className="rewardBox">
      <h2 className="RewardTitle container">
        TattooAdda <span className="RewardTitleSpan">Rewards</span>
      </h2>

      <Carousel responsive={responsive} infinite draggable swipeable>
        {CAROUSEL_DATA?.map((profile, index) => (
          <Link href={`/reward/${profile?.id}`} key={index}>
            <CarouselCard
              title={profile?.title}
              header={profile?.heading}
              color={profile?.color}
              key={index}
              image={profile?.image}
              payLater={profile?.payLater}
              subHeading={profile?.subHeading}
            />
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Reward;
