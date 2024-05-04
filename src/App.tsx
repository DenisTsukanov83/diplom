import React, { FC, createContext, useState, MouseEvent } from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';

import {data} from './Data';

const Context = createContext({});


const App: FC = () => {
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
		<div className='App'>
			<div className='wrap'>
				<Context.Provider value={{data, changedDishes, chagedData, onChangeDishes}}>
					<Routes>
						<Route path='*' element={<HomePage/>} />
						<Route path='/basket' element={<BasketPage/>}/>
						{/* <Route path='*' element={<NotFoundPage/>}/> */}
					</Routes>
				</Context.Provider>
			</div>
		</div>
	)
}

export { App, Context };
