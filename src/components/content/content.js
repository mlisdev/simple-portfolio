import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import "./content.scss"; 

const Content = () => {
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
    <div className="content">
      <div className="header">
        <span className="head">Hello world <span role="img" aria-label="vulcan greeting">🖖🏻</span></span> 
      </div>
      <div className="about">
        I'm Steph, a <mark>librarian</mark> and <mark>web developer</mark> based in New England.<br />
      </div>
{/* 
      {data.allDatoCmsProjectContent.nodes.map((proj) => {
        return(
        <>
        {proj.title}
          </>
        )
        }
      )
    } */}
    </div>           
        );
      }


export default Content