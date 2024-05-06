import React, { FC, useContext } from 'react';
import './Basket.scss';
import { Link } from 'react-router-dom';

import Dishes from '../dishes/Dishes';
import BasketItem from '../basketItem/BasketItem';
import BasketAddItem from '../basketAddItem/BasketAddItem';
import Footer from '../footer/Footer';

import location from '../../assets/img/header/Location.png';
import search from '../../assets/img/header/Search.png';
import calling from '../../assets/img/header/Calling.png';
import profile from '../../assets/img/basket/Profile.png';

import { Context } from '../../App';


const Basket: FC = () => {
    const { basketArr, numberOfBasket } = useContext<any>(Context);
    let sum = 0;
    basketArr.forEach((el: any) => {
        sum += el.number * el.obj.price;
    });

    function getDelivery(sum: number) {
        if (sum < 1500) {
            return (
                <div>
                    <span>До бесплатной доставки не хватет:</span>
                    <span> {1500 - sum} ₽</span>
                </div>
            )
        } else {
            return (
                <div>
                    <span>Вам доступна бесплатная доставка</span>
                </div>
            )
        }
    }

    return (
        <div className="basket">
            <div className="basket-menu">
                <div className="basket-logo">
                    logos
                </div>
                <div className="basket-hamburger">
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>Меню</div>
                </div>
                <div className="basket-input">
                    <div className="basket-input-loc">
                        <img src={location} alt="Location.png" />
                    </div>
                    <input type="text" placeholder='Введите адрес доставки' />
                    <div className="basket-input-search">
                        <img src={search} alt="Search.png" />
                    </div>
                </div>
                <div className="basket-contact">
                    <div className="basket-contact-img">
                        <img src={calling} alt="Calling.png" />
                    </div>
                    <div className="basket-contact-phone">
                        <div className="basket-contact-contacts">Контакты:</div>
                        <div className="basket-contact-number">+7 (917) 510-57-59</div>
                    </div>
                </div>
                <button className="basket-signIn">
                    <div className="basket-signIn-img">
                        <img src={profile} alt="Profile.png" />
                    </div>
                    <div className="basket-signIn-title">Войти</div>
                </button>

                <Link to={'/basket'} className="no-underline">
                    <button className="basket-basket">
                        <div className="basket-basket-title">Корзина</div>
                        <div className="basket-basket-number">{numberOfBasket}</div>
                    </button>
                </Link>
            </div>
            <Dishes />
            <div className="basket-header">
                <Link to={'/diplom/:block?'} className="no-underline">
                    <div className="basket-header-return">
                        &lt; к выбору блюда
                    </div>
                </Link>
                <div className="basket-header-title">
                    <h2>Корзина</h2>
                    <span>{`в корзине ${numberOfBasket} товара`}</span>
                </div>
            </div>
            <div className="basket-list">
                <div className="basket-list-wrapper">
                    {basketArr.map((el: any, i: number) => {
                        return <BasketItem key={i} data={el} />
                    })}
                </div>

            </div>
            <div className="basket-add">
                <h3>Добавить к заказу</h3>
                <div className="basket-add-wrapper">
                    <BasketAddItem />
                    <BasketAddItem />
                    <BasketAddItem />
                    <BasketAddItem />
                </div>
            </div>
            <div className="basket-devider"></div>
            <div className="basket-result">
                <div className="basket-result-text">
                    <div>
                        <span>Итого:</span>
                        <span> {sum} ₽</span>
                    </div>
                    {getDelivery(sum)}
                    <div>Минимальная сума заказа 1500 ₽</div>
                </div>
                <button className="basket-result-btn">
                    Оформить заказ
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Basket;