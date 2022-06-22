import "./styles/Header.css"
import {Link} from 'react-scroll'
import HamburgerImage from "./assets/hamburger.png"
import HamburgerMenu from "./HamburgerMenu";
import { useState, useRef } from "react";

const Header = ( {showHamburgerMenu, setShowHamburgerMenu} ) => {

    const handleMenuClick = () => (
        setShowHamburgerMenu(true)
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
                    <a href="" onClick={handleMenuClick}><img src={HamburgerImage} href="" className="Hamburger-menu"/></a>
                    <HamburgerMenu className="Hamburger-menu" showHamburgerMenu={showHamburgerMenu}/>
                </div>
            </nav>
    </div>
    );
};

export default Header;
