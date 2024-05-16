import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import './CardFeatures.scss';

import location from '../../assets/img/header/Location.png';
import search from '../../assets/img/header/Search.png';
import calling from '../../assets/img/header/Calling.png';
import basket from '../../assets/img/cardFeatures/basket.png';

import { Context } from '../../App';

import ModalBasket from '../../components/modalBasket/ModalBasket';
import Dishes from '../../components/dishes/Dishes';
import MyMap from '../../components/map/MyMap';
import Footer from '../../components/footer/Footer';


const CardFeatures: FC = () => {
    const { numberOfBasket, onClickBasket, displayModal, closeModal, selectedCard, onIncreaseBasketArr } = useContext<any>(Context);

    console.log(selectedCard)

    function BasketButton() {
        if (numberOfBasket < 1) {
            return (
                <button className="header-basket" onClick={onClickBasket}>
                    <div className="header-basket-title">Корзина</div>
                    <div className="header-basket-number">{numberOfBasket}</div>
                </button>
            )
        } else {
            return (
                <Link to={'/basket'} className="no-underline">
                    <button className="header-basket">
                        <div className="header-basket-title">Корзина</div>
                        <div className="header-basket-number">{numberOfBasket}</div>
                    </button>
                </Link>
            )
        }
    }

    function ModalComponent() {
        if (displayModal) {
            return <ModalBasket closeModal={closeModal} />
        } else {
            <div></div>
        }
    }
    return (
        <div className="cardFeatures">
            <header>
                <div className="header-menu">
                    <div className="header-logo">
                        logos
                    </div>
                    <div className="header-hamburger">
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>Меню</div>
                    </div>
                    <div className="header-input">
                        <div className="header-input-loc">
                            <img src={location} alt="Location.png" />
                        </div>
                        <input type="text" placeholder='Введите адрес доставки' />
                        <div className="header-input-search">
                            <img src={search} alt="Search.png" />
                        </div>
                    </div>
                    <div className="header-contact">
                        <div className="header-contact-img">
                            <img src={calling} alt="Calling.png" />
                        </div>
                        <div className="header-contact-phone">
                            <div className="header-contact-contacts">Контакты:</div>
                            <div className="header-contact-number">+7 (917) 510-57-59</div>
                        </div>
                    </div>
                    {BasketButton()}
                    {ModalComponent()}

                </div>
            </header>
            <main>
                <Dishes />
                <div className="cardFeatures-card">
                        <Link to={'/diplom'} className="no-underline">
                            <div className="cardFeatures-card-return">
                                <div>&lt;</div>
                                <div>Вернуться назад</div>
                            </div>
                        </Link>
                    <div className="cardFeatures-card-wrapper">
                        <div className="cardFeatures-card-wrapper-img">
                            <img src={selectedCard.img} alt="" />
                        </div>
                        <div className="cardFeatures-card-wrapper-content">
                            <h3>{selectedCard.name}</h3>
                            <p>{selectedCard.text}</p>
                            <div className="cardFeatures-card-wrapper-weight">
                                Вес: {selectedCard.weight}
                            </div>
                            <div className="cardFeatures-card-wrapper-add">
                                <button className='cardFeatures-card-wrapper-btn'
                                    data-card={JSON.stringify({ type: selectedCard.type, name: selectedCard.name })} 
                                    onClick={onIncreaseBasketArr}>
                                    <div>Корзина</div>
                                    <div>
                                        <img src={basket} alt="basket.png" />
                                    </div>
                                </button>
                                <span>{selectedCard.price} ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
                <MyMap/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default CardFeatures;