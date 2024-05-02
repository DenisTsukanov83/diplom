import React from 'react';
import './Header.scss';
import bg from '../../assets/img/header/main-bg.jpeg';
import HeaderMenu from '../headerMenu/HeaderMenu';

function Header() {
    return (
        <header className="header">
            <HeaderMenu/>

            <div className="header-main">
                <div className="header-main-bg">
                    <img src={bg} alt="main-bg.jpeg" />
                </div>
                <div className="header-main-title">
                    <h1>Доставка вкуснейших блюд за 60 минут</h1>
                    <div className="header-main-subtitle">
                        <div>Ещё не пробовал?</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;