import React, { FC, createContext } from 'react';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';

const data = {
	coldSnacks: [
		{
			name: 'Баклажаны с орехами',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/56D24AB5-05AC-44FC-9F80-09567E2A938F-768x576.jpeg',
			text: 'пикантная закуска из сочных баклажанов, с ореховой начинкой и соусом «Саперави»',
			weight: '200 г',
			price: 440
		},
		{
			name: 'Баклажаны с сыром',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/DB2A9C40-44F2-476A-9021-CCDC406B8C94-768x511.jpeg',
			text: 'нежная, пикантная закуска из сочных баклажанов с сырной начинкой и соусом «Саперави»',
			weight: '200 г',
			price: 430
		},
		{
			name: 'Домашний разносол',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/%D0%94%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D0%B8%D0%B9-%D1%80%D0%B0%D0%B7%D0%BD%D0%BE%D1%81%D0%BE%D0%BB-768x512.jpg',
			text: 'гурийская капуста, маринованный чеснок, помидоры, огурцы, стручковый перец, зелень',
			weight: '300/10 г',
			price: 540
		},
		{
			name: 'Микс сырный',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/%D0%9C%D0%B8%D0%BA%D1%81-%D1%81%D1%8B%D1%80%D0%BD%D1%8B%D0%B9-768x512.jpg',
			text: 'нежнейший микс из домашних, ароматных сыров: сулугуни, брынза, подаётся с пикантной, сливочно-творожной начинкой, зеленью и грецким орехом',
			weight: '210/10 г',
			price: 410
		},
		{
			name: 'Микс овощной',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/%D0%9C%D0%B8%D0%BA%D1%81-%D0%BE%D0%B2%D0%BE%D1%89%D0%BD%D0%BE%D0%B9-768x512.jpg',
			text: 'витаминный букет из спелых, свежих овощей и зелени',
			weight: '210/10 г',
			price: 390
		},
		{
			name: 'Толма классическая',
			img: 'https://папамихо.рф/wp-content/uploads/2020/04/%D0%A2%D0%BE%D0%BB%D0%BC%D0%B0-%D1%81-%D0%BC%D0%B0%D1%86%D0%BE%D0%BD%D0%B8-768x512.jpg',
			text: 'Нежнейший фарш из домашней молодой говядины, с ноткой традиционных специй, завёрнутый в натуральные виноградные листья. Подаётся с соусом и зеленью.',
			weight: '200 г',
			price: 440
		},
		{
			name: 'Шампиньоны с сыром',
			img: 'https://папамихо.рф/wp-content/uploads/2022/03/IMG-20230125-WA0021-600x900.jpg',
			text: 'нежные шапочки шампиньонов, с начинкой из тянущегося, домашнего сыра.',
			weight: '200 г',
			price: 410
		},
		{
			name: 'Аджапсандали',
			img: 'https://папамихо.рф/wp-content/uploads/2022/03/91FD4ABA-9697-4D2D-8551-A937C11D12BF.jpeg',
			text: 'сочное овощное соте по-грузински, приправленное ароматными национальными специями и зеленью',
			weight: '200 г',
			price: 460
		}
	]
}

const Context = createContext({});


const App: FC = () => {



	return (
		<div className='App'>
			<div className='wrap'>
				<Context.Provider value={{data}}>
					<Routes>
						<Route path='*' element={<HomePage />} />
						<Route path='/basket' element={<BasketPage />} />
						{/* <Route path='*' element={<NotFoundPage/>}/> */}


					</Routes>
				</Context.Provider>

			</div>
			{/* <HomePage/> */}
		</div>
	)
}

export { App, Context };
