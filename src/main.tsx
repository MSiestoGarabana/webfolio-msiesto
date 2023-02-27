import Header from "./Components.Main/Header/Header";
import AboutMe from "./Components.Main/AboutMe/AboutMe";
import Skills from "./Components.Main/Skills/Skills";
import Projects from "./Components.Main/Projects/Projects";
import Contact from "./Components.Main/Contact/Contact";

import "./Main.css";

function Main() {
  return (
    <div id="home" className="Main">
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
      <footer className="footer" id="bottom">
        <h4>This is a web by Miguel Siesto</h4>
      </footer>
    </div>
  );
}
export default Main;
