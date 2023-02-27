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
  console.log(id);
  return gitIcon;
}

function CardSkill({ id }) {
  return (
    <div className="cardSkill">
      <img src={getIcon(id)} alt="noimage"></img>
      <p>{id}</p>
    </div>
  );
}

export default CardSkill;
