import React from 'react';
import './About.scss';

import Onion from '../../assets/img/about/onion.png';
import Flash from '../../assets/img/about/flash.png';
import Chef from '../../assets/img/about/chef.png';


function About() {
    return (
        <div className="about">
            <div className="about-content">
                <h2>Наше кафе</h2>
                <p>
                    Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                </p>
                <button>посмотреть меню</button>
            </div>
            <div className="about-menu">
                <div className="about-menu-card">
                    <div>
                        <img src={Onion} alt="onion.png" />
                    </div>
                    <div>Свежайшие продукты</div>
                </div>
                <div className="about-menu-card">
                    <div>
                        <img src={Flash} alt="flash.png" />
                    </div>
                    <div>Быстрая доставка</div>
                </div>
                <div className="about-menu-card">
                    <div>
                        <img src={Chef} alt="chef.png" />
                    </div>
                    <div>Лучшие повара</div>
                </div>
                <div className="about-menu-card">
                    <div>
                        <img src={Onion} alt="onion.png" />
                    </div>
                    <div>Свежайшие продукты</div>
                </div>
            </div>
        </div>
    );
}

export default About;