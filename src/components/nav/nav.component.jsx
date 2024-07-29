import './nav.style.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/ieeeLogo.webp';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleItemClick = (index) => {
        setActiveIndex(index);
        if (window.innerWidth <= 768) {
            setIsMobileMenuOpen(false);
        }
    };

    const handleHomeClick = () => {
        setActiveIndex(null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (window.innerWidth <= 768) {
            setIsMobileMenuOpen(false);
        }
    };

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    return (
        <div className={`navContainer ${isScrolled ? 'scrolled glass-effect' : ''}`}>
            <button className='mobile-menu-button' onClick={handleMobileMenuToggle}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <img src={logo} className='ieeelogo' alt='logo' />

            <ul className={`navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                {['Home', 'About Us', 'Events', 'Team', 'Contact Us'].map((item, index) => (
                    <li
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        onClick={() => item === 'Home' ? handleHomeClick() : handleItemClick(index)}
                    >
                        <a href={`#${item.toLowerCase().replace(/\s+/g, '')}`}>{item}</a>
                    </li>
                ))}
                {/* <li className='circle' onClick={handleHomeClick}></li> */}
            </ul>
        </div>
    );
};

export default Navbar;
