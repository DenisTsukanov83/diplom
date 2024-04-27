import React from 'react';
import './App.scss';

import Header from '../header/Header';
import Main from '../main/Main';
import MyMap from '../map/MyMap';
import Footer from '../footer/Footer';

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <MyMap/>
            <Footer/>
        </div>
    );
}

export default App;
