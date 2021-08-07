import React from "react";
import Navbar from "./navbar/navbar";
import Header from "../components/header/header"
import Contact from "../components/contact/contact"
import Content from "../components/content/content";
import "./layout.scss"; 

export default function Layout({ pageMeta, children }) {
    return (
        <>
        <div className="container">
          <Navbar />
          <Header />
          <Contact />
          {/* <Navbar /> */}
          {/* <Content> */}
            {children}
          {/* </Content> */}
        </div>
        </>
    )
};

