import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar/navbar";
import Header from "../components/header/header"; 
import About from "../components/about/about"; 
import "./layout.scss"; 

export default function Layout({ pageMeta, children, data }) {
    const queryData = useStaticQuery(
      graphql`
        query MyQuery {
          allDatoCmsAboutPage {
              nodes {
              aboutHeadline
              aboutText {
                  value
              }
              aboutImg {
                  gatsbyImageData(placeholder: BLURRED, width: 600, forceBlurhash: false)
                  alt
              }
              }
          }
          allDatoCmsProjectContent {
              nodes {
              githublink
              id
              images {
                  gatsbyImageData
              }
              link
              technologies {
                  value
              }
              title
              description {
                  value
              }
              }
      }
      }
      `
    )
    
    return (
        <>
            <div className="container">
                <div className="background"></div>
          <Navbar />
          <Header />
                <About
                    aboutParagraph={queryData.allDatoCmsAboutPage.nodes[0].aboutText}
                    aboutImage={queryData.allDatoCmsAboutPage.nodes[0].aboutImg} />
            {children}
        </div>
        </>
    )
};

