import React from "react";
import "./header.scss";

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-text">
                    Hello world <span role="img" aria-label="vulcan greeting">🖖🏻</span>
            </div>
        <div className="subhead">
            I'm <span className="accent">Steph</span>, a <span className="accent">web developer</span> & <span className="accent">librarian</span>. <br />
            I <span className="accent">dance</span> at my standing desk. 
        </div>
        </div>
        </>
    )
    };

    export default Header;