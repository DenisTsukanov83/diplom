import React, { FC, createContext, useState, MouseEvent, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';

import { data } from './Data';

import { dishType } from './types/dishType';
import { BasketType } from './types/BasketType';
const Context = createContext({});



const App: FC = () => {
	const [changedDishes, setChangedDishes] = useState('Холодные закуски');
	const [chagedData, setChangedData] = useState(data.coldSnacks);
	const [basketArr, setBasketArr] = useState<{ number: number, obj: dishType }[]>([]);
	const [numberOfBasket, setNumberOfBasket] = useState<number>(0);

	function onChangeDishes(e: MouseEvent<HTMLElement>) {
		const { textContent } = e.target as HTMLElement;
		if (textContent) {
			setChangedDishes(textContent);
			switch (textContent) {
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

	function onIncreaseBasketArr(e: MouseEvent<HTMLElement>) {
		const btn = (e.target as HTMLElement).closest('.card-btn-basket') ? (e.target as HTMLElement).closest('.card-btn-basket') : (e.target as HTMLElement).closest('.basketItem-number-plus');
		const cardData = (btn as HTMLElement).dataset.card;
		if(cardData) {
			const str = JSON.parse(cardData);
			const index = basketArr.findIndex(el => el.obj.name === str.name);
			if (index >= 0) {
				const newObj = basketArr[index];
				newObj.number += 1;
				const newArr = basketArr.map(el => {
					if (el.obj.name === str.name) {
						return newObj
					} else {
						return el;
					}
				});
				setBasketArr(newArr);
			} else {
				let obj: dishType = {name: '', type: '', img: '', text: '', weight: 0, price: 0};
				for (let key in data) {
					if (data[key][0].type === str.type) {
						obj = data[key][data[key].findIndex(el => el.name === str.name)];
					}
				}
				const newArr = [...basketArr, {
					number: 1,
					obj: obj
				}];
				setBasketArr(newArr);
			}
		}
	}

	function onDecreaseBasketArr(e: MouseEvent<HTMLElement>) {
		const btn = (e.target as HTMLElement).closest('.basketItem-number-minus');
		const cardData = (btn as HTMLElement).dataset.card;
		if(cardData) {
			const str = JSON.parse(cardData);
			if (basketArr.length) {
				let newArr: BasketType[] = [];
				basketArr.forEach(el => {
					if (el.obj.name === str.name) {
						const obj = el;
						if (el.number > 1) {
							obj.number = el.number - 1;
							newArr.push(obj);
							setBasketArr(newArr);
						} else {
							newArr.push(el);
							setBasketArr(newArr);
						}
					} else {
						newArr.push(el);
						setBasketArr(newArr);
					}
				});
			}
		}
	}

	function changeNumberOfBasket() {
		let count = 0;
		basketArr.forEach((el: any) => {
			count += el.number;
		});
		setNumberOfBasket(count);
	}

	function onDeleteDish(e: MouseEvent<HTMLElement>) {
		const btn = (e.target as HTMLElement).closest('.basketItem-delete');
		const cardData = (btn as HTMLElement).dataset.card;
		if(cardData) {
			const str = JSON.parse(cardData);
			const newArr = basketArr.filter(el => el.obj.name !== str.name);
			setBasketArr(newArr);
		}
	}

	useEffect(() => {
		changeNumberOfBasket()
	});

	return (
		<div className='App'>
			<div className='wrap'>
				<Context.Provider value={{ data, changedDishes, chagedData, onChangeDishes, basketArr, onIncreaseBasketArr, numberOfBasket, onDecreaseBasketArr, onDeleteDish }}>
					<Routes>
						<Route path='/diplom' element={<HomePage />} />
						<Route path='/basket' element={<BasketPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Context.Provider>
			</div>
		</div>
	)
}

export { App, Context };
