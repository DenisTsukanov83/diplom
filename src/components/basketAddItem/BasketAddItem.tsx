import React from 'react';
import './BasketAddItem.scss';

import Plus from '../../assets/img/basket/plus.png';
import BasketImg from '../../assets/img/Card/Card-1.png';

function BasketAddItem() {
    return (
        <div className="basketAddItem">
            <div className="basketAddItem-img">
                <img src={BasketImg} alt="Card-1.png" />
            </div>
            <div className="basketAddItem-title">
                Квас ананасовый
            </div>
            <div className="basketAddItem-add">
                <div>Добавить</div>
                <button>
                    <img src={Plus} alt="plus.png" />
                </button>
            </div>
            <div className="basketAddItem-price">
                1640 ₽
            </div>
        </div>
    );
}

export default BasketAddItem;