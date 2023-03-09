import "./ProjectCard.css";
export default function ProjectCard({ ...data }) {
  return (
    <div className="Card" id={data.id}>
      <img src={data.img} className="Card__image" alt="no image found" />

      <div className="Card__container--text">
        <h4 className="Card__text--title">{data.title}</h4>
        <div className="Card__container--technologies">
          <h4 className="Card__text--techTitle">Technologies used:</h4>
          <div className="Card__container--techContainer">
            {data.technologies.map((technology) => (
              <p className="Card__text--technology">{technology}</p>
            ))}
          </div>
        </div>
        <ul className="Card__unorderedlist--list">
          {data.text.map((string) => (
            <li
              /*key={
                "key" + data.project + data.project.text.indexOf(data.project.text.string) 
              }*/
              className="Card__unorderedlist--text"
            >
              {string}
            </li>
          ))}
        </ul>
        <div className="Card__container--links">
          <a className="Card__link" href={data.liveLink} target="blank">
            Live
          </a>
          <a className="Card__link" href={data.repoLink} target="blank">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
}
