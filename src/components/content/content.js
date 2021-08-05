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
        <span className="head">hello world</span>
      </div>
      updog: 
      {data.allDatoCmsProjectContent.nodes.map((proj) => {
        return(
        <>
        {proj.title}
          </>
        )
        }
      )
    }
    </div>           
        );
      }


export default Content