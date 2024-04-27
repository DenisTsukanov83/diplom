import React from 'react';
import './App.scss';

import Header from '../header/Header';
import Main from '../main/Main';
import MyMap from '../map/MyMap';

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <MyMap/>
        </div>
    );
}

export default App;
