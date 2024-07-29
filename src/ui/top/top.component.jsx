import React, { useState, useEffect } from 'react';
import SmoothScroll from 'smooth-scroll';
import './top.style.css';

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutQuart'
});

const ToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        setIsVisible(window.scrollY > 100);
    };

    const goToTop = () => {
        scroll.animateScroll(0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`top-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="top-btn" onClick={goToTop}>
                <img src="https://img.icons8.com/?size=100&id=11036&format=png&color=FFFFFF" alt="ToTopIcon" />
            </div>
        </div>
    );
};

export default ToTop;
