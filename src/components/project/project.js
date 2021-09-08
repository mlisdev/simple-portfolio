import React from "react";
import "./project.scss";
import { StructuredText } from "react-datocms";
import GatsbyImage from "gatsby-plugin-image"; 


const Project = ({ projects }) => {
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
              <label>Description:</label> <StructuredText data={project.description} />
              <label>Technologies used:</label> <StructuredText data={project.technologies} />
                  <div className="gallery">
              {project.images.map((image) => {
                return (
                  <img src={image.fluid.src} alt={image.alt} />
                )

              }
              )
              }
                  </div>
            </div>
              )
        })
        }
            
      </div>
    </section>
  )
;
      }


export default Project;