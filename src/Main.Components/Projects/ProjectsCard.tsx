import React from "react";
import IMGAirbnb from "../../images/Airbnb.jpg";
import IMGCalculator from "../../images/Calculator.jpg";
import IMGCssLogos from "../../images/CSSlogos.jpg";
import IMGPomodoro from "../../images/Pomodoro.jpg";
import IMGRandomQuote from "../../images/RandomQuote.jpg";
import IMGReactTps from "../../images/React + TypeScript.jpg";

const projectsData = {
  airBnb: {
    img: IMGAirbnb,
    title: "Airbnb Landing Page",
    technologies: ["React", "ES6"],
    text: [
      "Copy of Airbnb´s 2020 landing page.",
      "Built using React´s function components and plain Css.",
    ],
    liveLink: "https://airbnb-landing-page-clone-bymiguelsiesto.vercel.app/",
    repoLink: "https://github.com/MSiestoGarabana/airbnb-landing-page-clone",
  },
  calculator: {
    img: IMGCalculator,
    title: "JavaScript Calculator",
    technologies: ["React", "JavaScript(ES6)", "CSS"],
    text: [
      "Functional calculator built using pure JavaScript",
      "Built as part of the FreeCodeCamp Frontend Projects",
    ],
    liveLink: "https://calculator-delta-lyart.vercel.app/",
    repoLink: "https://github.com/MSiestoGarabana/calculator",
  },
  randomQuotes: {
    img: IMGRandomQuote,
    title: "Random Quote Generator",
    technologies: ["React", "ReactQuery", "MUI"],
    text: [
      "Random Quote generator built using a couple libraries, such as: ReactQuery and MaterialUserInterface",
    ],
    liveLink: "https://random-quote-generator-libraries.vercel.app/",
    repoLink:
      "https://github.com/MSiestoGarabana/random-quote-generator-libraries",
  },
  cssLogos: {
    img: IMGCssLogos,
    title: "CSS Logos",
    technologies: ["CSS"],
    text: [
      "Logos built using plain CSS",
      "::before and ::after were pretty usefull for this one",
    ],
    liveLink: "",
    repoLink: "https://github.com/MSiestoGarabana/CSS-logos",
  },
  pomodoro: {
    img: IMGPomodoro,
    title: "Pomodoro method",
    technologies: ["JavaScript(ES6)", "HTML", "CSS"],
    text: ["useState allows user to custom different options"],
    liveLink: "https://pomodoro-timer-sepia-seven.vercel.app/",
    repoLink: "https://github.com/MSiestoGarabana/pomodoro-timer",
  },
  typeScriptTrial: {
    img: IMGReactTps,
    title: "TypesScript+React",
    technologies: ["React", "TypeScript", "CSS"],
    text: [
      "Built following a tutorial by Fernando Herrera",
      "I find strict typing really usefull",
    ],
    liveLink: "https://react-typescript-wheat-eight.vercel.app/",
    repoLink: "https://github.com/MSiestoGarabana/react-typescript",
  },
};

export default function ProjectsCard({ id }) {
  return (
    <div className="projects__card" id={id}>
      <div className="IMG__container--projectCard">
        <img
          src={projectsData[id].img}
          className="projects__image"
          alt="no image found"
        ></img>
      </div>
      <div className="projects__card--text">
        <div className="text__titleContainer">
          <h4>{projectsData[id].title}</h4>
          <div>
            <h5>Technologies used</h5>
            {projectsData[id].technologies.map((technology) => (
              <p>{technology}</p>
            ))}
          </div>
        </div>
        <div className="text__ulcontainer">
          <ul>
            {projectsData[id].text.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
        <div className="links__container">
          <a href={projectsData[id].liveLink} target="blank">
            Live
          </a>
          <a href={projectsData[id].repoLink} target="blank">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
