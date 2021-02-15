import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

const TweetCard = () => {
	return (
		<Card style={{ width: '30rem' }}>
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="mr-2">
						<img
							src="https://avatars.githubusercontent.com/u/11397332?s=460&u=3f3c56d4899795a3665aadfc798f0a5eaba4bfd5&v=4"
							class="rounded-circle"
							alt="profile"
						/>
					</div>
					<div>
						<Card.Title>Bryan Herrera</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">@bcherrera</Card.Subtitle>
					</div>
					<div className="ml-auto mb-4">
						<Card.Subtitle className="text-muted">18 Nov 2018</Card.Subtitle>
					</div>
				</div>
				<Card.Text className="pt-3">
					Some quick example text to build on the card title and make up the bulk of the card's content.
				</Card.Text>

				<i class="far fa-heart p-1" />
				<span>5</span>
				<i class="fas fa-retweet p-1" />
				<span>5</span>
			</Card.Body>
		</Card>
	);
};

export default TweetCard;
