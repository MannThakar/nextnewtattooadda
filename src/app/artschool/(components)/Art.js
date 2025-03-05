"use client";
import CircularText from "@/blocks/TextAnimations/CircularText/CircularText";
import React from "react";

import Image from "next/image";

const Art = () => {
  return (
    <div className="art container">
      <div className="artText">
        <h1>Art is Not What You See, But What You Feel</h1>
        <h4>Turning Imagination into Reality</h4>
        <p>
          A Tattoo Art School is a specialized institution that teaches aspiring
          tattoo artists the skills and techniques needed to create professional
          tattoos. These schools offer courses on tattoo design, hygiene and
          safety, skin anatomy, machine handling, and business practices.
          Students learn through hands-on training, working with practice skins
          and live models under expert supervision. Many schools also provide
          certification, helping artists meet industry standards and legal
          requirements.
        </p>
        <CircularText
          text="Tattoo Adda | Tattoo Adda | Tattoo Adda | Tattoo Adda |"
          onHover="speedUp"
          spinDuration={20}
          className="artCircularText"
        />
      </div>
      <div className="artImage">
        <Image
          src="/artschool/05_Banner.jpg"
          alt="individualImage"
          width={300}
          height={200}
          className="individualImage"
        />
      </div>
    </div>
  );
};

export default Art;
