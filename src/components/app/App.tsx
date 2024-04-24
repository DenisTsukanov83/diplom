import React from 'react';
import './App.scss';

import Header from '../header/Header';
import Main from '../main/Main';
import Map from '../map/Map';

function App() {
    return (
        <div className="app">
            <Header/>
            <Main/>
            <Map/>
        </div>
    );
}

export default App;
