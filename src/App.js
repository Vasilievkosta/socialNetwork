import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import New from './components/New/New';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import UsersContainer from './components/Users/UsersContainer';

import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {

	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div className='app-content'>
					{/* <Route path='/profile' component={Profile} /> можно так, через component*/}

					<Route path='/profile/:userId' render={() => <ProfileContainer />} />
					<Route path='/dialogs' render={() => <DialogsContainer />} />
					<Route path='/new' render={() => <New />} />
					<Route path='/music' render={() => <Music />} />
					<Route path='/setting' render={() => <Setting />} />
					<Route path='/users' render={() => <UsersContainer />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;