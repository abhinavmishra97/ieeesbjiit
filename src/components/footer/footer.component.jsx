import React from 'react';
import './footer.styling.css'; 

import ieeeLogo from '../../assets/ieee_logo_footer trimmed.png';
// import ieeeLogo from '../../assets/ieee_logo_footer.png';

import facebookLogo from '../../assets/footer-logos/facebook.png';
import linkedinLogo from '../../assets/footer-logos/linkedin.png';
import instagramLogo from '../../assets/footer-logos/instagram.png';
import whatsappLogo from '../../assets/footer-logos/whatsapp.png';
import githubLogo from '../../assets/footer-logos/github3.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="left">
                    <img className='ieee-logo-footer' src={ieeeLogo} alt="IEEE Logo" />
                </div>
                <div className="center">
                    <h3>Contact Us</h3>
                    <p>Vimarsh Mishra<br />📞 +91 99151-63165</p>
                    <p>Devanshi Mishra<br />📞 +91 88400-21366</p>
                    <p>📧 Email: ieeesbjiitweb@gmail.com</p>
                </div>
                <div className="right">
                    <h3>Connect with us</h3>
                    <div className="social-media">
                        <a href="https://www.instagram.com/ieeesbjiit?igsh=bnk1amRxeGdxNGts" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram" />
                        </a>
                        <a href="https://www.facebook.com/ieeesbjiit/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookLogo} alt="Facebook" className='whiteBg'/>
                        </a>
                        <a href="https://github.com/ieeesbjiit" target="_blank" rel="noopener noreferrer">
                            <img src={githubLogo} alt="GitHub" className='whiteBg'/>
                        </a>
                        <a href="https://www.linkedin.com/company/ieee-student-branch-jiit/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" />
                        </a>
                        <a href="https://whatsapp.com/channel/0029VajH49o42DcniGpYxj3j" target="_blank" rel="noopener noreferrer">
                            <img src={whatsappLogo} alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="developed-by">
            <p>Developed by 
                <a className='hover-color' href="https://github.com/Apoorv012" target="_blank"> Apoorv Mittal</a>, 
                <a className='hover-color' href="https://github.com/kritika-sharma7" target="_blank"> Kritika Sharma</a>, 
                <a className='hover-color' href="https://github.com/kanak00" target="_blank"> Kanak</a>, 
                <a className='hover-color' href="https://github.com/akshitguptaa" target="_blank"> Akshit Gupta</a>, 
                <a className='hover-color' href="https://github.com/yugjindal22" target="_blank"> Yug Jindal</a>, and 
                <a className='hover-color' href="https://github.com/vansh0101" target="_blank"> Vansh Sharma</a>
            </p>
        </div>
        </footer>
    );
}

export default Footer;
