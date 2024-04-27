import React from 'react';
import './Footer.scss';

import ArrowBtn from '../../assets/img/footer/arrow_btn.png';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-arrow">
                <img src={ArrowBtn} alt="arrow_btn.png" />
            </div>
            <div className="footer-text">
                <div className="footer-logo">
                    <div><h2>Logos</h2></div>
                    <div>
                        &#169; <span>Ооо ск &#171;Апшерон&#187;</span> <br /> <span>Все права защищены. 2010-2020</span>
                    </div>
                    <div>
                        <a href="#">Пользвательское соглашение</a>
                    </div>
                    <div>
                        <a href="#">Карта сайта</a>
                    </div>
                    <div>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
            <div className="footer-nav">
                    <ul>
                        <li><a href="#">О ресторане</a></li>
                        <li><a href="#">Условия доставки</a></li>
                        <li><a href="#">Возврат товара</a></li>
                        <li><a href="#">Акции</a></li>
                    </ul>
                </div>
        </footer>
    );
}

export default Footer;