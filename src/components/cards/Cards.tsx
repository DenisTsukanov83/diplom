import React from 'react';
import './Cards.scss';

import Card from '../card/Card';


function Cards() {
    return (
        <section className="cards">
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
            <div className="cards-content">
                <h2>Холодные закуски</h2>
                <div className="cards-content-wrapper">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    );
}

export default Cards;