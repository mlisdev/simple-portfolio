import React, { useState } from "react";
import { Link } from "gatsby"; 
import "./sidebar.scss";
import { IdentificationBadge, Lightning, Suitcase, Laptop, HouseLine } from "phosphor-react";

function Sidebar() {
    return (
        <div
            className="sidebar"
            id="sidebar"
            >
                <div className="nav" id="nav">
                <ul>
                    <li><IdentificationBadge color="#ed825f" size={28} className="icon"/> <Link to="#about">About</Link></li>
                    <li><Lightning color="#ed825f" size={28} className="icon"/> <Link to="#skills">Skills</Link></li>
                    <li><Suitcase color="#ed825f" size={28} className="icon"/> <Link to="#work">Work</Link></li>
                    <li><Laptop color="#ed825f" size={28} className="icon"/> <a href="http://blog.stephrinehart.com">Blog</a></li>
                    <li><HouseLine color="#ed825f" size={28} className="icon"/> <Link to="#">Home</Link></li>
                </ul>
                </div>
            </div>

    )
    };

    export default Sidebar;