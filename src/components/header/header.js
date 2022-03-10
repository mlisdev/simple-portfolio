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
                    <a href="http://github.com/mlisdev" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <GithubLogo color="#00473e" weight="duotone" size={32} />
                    </a>
                  &nbsp; &nbsp; 
                    <a href="http://linkedin.com/in/srinehart" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" >
                        <LinkedinLogo color="#00473e" weight="duotone" size={32} />
                    </a>
                  &nbsp; &nbsp; 
        
                    <a href="http://instagram.com/heyrinehart" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramLogo color="#00473e" weight="duotone" size={32} />
                    </a>
                  &nbsp; &nbsp; 
                    <a href="mailto:hey@stephrinehart.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                        <At color="#00473e" weight="duotone" size={32} />
                    </a>
                </div>
        </div>
        </>
    )
    };

    export default Header;