import React from "react";
import HeroSection from "./(hero)/hero/page";
import Service from "./(service)/service/page";
import Offers from "./(offers)/offers/page";
import Artist from "./(artist)/artist/page";
import FAQ from "./(faq)/faq/page";
import Bestwork from "./(bestwork)/bestwork";

import Reward from "./(reward)/reward/page";
import NavbarSecond from "@/common/NavbarSecond";

const Page = () => {
  return (
    <div>
      <NavbarSecond />
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
