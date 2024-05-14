import React, { FC, useContext } from 'react';
import './Slider.scss';

import Card from '../card/Card';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Context } from '../../App';

const Slider: FC = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 10// this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 576, min: 0 },
            items: 1,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    };

    const { chagedData, basketArr } = useContext<any>(Context);
    

    return (
        <div>
            <div className="slider-container">

                <Carousel
                    responsive={responsive}
                    infinite={true}
                    keyBoardControl={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    centerMode={true}>
                    {chagedData.map((el: any, i: number) => {
                        const index = basketArr.findIndex((elObj : any) => elObj.obj.name === el.name);
                        let number = 0;
                        if(index >= 0) {
                            number = basketArr[index].number;
                        }
                        return (
                            <Card key={i} data={el} numberOfDishes={number}/>
                        )
                    })}
                </Carousel>
            </div>

        </div>
    );
}

export default Slider;