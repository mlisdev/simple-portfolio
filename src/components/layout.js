import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./navbar/navbar";
import Header from "../components/header/header"; 
import About from "../components/about/about"; 
import Skill from "../components/skill/skill"; 
import Project from "../components/project/project"; 
import Footer from "../components/footer/footer"; 
import "./layout.scss";
import { Helmet } from "react-helmet";

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
        originalId
      }
    }
  }
  allDatoCmsProjectContent {
    nodes {
      githublink
      images {
        alt
        gatsbyImageData(placeholder: BLURRED, width: 600, forceBlurhash: false)
        originalId
        fluid {
          src
        }
      }
      link
      title
      technologies {
        value
      }
      description {
        value
      }
      originalId
      id
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
        <div className="application">
        <Helmet>
        <title>{`Stephanie Rinehart | ${pageMeta.title}`}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="author" content="Stephanie Rinehart" />
          <meta property="og:title" content="Stephanie Rinehart | Librarian & Web Developer" />
          <meta property="og:description" content={pageMeta.description} />
          <meta property="og:image" content="http://stephrinehart.com/keepthis/social.png" />
          <meta property="og:url" content="http://stephrinehart.com" />
          <meta name="twitter:creator" content="@heyrinehart" />
          <meta name="description" content={pageMeta.description} />
          <meta name="keywords" content={pageMeta.keywords.join(',')} />
          
        </Helmet>
            <div className="container">
                <div className="background"></div>
          <Navbar />
          <Header />
            {children}
          <About
            aboutParagraph={queryData.allDatoCmsAboutPage.nodes[0].aboutText}
            aboutImage={queryData.allDatoCmsAboutPage.nodes[0].aboutImg} />
                
          <Skill
            skillList={queryData.allDatoCmsSkill.nodes} />
          

          <Project
            projects={queryData.allDatoCmsProjectContent.nodes}
            projectImages={queryData.allDatoCmsProjectContent.nodes.images}
          />

          <Footer />

          </div>
          </div>
</>
    )
};

