import React, { FC } from 'react';

import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import BasketPage from './pages/BasketPage';
import NotFoundPage from './pages/NotFoundPage';

const App: FC = () => {


	return (
		<div className='App'>
			<div className='wrap'>
				<Routes>
					<Route path='*' element={<HomePage/>}/>
                    <Route path='/basket' element={<BasketPage/>}/>
                    {/* <Route path='*' element={<NotFoundPage/>}/> */}
				</Routes>
			</div>
            {/* <HomePage/> */}
		</div>
	)
}

export default App;
