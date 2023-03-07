import React from "react";
import Header from "../Components.header/ComponentHeader";
import IMGAirbnb from "../../images/Airbnb.jpg";
import IMGCalculator from "../../images/Calculator.jpg";
import IMGCssLogos from "../../images/CSSlogos.jpg";
import IMGPomodoro from "../../images/Pomodoro.jpg";
import IMGRandomQuote from "../../images/RandomQuote.jpg";
import IMGReactTps from "../../images/React + TypeScript.jpg";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects__body">
      <Header heading="TAKE A LOOK AT MY" title="PROJECTS" />
      <div className="projects__main">
        <div id="airBnb__Card" className="projects__card">
          <div className="IMG__container--projectCard">
            <img className="projects__image" src={IMGAirbnb}></img>
          </div>
          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>Airbnb Landing Page</h4>
              <div>
                <h5>Technologies used</h5>{" "}
                <a className="technology-link">React</a> <a>ES6</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>Copy of Airbnb's 2020 landing page. </li>
                <li>Built using React´s function Components and plain CSS </li>
              </ul>
            </div>
            <div className="links__container">
              <a
                href="https://airbnb-landing-page-clone-bymiguelsiesto.vercel.app/"
                target="blank"
              >
                Live
              </a>
              <a
                href="https://github.com/MSiestoGarabana/airbnb-landing-page-clone"
                target="blank"
              >
                Repository
              </a>
            </div>
          </div>
        </div>

        <div id="calculator__Card" className="projects__card">
          <div className="IMG__container--projectCard">
            <img
              id="calculator__img"
              className="projects__image"
              src={IMGCalculator}
            ></img>
          </div>
          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>JavaScript Calculator</h4>
              <div>
                <h5>Technologies used</h5>{" "}
                <a className="technology-link">React</a> <a>JavaScript(ES6)</a>{" "}
                <a>CSS</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>Functional calculator built using pure JavaScrip </li>
                <li>Built as part of the FreeCodeCamp Frontend Projects </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="RandomQuotes__Card" className="projects__card">
          <div className="IMG__container--projectCard">
            <img className="projects__image" src={IMGRandomQuote}></img>
          </div>
          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>Random Quote Generator</h4>
              <div>
                <h5>Technologies used</h5>{" "}
                <a className="technology-link">React</a> <a>ReactQuery</a>{" "}
                <a>MUI</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>
                  Random Quote generator built using a couple libraries, such
                  as: ReactQuery and MaterialUserInterface{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="CssLogos__Card" className="projects__card">
          <div className="IMG__container--projectCard">
            <img className="projects__image" src={IMGCssLogos}></img>
          </div>
          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>CSS Logos</h4>
              <div>
                <h5>Technologies used</h5>{" "}
                <a className="technology-link">CSS</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>Logos built using plain CSS </li>
                <li>::before and ::after were pretty usefull for this one</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="pomodoro__Card" className="projects__card">
          <div className="IMG__container--projectCard">
            <img className="projects__image" src={IMGPomodoro}></img>
          </div>
          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>Pomodoro Timer</h4>
              <div>
                <h5>Technologies used</h5> <a>JavaScript(ES6)</a> <a>HTML</a>{" "}
                <a>CSS</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>Pomodor Timer</li>
                <li>useState allows user to custom different options</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects__card">
          <div className="IMG__container--projectCard">
            <img className="projects__image" src={IMGReactTps} />
          </div>

          <div className="projects__card--text">
            <div className="text__titleContainer">
              <h4>JavaScript Calculator</h4>
              <div>
                <h5>Technologies used</h5>{" "}
                <a className="technology-link">TypeScript</a> <a>HTML</a>
              </div>
            </div>
            <div className="text__ulcontainer">
              <ul>
                <li>Functional calculator built using pure JavaScrip </li>
                <li>Built as part of the FreeCodeCamp Frontend Projects </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
