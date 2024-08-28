//components/Header.js

import React from 'react';
import '../static/css/header.css';
//import logo from '../static/img/logo.png';
import logo from './logo.png';
function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="College Compass" className="logo" />
            </div>
        </header>
    );
}

export default Header;
