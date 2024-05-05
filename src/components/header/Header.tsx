import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import bg from '../../assets/img/header/main-bg.jpeg';
import location from '../../assets/img/header/Location.png';
import search from '../../assets/img/header/Search.png';
import calling from '../../assets/img/header/Calling.png';

import { Context } from '../../App';



function Header() {
    const { numberOfBasket } = useContext<any>(Context);

    return (
        <header className="header">
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
                <Link to={'/basket'} className="no-underline">
                    <button className="header-basket">
                        <div className="header-basket-title">Корзина</div>
                        <div className="header-basket-number">{numberOfBasket}</div>
                    </button>
                </Link>
            </div>

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