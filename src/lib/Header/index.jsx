import "./styles/Header.css"
import {Link} from 'react-scroll'
import HamburgerImage from "./assets/hamburger.png"
import { useCallback, useState } from "react";

const Header = () => {

    const renderDropdown = () => (
        null
    );

    return (
        <div className="Header-container">
            <nav>
                <a className="Header-name" href="">SR</a>
                <div className="Header-links-container">
                    <a href="https://firebasestorage.googleapis.com/v0/b/site-c9851.appspot.com/o/samirrazaresume.pdf?alt=media&token=b341af14-800e-4baa-b403-9f5f8290b852" target="_blank" rel="noopener noreferrer" className="Header-link">
                        Resume
                    </a>
                    <Link to="Footer" spy={true} smooth={true} className="Header-link" href="">
                        Contact
                    </Link>
                    <Link to="WorkExperiences" spy={true} smooth={true} className="Header-link" href="">
                        Work Experience
                    </Link>
                
                    <Link to="Projects" spy={true} smooth={true} className="Header-link" href="">
                        Projects
                    </Link>
                    <img src={HamburgerImage} alt="" className="Hamburger-menu" onClick={renderDropdown}/>
                </div>
            </nav>
    </div>
    );
};

export default Header;
