import React, { useRef, useEffect } from 'react';
import './MyMap.scss';

import Location from '../../assets/img/map/Location.png';
import Massage from '../../assets/img/map/Message.png';
import VK from '../../assets/img/map/vkontakte-logo.png';
import Youtube from '../../assets/img/map/video-play-button.png';

import { YMaps, Map, Placemark, useYMaps } from '@pbe/react-yandex-maps';

function MyMap() {

    return (
        <div className="map">
            <YMaps query={{ lang: 'ru_RU' }}>
                <Map defaultState={{ center: [55.760749, 37.230936], zoom: 15 }} style={{ width: '100%', height: '44.4rem', filter: 'invert(90%) grayscale(1)' }}>
                    <Placemark defaultGeometry={[55.760749, 37.230936]} />

                </Map>
            </YMaps>
            <div className="map-contacts">
                <div className="map-contacts-header">
                    <h2>Контакты</h2>
                </div>
                <div className="map-contacts-main">
                    <div className="map-contacts-main-item">
                        <div className='map-contacts-main-icon'>
                            <img src={Location} alt="Location.png" />
                        </div>
                        <div className="map-contacts-main-text">
                            <div>Наш адрес:</div>
                            <div>МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10</div>
                        </div>
                    </div>
                    <div className="map-contacts-main-item">
                        <div className='map-contacts-main-icon'>
                            <img src={Massage} alt="Message.png" />
                        </div>
                        <div className="map-contacts-main-text">
                            <div>Наша почта:</div>
                            <div>auto.wash@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="map-contacts-footer">
                    <div className="map-contacts-footer-contact">
                        <button>Забронировать стол</button>
                        <div>
                            <div>+7 (917) 510-57-59</div>
                            <div>Звоните или оставляйте заявку</div>
                        </div>
                    </div>
                    <div className="map-contacts-footer-social">
                        <div>Мы в соц сетях:</div>
                        <div>
                            <img src={VK} alt="vkontakte-logo.png" />
                            <img src={Youtube} alt="video-play-button.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default MyMap;
