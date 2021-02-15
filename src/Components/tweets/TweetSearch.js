import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

import TweetCard from './TweetCard';
import TweetLanding from './TweetLanding';

const TweetSearch = () => {
	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
			<Form>
				<Form.Row className="align-items-center">
					<Col sm={3} className="my-1">
						<Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
							<option value="0">Username</option>
							<option value="1">Keyword</option>
						</Form.Control>
					</Col>
					<Col sm={5} className="my-1">
						<Form.Label htmlFor="inlineFormInputName" srOnly>
							Name
						</Form.Label>
						<Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
					</Col>
					<Col xs="auto" className="my-1">
						<Button type="submit">Search</Button>
					</Col>
				</Form.Row>
			</Form>
			<div>
				<TweetCard />
			</div>
		</div>
	);
};

export default TweetSearch;
