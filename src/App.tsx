import React, { FC, createContext, useState, MouseEvent, useEffect, ChangeEvent } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderPage from './pages/OrderPage';
import ConditionsPage from './pages/ConditionsPage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import DashBoardPage from './pages/DashBoardPage';
import CardPage from './pages/CardPage';

import { data } from './Data';

import { dishType } from './types/dishType';
import { BasketType } from './types/BasketType';
import { UserDataType } from './types/UserDataType';
import { BorderObjType } from './types/BorderObjType';

import { account, database } from './appwrite/config';
import { Query } from 'appwrite';

const Context = createContext({});




const App: FC = () => {
	const [changedDishes, setChangedDishes] = useState('Холодные закуски');
	const [chagedData, setChangedData] = useState(data.coldSnacks);
	const [basketArr, setBasketArr] = useState<{ number: number, obj: dishType }[]>([]);
	const [numberOfBasket, setNumberOfBasket] = useState<number>(0);

	const navigate = useNavigate();

	//-----------------------------------------------------------------------------------------------
	const [nameCurrentUser, setNameCurrentUser] = useState('');
	const [emailCurrentUser, setEmailCurrentUser] = useState('');

	const isLogin = async () => {
		let email: string = ''
        await account.get().then((res: any) => {
            setNameCurrentUser(res.name);
            setEmailCurrentUser(res.email);
			email = res.email
        }).catch(e => {
            if (e.message === 'User (role: guests) missing scope (account)') {
            } else {
                navigate('/login');
            }
            console.log(e.message)
        });
		return email;
    }

	/* const getUserProfile = async (emailCurrentUser: any) => {
        database.listDocuments('66483fdb0008523b3164', '66483fed003b4ac61e92', [Query.equal('email', emailCurrentUser)]).then((res: any) => {
            console.log(`email: ${emailCurrentUser}`)
			console.log(res.documents)
            setProfileArr(res.documents);
        }).catch((e: any) => {
            console.log(e)
        });
    } */

	useEffect(() => {
		/* getUserProfile(emailCurrentUser) */
	}, [emailCurrentUser])

	const [isLoading, setIsLoading] = useState(false);
	function getIsloading(data: any) {
		if(!data) {
			setIsLoading(true);
		} else {
			setIsLoading(false);
		}
	}

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
		let btn: Element | null = null;
		if((e.target as HTMLElement).closest('.card-btn-basket')) {
			btn = (e.target as HTMLElement).closest('.card-btn-basket');
		} else if((e.target as HTMLElement).closest('.basketItem-number-plus')) {
			btn = (e.target as HTMLElement).closest('.basketItem-number-plus');
		} else if((e.target as HTMLElement).closest('.cardFeatures-card-wrapper-btn')) {
			btn = (e.target as HTMLElement).closest('.cardFeatures-card-wrapper-btn');
		}
		const cardData = (btn as HTMLElement).dataset.card;
		if (cardData) {
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
				let obj: dishType = { name: '', type: '', img: '', text: '', weight: 0, price: 0 };
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
		if (cardData) {
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
		if (cardData) {
			const str = JSON.parse(cardData);
			const newArr = basketArr.filter(el => el.obj.name !== str.name);
			setBasketArr(newArr);
		}
	}

	//Add user obj
	const [UserDataObj, setUserDataObj] = useState<UserDataType>({
		'name': '',
		'phone': '',
		'delivery': 'Доставка',
		'restaurant': '',
		'street': '',
		'houseNumber': '',
		'apartmentNumber': '',
		'entranceNumber': '',
		'floorNumber': '',
		'comment': '',
		'payType': 'Оплата онлайн',
		'changeFrom': '',
		'whatTime': 'В ближайшее время',
		'time': '',
		'persons': 1,
		'callBack': 'false',
	});

	const validObj: BorderObjType = {
		'name': 'false',
		'phone': 'false',
		'street': 'false',
		'houseNumber': 'false',
		'changeFrom': 'false',
		'time': 'false',
	}

	function getValid(name: string, isValid: boolean) {
		validObj[name] = `${isValid}`;
	}
	//-----------------------------------------------------------------------------------------------------------------
	const [nameInputValue, setNameInputValue] = useState('');
	const [streetInputValue, setStreetInputValue] = useState('');
	const [numberHouseInputValue, setNumberHouseInputValue] = useState('');
	const [changeFromInputValue, setChangeFromInputValue] = useState('');

	//-----------------------------------------------------------------------------------------------------------------


	function handleChangeUserData(e: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement> | null) {
		const newObj = UserDataObj;
		if (e) {
			const el = (e.target as HTMLElement);
			const str: string | undefined = el.dataset.user;
			let value = (el as HTMLInputElement).value;

			if (str) {
				if (el.tagName === 'INPUT') {
					if (str === 'callBack') {
						newObj[str] = value;
					} else if (str === 'name') {
						let val = '';
						if (/[a-z]|[A-Z]|[а-я]|[А-Я]/.test(value[value.length - 1])) {
							val = value;
							setNameInputValue(val);
						}
						newObj[str] = val;
					} else if (str === 'street') {
						setStreetInputValue(value);
						newObj[str] = value;
					} else if (str === 'houseNumber') {
						let val = '';
						if (/[0-9]|\/|[а-я]/.test(value[value.length - 1]) || value === '') {
							val = value;
							setNumberHouseInputValue(val);
						}
						newObj[str] = val;
					} else if (str === 'changeFrom') {
						let val = '';
						if (/[0-9]/.test(value[value.length - 1]) || value === '') {
							if (value.length < 5) {
								val = value;
								setChangeFromInputValue(val);
							}
						}
						newObj[str] = val;
					} else {
						newObj[str] = value;

					}
				} else if (el.tagName === 'BUTTON') {
					newObj[str] = el.textContent;

				} else if (el.tagName === 'DIV' || el.tagName === 'IMG') {
					if (el.closest('.order-form-4-minus')) {
						if (UserDataObj.persons > 1) {
							newObj.persons -= 1;
						}
					} else if (el.closest('.order-form-4-plus')) {
						if (UserDataObj.persons < 20) {
							newObj.persons += 1;
						}
					}
				} else if (el.tagName === 'SELECT') {

					newObj[str] = value;
				}
			}
		}
		setUserDataObj(newObj);
	}

	//---------------------------------------------------------------------------------------------


	const [borderObj, setBorderObj] = useState<BorderObjType>({
		'name': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
		'phone': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
		'street': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
		'houseNumber': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
		'changeFrom': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
		'time': '0.0668449198rem solid rgba(255, 255, 255, 0.1)',
	})

	function sendData(e: ChangeEvent<HTMLInputElement>, successCheckbox: boolean) {
		e.preventDefault();
		const newObj = borderObj;
		const grey = '0.0668449198rem solid rgba(255, 255, 255, 0.1)';
		const red = '0.0668449198rem solid red';
		let success = true;

		if (successCheckbox) {
			
			for (let key in borderObj) {
				if (key === 'name') {
					console.log(UserDataObj[key].length)
					if (UserDataObj[key].length) {
						newObj[key] = grey;
					} else {
						newObj[key] = red;
						success = false;
						
					}
				} else if (key === 'phone') {
					if (UserDataObj.phone.length === 18) {
						newObj[key] = grey;
					} else {
						newObj[key] = red;
						success = false;
					}
				} else if (key === 'street') {
					if (UserDataObj.delivery === 'Доставка' && !UserDataObj.street.length) {
						newObj[key] = red;
						success = false;
					} else {
						newObj[key] = grey;
					}
				} else if (key === 'houseNumber') {
					if (UserDataObj.delivery === 'Доставка' && !UserDataObj.houseNumber.length) {
						newObj[key] = red;
						success = false;
					} else {
						newObj[key] = grey;
					}
				} else if (key === 'changeFrom') {
					if(UserDataObj.payType === 'Наличными' && UserDataObj.delivery === 'Доставка' && !UserDataObj.changeFrom.length) {
						newObj[key] = red;
						success = false;
					} else {
						newObj[key] = grey;
					}
				} else if(key === 'time') {
					if(UserDataObj.whatTime === 'Ко времени') {
						if(UserDataObj.time.length < 5) {
							newObj[key] = red;
							success = false;
						} else {
							newObj[key] = grey;
						}
						
					}
				}
				/* if(UserDataObj[key].length) {
					newObj[key] = grey;
				} else {
					if(key === 'changeFrom') {
						newObj[key] = UserDataObj.payType === 'Наличными' ? red : grey;
					} else if(key === 'time') {
						newObj[key] = UserDataObj.whatTime === 'Ко времени' ? red : grey;
					} else if(key === 'street') {
						newObj[key] = UserDataObj.delivery === 'Доставка' ? red : grey;
					} else if(key === 'houseNumber') {
						newObj[key] = UserDataObj.delivery === 'Доставка' ? red : grey;
					} else {
						newObj[key] = red;
					}
					
				} */

			}

		} else {
			alert('Вы не дали согласие на обработку персональных данных!');
		}
		setBorderObj(newObj);
		if(success) {
			alert('Данные отправлены!')
			alert(JSON.stringify(UserDataObj));
		} else {
			alert('Введите данные!')
		}
	}

	//---------------------------------------------------------------------------------------------

	const [selectedCard, onSelectedCard] = useState<dishType | null>(chagedData[0]);

	function handleSelectCard(e: MouseEvent<HTMLElement>) {
		const el = (e.target as HTMLElement).closest('.card');
		const el2 = (e.target as HTMLElement).closest('.card-btn-basket');
		const index = (el as HTMLElement).dataset.index;
		if(index && !el2) {
			onSelectedCard(chagedData[+index]);
			navigate('/card');
		}
	}
	

	useEffect(() => {
		changeNumberOfBasket();
	});

	return (
		<div className='App'>
			<div className='wrap'>
				<Context.Provider value={{ data, changedDishes, chagedData, onChangeDishes, basketArr, onIncreaseBasketArr, numberOfBasket, onDecreaseBasketArr, onDeleteDish, UserDataObj, handleChangeUserData, sendData, borderObj, getValid, nameInputValue, streetInputValue, numberHouseInputValue, changeFromInputValue, isLoading, getIsloading, handleSelectCard, selectedCard, isLogin, nameCurrentUser, emailCurrentUser,
				setNameCurrentUser, setEmailCurrentUser
				}}>
					<Routes>
						<Route path='/diplom/:block?' element={<HomePage />} />
						<Route path='/basket' element={<BasketPage />} />
						<Route path='/order' element={<OrderPage />} />
						<Route path='/conditions' element={<ConditionsPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/login' element={<LogInPage />} />
						<Route path='/dashboard' element={<DashBoardPage/>} />
						<Route path='/card' element={<CardPage />} />
						{/* <Route path='*' element={<NotFoundPage />} /> */}
						
					</Routes>
				</Context.Provider>
			</div>
		</div>
	)
}

export { App, Context };
