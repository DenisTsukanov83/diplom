import React from 'react';
import './Dishes.scss';


function Dishes() {
    return (
        <nav className='cards-menu'>
            <ul>
                <li className='li-changed'>Холодные закуски</li>
                <li>Горячие закуски</li>
                <li>Мясные блюда</li>
                <li>Супы</li>
                <li>Рыбные блюда</li>
                <li>Гриль меню</li>
                <li>Фирменные блюда</li>
                <li>Напитки</li>
            </ul>
        </nav>
    );
}

export default Dishes;