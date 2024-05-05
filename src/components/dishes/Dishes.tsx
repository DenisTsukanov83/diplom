import React, {FC, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Dishes.scss';

import { Context } from "../../App";



const Dishes: FC = () => {
    const { onChangeDishes, changedDishes, } = useContext<any>(Context);
    return (
        <nav className='cards-menu'>
            <ul onClick={onChangeDishes}>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Холодные закуски' ? 'li-changed' : ''}>Холодные закуски</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Горячие закуски' ? 'li-changed' : ''}>Горячие закуски</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Горячие блюда' ? 'li-changed' : ''}>Горячие блюда</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Супы' ? 'li-changed' : ''}>Супы</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Гарниры' ? 'li-changed' : ''}>Гарниры</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Гриль меню' ? 'li-changed' : ''}>Гриль меню</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Детское меню' ? 'li-changed' : ''}>Детское меню</li>
                </Link>
                <Link to={'/diplom'} className="no-underline">
                    <li className={changedDishes === 'Напитки' ? 'li-changed' : ''}>Напитки</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Dishes;