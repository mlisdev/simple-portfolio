import React from "react";
import "./project.scss";
import { StructuredText } from "react-datocms";

const Project = ({ projects, projectImages }) => {
    return (  
      <section id="work">
        <div className="header-row">
          <h2>my work</h2>
          </div>
          <div className="project-list">
          {projects.map((project, idx) => {
            return (
            <div className="project-box" key={idx}>
                <h3>{project.title}</h3>
                <br />
                <StructuredText data={project.description} />
                <StructuredText data={project.technologies} />

              </div>
            )
          })}
          </div>
    </section>  
        );
      }


export default Project;