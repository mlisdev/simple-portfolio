import React from "react";
import Navbar from "./navbar/navbar";
import Content from "../components/content/content";
import Header from "../components/header/header"
import "./layout.scss"; 

export default function Layout({ pageMeta, children }) {
    return (
        <>
        <div className="container">
          <Header />
          {/* <Navbar /> */}
          {/* <Content> */}
            {children}
          {/* </Content> */}
        </div>
        </>
    )
};

