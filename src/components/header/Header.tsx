import React from 'react';
import './Header.scss';
import location from '../../assets/img/Location.png';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                logos
            </div>
            <div className="header-input">
                <div className="header-input-loc">
                    <img src={location} alt="Location.png" />
                </div>
                <input type="text" />
                <div className="header-input-loupe">
                <img src="" alt="" />
                </div>
            </div>
            <div className="header-contact">

            </div>
            <div className="header-basket">

            </div>
        </header>
    );
}

export default Header;