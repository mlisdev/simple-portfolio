import React from "react";
import "./about.scss";
import { StaticImage } from "gatsby-plugin-image"
import stephanie from "../../images/stephanie.jpg"

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about-col" id="about-text">
          <h1>the short : </h1><br />
          

      </div>
      <div className="about-col" id="about-photo">
          <center>
            <img
              // src="../../images/stephanie.jpg"
              src={stephanie} />
        </center> 
      </div>
      

      </div>
    </>  
        );
      }


export default About;