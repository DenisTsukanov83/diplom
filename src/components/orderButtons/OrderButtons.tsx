import { FC, MouseEvent} from 'react';

interface OrderButtonsProps {
    text: string;
    handleClick: (e: MouseEvent<HTMLElement>, index: number, classNumber: number) => void;
    activeIndex: number;
    index: number;
    classNumber: number;
    dataSet: string;
}

const OrderButtons: FC<OrderButtonsProps> = ({ text, handleClick, activeIndex, index, classNumber, dataSet}) => {
    const isActive = activeIndex === index ? true : false; 

    return (
        <button onClick={(e) => handleClick(e, index, classNumber)} className={` ${isActive ? 'order-btn-active' : ''}`} data-user={`${dataSet}`}>
            {text}
        </button>
    );
}

export default OrderButtons;