import React from "react";
import { Link } from "gatsby"; 
import "./sidebar.scss"; 

export default function Sidebar({ data }) {
    return (
            <div className="sidebar">
                <div className="vertical-line1"></div>
                <div className="nav">
                <ul>
                    <li><Link to="#about">About</Link></li>
                    <li><Link to="#skills">Skills</Link></li>
                    <li><Link to="#work">Work</Link></li>
                    <li><Link to="http://blog.stephrinehart.com">Blog</Link></li>
                    <li><Link to="#">Home</Link></li>
                </ul>
                </div>
            <div className="vertical-line2"></div>
            </div>

    )
};