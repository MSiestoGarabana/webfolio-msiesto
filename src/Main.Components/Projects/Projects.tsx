import Header from "../Components.header/ComponentHeader";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";

function Projects() {
  return (
    <div className="projects__main">
      <Header heading="TAKE A LOOK AT MY" title="PROJECTS" />
      <div className="projects__container">
        {projectsData.map((data) => (
          <ProjectCard {...data} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
