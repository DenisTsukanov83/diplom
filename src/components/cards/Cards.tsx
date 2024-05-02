import React, { FC } from 'react';
import './Cards.scss';

import Card from '../card/Card';
import Dishes from '../dishes/Dishes';


const Cards: FC = () => {
    return (
        <section className="cards">
            <Dishes/>
            <div className="cards-content">
                <h2>Холодные закуски</h2>
                <div className="cards-content-wrapper">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Cards;