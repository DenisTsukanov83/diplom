import React, {FC} from 'react';
import './Main.scss';

import Cards from '../cards/Cards';
import About from '../about/About';

const Main: FC= () => {
    return (
        <main className="main">
            <Cards/>
            <About/>
        </main>
    );
}

export default Main;