import React from "react";
import HeroSection from "./(hero)/hero/page";
import Service from "./(service)/service/page";
import Offers from "./(offers)/offers/page";
import Artist from "./(artist)/artist/page";
import FAQ from "./(faq)/faq/page";
import Bestwork from "./(bestwork)/bestwork";

import Reward from "./(reward)/reward/page";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

const Page = () => {
  return (
    <div>
      <HeroSection />

      <Service />

      <Offers />
      <Bestwork />
      <Artist />
      <Reward />

      <FAQ />
    </div>
  );
};

export default Page;
