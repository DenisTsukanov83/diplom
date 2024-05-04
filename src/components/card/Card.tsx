import React, {FC, useContext} from 'react';
import './Card.scss';

import Buy from '../../assets/img/Card/Buy.png';

import { Context } from '../../App';

interface CardProps {
    data: any
}


const Card: FC<CardProps> = ({data}) => {
    const {onAddBasketArr} = useContext<any>(Context);

    return (
        <div className="card">
            <div className="card-img">
                <img src={data.img} alt="" />
            </div>
            <div className="card-content">
                <div className="card-header">
                    <h3>{data.name}</h3>
                    <span>{data.weight}г</span>
                </div>
                <div className="card-text">
                    {data.text}
                </div>

                {/* Switch!!! */}
                <div className="card-footer">
                    <div className="card-price">{data.price} ₽</div>
                    <button 
                        className="btn card-btn-basket" 
                        data-card={JSON.stringify({type: data.type, name: data.name})}
                        onClick={onAddBasketArr}>
                        <div>В корзину</div>
                        <div>
                            <img src={Buy} alt="Buy.png" />
                        </div>
                    </button>
                </div>
                {/* <div className="card-footer">
                    <button className=" btn card-btn-minus">
                        <div></div>
                    </button>
                    <div className="card-price">620 ₽</div>
                    <button className="btn card-btn-plus">
                        <div></div>
                        <div></div>
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Card;