import { FC, useEffect, useState} from 'react';
import './ModalBasket.scss';

import basket from '../../assets/img/modal/modal-basket.png';
import add from '../../assets/img/modal/add.png';

interface ModalBasketProps {
    closeModal: () => void;
}

const ModalBasket: FC<ModalBasketProps> = ({closeModal}) => {

    return (
        <div className='modal-basket'>
            <div className="modal-basket-content">
                <div>
                    <img src={basket} alt="modal-basket.png" />
                </div>
                <h3>Корзина пустая</h3>
                <button>Посмотреть меню</button>
            </div>
            <div className="modal-basket-add" onClick={closeModal}>
                <img src={add} alt="add.png" />
            </div>
        </div>
    );
}

export default ModalBasket;