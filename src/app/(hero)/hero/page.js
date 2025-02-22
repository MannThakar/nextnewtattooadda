import BlurText from "@/blocks/TextAnimations/BlurText/BlurText";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="container" id="home">
        <div className="mainDiv">
          <video preload="none" className="heroVideo" autoPlay muted loop>
            <source src="/Hero/BannerVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="heroContainer">
          <div className="heroText">
            <BlurText
              text="Crafting Masterpieces With"
              delay={200}
              animateBy="words"
              direction="top"
              className="animatedText"
            />
            <BlurText
              text=" Tattoo Adda"
              delay={200}
              animateBy="words"
              direction="top"
              className="heroSpan"
            />
          </div>
          <h4
            style={{ marginTop: "10px", textAlign: "center" }}
            className="heroSubText"
          >
            Safe, clean, and creative tattooing services.
          </h4>

          <div className="btnDiv">
            <Link href="https://wa.link/2c1gtv">
              <button className="heroBtn">Book Appointment</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
