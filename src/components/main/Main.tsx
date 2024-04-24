import React from 'react';
import './Main.scss';

import Cards from '../cards/Cards';
import About from '../about/About';


function Main() {
    return (
        <main className="main">
            <Cards/>
            <About/>
        </main>
    );
}

export default Main;