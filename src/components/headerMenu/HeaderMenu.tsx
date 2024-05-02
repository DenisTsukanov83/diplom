import React from 'react';
import './HeaderMenu.scss';

import { Link } from 'react-router-dom';
import location from '../../assets/img/header/Location.png';
import search from '../../assets/img/header/Search.png';
import calling from '../../assets/img/header/Calling.png';


function HeaderMenu() {
    return (
        <div className="header-menu">
        <div className="header-logo">
            logos
        </div>
        <div className="header-hamburger">
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>Меню</div>
        </div>
        <div className="header-input">
            <div className="header-input-loc">
                <img src={location} alt="Location.png" />
            </div>
            <input type="text" placeholder='Введите адрес доставки' />
            <div className="header-input-search">
                <img src={search} alt="Search.png" />
            </div>
        </div>
        <div className="header-contact">
            <div className="header-contact-img">
                <img src={calling} alt="Calling.png" />
            </div>
            <div className="header-contact-phone">
                <div className="header-contact-contacts">Контакты:</div>
                <div className="header-contact-number">+7 (917) 510-57-59</div>
            </div>
        </div>
        <Link to={'/basket'}>
            <div className="header-basket">
                <div className="header-basket-title">Корзина</div>
                <div className="header-basket-number">4</div>
            </div>
        </Link>
    </div>
    );
}

export default HeaderMenu;