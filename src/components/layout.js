import React from "react";
import Navbar from "./navbar/navbar";
import Header from "../components/header/header"; 
import About from "../components/about/about"; 
import "./layout.scss"; 

export default function Layout({ pageMeta, children }) {
    return (
        <>
        <div className="container">
          <Navbar />
          <Header />
          <About />
            {children}
        </div>
        </>
    )
};

