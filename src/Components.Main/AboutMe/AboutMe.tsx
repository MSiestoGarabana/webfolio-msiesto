import React from "react";
import Header from "../Components.header/ComponentHeader";
import "./AboutMe.css";

function AboutMe() {
  return (
    <div id="aboutme">
      <Header heading="SOME INFO" title="ABOUT ME"></Header>
      <h4 className="aboutMe__Main">
        I'm a front-end web developer with a background in Audiovisual
        Communication. My 3 years of programming experience has given me a
        strong foundation for web development and building complex solutions. I
        am passionate about coding and solving problems through code, and I am
        excited to work alongside other amazing programmers and learn so much
        more!
      </h4>
    </div>
  );
}
export default AboutMe;
