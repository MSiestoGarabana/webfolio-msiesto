import "./ProjectCard.css";
export default function ProjectCard({ ...data }) {
  return (
    <div className="projects__card" id={data.id}>
      <img src={data.img} className="projects__image" alt="no image found" />

      <div className="Card__container--text">
        <h4>{data.title}</h4>
        <div className="Card__container--technologies">
          <h5>Technologies used:</h5>
          {data.technologies.map((technology) => (
            <p>{technology}</p>
          ))}
        </div>
        <ul>
          {data.text.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
        <div className="Card__container--links">
          <a href={data.liveLink} target="blank">
            Live
          </a>
          <a href={data.repoLink} target="blank">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
