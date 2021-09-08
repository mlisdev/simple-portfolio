import React from "react";
import "./about.scss";
import read from "../../images/read.jpg";
import kayak from "../../images/kayak.jpg";
import bike from "../../images/bike.jpg";
import { StructuredText } from "react-datocms";

const About = ({aboutParagraph, aboutImage}) => {
  const image = aboutImage.gatsbyImageData.images.fallback.src;
  return (
    <>
      <section className="about-section"  id="about">
      <div className="header-row">
          <h1>about stephanie</h1>

      </div>
      <div className="about">
        <div className="about-col" id="about-text">
          <StructuredText data={ aboutParagraph} />
      </div>
      </div>
        <div className="photo-grid">
        <div className="grid-box">
          <img src={image}
            alt="steph, the site author, with orange hair"/>
        </div>
        <div className="grid-box">
          <img src={read}
            alt="laying in a hammock, holding up a book"/>
        </div>
        <div className="grid-box">
          <img src={kayak}
            alt="feet propped up on the front of a kayak, in the water" />
        </div>
        <div className="grid-box">
          <img src={bike}
            alt="looking down at feet and a road bike"/>
          </div>
        </div>
        <center>
            <button>
                <a href="https://drive.google.com/file/d/1kSqEpv76MC_-Y4ryFqc5ikRcnN2uvydr/view?usp=sharing" target="_blank" rel="noopener noreferrer">View my resume</a>
            </button>
            </center>
        </section>
      </>
      
        );
      }


export default About;