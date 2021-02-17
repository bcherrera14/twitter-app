import React, { useState } from 'react';
import TweetProfile from './TweetProfile';
import TweetModal from './TweetModal';

const TweetFavorites = () => {
	const [ modalShow, setModalShow ] = useState(false);

	return (
		<div className="profile-grid d-flex flex-column align-items-center">
			<h1 className="display-3">Trending Profiles</h1>
			<div className="d-flex justify-content-around ">
				<TweetProfile modalShow={() => setModalShow(true)} />
				<TweetProfile modalShow={() => setModalShow(true)} />
				<TweetProfile modalShow={() => setModalShow(true)} />
			</div>
			<div className="d-flex justify-content-around">
				<TweetProfile modalShow={() => setModalShow(true)} />
				<TweetProfile modalShow={() => setModalShow(true)} />
			</div>
			<TweetModal show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
};

export default TweetFavorites;
