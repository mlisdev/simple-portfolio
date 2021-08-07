import React, { useState } from "react";
import { Link } from "gatsby"; 
import "./navbar.scss";

function navbar() {
    return (
        <nav className="nav-links">
            <ul>
            <li><Link to="#about">about</Link></li>
            <li><Link to="#skills">skills</Link></li>
            <li><Link to="#work">work</Link></li>
            <li><Link to="#resume">resume</Link></li>
            <li><a href="http://blog.stephrinehart.com">blog</a></li>

            </ul>
        </nav>

    )
    };

    export default navbar;