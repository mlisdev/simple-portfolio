import React from "react";
import "./skill.scss";
import { StructuredText } from "react-datocms";

const Skill = ( {skillList} ) => {
  // let category = skillList.category; 
  return (
    <section id="skills">
      <div className="skill-box">
        <h2>skills: library</h2>
      {skillList
        .filter(skill => skill.category === 'library')
        .map((skillList, idx) => {
        return (
          <ul>
            <li key={idx}>{skillList.skill}</li>
          </ul>
        )
      })}
      </div>
      <div className="skill-box">
        <h2>skills: software</h2>
      {skillList
        .filter(skill => skill.category === 'software')
        .map((skillList, idx) => {
        return (
          <ul>
            <li key={idx}>{skillList.skill}</li>
          </ul>
        )
      })}
      </div>
    </section>  
        );
      }


export default Skill;