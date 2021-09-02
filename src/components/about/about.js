import React from "react";
import "./about.scss";
import stephanie from "../../images/stephanie.jpg"
import { StructuredText } from "react-datocms";

const About = ({aboutParagraph, aboutImage}) => {
  const image = aboutImage.gatsbyImageData.images.fallback.src;
  return (
    <>
      <div className="about" id="about">
        <div className="about-col" id="about-text">
          <h1>about stephanie </h1>
          <StructuredText data={ aboutParagraph} />
      </div>
      <div className="about-col" id="about-photo">
          <center>
            <img src={image} />
        </center> 
      </div>
      

      </div>
    </>  
        );
      }


export default About;