import React from "react";
import CardHeader from "../Components.header/ComponentHeader";
import CardSkill from "./CardSkill";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skills__body">
      <CardHeader heading="CHECK OUT MY" title="SKILLS"></CardHeader>
      <div className="skills__container">
        <CardSkill id="React"></CardSkill>
        <CardSkill id="Redux"></CardSkill>
        <CardSkill id="Gatsby"></CardSkill>
        <CardSkill id="SASS"></CardSkill>
        <CardSkill id="JavaScript"></CardSkill>
        <CardSkill id="Git"></CardSkill>
        <CardSkill id="Html5"></CardSkill>
        <CardSkill id="Css"></CardSkill>
      </div>
    </div>
  );
}
export default Skills;
