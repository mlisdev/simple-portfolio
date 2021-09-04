import React from "react";
import "./about.scss";
import stephanie from "../../images/stephanie.jpg"
import { StructuredText } from "react-datocms";

const About = ({aboutParagraph, aboutImage}) => {
  const image = aboutImage.gatsbyImageData.images.fallback.src;
  return (
    <>
      <div className="header-row" id="about-head">
          <h1>about stephanie</h1>

      </div>
      <div className="about" id="about">
        <div className="about-col" id="about-text">
          <StructuredText data={ aboutParagraph} />
      </div>
      <div className="about-col" id="about-photo">
          <center>
            <img src={image} className="hvr-grow-rotate" />
        </center> 
      </div>
      

      </div>
    </>  
        );
      }


export default About;