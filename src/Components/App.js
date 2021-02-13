import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import TweetLanding from './tweets/TweetLanding';
import TweetFavorites from './tweets/TweetFavorites';
import TweetSearch from './tweets/TweetSearch';
import Header from './Header';

const App = () => {
	return (
		<BrowserRouter>
			<Header />

			<div>
				<Route path="/" exact component={TweetLanding} />
				<Route path="/tweet/search" exact component={TweetSearch} />
				<Route path="/tweet/favorites" exact component={TweetFavorites} />
			</div>
		</BrowserRouter>
	);
};

export default App;
