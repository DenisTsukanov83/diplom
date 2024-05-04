import React, { FC, useContext } from 'react';
import './Cards.scss';

import { Context } from "../../App";

import Dishes from '../dishes/Dishes';
import Slider from '../slider/Slider';



const Cards: FC = () => {
    const { chagedData  } = useContext<any>(Context);

    return (
        <section className="cards">
            <Dishes/>
            <div className="cards-content">
                <h2>{chagedData[0].type}</h2>
                <div className="cards-content-wrapper">
                    <Slider/>

                </div>
            </div>
        </section>
    );
}

export default Cards;