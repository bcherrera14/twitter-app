import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TweetLanding from './tweets/TweetLanding';
import TweetFavorites from './tweets/TweetFavorites';
import TweetSearch from './tweets/TweetSearch';
import Header from './Header';

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={TweetLanding} />
					<Route path="/tweet/search" exact component={TweetSearch} />
					<Route path="/tweet/favorites" exact component={TweetFavorites} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
