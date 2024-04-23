import React from 'react';
import './Card.scss';

import Photo from '../../assets/img/Card/Card-1.png';
import Buy from '../../assets/img/Card/Buy.png';


function Card() {
    return (
        <div className="card">
            <div className="card-img">
                <img src={Photo} alt="" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>Ягненок</h3>
                    <span>Вес: 225г</span>
                </div>
                <div className="card-text">
                    Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком
                </div>
                {/* <div className="card-footer">
                    <div className="card-price">620 ₽</div>
                    <button className="card-btn">
                        <div>В корзину</div>
                        <div>
                            <img src={Buy} alt="Buy.png" />
                        </div>
                    </button>
                </div> */}
                <div className="card-footer">
                    <button className="card-btn-2">-</button>
                    <div className="card-price">620 ₽</div>
                    <button className="card-btn-2">+</button>
                </div>
            </div>
        </div>
    );
}

export default Card;