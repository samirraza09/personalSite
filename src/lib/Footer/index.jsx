import "./styles/Footer.css";
import githubLogo from "./icons/github.png";
import emailLogo from "./icons/email.png";
import linkedinLogo from "./icons/linkedin.png";
import githubWhiteLogo from "./icons/github-white.png";
import emailWhiteLogo from "./icons/email-white.png";
import linkedinWhiteLogo from "./icons/linkedin-white.png";

const Footer = () => (
    <div className="Footer-container">
        <div className="Footer-icons">
            <a href="https://github.com/samirraza09">
                <img 
                    src={githubLogo}
                    onMouseOver={e => (e.currentTarget.src = githubWhiteLogo)}
                    onMouseOut={e => (e.currentTarget.src = githubLogo)}
                    className="icon"
                />
            </a>
            <a href="" onClick={(e) => {
                window.location.href = "mailto:samirraza09@gmail.com";
                e.preventDefault();
            }}>
                <img
                    src={emailLogo}
                    onMouseOver={e => (e.currentTarget.src = emailWhiteLogo)}
                    onMouseOut={e => (e.currentTarget.src = emailLogo)}
                    className="icon"
                />
            </a>
            <a href="https://linkedin.com/in/samirraza09">
                <img
                    src={linkedinLogo}
                    onMouseOver={e => (e.currentTarget.src = linkedinWhiteLogo)}
                    onMouseOut={e => (e.currentTarget.src = linkedinLogo)}
                    className="icon"
                />
            </a>
        </div>
        <div className="trademark-container">
            <p className="trademark">
                @ 2022 Samir Raza
            </p>
        </div>
    </div>
);

export default Footer;
