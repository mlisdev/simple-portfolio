import React from "react";
import Navbar from "./navbar/navbar";
import Content from "../components/content/content";
import "./layout.scss"; 

export default function Layout({ pageMeta, children }) {
    return (
        <>
        <div className="main">
          <Navbar />
          {/* <Content> */}
            {children}
          {/* </Content> */}
        </div>
        </>
    )
};

