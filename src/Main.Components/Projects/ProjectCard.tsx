export default function ProjectCard({ ...data }) {
  return (
    <div className="projects__card" id={data.id}>
      <div className="IMG__container--projectCard">
        <img
          src={data.img}
          className="projects__image"
          alt="no image found"
        ></img>
      </div>
      <div className="projects__card--text">
        <div className="text__titleContainer">
          <h4>{data.title}</h4>
          <div>
            <h5>Technologies used</h5>
            {data.technologies.map((technology) => (
              <p>{technology}</p>
            ))}
          </div>
        </div>
        <div className="text__ulcontainer">
          <ul>
            {data.text.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        </div>
        <div className="links__container">
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
