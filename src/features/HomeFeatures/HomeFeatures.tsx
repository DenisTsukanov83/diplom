import React from 'react';
import './HomeFeatures.scss';

import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import MyMap from '../../components/map/MyMap';
import Footer from '../../components/footer/Footer';

function HomeFeatures() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <MyMap/>
            <Footer/>
        </div>
    );
}

export default HomeFeatures;