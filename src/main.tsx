import Header from "./Components.Main/Header/Header";
import AboutMe from "./Components.Main/AboutMe/AboutMe";
import Skills from "./Components.Main/Skills";
import Projects from "./Components.Main/Projects/Projects";
import Contact from "./Components.Main/Contact";

import './Main.css'

function Main() {
 return (
    <div className="Main">
        <Header/>
        <AboutMe/>
        <Skills/>
        <Projects/>
        <Contact/>
        <footer>
        </footer>
    </div>
  )
}
export default Main;
