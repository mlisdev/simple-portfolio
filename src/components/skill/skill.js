import React from "react";
import "./skill.scss";

const Skill = ( {skillList} ) => {
  // let category = skillList.category; 
  return (
    <section id="skills">
      <div className="skill-box">
        <h3>skills: library</h3>
      {skillList
        .filter(skill => skill.category === 'library')
        .map((skillList) => {
        return (
          <ul key={skillList.id}>
            <li key={skillList.id}>{skillList.skill}</li>
          </ul>
        )
      })}
      </div>
      <div className="skill-box">
        <h3>skills: software</h3>
      {skillList
        .filter(skill => skill.category === 'software')
        .map((skillList) => {
        return (
          <ul key={skillList.id}>
            <li key={skillList.id}>{skillList.skill}</li>
          </ul>
        )
      })}
      </div>
    </section>  
        );
      }


export default Skill;