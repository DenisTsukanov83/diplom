import React, {FC, useContext} from 'react';
import './BasketItem.scss';

import minus from '../../assets/img/basket/minus.png';
import plus from '../../assets/img/basket/plus.png';

import { Context } from '../../App';

interface BasketItemProps {
    data: any;
}

const BasketItem: FC<BasketItemProps> = ({data}) => {
    const {onAddBasketArr} = useContext<any>(Context);

    return (
        <div className="basketItem">
            <div className="basketItem-img">
                <img src={data.obj.img} alt="Card-1.png" />
            </div>
            <div className="basketItem-text">
                <div className="basketItem-text-title">
                    {data.obj.name}
                </div>
                <div>
                    {data.obj.text}
                </div>
            </div>
            <div className="basketItem-number">
                <button className="basketItem-number-minus">
                    <img src={minus} alt="minus.png" />
                </button>
                <div className="basketItem-number-result">{data.number}</div>
                <button className="basketItem-number-plus" onClick={onAddBasketArr} data-card={JSON.stringify({type: data.obj.type, name: data.obj.name})}>
                    <img src={plus} alt="plus.png"/>
                </button>
            </div>
            <div className="basketItem-price">{data.obj.price} ₽</div>
            <button className="basketItem-delete">
                <img src={plus} alt="plus.png" />
            </button>
        </div>
    );
}

export default BasketItem;