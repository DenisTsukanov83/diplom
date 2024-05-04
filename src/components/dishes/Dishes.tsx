import React, {FC, MouseEvent} from 'react';
import './Dishes.scss';

interface dishesProps {
    onChangeDishes: (e: MouseEvent<HTMLElement>) => void;
    changedDishes: string;
}

const Dishes: FC<dishesProps> = ({onChangeDishes, changedDishes}) => {
    return (
        <nav className='cards-menu'>
            <ul onClick={onChangeDishes}>
                <li className={changedDishes === 'Холодные закуски' ? 'li-changed' : ''}>Холодные закуски</li>
                <li className={changedDishes === 'Горячие закуски' ? 'li-changed' : ''}>Горячие закуски</li>
                <li className={changedDishes === 'Горячие блюда' ? 'li-changed' : ''}>Горячие блюда</li>
                <li className={changedDishes === 'Супы' ? 'li-changed' : ''}>Супы</li>
                <li className={changedDishes === 'Гарниры' ? 'li-changed' : ''}>Гарниры</li>
                <li className={changedDishes === 'Гриль меню' ? 'li-changed' : ''}>Гриль меню</li>
                <li className={changedDishes === 'Детское меню' ? 'li-changed' : ''}>Детское меню</li>
                <li className={changedDishes === 'Напитки' ? 'li-changed' : ''}>Напитки</li>
            </ul>
        </nav>
    );
}

export default Dishes;