import React from "react";
import HeroSection from "./(hero)/hero/page";
import Service from "./(service)/service/page";
import Offers from "./(offers)/offers/page";
import Artist from "./(artist)/artist/page";

const Page = () => {
  return (
    <div>
      <HeroSection />
      {/* <BestWork /> */}
      <Service />
      <Offers />
      <Artist />
    </div>
  );
};

export default Page;
