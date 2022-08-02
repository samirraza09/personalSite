import "./styles/Header.css";
import {Link} from 'react-scroll';
import WhiteHamburgerImage from "./assets/hamburger.png";
import HamburgerMenu from "./HamburgerMenu";
import BlueHamburgerImage from "./assets/hamburger-blue.png";
import BlackHamburgerImage from "./assets/hamburger-black.png";
import TurquoisHamburgerImage from "./assets/hamburger-turquois.png";
import { useState } from "react";

const Header = () => {
    const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
    const [hamburgerImage, setHamburgerImage] = useState(BlueHamburgerImage)

    const handleMenuClick = (e) => {
        e.preventDefault();
        if (showHamburgerMenu === true) {
            setShowHamburgerMenu(false);
            if (localStorage.theme === "dark") {
                setHamburgerImage(BlueHamburgerImage);
            } else {
                setHamburgerImage(TurquoisHamburgerImage);
            }
        } else {
            setShowHamburgerMenu(true);
            if (localStorage.theme === "dark") {
                setHamburgerImage(WhiteHamburgerImage);
            } else {
                setHamburgerImage(BlackHamburgerImage);
            }
        }
    };

    const handleLogoClick = (e) => {
        e.preventDefault();
        if (localStorage.theme === "light") {
            localStorage.setItem("theme", "dark");
            document.documentElement.setAttribute("data-theme", "dark");
            if (showHamburgerMenu) { 
                setHamburgerImage(WhiteHamburgerImage) 
            } else {
                setHamburgerImage(BlueHamburgerImage);
            }
        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.setAttribute("data-theme", "light");
            if (showHamburgerMenu) { 
                setHamburgerImage(BlackHamburgerImage) 
            } else {
                setHamburgerImage(TurquoisHamburgerImage);
            }
        }
    }

    return (
        <div className="Header-container">
            <nav>
                <a className="Header-name" href="" onClick={handleLogoClick}>SR</a>
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
                    <a href="" onClick={handleMenuClick} className="Hamburger-menu-link"><img src={hamburgerImage} href="" className="Hamburger-image"/></a>
                    <HamburgerMenu className="Hamburger-menu" showHamburgerMenu={showHamburgerMenu}/>
                </div>
            </nav>
    </div>
    );
};

export default Header;
