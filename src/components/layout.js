import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar/navbar";
import Header from "../components/header/header"; 
import About from "../components/about/about"; 
import Skill from "../components/skill/skill"; 
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
        alt
        gatsbyImageData(placeholder: BLURRED, width: 600, forceBlurhash: false)
      }
    }
  }
  allDatoCmsProjectContent {
    nodes {
      githublink
      images {
        alt
        gatsbyImageData(placeholder: BLURRED, width: 600, forceBlurhash: false)
      }
      link
      title
      technologies {
        value
      }
      description {
        value
      }
    }
  }
  allDatoCmsSkill {
    nodes {
      skill
      category
      id
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
            {children}
                <About
                    aboutParagraph={queryData.allDatoCmsAboutPage.nodes[0].aboutText}
                    aboutImage={queryData.allDatoCmsAboutPage.nodes[0].aboutImg} />
                
                <Skill
            skillList={queryData.allDatoCmsSkill.nodes}
                />
        </div>
        </>
    )
};

