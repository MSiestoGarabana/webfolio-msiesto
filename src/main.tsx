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
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <footer className="footer" id="bottom">
        <h4>This is a web by Miguel Siesto</h4>
      </footer>
    </div>
  );
}
export default Main;
