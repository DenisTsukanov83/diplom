import { FC, useContext, MouseEvent, useState, useEffect } from 'react';
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
import { strict } from 'assert';


const OrderFeatures: FC = () => {
    const { numberOfBasket } = useContext<any>(Context);

    interface CustomInputProps {
        label: string;
    }

    // Custom input component
    function myInput(placeholder: string) {
        const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(({ label }, forwardedRef) => {
            return (
                <input ref={forwardedRef} id="custom-input" placeholder={placeholder} />
            );
        });
        return CustomInput;
    }

    const modifyPhone = (input: string) => {
        return { mask: input[0] === '7' ? '+7 (___) ___-__-__' : '+7 (___) ___-__-__' };
    };

    //---------------------------------------------------------------------------------------------

    //Custom buttons
    const [activeIndex1, setActiveIndex1] = useState(0);
    const [activeIndex2, setActiveIndex2] = useState(0);
    const [activeIndex3, setActiveIndex3] = useState(0);

    /* const handleClick = (e: MouseEvent<HTMLElement>, func: React.Dispatch<React.SetStateAction<number>>, i: number) => {
        e.preventDefault();
        func(i);
    }; */
    useEffect(() => {
        console.log(activeIndex1)
        console.log(activeIndex2)
        console.log(activeIndex3)
    })

    const handleClick = (e: MouseEvent<HTMLElement>, classNumber: number, index: number) => {
        e.preventDefault();
        switch(classNumber) {
            case 1 : setActiveIndex1(index);
            break;
            case 2 : setActiveIndex2(index);
            break;
            case 3 : setActiveIndex3(index);
            break;
        }
    };


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
                    <button className="order-signIn">
                        <div className="order-signIn-img">
                            <img src={profile} alt="Profile.png" />
                        </div>
                        <div className="order-signIn-title">Войти</div>
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
                            <input type="text" placeholder='Имя' />
                            <InputMask component={myInput('Телефон')} mask="+_ (___)-___-__-__" replacement="_" label="" modify={modifyPhone} />
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
                        <div className="order-form-subtitle">
                            Адрес доставки
                        </div>
                        <div className="order-form-2-grid">
                            <input type="text" placeholder='Укажите улицу' />
                            <input type="text" placeholder='Номер дома' />
                            <input type="number" placeholder='№ квартиры/офиса' />
                            <input type="number" placeholder='Подъезд' />
                            <input type="number" placeholder='Этаж' />
                            <input type="text" placeholder='Комментарий' />
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
                                />
                            )}
                        </div>
                        <InputMask component={myInput('Сдача с')} mask="____" replacement="_" label="Label for custom component" />
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
                                />
                            )}
                            </div>
                            <input type="text" placeholder='Укажите время' />
                        </div>
                        <div className="order-form-4-persons">
                            <div>Кол-во персон</div>
                            <div>
                                <div>
                                    <img src={minus} alt="minus.png" />
                                </div>
                                <div>1</div>
                                <div>
                                    <img src={plus} alt="plus.png" />
                                </div>
                            </div>
                        </div>
                        <div className="order-form-subtitle">
                            Хотите мы позвоним?
                        </div>
                        <div className='order-form-4-callBack'>
                            <label>
                                <input type="radio" name='callBack' checked />
                                <span>Не перезванивать</span>
                            </label>
                            <label>
                                <input type="radio" name='callBack' />
                                <span>Потребуется звонок оператора</span>
                            </label>
                        </div>
                    </div>
                    <div className="order-form order-form-5">
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span></span>
                            </label>
                        </div>
                        <div>
                            <span>
                                Я согласен на обработку моих перс.данных в соответствии с
                            </span>
                            <a href="">
                                &nbsp;Условиями
                            </a>
                        </div>
                        <div>
                            <input type="submit" value='Оформить заказ' />
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