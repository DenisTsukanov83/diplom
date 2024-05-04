import React, { FC, useContext, MouseEvent, useState } from 'react';
import './Cards.scss';

import { Context } from "../../App";


import Dishes from '../dishes/Dishes';
import Slider from '../slider/Slider';


const Cards: FC = () => {
    const { data } = useContext<any>(Context);
    const [changedDishes, setChangedDishes] = useState('Холодные закуски');
    const [chagedData, setChangedData] = useState(data.coldSnacks);
    

    function onChangeDishes(e: MouseEvent<HTMLElement>) {
        const {textContent} = e.target as HTMLElement;
        if(textContent) {
            setChangedDishes(textContent);
            switch(textContent) {
                case 'Холодные закуски': setChangedData(data.coldSnacks);
                break;
                case 'Горячие закуски': setChangedData(data.hotSnacks);
                break;
                case 'Горячие блюда': setChangedData(data.hotDishes);
                break;
                case 'Супы': setChangedData(data.soups);
                break;
                case 'Гарниры': setChangedData(data.sideDishes);
                break;
                case 'Гриль меню': setChangedData(data.grillMenu);
                break;
                case 'Детское меню': setChangedData(data.childMenu);
                break;
                case 'Напитки': setChangedData(data.drinks);
                break;
            }
        }
    }
    return (
        <section className="cards">
            <Dishes 
                onChangeDishes={onChangeDishes}
                changedDishes={changedDishes}/>
            <div className="cards-content">
                <h2>{chagedData[0].type}</h2>
                <div className="cards-content-wrapper">
                    <Slider data={chagedData}/>

                </div>
            </div>
        </section>
    );
}

export default Cards;