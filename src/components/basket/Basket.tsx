import React from 'react';
import './Basket.scss';
import { Link } from 'react-router-dom';

import HeaderMenu from '../headerMenu/HeaderMenu';
import Dishes from '../dishes/Dishes';
import BasketItem from '../basketItem/BasketItem';
import BasketAddItem from '../basketAddItem/BasketAddItem';
import Footer from '../footer/Footer';


function Basket() {
    return (
        <div className="basket">
            <HeaderMenu />
            <Dishes />
            <div className="basket-header">
                <Link to={'/'}>
                    <div className="basket-header-return">
                        &lt; к выбору блюда
                    </div>
                </Link>
                <div className="basket-header-title">
                    <h2>Корзина</h2>
                    <span>(в корзине 3 товара)</span>
                </div>
            </div>
            <div className="basket-list">
                <div className="basket-list-wrapper">
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
                    <BasketItem />
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
                        <span> 500 ₽</span>
                    </div>
                    <div>
                        <span>До бесплатной доставки не хватет:</span>
                        <span> 100 ₽</span>
                    </div>
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