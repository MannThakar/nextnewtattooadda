import React from "react";
import HeroSection from "./(hero)/hero/page";
import Service from "./(service)/service/page";
import Offers from "./(offers)/offers/page";
import Artist from "./(artist)/artist/page";
import FAQ from "./(faq)/faq/page";
import Bestwork from "./(bestwork)/bestwork";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <Offers />
      <Bestwork />
      <Artist />
      <FAQ />
    </div>
  );
};

export default Page;
