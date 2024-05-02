import React from 'react';
import './Basket.scss';
import { Link } from 'react-router-dom';

import HeaderMenu from '../headerMenu/HeaderMenu';
import Dishes from '../dishes/Dishes';
import BasketItem from '../basketItem/BasketItem';


function Basket() {
    return (
        <div className="basket">
            <HeaderMenu/>
            <Dishes/>
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
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
                <BasketItem/>
            </div>
        </div>
    );
}

export default Basket;