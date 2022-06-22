import {Link} from 'react-scroll'
import "./styles/HamburgerMenu.css"

const HamburgerMenu = ({showHamburgerMenu}) => {
    if (showHamburgerMenu) {
        return (
            <div className="Hamburger-links-container">
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
            </div>
        )
    }
};

export default HamburgerMenu;
