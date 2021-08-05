import React from "react";
import Sidebar from "../components/sidebar/sidebar";
import Content from "../components/content/content";
import "./layout.scss"; 

export default function Layout({ pageMeta, children }) {
    return (
        <>
        <div className="main" id="background">
          <Sidebar />
          <Content>
            {children}
          </Content>
        </div>
        </>
    )
};

