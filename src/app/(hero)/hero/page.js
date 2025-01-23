const HeroSection = () => {
  return (
    <>
      <div className="container" id="home">
        <div className="mainDiv">
          <video preload="none" className="hero-video" autoPlay muted loop>
            <source src="/Hero/BannerVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="heroContainer">
          <div className="textDiv">
            <h2>Crafting Masterpieces That Last Forever.</h2>
            <h4>Safe, clean, and creative tattooing services.</h4>
          </div>
          <div className="btnDiv">
            <button className="heroBtn">Book Appointment</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
