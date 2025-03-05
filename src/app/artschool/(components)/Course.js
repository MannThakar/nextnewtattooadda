import React from "react";
import CardHeading from "./CardHeading";

const Course = () => {
  return (
    <div className="parent">
      <div className="div5">
        <CardHeading
          duration="6 Months"
          heading="Diploma Course in Tattoo Art"
          subHeading="Full Time Certificated Course "
          isSmall={false}
        />
      </div>
      <div className="div6">
        <CardHeading
          duration="3 Months"
          heading="Complete Course in Tattoo Art"
          subHeading="Full Time Certificated Course"
          isSmall
        />
      </div>
      <div className="div7">
        <CardHeading
          duration="45 Days"
          heading="Diploma Course in Tattoo Art"
          subHeading="Full Time Certificated Course"
          isSmall
        />
      </div>
    </div>
  );
};

export default Course;
