import React, { FC, useContext } from 'react';
import './Cards.scss';

import { Context } from "../../App";


import Dishes from '../dishes/Dishes';
import Slider from '../slider/Slider';


const Cards: FC = () => {
    
    const { data } = useContext<any>(Context);
    console.log(data)
    return (
        <section className="cards">
            <Dishes />
            <div className="cards-content">
                <h2>Холодные закуски</h2>
                <div className="cards-content-wrapper">
                    <Slider/>

                </div>
            </div>
        </section>
    );
}

export default Cards;