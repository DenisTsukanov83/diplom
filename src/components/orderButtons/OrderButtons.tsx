import { FC, MouseEvent, useEffect, useState } from 'react';

interface OrderButtonsProps {
    text: string;
    handleClick: (e: MouseEvent<HTMLElement>, classNumber: number, index: number) => void;
    activeIndex: number;
    index: number;
    classNumber: number;
}

const OrderButtons: FC<OrderButtonsProps> = ({ text, handleClick, activeIndex, index, classNumber}) => {
    /* const isActive = activeIndex === index ? true : false; */
    const [activeIndexLoc, setActiveIndexLoc] = useState(0);

    const isActive = activeIndexLoc === index ? true : false; 

    useEffect(() => {
        setActiveIndexLoc(activeIndex);
    })
    return (
        <button onClick={(e) => handleClick(e, classNumber, index)} className={` ${isActive ? 'order-btn-active' : ''}`}>
            {text}
        </button>
    );
}

export default OrderButtons;