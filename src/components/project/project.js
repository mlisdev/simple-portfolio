import React from "react";
import "./project.scss";
import { StructuredText } from "react-datocms";
import GatsbyImage from "gatsby-plugin-image"; 


const Project = ({ projects }) => {
  console.log({ projects })
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
              {project.images.map((image) => {
                return (
                <>
                    {image.map((img, idx) => {
                      return (
                        <div><img key={idx} src={img} /></div>
                      )
                    }
                    )
                  }
                </>
                )

              }
              )
              }
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