import React from 'react';
import TweetProfile from './TweetProfile';

const TweetFavorites = () => {
	return (
		<div className="profile-grid d-flex flex-column align-items-center">
			<h1 className="display-3">Trending Profiles</h1>
			<div className="d-flex justify-content-around ">
				<TweetProfile />
				<TweetProfile />
				<TweetProfile />
			</div>
			<div className="d-flex justify-content-around">
				<TweetProfile />
				<TweetProfile />
			</div>
		</div>
	);
};

export default TweetFavorites;
