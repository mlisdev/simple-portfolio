import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Steph from "../../images/steph.png";
import "./about.scss"; 

const About = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allDatoCmsProjectContent {
          nodes {
            id
            githublink
            description {
              value
            }
            link
            originalId
            title
            technologies {
              value
            }
          }
        }
      }
    `
  )
  

  return (
    <>
      <div className="about" id="about">
      <div className="about-photo">
        <center>
            <img src={Steph} alt="site author, girl with pink hair holding a coffee cup" />
            </center> 
          </div>
          <div className="about-text">
          <h1>About Steph</h1>
                I am a solutions-oriented software engineer, dedicated to problem solving and clean design.
              <blockquote>I am "a victim of a series of accidents, as are we all.”
              - Vonnegut.
        </blockquote>
              <p>
                After working with community colleges for years, I decided I wanted to get my Master's Degree and explore a second career. I earned my MLIS in 2018 and it's the single thing I'm most proud of in this world.
                   </p>
              <p>
                I have worked in jobs focused on partnership management, relationship building, and customer success.
                 </p>
              <p>
                I believe front end web design should be ADA accessible, crisp, and clear.
              Back end web development should be secure, easy to navigate, and designed to improve the user experience.
              </p>
              </div>
      {/* {data.allDatoCmsProjectContent.nodes.map((proj) => {
        return(
        <>
        {proj.title}
          </>
        )
        }
      )
    }  */}
      </div>
    </>  
        );
      }


export default About;