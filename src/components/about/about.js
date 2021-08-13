import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "./about.scss"; 

const About = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query MyQuery {
  //       allDatoCmsProjectContent {
  //         nodes {
  //           id
  //           githublink
  //           description {
  //             value
  //           }
  //           link
  //           originalId
  //           title
  //           technologies {
  //             value
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  
  const aboutData = useStaticQuery(
    graphql`
      query About{
  allDatoCmsAboutPage {
    nodes {
      aboutHeadline
      aboutText {
        value
      }
      aboutImg {
        alt
        gatsbyImageData(placeholder: BLURRED, width: 600, forceBlurhash: false)
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
            <GatsbyImage image={aboutData.allDatoCmsAboutPage.aboutImg.gatsbyImageData} />
            </center> 
          </div>
          <div className="about-text">
          <h1>About Steph</h1>

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