import React, { FC, useContext } from 'react';
import './Cards.scss';

import { Context } from "../../App";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import "react-alice-carousel/lib/scss/alice-carousel.scss";

import Card from '../card/Card';
import Dishes from '../dishes/Dishes';


const Cards: FC = () => {
    const { data } = useContext<any>(Context);
    console.log(data)
    return (
        <section className="cards">
            <Dishes />
            <div className="cards-content">
                <h2>Холодные закуски</h2>
                <Carousel controls={true}>
                        {data.coldSnacks.map((el: any, i: number) => {
                            return <Carousel.Item  key={i}>
                                <Card data={el} />
                            </Carousel.Item>
                        })}
                    </Carousel>
                <div className="cards-content-wrapper">
                    {/* {data.coldSnacks.map((el: any, i: number) => {
                        return <Card key={i} data={el} />
                    })} */}

                    

                </div>
            </div>
        </section>
    );
}

export default Cards;