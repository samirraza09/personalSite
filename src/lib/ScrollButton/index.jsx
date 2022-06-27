import React, {useState} from 'react';
import ArrowBlue from "./assets/arrow.png";
import "./styles/ScrollButton.css";
import ArrowWhite from "./assets/arrow-white.png";
import ArrowTurquois from "./assets/arrow-turq.png";
import ArrowBlack from "./assets/arrow-black.png";

const ScrollButton = () =>{

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
	    const scrolled = document.documentElement.scrollTop;
	    if (scrolled > 300){
	        setVisible(true)
	    }
	    else if (scrolled <= 300){
	        setVisible(false)
	    }
    };
    let Arrow = ArrowBlue;
    let HoverArrow = ArrowWhite;
    if (localStorage.theme === "light") {
        Arrow = ArrowTurquois;
        HoverArrow = ArrowBlack;
    } else {
        Arrow = ArrowBlue;
        HoverArrow = ArrowWhite;
    }

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <img 
            className="Scroll" 
            src={Arrow} 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}
            onMouseOver={e => (e.currentTarget.src = HoverArrow)}
            onMouseOut={e => (e.currentTarget.src = Arrow)} 
            />
    );
}

export default ScrollButton;
