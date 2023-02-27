import "./CardSkill.css";
import cssIcon from "../../images/skillIcons/css-3.png";
import gatsbyIcon from "../../images/skillIcons/gatsby.png";
import gitIcon from "../../images/skillIcons/git.png";
import htmlIcon from "../../images/skillIcons/html5.png";
import jsIcon from "../../images/skillIcons/js.png";
import reduxIcon from "../../images/skillIcons/redux-icon.png";
import sassIcon from "../../images/skillIcons/sass.png";
import reactIcon from "../../images/skillIcons/science.png";

function getIcon(id) {
  switch (id) {
    case "Css":
      return cssIcon;
      break;
    case "Html5":
      return htmlIcon;
      break;
    case "Git":
      return gitIcon;
      break;
    case "JavaScript":
      return jsIcon;
      break;
    case "SASS":
      return sassIcon;
      break;
    case "Gatsby":
      return gatsbyIcon;
      break;
    case "Redux":
      return reduxIcon;
      break;
    case "React":
      return reactIcon;
      break;
  }
}

function CardSkill({ id }) {
  return (
    <div className="cardSkill">
      <img className={id} src={getIcon(id)} alt="noimage"></img>
      <p>{id}</p>
    </div>
  );
}

export default CardSkill;
