import React from "react";

const About = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Version 1.0.0</p>
    </div>
  );
};

About.defaultProps = {
  title: "The About Page",
};

export default About;
