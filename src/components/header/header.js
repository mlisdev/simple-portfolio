import React from "react";
import "./header.scss";
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo, At, Headphones } from "phosphor-react";

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-text hvr-grow">
                    Hello world <span role="img" aria-label="vulcan greeting">🖖🏻</span>
            </div>
        <div className="subhead">
            I'm <span className="accent">Steph</span>, a <span className="accent">web developer</span> & <span className="accent">librarian</span>. <br />
            I <span className="accent">dance</span> at my standing desk.
                </div>
                <div className="contact">
                    <a href="http://github.com/mlisdev" target="_blank" rel="noopener noreferrer"><GithubLogo color="#DD7564" weight="duotone" size={32} aria-label="github logo" /></a>
                  &nbsp; &nbsp; 
                  <a href="http://linkedin.com/in/srinehart" target="_blank" rel="noopener noreferrer" ><LinkedinLogo color="#DD7564" weight="duotone" size={32} aria-label="Linkedin logo" /></a>
                  &nbsp; &nbsp; 
        
                  <a href="http://instagram.com/heyrinehart" target="_blank" rel="noopener noreferrer" ><InstagramLogo color="#DD7564" weight="duotone" size={32} aria-label="Instagram logo" /></a>
                  &nbsp; &nbsp; 
                   
                  <a href="http://twitter.com/heyrinehart" target="_blank" rel="noopener noreferrer"><TwitterLogo color="#DD7564" weight="duotone" size={32} aria-label="Twitter logo" /></a>
                  &nbsp; &nbsp; 
                  <a href="mailto:hey@stephrinehart.com" target="_blank" rel="noopener noreferrer"><At color="#DD7564" weight="duotone" size={32} aria-label="At symbol for email" /></a>
                  &nbsp; &nbsp; 
                  <a href="https://open.spotify.com/user/rinehart?si=6EUUv_iYQgmJnegkLyocAg" target="_blank" rel="noopener noreferrer"><Headphones color="#DD7564" weight="duotone" size={32} aria-label="At symbol for email" /></a>
                </div>
        </div>
        </>
    )
    };

    export default Header;