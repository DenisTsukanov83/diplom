import React, { FC, MutableRefObject, useContext, useRef } from 'react';

import './Slider.scss';

import { Context } from "../../App";
import Card from '../card/Card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Slider: FC = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 10// this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    };


    const { data } = useContext<any>(Context);


    return (
        <div>
            <div className="slider-container">

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    centerMode={true}>
                    {data.coldSnacks.map((el: any, i: number) => {
                        return <div>
                            <Card key={i} data={el} />
                        </div>

                    })}
                </Carousel>;
            </div>

        </div>
    );
}

export default Slider;