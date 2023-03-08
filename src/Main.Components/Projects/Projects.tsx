import Header from "../Components.header/ComponentHeader";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";

const projectsData = [];

function Projects() {
  return (
    <div className="projects__main">
      <Header heading="TAKE A LOOK AT MY" title="PROJECTS" />
      <ProjectsCard id={"airBnb"} />
      <ProjectsCard id={"calculator"} />
      <ProjectsCard id={"randomQuotes"} />
      <ProjectsCard id={"cssLogos"} />
      <ProjectsCard id={"pomodoro"} />
      <ProjectsCard id={"typeScriptTrial"} />
    </div>
  );
}
export default Projects;
