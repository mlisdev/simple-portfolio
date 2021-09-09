import React from "react";
import "./project.scss";
import { StructuredText } from "react-datocms"; 
import { GithubLogo, Link } from "phosphor-react";

const Project = ({ projects }) => {
  return (
    <section id="work">
      <div className="header-row">
        <h2>my work</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => {
          return (
            <div className="project-box" key={project.id}>
              <div className="project-header">
                <h3>{project.title}</h3>
                <p><GithubLogo color="#00473e" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span> <a href={project.githublink} target="_blank" rel="noopener noreferrer">Github Repo</a></span>
                </p>
                <p><Link color="#00473e" weight="duotone" size={20} aria-label="Web browser icon" className="icon"/>
                        <span> <a href={project.link} target="_blank" rel="noopener noreferrer">Deployed Project</a></span>
                </p>
              </div>
              <b>Description:</b> <StructuredText data={project.description} />
              <b>Technologies used:</b> <StructuredText data={project.technologies} />
                  <div className="gallery">
              {project.images.map((image) => {
                return (
                  <img src={image.fluid.src}
                    alt={image.alt}
                    key={image.originalId} />
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