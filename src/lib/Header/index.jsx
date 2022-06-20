import "./styles/Header.css"

const Header = () => (
    <div className="Header-container">
        <nav>
            <a href="" className="Header-name">SR</a>
            <div className="Header-links-container">
                <a href="https://firebasestorage.googleapis.com/v0/b/site-c9851.appspot.com/o/samirrazaresume.pdf?alt=media&token=b341af14-800e-4baa-b403-9f5f8290b852" target="_blank" rel="noopener noreferrer" className="Header-link">
                    Resume
                </a>
                <a href="https://linkedin.com/in/samirraza09" className="Header-link">
                    Work Experience
                </a>
                <a href="https://github.com/samirraza09" className="Header-link">
                    Projects
                </a>
            </div>
        </nav>
    </div>
)

export default Header;
