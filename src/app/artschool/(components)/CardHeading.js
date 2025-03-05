import React from "react";

const CardHeading = ({ duration, heading, subHeading, isSmall }) => {
  return (
    <section className={isSmall ? "cardHeadingSmall" : "cardHeading"}>
      <h4 className={isSmall ? "courseHeadingSmall" : "courseHeading"}>
        <div className="courseSpan"></div>
        {duration}
      </h4>
      <h2 className={isSmall ? "courseSubHeadingSmall" : "courseSubHeading"}>
        {heading}
      </h2>
      <h3
        className={
          isSmall ? "courseSecondSubHeadingSmall" : "courseSecondSubHeading"
        }
      >
        {subHeading}
      </h3>
      <button className={isSmall ? "enrollButtonSmall" : "enrollButton"}>
        Enroll Now
      </button>
    </section>
  );
};

export default CardHeading;
