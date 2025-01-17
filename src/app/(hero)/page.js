import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="textDiv">
        <h2>Unleash Your Style,</h2>
        <h2>Wear Your Story,</h2>
        <h2>Embrace the Culture.</h2>
        <p>
          Welcome to Tattoo Adda, where your skin tells your story. Our talented
          artists bring your ideas to life, blending tradition with modern
          artistry to create tattoos that are as unique as you are. At
          <span>Tattoo Adda</span>Let us help you wear your passion proudly.
        </p>
      </div>
      <div className="mainDiv">
        <video preload="none" className="hero-video" autoPlay muted loop>
          <source src="/assets/Hero/Banner_Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
