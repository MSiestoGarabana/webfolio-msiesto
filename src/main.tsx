import Header from "./Main.Components/Header/Header";
import AboutMe from "./Main.Components/AboutMe/AboutMe";
import Skills from "./Main.Components/Skills/Skills";
import Projects from "./Main.Components/Projects/Projects";
import Contact from "./Main.Components/Contact/Contact";

import "./main.css";

/* "invisible go-to´s are meant to serve as an anchor point for onClick go-to events hosted in NavBar-Component" */

function Main() {
  return (
    <div id="goto__home" className="Main">
      <Header />
      <div id="goto__aboutme" className="invisible__goto">
        aboutme
      </div>
      <AboutMe />
      <div id="goto__skills" className="invisible__goto">
        skills
      </div>
      <Skills />
      <div id="goto__projects" className="invisible__goto">
        projects
      </div>
      <Projects />
      <Contact />
      <footer className="footer" id="goto__bottom">
        <h4>This is a web by Miguel Siesto</h4>
      </footer>
    </div>
  );
}
export default Main;
