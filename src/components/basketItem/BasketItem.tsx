import React from 'react';
import './BasketItem.scss';

import basketImg from '../../assets/img/Card/Card-1.png';
import minus from '../../assets/img/basket/minus.png';
import plus from '../../assets/img/basket/plus.png';


function BasketItem() {
    return (
        <div className="basketItem">
            <div className="basketItem-img">
                <img src={basketImg} alt="Card-1.png" />
            </div>
            <div className="basketItem-text">
                <div className="basketItem-text-title">
                    Пицца двойная пепперони
                </div>
                <div>
                    Кальмары, мидии, креветки, сыр маасдам, красный лук, микс оливок, базилик, соус песто
                </div>
            </div>
            <div className="basketItem-number">
                <button className="basketItem-number-minus">
                    <img src={minus} alt="minus.png" />
                </button>
                <div className="basketItem-number-result">1</div>
                <button className="basketItem-number-plus">
                    <img src={plus} alt="plus.png" />
                </button>
            </div>
            <div className="basketItem-price">1640 ₽</div>
            <button className="basketItem-delete">
                <img src={plus} alt="plus.png" />
            </button>
        </div>
    );
}

export default BasketItem;