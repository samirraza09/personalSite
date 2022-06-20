import React, {useState} from 'react';
import Arrow from "./assets/arrow.png"
import "./styles/ScrollButton.css"
import ArrowWhite from "./assets/arrow-white.png"

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

    const scrollToTop = () =>{
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
            in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <img 
            className="Scroll" 
            src={Arrow} 
            onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}}
            onMouseOver={e => (e.currentTarget.src = ArrowWhite)}
            onMouseOut={e => (e.currentTarget.src = Arrow)} 
            />
    );
}

export default ScrollButton;
