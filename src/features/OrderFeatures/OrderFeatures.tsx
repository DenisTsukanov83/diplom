import { FC, useContext, MouseEvent, useState, useEffect, ChangeEvent } from 'react';
import './OrderFeatures.scss';

import { Link } from 'react-router-dom';
import { Context } from '../../App';

import location from '../../assets/img/header/Location.png';
import search from '../../assets/img/header/Search.png';
import calling from '../../assets/img/header/Calling.png';
import profile from '../../assets/img/basket/Profile.png';
import clock from '../../assets/img/order/clock 1.png';
import minus from '../../assets/img/order/minus.png';
import plus from '../../assets/img/order/plus.png';

import Dishes from '../../components/dishes/Dishes';
import Footer from '../../components/footer/Footer';
import OrderButtons from '../../components/orderButtons/OrderButtons';

import { forwardRef } from 'react';
import { InputMask } from '@react-input/mask';


const OrderFeatures: FC = () => {
    const { numberOfBasket, UserDataObj, handleChangeUserData, sendData, borderObj, getValid, nameInputValue, streetInputValue, numberHouseInputValue, changeFromInputValue, handleLogIn, sessionStatus, defaultInputValuePhone } = useContext<any>(Context);

    useEffect(() => {
        console.log(nameInputValue, streetInputValue)
    })

    interface CustomInputProps {
        label: string;
    }

    // Custom input component
    function myInput(placeholder: string,
        dataUser: string,
        handleChange: (e: MouseEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void,
        val: string | number,
        disabled: boolean) {
        const disabledClass = disabled ? 'order-disablet-class' : '';
        const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ label }, forwardedRef) => {
            return (
                <input
                    type="text"
                    className={disabledClass}
                    ref={forwardedRef} /* id="custom-input" */
                    placeholder={placeholder}
                    data-user={`${dataUser}`}
                    onChange={handleChange}
                    defaultValue={val}
                    disabled={disabled}
                    style={{ border: `${borderObj[dataUser]}` }} />
            );
        });
        return CustomInput;
    }

    const modifyPhone = (input: string) => {
        return { mask: '+7 (___) ___-__-__' };
    };

    //---------------------------------------------------------------------------------------------

    //Custom buttons
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    const handleClick = (e: MouseEvent<HTMLElement>, index: number, classNumber: number) => {
        e.preventDefault();
        switch (classNumber) {
            case 1: setActiveIndex1(index);
                break;
            case 2: setActiveIndex2(index);
                break;
            case 3: setActiveIndex3(index);
                break;
        }

        if ((e.target as HTMLElement).textContent === 'Доставка') {
            setIsDelivery(true);
        } else if ((e.target as HTMLElement).textContent === 'Самовывоз') {
            setIsDelivery(false);
        }

        handleChangeUserData(e);
    };

    //---------------------------------------------------------------------------------------------

    useEffect(() => {
        handleChangeUserData()
    })

    // Принудительный рендер для отображения количества персон???!!!
    const [, setTick] = useState(0);
    const forceUpdate = () => setTick(tick => tick + 1);

    //---------------------------------------------------------------------------------------------

    const [isDelivery, setIsDelivery] = useState(true);

    //---------------------------------------------------------------------------------------------
    const [successCheckbox, setSuccessCheckbox] = useState(false);

    function onClickCheckbox(e: ChangeEvent<HTMLInputElement>) {
        setSuccessCheckbox((e.target as HTMLInputElement).checked === true);
    }

    //---------------------------------------------------------------------------------------------


    return (
        <div className="order">
            <header>
                <div className="order-menu">
                    <div className="order-logo">
                        logos
                    </div>
                    <div className="order-hamburger">
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>Меню</div>
                    </div>
                    <div className="order-input">
                        <div className="order-input-loc">
                            <img src={location} alt="Location.png" />
                        </div>
                        <input type="text" placeholder='Введите адрес доставки' />
                        <div className="order-input-search">
                            <img src={search} alt="Search.png" />
                        </div>
                    </div>
                    <div className="order-contact">
                        <div className="order-contact-img">
                            <img src={calling} alt="Calling.png" />
                        </div>
                        <div className="order-contact-phone">
                            <div className="order-contact-contacts">Контакты:</div>
                            <div className="order-contact-number">+7 (917) 510-57-59</div>
                        </div>
                    </div>
                    <button className="order-signIn" onClick={handleLogIn}>
                        <div className="order-signIn-img">
                            <img src={profile} alt="Profile.png" />
                        </div>
                        <div className="order-signIn-title">{!sessionStatus ? 'Войти' : 'Вы вошли'}</div>
                    </button>

                    <Link to={'/basket'} className="no-underline">
                        <button className="order-basket">
                            <div className="order-basket-title">Корзина</div>
                            <div className="order-basket-number">{numberOfBasket}</div>
                        </button>
                    </Link>
                </div>
                <Dishes />
            </header>
            <main>
                <div className="order-header">
                    <Link to={'/basket'} className="no-underline">
                        <div className="basket-header-return">
                            &lt; в корзину
                        </div>
                    </Link>
                    <div className="order-header-title">
                        <h2>Оформление заказа</h2>
                    </div>
                </div>
                <form action="">
                    <div className="order-form order-form-1">
                        <div className="order-form-title">
                            1. Контактная информацмя
                        </div>
                        <div className="order-form-1-wrapper">
                            <input
                                type="text"
                                placeholder='Имя'
                                onChange={handleChangeUserData}
                                data-user='name' style={{ border: `${borderObj['name']}` }}
                                value={UserDataObj.name} />
                            <InputMask
                                component={myInput('Телефон', 'phone', handleChangeUserData, UserDataObj.phone/* defaultInputValuePhone */, false)}
                                mask="+7 (___) ___-__-__"
                                replacement={{ _: /\d/ }}
                                label=""
                                modify={modifyPhone}
                                onMask={(event) => getValid('phone', event.detail.isValid)}
                            />
                        </div>
                    </div>
                    <div className="order-form order-form-2">
                        <div className="order-form-title">
                            2. Доставка
                        </div>
                        <div className="order-form-2-wrapper">
                            <div className="order-form-choose">
                                {['Доставка', 'Самовывоз'].map((el, i) =>
                                    <OrderButtons
                                        key={i}
                                        text={el}
                                        handleClick={handleClick}
                                        activeIndex={activeIndex1}
                                        index={i}
                                        classNumber={1}
                                        dataSet={'delivery'}
                                    />
                                )}
                            </div>
                            <div className="order-form-2-wrapper-text">
                                <div>
                                    <img src={clock} alt="clock 1.png" />
                                </div>
                                <div>
                                    Доставим через 1 час 30 мин
                                </div>
                            </div>
                        </div>
                        <div className="order-form-2-pickup" style={{ display: isDelivery ? 'none' : 'block' }}>
                            <div className="order-form-subtitle">
                                Выберите ресторан
                            </div>
                            <select onChange={handleChangeUserData} data-user={'restaurant'}>
                                <option value="1">Ресторан-1</option>
                                <option value="2">Ресторан-2</option>
                                <option value="3">Ресторан-3</option>
                            </select>
                        </div>


                        <div style={{ display: isDelivery ? 'block' : 'none' }}>
                            <div className="order-form-subtitle">
                                Адрес доставки
                            </div>
                            <div className="order-form-2-grid">
                                <input
                                    type="text"
                                    placeholder='Укажите улицу'
                                    onChange={handleChangeUserData}
                                    data-user='street'
                                    style={{ border: `${borderObj['street']}` }}
                                    value={UserDataObj.street} />
                                <input
                                    type="text"
                                    placeholder='Номер дома'
                                    onChange={handleChangeUserData}
                                    data-user='houseNumber'
                                    style={{ border: `${borderObj['houseNumber']}` }}
                                    value={UserDataObj.houseNumber} />
                                <input 
                                    type="text" placeholder='№ квартиры/офиса' 
                                    onChange={handleChangeUserData} 
                                    data-user='apartmentNumber' 
                                    defaultValue={UserDataObj.apartmentNumber} />
                                <input 
                                    type="text" placeholder='Подъезд' 
                                    onChange={handleChangeUserData} 
                                    data-user='entranceNumber' 
                                    defaultValue={UserDataObj.entranceNumber}/>
                                <input 
                                    type="text" placeholder='Этаж' 
                                    onChange={handleChangeUserData} 
                                    data-user='floorNumber' 
                                    defaultValue={UserDataObj.floorNumber}/>
                                <input 
                                    type="text" 
                                    placeholder='Комментарий' 
                                    onChange={handleChangeUserData} 
                                    data-user='comment' />
                            </div>
                        </div>
                    </div>
                    <div className="order-form order-form-3">
                        <div className="order-form-title">
                            3. Оплатить
                        </div>
                        <div className="order-form-choose">
                            {['Оплата онлайн', 'Курьеру картой', 'Наличными'].map((el, i) =>
                                <OrderButtons
                                    key={i}
                                    text={el}
                                    handleClick={handleClick}
                                    activeIndex={activeIndex2}
                                    index={i}
                                    classNumber={2}
                                    dataSet={'payType'}
                                />
                            )}
                        </div>
                        <div style={{ display: isDelivery ? 'block' : 'none' }}>
                            <input type="text" placeholder='Сдача с' onChange={handleChangeUserData} data-user='changeFrom' value={changeFromInputValue} style={{ border: `${borderObj['changeFrom']}` }} className={UserDataObj.payType === 'Наличными' ? '' : 'order-disablet-class'}/>
                            {/* <InputMask
                                component={myInput('Сдача с', 'changeFrom', handleChangeUserData, UserDataObj.changeFrom, UserDataObj.payType === 'Наличными' ? false : true)}
                                mask="____"
                                replacement=" _: /\d/ "
                                label="" /> */}
                        </div>

                    </div>
                    <div className="order-form order-form-4">
                        <div className="order-form-title">
                            4.Когда доставить
                        </div>
                        <div className="order-form-4-wrapper">
                            <div className="order-form-choose">
                                {['В ближайшее время', 'Ко времени'].map((el, i) =>
                                    <OrderButtons
                                        key={i}
                                        text={el}
                                        handleClick={handleClick}
                                        activeIndex={activeIndex3}
                                        index={i}
                                        classNumber={3}
                                        dataSet={'whatTime'}
                                    />
                                )}
                            </div>
                            <InputMask 
                                component={myInput('Укажите время', 'time', handleChangeUserData, UserDataObj.time, UserDataObj.whatTime === 'Ко времени' ? false : true)} 
                                mask="__:__"
                                replacement={{_:/\d/}}
                                label="" />
                        </div>
                        <div className="order-form-4-persons">
                            <div>Кол-во персон</div>
                            <div>
                                <div onClick={(e) => {
                                    handleChangeUserData(e);
                                    forceUpdate()
                                }} data-user={'persons'} className='order-form-4-minus'>
                                    <img src={minus} alt="minus.png" data-user={'persons'} />
                                </div>
                                <div>{UserDataObj.persons}</div>
                                <div onClick={(e) => {
                                    handleChangeUserData(e);
                                    forceUpdate()
                                }} data-user={'persons'} className='order-form-4-plus'>
                                    <img src={plus} alt="plus.png" data-user={'persons'} />
                                </div>
                            </div>
                        </div>
                        <div className="order-form-subtitle">
                            Хотите мы позвоним?
                        </div>
                        <div className='order-form-4-callBack'>
                            <label>
                                <input type="radio" name='callBack' value={'false'} data-user={'callBack'} defaultChecked onChange={handleChangeUserData} />
                                <span>Не перезванивать</span>
                            </label>
                            <label>
                                <input type="radio" name='callBack' value={'true'} data-user={'callBack'} onChange={handleChangeUserData} />
                                <span>Потребуется звонок оператора</span>
                            </label>
                        </div>
                    </div>
                    <div className="order-form order-form-5">
                        <div>
                            <label>
                                <input type="checkbox" onChange={onClickCheckbox} />
                                <span></span>
                            </label>
                        </div>
                        <div>
                            <span>
                                Я согласен на обработку моих перс.данных в соответствии с
                            </span>
                            <Link to={'/conditions'} className="no-underline">
                                <span>
                                    &nbsp;Условиями
                                </span>
                            </Link>

                        </div>
                        <div>
                            <input type="submit" value='Оформить заказ' onClick={(e) => {
                                sendData(e, successCheckbox);
                                forceUpdate();

                            }} />
                        </div>
                    </div>
                </form>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default OrderFeatures;