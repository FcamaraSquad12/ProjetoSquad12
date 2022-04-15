import React from "react";
import FcamaraLogo from '../../assets/imgs/logo-fcamara.png';
import RobsonLogo from '../../assets/svg/logo.svg';

export default ()   => 
    <div className="footer-container">
            <footer>
            <div className="footer-robson-logo">
                <img src={RobsonLogo} alt="" />
            </div>
            <div className="footer-fcamara-logo">
                <img src={FcamaraLogo} alt="" />
            </div>
        </footer>
    </div>