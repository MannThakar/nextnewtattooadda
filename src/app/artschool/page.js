import React from "react";
import "../artschool.css";
import Bestwork from "../(bestwork)/bestwork";
import WhyUs from "./(components)/WhyUs";
import Course from "./(components)/Course";
import Contact from "./(components)/Contact";
import Art from "./(components)/Art";

const page = () => {
  return (
    <main>
      <section className="heroBanner">
        <div className="heroBannerText">
          <h1>
            <span className="HeroTextHeading">Awaken</span> <br />
            <span className="heroTextSpan"> The Artist Within </span>
          </h1>
          <h4>Dream It, Ink It, Live It</h4>
          <p>
            An art school is a creative institution that teaches visual arts,
            design, and artistic techniques through hands-on training and
            theory.
          </p>
          <button className="heroBannerBtn">Book a free orientation </button>
        </div>
      </section>
      <section id="art">
        <Art />
      </section>
      <section id="course">
        <Course />
      </section>
      <section>
        <Bestwork />
      </section>
      <section id="whyUs">
        <WhyUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default page;
