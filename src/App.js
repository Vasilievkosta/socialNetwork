import './App.css';
import React from 'react';



import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import New from './components/New/New';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
	
	return (
		<BrowserRouter>
			<div className = 'app-wrapper' >
				<Header />
				<Navbar />
				<div className = 'app-content' >
				{/* <Route path='/profile' component={Profile} /> можно так, через component*/}
					<Route path='/profile' render={() => <Profile posts={props.state} dispatch={props.dispatch} />} />
					<Route path='/dialogs' render={() => <Dialogs state={props.state} dispatch={props.dispatch} />} />
					<Route path='/new' render={() => <New />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/setting' render={() => <Setting />} />
				</div>				
			</div>			
		</BrowserRouter>		
	);
}

export default App;